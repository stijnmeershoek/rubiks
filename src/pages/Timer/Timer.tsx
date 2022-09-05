import { useEffect, useState } from "react";
import useLocalStorage from '../../hooks/useLocalStorage';
import { randomScrambleForEvent } from "cubing/scramble";
import { setDebug } from "cubing/search";
import "./Timer.css"
import { Cube } from "../../components/CubeIMG";
import Lottie from 'react-lottie-player'
import lottieJson from '../../assets/loading_anim.json'

setDebug({
    logPerf: false,
    scramblePrefetchLevel: "immediate",
});

export interface Times {
    [key: string]: TimesObject[];
}

export interface TimesObject {
    time: number;
    scramble: string;
    status: number;
}

export function Timer() {
    var initialTimes: Times = {
        "222": [],
        "333": [],
        "444": [],
        "555": [],
        "666": [],
        "777": [],
    }
    const cubes = ['222', "333", "444", "555", "666", "777"];
    const [cube, setCube] = useState('333');
    const [scramble, setScramble] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const [focus, setFocus] = useState(false);

    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const [times, setTimes] = useLocalStorage<Times>("CubeAlgs_Times", initialTimes)
    const [ao5, setAo5] = useState<number | string | undefined>();
    const [ao12, setAo12] = useState<number | string | undefined>();

    const getScramble = async () => {
        setLoading(true);
        const scramble = await randomScrambleForEvent(cube);
        setScramble(scramble.toString())
        setLoading(false);
    }

    useEffect(() => {
        getScramble();
        setTime(0)
    }, [cube])

    function toggle() {
        if (isActive) {
            setIsActive(false);
            setFocus(false);
            let newArr = [{
                time: time,
                scramble: scramble,
                status: 0
            }, ...times[cube]];
            setTimes((times) => {
                times[cube] = newArr;
                return times;
            });
            getScramble();
            return
        }
        setTime(0)
        setIsActive(true);
    }

    function clear() {
        setTimes(initialTimes);
    }

    function handleDelete(i: number) {
        let newTimes: Times = Object.create(times);
        let newArr = newTimes[cube].filter((_, ix) => ix !== i);
        newTimes[cube] = newArr;
        setTimes(newTimes);
    }

    function handlePlus2(i: number) {
        let newTimes: Times = Object.create(times);
        if (newTimes[cube][i].status === 2) return;
        newTimes[cube][i].time += 200;
        newTimes[cube][i].status = 2;
        setTimes(newTimes);
    }

    function handleDNF(i: number) {
        let newTimes: Times = times;
        newTimes[cube][i].status = 1;
        setTimes(newTimes);
    }

    const calcAo = (nums: TimesObject[]): number | string => {
        let newarr = nums.map((obj: { time: any; }) => obj.time);
        let minIndex: number;
        let maxIndex: number;
        let dnfAmount = nums.filter(obj => obj.status === 1).length;
        if (dnfAmount > 0) {
            if (dnfAmount > 1) {
                return "DNF";
            } else {
                minIndex = newarr.indexOf(Math.min(...newarr));
                maxIndex = nums.findIndex(obj => obj.status === 1);
            }
        } else {
            minIndex = newarr.indexOf(Math.min(...newarr));
            maxIndex = newarr.indexOf(Math.max(...newarr));
        }
        let arr = newarr.filter((_, i) => i !== maxIndex && i !== minIndex);
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i] / 100;
        }
        let ao = (sum / arr.length);
        return ao
    };

    useEffect(() => {
        if (isActive) return
        if (times[cube]?.length < 5 || !times[cube]) {
            setAo5(undefined)
            setAo12(undefined)
        }
        if (times[cube]?.length >= 12) {
            setAo12(calcAo(times[cube].slice(0, 12)));
            setAo5(calcAo(times[cube].slice(0, 5)));
            return
        }
        if (times[cube]?.length >= 5) {
            setAo5(calcAo(times[cube].slice(0, 5)));
        }
    }, [isActive, times[cube], cube])

    useEffect(() => {
        let interval: number | undefined = undefined;
        if (isActive) {
            interval = setInterval(() => {
                setTime(time => time + 1);
            }, 10);
        } else if (!isActive && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, time]);

    return (
        <div className={`timer-screen ${focus && "!justify-center"}`} onMouseUp={(e) => {
            if (((e.target as HTMLElement).classList.contains("timer-screen") || (e.target as HTMLElement).classList.contains("stopwatch")) && focus === true) { toggle(); } else { setFocus(false); }
        }}> {!loading ? <>
            {!focus && <div className="flex flex-col items-center">
                <select className="select-cube" disabled={false} value={cube} onChange={({ target: { value } }) => setCube(value)}>
                    {cubes.map((value) => {
                        return <option key={value} value={value} className="font-semibold cursor-pointer">
                            {value.split('').join('x')}
                        </option>
                    })}
                </select>
                <h1 className="text-[clamp(1rem,1.8vw,1.5rem)] !mt-3">{scramble}</h1>
            </div>
            }
            <div>
                <div onMouseDown={() => { setFocus(true) }} className="stopwatch select-none justify-self-center flex px-14 p-6 text-9xl hover:cursor-pointer active:text-emerald-500 font-bold justify-center items-center">
                    {(time / 100).toFixed(2)}
                </div>
                {!focus && <h2 className="font-normal text-neutral-500 text-xs">Press left mouse button to start and stop</h2>}
            </div>
            {!focus && <div className="info">
                <div><h1>Best:</h1><h4>{times[cube] && times[cube]?.length !== 0 ? (Math.min(...times[cube]?.map((obj: { time: any; }) => obj.time)) / 100).toFixed(2) : "-"}</h4></div>
                <div><h1>Worst:</h1><h4>{times[cube] && times[cube]?.length !== 0 ? (Math.max(...times[cube]?.map((obj: { time: any; }) => obj.time)) / 100).toFixed(2) : "-"}</h4></div>
                <div><h1>ao5:</h1><h4>{ao5 ? typeof ao5 === 'string' ? "DNF" : ao5.toFixed(2) : "-"}</h4></div>
                <div><h1>ao12:</h1> <h4>{ao12 ? typeof ao12 === 'string' ? "DNF" : ao12.toFixed(2) : "-"}</h4></div>
            </div>}
            {!focus && <button disabled={times[cube].length === 0} onClick={() => { setModalOpen(true) }} className="timer-btn mt-14 text-neutral-500 font-normal hover:text-neutral-400">View All Times</button>}
            {!focus && scramble && <div className="scramble-img absolute right-10 bottom-10">
                <Cube cubeSize={Number(cube.charAt(2))} algorithm={`z2 y2 ${scramble.toString()}`} />
            </div>
            }
            {times[cube].length !== 0 && (modalOpen &&
                <div className="view-all-times" onClick={(e) => { (e.target as HTMLElement).classList.contains("view-all-times") && setModalOpen(false) }}>
                    <div className="modal">
                        <div className="header"></div>
                        {times && times[cube].slice(0, 12).map((t, i) => (
                            <div key={i}>
                                <h4>{t.status === 1 ? "DNF" : (t.time / 100).toFixed(2)}<span>{t.status === 0 ? "+0" : t.status === 1 ? "DNF" : t.status === 2 ? "+2" : ""}</span><span>{t.scramble}</span></h4>
                                <button className="text-red-500 font-normal hover:text-red-400 ml-auto mr-4" onClick={() => handleDelete(i)}>&#10005;</button>
                                <button className="text-slate-500 font-normal hover:text-slate-400 ml-auto mr-4" onClick={() => handlePlus2(i)}>+2</button>
                                <button className="text-slate-500 font-normal hover:text-slate-400 ml-auto" onClick={() => handleDNF(i)}>DNF</button>
                            </div>
                        ))}
                        <button onClick={clear} className="timer-btn text-red-500 font-normal hover:text-red-400">Clear All Times</button>
                    </div>
                </div>
            )}
        </> : <Lottie
            loop
            animationData={lottieJson}
            play
            className="w-[150px] h-full"
        />}
        </div>
    )
}