import { Arrow, Masking } from 'sr-visualizer'
import { arr as pllalgs } from "./algs/3x3/PLL"
import { arr as twolookpllalgs } from "./algs/3x3/2Look/PLL"
import { arr as twolookollalgs } from "./algs/3x3/2Look/OLL"
import { arr as ollalgs } from "./algs/3x3/OLL"
import { arr as collalgs } from "./algs/3x3/COLL"
import { arr as wvalgs } from "./algs/3x3/WV"
import { arr as ollalgs2 } from "./algs/2x2/OLL"
import { arr as pblalgs2 } from "./algs/2x2/PBL"
import { arr as cllalgs2 } from "./algs/2x2/CLL"
import { arr as eg1algs2 } from "./algs/2x2/EG-1"
import { arr as ollalgs4, specialAlg as oll4specialAlg } from "./algs/4x4/OLL"
import { arr as pllalgs4, specialAlg as pll4specialAlg } from "./algs/4x4/PLL"
import './App.css'
import { Cube } from './components/CubeIMG'
import { Table } from './components/Table'

function App() {
  return (
    <div>
      <Table arr={ollalgs} size={3} mask={Masking.OLL} />
      {/* <div className="app flex align-top hidden">
        <div className="pll inline-block">
          {pllalgs.map((alg) => {
            return <div className='flex items-center px-4'><Cube key={alg.name} cubeSize={3} case={alg.alg} view={"plan"} mask={Masking.LL} arrows={alg.arrows as Arrow[]}></Cube></div>
          })}
        </div>
        <div className="twolookpll inline-block">
          {twolookpllalgs.map((alg) => {
            return <div className='flex items-center px-4'><Cube key={alg.name} cubeSize={3} case={alg.actualAlg} mask={alg.mask ? alg.mask : Masking.LL} view={"plan"} arrows={alg.arrows as Arrow[]}></Cube></div>
          })}
        </div>
        <div className="twolookoll inline-block">
          {twolookollalgs.map((alg) => {
            return <div className='flex items-center px-4'><Cube key={alg.name} cubeSize={3} case={alg.alg} mask={alg.mask ? alg.mask : Masking.OLL} view={"plan"}></Cube></div>
          })}
        </div>
        <div className="oll inline-block">
          {ollalgs.map((alg) => {
            return <div className='flex items-center px-4'>
              <Cube key={alg.name} cubeSize={3} case={alg.alg} mask={Masking.OLL} view={"plan"}></Cube>
            </div>
          })}
        </div>
        <div className="coll inline-block">
          {collalgs.map((alg) => {
            return <div className='flex items-center px-4'>
              <Cube key={alg.name} cubeSize={3} case={alg.alg} mask={Masking.COLL} view={"plan"}></Cube>
            </div>
          })}
        </div>
        <div className="wv inline-block">
          {wvalgs.map((alg) => {
            return <div className='flex items-center px-4'>
              <Cube key={alg.name} cubeSize={3} case={alg.alg} mask={Masking.WV} view={"plan"}></Cube>
            </div>
          })}
        </div>
      </div>

      <div className="flex align-top hidden">
        <div className="oll2 inline-block">
          {ollalgs2.map((alg) => {
            return <div className='flex items-center px-4'>
              <Cube key={alg.name} cubeSize={2} case={alg.alg} mask={Masking.OLL} view={"plan"}></Cube>
            </div>
          })}
        </div>
        <div className="pbl2 inline-block">
          {pblalgs2.map((alg) => {
            return <div className='flex items-center px-4'>
              <Cube key={alg.name} cubeSize={2} view={"plan"} case={alg.alg}></Cube>
              <div className="-scale-x-100">
                <Cube key={alg.name} cubeSize={2} case={"x2 y2" + alg.alg} view={"plan"}></Cube>
              </div>
            </div>
          })}
        </div>
        <div className="cll2 inline-block">
          {cllalgs2.map((alg) => {
            return <div className='flex items-center px-4'>
              <Cube key={alg.name} cubeSize={2} case={alg.alg} mask={Masking.CLL} view={"plan"}></Cube>
            </div>
          })}
        </div>
        <div className="eg12 inline-block">
          {eg1algs2.map((alg) => {
            return <div className='flex items-center px-4'>
              <Cube key={alg.name} cubeSize={2} case={alg.alg} mask={Masking.CLL} view={"plan"}></Cube>
            </div>
          })}
        </div>
      </div>

      <div className="flex align-top hidden">
        <div className="oll4 inline-block">
          {ollalgs4.map((alg) => {
            return <div className='flex items-center px-4'>
              <Cube key={alg.name} cubeSize={4} case={alg.alg.replace("[*]", oll4specialAlg)} mask={Masking.OLL} view={"plan"}></Cube>
            </div>
          })}
        </div>
        <div className="pll4 inline-block">
          {pllalgs4.map((alg) => {
            return <div className='flex items-center px-4'>
              <Cube key={alg.name} cubeSize={4} case={alg.alg.replace("[*]", pll4specialAlg)} view={"plan"}></Cube>
            </div>
          })}
        </div>
      </div> */}
    </div>
  )
}

export default App
