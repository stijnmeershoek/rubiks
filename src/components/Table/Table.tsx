import './Table.css'
import { arr as pllalgs } from '../../algs/3x3/PLL'
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
    mask?: Masking
}

export function Table({ arr, size, mask }: Props) {
    return (
        <div className='table'>
            {arr.map((alg) => {
                return <div className='algorithm flex items-center '>
                    <div className='name'><h2>{alg.name}</h2></div>
                    <div className='img'>
                        <Cube key={alg.name} cubeSize={size} case={alg.alg} view={"plan"} mask={alg.mask ? alg.mask : mask} arrows={alg.arrows as Arrow[]}></Cube>
                    </div>
                    <div className='alg'>
                        {alg.alg}
                    </div>
                </div>
            })}
        </div>
    )
}
