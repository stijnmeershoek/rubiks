import { Dispatch, useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { randomScrambleForEvent } from "cubing/scramble";
import "./Timer.css"
import { Cube } from "../../components/CubeIMG";

export function Timer() {
    var initialTimes: number[] = []
    const [cube, setCube] = useState('333');
    const [scramble, setScramble] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    const [focus, setFocus] = useState(false);

    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const [times, setTimes] = useLocalStorage('CubeAlg__Times', initialTimes);
    const [ao5, setAo5] = useState<number | undefined>();
    const [ao12, setAo12] = useState<number | undefined>();

    const getScramble = async () => {
        const scramble = await randomScrambleForEvent(cube);
        setScramble(scramble.toString())
    }

    useEffect(() => {
        let el = document.querySelector('.scramble-img > div');
        if (el) el.innerHTML = '';
        getScramble();
    }, [cube])

    function toggle() {
        if (isActive) {
            setIsActive(false);
            setFocus(false);
            setTimes(times => [...times, time])
            let el = document.querySelector('.scramble-img > div');
            if (el) el.innerHTML = '';
            getScramble();
            return
        }
        setTime(0)
        setIsActive(true);
    }

    function clear() {
        setTimes([]);
    }

    const calcAo = (nums: number[]): number => {
        let minIndex = nums.indexOf(Math.min(...nums));
        let maxIndex = nums.indexOf(Math.max(...nums));
        let arr = nums.filter(number => nums.indexOf(number) !== maxIndex && nums.indexOf(number) !== minIndex);
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i] / 100;
        }
        let ao = (sum / arr.length);
        return ao
    };

    useEffect(() => {
        if (times.length < 4) {
            setAo5(undefined)
            setAo12(undefined)
        }
        if (times.length > 11) {
            setAo12(calcAo(times.slice(0, 12)));
            setAo5(calcAo(times.slice(0, 5)));
            return
        }
        if (times.length > 4) {
            setAo5(calcAo(times.slice(0, 5)));
        }
    }, [times])

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
        <div className="timer-screen" onMouseUp={(e) => {
            if (((e.target as HTMLElement).classList.contains("timer-screen") || (e.target as HTMLElement).classList.contains("stopwatch")) && focus === true) { toggle(); } else { setFocus(false); }
        }}>
            {!focus && <Select values={['222', "333", "444", "555", "666", "777"]} callback={setCube} />}
            {!focus && <h1 className="text-3xl">{scramble}</h1>}
            <div>
                <div onMouseDown={() => { setFocus(true); setTime(0) }} className="stopwatch flex px-14 p-6 text-9xl hover:cursor-pointer active:text-emerald-500 font-bold justify-center items-center">
                    {(time / 100).toFixed(2)}
                </div>
                <h2 className="font-normal text-neutral-500 text-xs">Press left mouse button to start and stop</h2>
            </div>
            {!focus && <div className="info">
                <div><h1>Best:</h1><h4>{times.length !== 0 ? Math.min(...times) / 100 : "-"}</h4></div>
                <div><h1>Worst:</h1><h4>{times.length !== 0 ? Math.max(...times) / 100 : "-"}</h4></div>
                <div><h1>ao5:</h1><h4>{ao5 ? ao5.toFixed(2) : "-"}</h4></div>
                <div><h1>ao12:</h1> <h4>{ao12 ? ao12.toFixed(2) : "-"}</h4></div>
                <button onClick={() => { setModalOpen(true) }} className="text-neutral-500 font-normal hover:text-neutral-700 col-span-2 -mt-5">View All Times</button>
            </div>}
            {!focus && <button onClick={clear} className="text-red-500 font-normal hover:text-red-700 justify-self-end">Clear All Times</button>}
            {console.log(scramble)}
            {!focus && scramble && <div className="scramble-img absolute right-10 bottom-10">
                <Cube cubeSize={Number(cube.charAt(2))} algorithm={`z2 y2 ${scramble.toString()}`} />
            </div>
            }
            {modalOpen &&
                <div className="view-all-times" onClick={(e) => { !(e.target as HTMLElement).classList.contains("modal") && setModalOpen(false) }}>
                    <div className="modal">
                        <div className="header"></div>
                        {times.length > 12 ? times.slice(0, 12).reverse().map((t, i) => (
                            <h4 key={i}>{(t / 100).toString()}</h4>
                        )) : times.reverse().map((t, i) => (
                            <h4 key={i}>{(t / 100).toString()}</h4>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

interface Select {
    values: string[];
    callback: Dispatch<any>;
}

const Select = ({ values, callback }: Select) => {
    return (
        <select
            disabled={false} defaultValue={'333'} onChange={({ target: { value } }) => callback(value)}
        >
            {values.map((value) => {
                return <option key={value} value={value}>
                    {value.split('').join('x')}
                </option>
            })}
        </select>
    );
}