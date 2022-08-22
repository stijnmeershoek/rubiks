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
import { Timer } from './pages/Timer'

function App() {
  const location = useLocation();

  return (
    <div className='app flex items-center justify-center w-screen h-screen dark:bg-[#121212] dark:text-neutral-100 transition-colors font-semibold'>
      {location.pathname !== "/" && <BackButton />}
      <DarkModeToggle />
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path='/' element={<Home />}></Route>
        <Route path='/timer' element={<Timer />}></Route>
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
    <div className='flex items-center w-screen h-max flex-wrap justify-evenly px-[25vw] gap-10'>
      {Object.keys(algorithms).map((n) => {
        return <Link key={`${n.charAt(0)}x${n.charAt(0)}`} to={`/${n.charAt(0)}x${n.charAt(0)}`}><div className='flex flex-col items-center hover:scale-110 transition-transform pb-2'><Cube algorithm='y2' cubeSize={Number(n.charAt(0))} /><h1 className='mt-4'>{n.charAt(0)}x{n.charAt(0)} Algorithms</h1></div></Link>
      })}
      <Link to={`/timer`} className="basis-full">
        <div className='flex flex-col items-center hover:scale-110 transition-transform pb-2'>
          <svg viewBox="0 0 1356.000000 1127.000000" width="125px">

            <g transform="translate(0.000000,1127.000000) scale(0.100000,-0.100000)"
              fill="#000000" stroke="none">
              <path d="M7826 10235 c-51 -18 -86 -44 -114 -85 -36 -54 -44 -103 -40 -265 3
-149 4 -153 33 -201 19 -30 49 -60 79 -79 l49 -30 735 -3 c825 -3 799 -5 872
68 60 60 72 113 68 293 -3 124 -7 158 -22 187 -26 49 -55 78 -101 103 -40 22
-44 22 -780 24 -617 2 -747 0 -779 -12z"/>
              <path d="M8257 9433 c-11 -11 -8 -464 4 -506 14 -53 69 -110 132 -138 44 -19
69 -23 162 -23 164 -1 244 34 290 128 25 52 25 53 23 296 l-3 245 -301 3
c-165 1 -303 -1 -307 -5z"/>
              <path d="M7860 8915 c-471 -84 -968 -272 -1375 -523 -733 -450 -1297 -1118
-1618 -1912 -141 -349 -220 -671 -269 -1095 -17 -147 -17 -626 0 -780 75 -675
285 -1261 648 -1810 550 -830 1395 -1424 2369 -1665 141 -35 165 -39 360 -69
438 -67 913 -56 1354 30 768 150 1478 527 2037 1084 1003 999 1396 2418 1053
3800 -33 133 -31 126 -93 312 -348 1035 -1144 1902 -2159 2351 -313 139 -716
255 -1028 297 l-46 6 -12 -43 c-44 -148 -167 -259 -336 -303 -225 -58 -476 1
-606 142 -54 60 -99 141 -99 181 0 28 -5 28 -180 -3z m1140 -759 c702 -109
1290 -397 1783 -875 462 -448 780 -1033 906 -1668 42 -210 54 -356 54 -623 0
-317 -22 -501 -92 -777 -170 -668 -546 -1256 -1086 -1694 -883 -718 -2102
-908 -3160 -492 -1053 414 -1805 1339 -1989 2448 -87 528 -42 1057 134 1570
343 997 1196 1782 2218 2040 176 44 280 62 532 89 93 10 601 -3 700 -18z"/>
              <path d="M8510 6430 c0 -1039 -1 -1101 -17 -1106 -73 -22 -141 -64 -189 -116
-95 -104 -129 -221 -100 -351 61 -274 373 -401 604 -246 210 140 238 437 56
609 -45 43 -120 87 -176 104 -17 5 -18 66 -18 1106 l0 1100 -80 0 -80 0 0
-1100z"/>
              <path d="M9278 5903 l-338 -338 65 -34 c76 -39 138 -104 179 -186 l28 -58 339
339 339 339 -137 137 c-76 76 -138 138 -138 138 0 0 -152 -152 -337 -337z"/>
              <path d="M2936 8275 c-54 -19 -106 -63 -141 -120 -38 -62 -47 -170 -20 -243
24 -62 84 -125 148 -153 l52 -24 925 -3 c628 -2 941 1 976 8 252 53 309 379
89 515 l-48 30 -971 2 c-807 2 -978 0 -1010 -12z"/>
              <path d="M1875 6861 c-79 -20 -153 -79 -191 -154 -10 -17 -19 -65 -22 -105 -4
-66 -2 -78 27 -137 30 -60 62 -94 131 -135 22 -13 171 -15 1154 -18 l1128 -2
52 23 c96 44 154 126 163 228 11 117 -53 229 -156 278 l-56 26 -1100 2 c-605
0 -1113 -2 -1130 -6z"/>
              <path d="M1194 5381 c-59 -27 -118 -84 -145 -139 -17 -36 -23 -65 -23 -122 0
-64 4 -82 29 -128 32 -59 65 -91 129 -125 l41 -22 1310 0 1310 0 45 21 c103
48 160 141 160 256 -1 115 -50 199 -147 248 l-48 25 -1310 2 c-1265 3 -1311 2
-1351 -16z"/>
              <path d="M1836 3910 c-184 -72 -235 -311 -98 -453 20 -21 55 -48 77 -60 l40
-22 1135 0 1135 0 46 27 c50 30 98 79 126 131 13 23 18 55 18 117 0 102 -19
146 -90 208 -87 77 -8 72 -1239 72 -1062 -1 -1103 -2 -1150 -20z"/>
              <path d="M3003 2509 c-147 -18 -242 -126 -243 -274 0 -121 65 -218 176 -261
47 -18 91 -19 994 -19 905 0 947 1 994 19 239 92 235 432 -6 523 -38 14 -144
16 -953 17 -500 1 -933 -2 -962 -5z"/>
            </g>
          </svg>
          <h1 className='mt-4'>Timer</h1>
        </div>
      </Link>
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