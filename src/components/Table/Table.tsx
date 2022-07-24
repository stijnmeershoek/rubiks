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
    return (
        <div className='table'>
            <div className="header">
                <div><h2>Name</h2></div>
                <div><h2>Case</h2></div>
                <div><h2>Algorithm</h2></div>
            </div>
            {arr.map((alg) => {
                return <div key={alg.alg.toString() + alg.name} className='algorithm flex items-center '>
                    <div className='name'><h2>{alg.name}</h2></div>
                    <div className='img'>
                        <Cube cubeSize={size} case={specialAlg ? alg.alg.replace("[*]", specialAlg) : alg.alg} view={"plan"} mask={alg.mask ? alg.mask : mask} arrows={alg.arrows as Arrow[]}></Cube>
                        {both
                            ? <div className="-scale-x-100">
                                <Cube cubeSize={size} case={specialAlg ? "x2 y2" + alg.alg.replace("[*]", specialAlg) : "x2 y2" + alg.alg} view={"plan"} mask={alg.mask ? alg.mask : mask} arrows={alg.arrows as Arrow[]}></Cube>
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
