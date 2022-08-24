import './Table.css'
import { Cube } from '../CubeIMG'
import { Arrow, Masking } from 'sr-visualizer'

type Algorithm = {
    name: string | number,
    alg: string,
    mask?: Masking,
    arrows?: any
}

interface Props {
    arr: Algorithm[],
    size: number,
    mask?: Masking,
    specialAlg?: string,
    both?: boolean
}

export function Table({ arr, size, mask, specialAlg, both = false }: Props) {
    function fixRotations(alg: string): string {
        let rotations = ["x", "y", "z"];
        window.xAmount = alg.replace(/[^x]/g, "");
        window.yAmount = alg.replace(/[^y]/g, "");
        window.zAmount = alg.replace(/[^z]/g, "");
        if (window.xAmount.length === 0 && window.xAmount.length === 0 && window.xAmount.length === 0) {
            return alg
        } else {
            let newAlg = alg;
            rotations.forEach(el => {
                let num = 0;
                let amount = window[el + 'Amount'];

                if (amount.length % 2 !== 0) {

                    const indices = [];

                    for (let index = 0; index < alg.length; index++) {
                        if (alg[index] === el) {
                            indices.push(index);
                        }
                    }


                    indices.forEach((el) => {
                        if (alg.charAt(el + 1) === " ") {
                            num += 1;
                        }
                        if (alg.charAt(el + 1) === "'") {
                            num -= 1;
                        }
                        if (alg.charAt(el + 1) === "2") {
                            num += 2;
                        }
                    })

                    if (num % 4 !== 0 || num !== 0) {
                        if ((num + 1) % 4 === 0) {
                            newAlg = newAlg + ` ${el}`
                        }
                        if ((num - 1) % 4 === 0) {
                            newAlg = newAlg + ` ${el}'`
                        }
                        if ((num - 2) % 4 === 0) {
                            newAlg = newAlg + ` ${el}2`
                        }
                    } else {
                        return
                    }
                }
            });

            return newAlg
        }
    }

    return (
        <div className='table'>
            {specialAlg && <div className='absolute left-0 -top-10 -translate-y-full w-full text-center'>[*] = {specialAlg.replace("Rw2 R2", "2R2")}</div>}
            <div className="header">
                <div><h2>Name</h2></div>
                <div><h2>Case</h2></div>
                <div><h2>Algorithm</h2></div>
            </div>
            {arr.map((alg) => {
                return <div key={alg.alg.toString() + alg.name} className='algorithm flex items-center '>
                    <div className='name'><h2>{alg.name}</h2></div>
                    <div className='img'>
                        <Cube cubeSize={size} case={specialAlg ? fixRotations(alg.alg.replace("[*]", specialAlg)) : fixRotations(alg.alg)} view={"plan"} mask={alg.mask ? alg.mask : mask} arrows={alg.arrows as Arrow[]}></Cube>
                        {both
                            ? <div className="-scale-x-100">
                                <Cube cubeSize={size} case={specialAlg ? "x2 y2" + fixRotations(alg.alg.replace("[*]", specialAlg)) : "x2 y2" + fixRotations(alg.alg)} view={"plan"} mask={alg.mask ? alg.mask : mask} arrows={alg.arrows as Arrow[]}></Cube>
                            </div>
                            : <></>}
                    </div>
                    <div className='alg'>
                        {alg.alg}
                    </div>
                </div>
            })}
        </div>
    )
}
