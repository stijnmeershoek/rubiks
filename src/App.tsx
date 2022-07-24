import './App.css'
import { Masking } from 'sr-visualizer'
import { algorithms } from './algs/algs'
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
import { Table } from './components/Table'
import { Routes, Route, Navigate, Link, useNavigate, useLocation } from "react-router-dom";
import { Cube } from './components/CubeIMG'
import { DarkModeToggle } from './components/DarkModeToggle'

function App() {
  const location = useLocation();

  return (
    <div className='app flex items-center w-screen h-screen dark:bg-[#121212] dark:text-neutral-100 transition-colors font-semibold'>
      {location.pathname !== "/" && <BackButton />}
      <DarkModeToggle />
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path='/' element={<Home />}></Route>
        <Route path="/2x2">
          <Route index element={<Page size={2} arr={algorithms['2x2']} base="2x2/" />} />
          <Route path="oll" element={<Table arr={ollalgs2} size={2} mask={Masking.OLL} />} />
          <Route path="pbl" element={<Table arr={pblalgs2} both={true} size={2} />} />
          <Route path="cll" element={<Table arr={cllalgs2} size={2} mask={Masking.CLL} />} />
          <Route path="eg-1" element={<Table arr={eg1algs2} size={2} />} />
        </Route>
        <Route path="/3x3">
          <Route index element={<Page size={3} arr={algorithms['3x3']} base="3x3/" />} />
          <Route path="oll" element={<Table arr={ollalgs} size={3} mask={Masking.OLL} />} />
          <Route path="pll" element={<Table arr={pllalgs} size={3} />} />
          <Route path="2look">
            <Route index element={<Page size={3} arr={algorithms['3x3'][0].arr as Algorithm[]} base="3x3/2look/" />} />
            <Route path='oll' element={<Table arr={twolookollalgs} size={3} mask={Masking.OLL} />} />
            <Route path='pll' element={<Table arr={twolookpllalgs} size={3} />} />
          </Route>
          <Route path="coll" element={<Table arr={collalgs} size={3} mask={Masking.COLL} />} />
          <Route path="wv" element={<Table arr={wvalgs} size={3} mask={Masking.WV} />} />
        </Route>
        <Route path="/4x4" >
          <Route index element={<Page size={4} arr={algorithms['4x4']} base="4x4/" />} />
          <Route path="oll" element={<Table arr={ollalgs4} size={4} specialAlg={oll4specialAlg} mask={Masking.OLL} />} />
          <Route path="pll" element={<Table arr={pllalgs4} size={4} specialAlg={pll4specialAlg} />} />
        </Route>
      </Routes>
    </div>
  )
}

function BackButton() {
  const navigate = useNavigate();

  const goBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/', { replace: true });
    }
  }

  return (
    <button className='absolute top-6 left-6' onClick={() => goBack()}><svg viewBox="0 0 489.9 489.9" className="w-8"><path fill='currentColor' d="M5,232.9c-3.2,3.2-5,7.6-5,12.1c0,4.6,1.8,8.9,5,12.1l137.7,137.7c6.7,6.7,17.6,6.7,24.3,0s6.7-17.6,0-24.3L58.5,262.2h414.2c9.5,0,17.2-7.7,17.2-17.2s-7.7-17.1-17.2-17.1H58.5l108.4-108.5c6.7-6.7,6.7-17.6,0-24.3c-6.7-6.7-17.6-6.7-24.3,0L5,232.9z" /></svg></button>
  )
}

function Home() {
  return (
    <div className='flex items-center w-screen h-max flex-wrap justify-evenly px-[25vw]'>
      {Object.keys(algorithms).map((n) => {
        return <Link key={`${n.charAt(0)}x${n.charAt(0)}`} to={`/${n.charAt(0)}x${n.charAt(0)}`}><div className='flex flex-col items-center hover:scale-110 transition-transform pb-2'><Cube cubeSize={Number(n.charAt(0))} /><h1 className='mt-4'>{n.charAt(0)}x{n.charAt(0)} Algorithms</h1></div></Link>
      })}
    </div>
  )
}

function Page({ arr, size, base }: { arr: Algorithm[], size: number, base: string }) {
  return (
    <div className='flex items-center w-screen h-max flex-wrap justify-evenly px-[25vw]'>
      {arr.map((n) => {
        return <Link key={n.name + n.case} to={`/${base + n.name.toLowerCase()}`}><div className='flex flex-col items-center hover:scale-110 transition-transform pb-2'><Cube view='plan' cubeSize={size} case={n.case} mask={n.masking} /><h1 className='mt-4 flex flex-col items-center'>{n.name} Algorithms</h1><h3>{n.desc}</h3></div></Link>
      })}
    </div>
  )
}

type Algorithm = {
  name: string,
  case: string,
  masking?: Masking,
  desc?: string
}

export default App