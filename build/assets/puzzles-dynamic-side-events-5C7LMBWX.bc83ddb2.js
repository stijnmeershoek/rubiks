var l={name:"2x2x2",orbits:{CORNERS:{numPieces:8,numOrientations:3}},startStateData:{CORNERS:{pieces:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]}},moves:{U:{CORNERS:{permutation:[1,2,3,0,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]}},y:{CORNERS:{permutation:[1,2,3,0,7,4,5,6],orientation:[0,0,0,0,0,0,0,0]}},x:{CORNERS:{permutation:[4,0,3,5,7,6,2,1],orientation:[2,1,2,1,1,2,1,2]}},L:{CORNERS:{permutation:[0,1,6,2,4,3,5,7],orientation:[0,0,2,1,0,2,1,0]}},F:{CORNERS:{permutation:[3,1,2,5,0,4,6,7],orientation:[1,0,0,2,2,1,0,0]}},R:{CORNERS:{permutation:[4,0,2,3,7,5,6,1],orientation:[2,1,0,0,1,0,0,2]}},B:{CORNERS:{permutation:[0,7,1,3,4,5,2,6],orientation:[0,2,1,0,0,0,2,1]}},D:{CORNERS:{permutation:[0,1,2,3,5,6,7,4],orientation:[0,0,0,0,0,0,0,0]}},z:{CORNERS:{permutation:[3,2,6,5,0,4,7,1],orientation:[1,2,1,2,2,1,2,1]}}}};l.moves.Rv=l.moves.x;l.moves.Uv=l.moves.y;l.moves.Fv=l.moves.z;l.moves.Lv={CORNERS:{permutation:[1,7,6,2,0,3,5,4],orientation:[2,1,2,1,1,2,1,2]}};l.moves.Dv={CORNERS:{permutation:[3,0,1,2,5,6,7,4],orientation:[0,0,0,0,0,0,0,0]}};l.moves.Bv={CORNERS:{permutation:[4,7,1,0,5,3,2,6],orientation:[1,2,1,2,2,1,2,1]}};var o=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN"
       "http://www.w3.org/TR/2001/REC-SVG-20050904/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 520 394" preserveAspectRatio="xMidYMid meet">
  <title>2x2x2</title>
  <defs>
    <g id="sticker">
        <rect x="0" y="0" width="1" height="1" stroke="black" stroke-width="0.04px" />
    </g>
  </defs>
  <g id="puzzle" transform="translate(5, 5) scale(60)">
    <use id="CORNERS-l0-o0" xlink:href="#sticker" transform="translate(3.2, 1)" style="fill: white"/>
    <use id="CORNERS-l0-o1" xlink:href="#sticker" transform="translate(4.4, 2.2)" style="fill: red"/>
    <use id="CORNERS-l0-o2" xlink:href="#sticker" transform="translate(3.2, 2.2)" style="fill: limegreen"/>

    <use id="CORNERS-l1-o0" xlink:href="#sticker" transform="translate(3.2, 0)" style="fill: white"/>
    <use id="CORNERS-l1-o1" xlink:href="#sticker" transform="translate(6.6, 2.2)" style="fill: #26f"/>
    <use id="CORNERS-l1-o2" xlink:href="#sticker" transform="translate(5.4, 2.2)" style="fill: red"/>

    <use id="CORNERS-l2-o0" xlink:href="#sticker" transform="translate(2.2, 0)" style="fill: white"/>
    <use id="CORNERS-l2-o1" xlink:href="#sticker" transform="translate(0, 2.2)" style="fill: orange"/>
    <use id="CORNERS-l2-o2" xlink:href="#sticker" transform="translate(7.6, 2.2)" style="fill: #26f"/>

    <use id="CORNERS-l3-o0" xlink:href="#sticker" transform="translate(2.2, 1)" style="fill: white"/>
    <use id="CORNERS-l3-o1" xlink:href="#sticker" transform="translate(2.2, 2.2)" style="fill: limegreen"/>
    <use id="CORNERS-l3-o2" xlink:href="#sticker" transform="translate(1, 2.2)" style="fill: orange"/>

    <use id="CORNERS-l4-o0" xlink:href="#sticker" transform="translate(3.2, 4.4)" style="fill: yellow"/>
    <use id="CORNERS-l4-o1" xlink:href="#sticker" transform="translate(3.2, 3.2)" style="fill: limegreen"/>
    <use id="CORNERS-l4-o2" xlink:href="#sticker" transform="translate(4.4, 3.2)" style="fill: red"/>

    <use id="CORNERS-l5-o0" xlink:href="#sticker" transform="translate(2.2, 4.4)" style="fill: yellow"/>
    <use id="CORNERS-l5-o1" xlink:href="#sticker" transform="translate(1, 3.2)" style="fill: orange"/>
    <use id="CORNERS-l5-o2" xlink:href="#sticker" transform="translate(2.2, 3.2)" style="fill: limegreen"/>

    <use id="CORNERS-l6-o0" xlink:href="#sticker" transform="translate(2.2, 5.4)" style="fill: yellow"/>
    <use id="CORNERS-l6-o1" xlink:href="#sticker" transform="translate(7.6, 3.2)" style="fill: #26f"/>
    <use id="CORNERS-l6-o2" xlink:href="#sticker" transform="translate(0, 3.2)"  style="fill: orange"/>

    <use id="CORNERS-l7-o0" xlink:href="#sticker" transform="translate(3.2, 5.4)" style="fill: yellow"/>
    <use id="CORNERS-l7-o1" xlink:href="#sticker" transform="translate(5.4, 3.2)" style="fill: red"/>
    <use id="CORNERS-l7-o2" xlink:href="#sticker" transform="translate(6.6, 3.2)" style="fill: #26f"/>
  </g>

</svg>`,t={name:"Clock",orbits:{DIALS:{numPieces:18,numOrientations:12},FACES:{numPieces:18,numOrientations:1},FRAME:{numPieces:1,numOrientations:2}},startStateData:{DIALS:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{pieces:[0],orientation:[0]}},moves:{UR_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,1,1,0,1,1,0,0,0,-1,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},DR_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,-1,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},DL_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,-1]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},UL_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[1,1,0,1,1,0,0,0,0,0,0,-1,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},U_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[1,1,1,1,1,1,0,0,0,-1,0,-1,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},R_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,1,1,0,1,1,0,1,1,-1,0,0,0,0,0,-1,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},D_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,-1,0,-1]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},L_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[1,1,0,1,1,0,1,1,0,0,0,-1,0,0,0,0,0,-1]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},ALL_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[1,1,1,1,1,1,1,1,1,-1,0,-1,0,0,0,-1,0,-1]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},y2:{DIALS:{permutation:[9,10,11,12,13,14,15,16,17,0,1,2,3,4,5,6,7,8],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[9,10,11,12,13,14,15,16,17,0,1,2,3,4,5,6,7,8],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[1]}},UL:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},UR:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},DL:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},DR:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}}}},e=`<?xml version="1.0" encoding="UTF-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 480 240" preserveAspectRatio="xMidYMid meet">
  <title>clock</title>
  <defs>
    <g id="hand" transform="translate(-20, -20)">
      <path d="M19.9995197,2.22079449 L23.8791657,19.0203611 C23.9580836,19.3338406 24,19.6620253 24,20 C24,22.209139 22.209139,24 20,24 C17.790861,24 16,22.209139 16,20 C16,19.6620253 16.0419164,19.3338406 16.1208343,19.0203611 L19.9995197,2.22079449 Z"></path>
    </g>
    <g id="cardinal_hours" style="fill: #FFFFFF">
      <circle cx="0" cy="24" r="2"></circle>
      <circle cx="-24" cy="0" r="2"></circle>
      <circle cx="24" cy="0" r="2"></circle>
      <circle cx="0" cy="-24" r="2"></circle>
    </g>
    <g id="face_hours">
      <g>
        <use xlink:href="#cardinal_hours"/>
      </g>
      <g transform="rotate(30)">
        <use xlink:href="#cardinal_hours"/>
      </g>
      <g  transform="rotate(60)">
        <use xlink:href="#cardinal_hours"/>
      </g>
    </g>
    <g id="pegs" stroke="#000000" style="fill: #FFD000">
      <circle id="PEG4" cx="90" cy="90" r="10"></circle>
      <circle id="PEG3" cx="30" cy="90" r="10"></circle>
      <circle id="PEG2" cx="90" cy="30" r="10"></circle>
      <circle id="PEG1" cx="30" cy="30" r="10"></circle>
    </g>
    <g id="frame" transform="translate(-24, -24)">
      <path stroke="#000000" d="M120,20 C137.495665,20 153.941932,24.4930026 168.247913,32.3881183 C171.855881,30.8514056 175.828512,30 180,30 C196.568542,30 210,43.4314575 210,60 C210,64.1714878 209.148594,68.1441192 207.610077,71.7536009 C215.506997,86.0580678 220,102.504335 220,120 C220,137.495665 215.506997,153.941932 207.611882,168.247913 C209.148594,171.855881 210,175.828512 210,180 C210,196.568542 196.568542,210 180,210 C175.828512,210 171.855881,209.148594 168.246399,207.610077 C153.941932,215.506997 137.495665,220 120,220 C102.504335,220 86.0580678,215.506997 71.7520869,207.611882 C68.1441192,209.148594 64.1714878,210 60,210 C43.4314575,210 30,196.568542 30,180 C30,175.828512 30.8514056,171.855881 32.3899234,168.246399 C24.4930026,153.941932 20,137.495665 20,120 C20,102.504335 24.4930026,86.0580678 32.3881183,71.7520869 C30.8514056,68.1441192 30,64.1714878 30,60 C30,43.4314575 43.4314575,30 60,30 C64.1714878,30 68.1441192,30.8514056 71.7536009,32.3899234 C86.0580678,24.4930026 102.504335,20 120,20 Z"></path>
    </g>
  </defs>
  <g>
    <g transform="translate(24, 24)">
      <use xlink:href="#frame" id="FRAME-l0-o0" style="fill: #0C5093"/>
      <use xlink:href="#pegs" transform="translate(36, 36)"/>
      <g transform="translate(36, 36)">
        <circle id="FACES-l0-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l0-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l0-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l0-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l0-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l0-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l0-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l0-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l0-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l0-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l0-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l0-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l0-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 36)">
        <circle id="FACES-l1-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l1-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l1-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l1-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l1-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l1-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l1-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l1-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l1-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l1-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l1-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l1-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l1-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 36)">
        <circle id="FACES-l2-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l2-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l2-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l2-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l2-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l2-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l2-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l2-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l2-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l2-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l2-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l2-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l2-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(36, 96)">
        <circle id="FACES-l3-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l3-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l3-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l3-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l3-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l3-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l3-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l3-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l3-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l3-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l3-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l3-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l3-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 96)">
        <circle id="FACES-l4-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l4-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l4-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l4-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l4-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l4-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l4-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l4-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l4-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l4-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l4-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l4-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l4-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 96)">
        <circle id="FACES-l5-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l5-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l5-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l5-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l5-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l5-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l5-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l5-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l5-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l5-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l5-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l5-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l5-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(36, 156)">
        <circle id="FACES-l6-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l6-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l6-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l6-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l6-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l6-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l6-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l6-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l6-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l6-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l6-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l6-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l6-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 156)">
        <circle id="FACES-l7-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l7-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l7-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l7-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l7-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l7-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l7-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l7-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l7-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l7-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l7-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l7-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l7-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 156)">
        <circle id="FACES-l8-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l8-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l8-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l8-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l8-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l8-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l8-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l8-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l8-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l8-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l8-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l8-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l8-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
    </g>
    <g transform="translate(264, 24)">
      <use xlink:href="#frame" id="FRAME-l0-o1" style="fill: #90B8DF"/>
      <use xlink:href="#pegs" transform="translate(36, 36)"/>
      <g transform="translate(36, 36)">
        <circle id="FACES-l9-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l9-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l9-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l9-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l9-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l9-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l9-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l9-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l9-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l9-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l9-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l9-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l9-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 36)">
        <circle id="FACES-l10-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l10-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l10-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l10-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l10-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l10-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l10-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l10-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l10-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l10-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l10-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l10-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l10-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 36)">
        <circle id="FACES-l11-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l11-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l11-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l11-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l11-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l11-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l11-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l11-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l11-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l11-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l11-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l11-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l11-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(36, 96)">
        <circle id="FACES-l12-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l12-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l12-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l12-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l12-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l12-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l12-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l12-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l12-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l12-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l12-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l12-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l12-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 96)">
        <circle id="FACES-l13-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l13-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l13-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l13-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l13-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l13-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l13-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l13-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l13-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l13-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l13-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l13-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l13-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 96)">
        <circle id="FACES-l14-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l14-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l14-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l14-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l14-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l14-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l14-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l14-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l14-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l14-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l14-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l14-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l14-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(36, 156)">
        <circle id="FACES-l15-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l15-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l15-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l15-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l15-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l15-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l15-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l15-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l15-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l15-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l15-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l15-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l15-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 156)">
        <circle id="FACES-l16-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l16-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l16-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l16-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l16-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l16-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l16-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l16-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l16-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l16-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l16-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l16-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l16-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 156)">
        <circle id="FACES-l17-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l17-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l17-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l17-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l17-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l17-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l17-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l17-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l17-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l17-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l17-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l17-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l17-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
    </g>
  </g>
</svg>`,i=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN"
       "http://www.w3.org/TR/2001/REC-SVG-20050904/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-20 -20 546 480" preserveAspectRatio="xMidYMid meet">
  <defs>
  </defs>
  <title>pyraminx</title>
  <defs>
    <g id="stickerA" transform="scale(1, 0.577350269)">
      <path
         d="m 0,1.732050808 1,-1.732050808 1,1.732050808 z"
         stroke="black" stroke-width="0.04px" stroke-linecap="butt" stroke-linejoin="round"
      />
    </g>
    <g id="stickerV" transform="scale(1, 0.577350269)">
      <path
         d="m 0,0 1,1.732050808 1,-1.732050808 z"
         stroke="black" stroke-width="0.04px" stroke-linecap="butt" stroke-linejoin="round"
      />
    </g>
  </defs>

<!--        0 1 2 3 4 5 6 7 8 9 10   -->
<!--        | | | | | | | | | | |    -->
<!--    0 - L L L L L F R R R R R    -->
<!--    1 -   L L L F F F R R R      -->
<!--    2 -     L F F F F F R        -->
<!--    3 -       D D D D D          -->
<!--    4 -         D D D            -->
<!--    5 -           D              -->

  <g id="puzzle" transform="translate(5, 5) scale(40, 69.28203232)">
    <!-- CORNERS -->
    <use id="CORNERS-l0-o0" xlink:href="#stickerV" transform="translate(5.2, 1.066666667)" style="fill: limegreen"/>
    <use id="CORNERS-l0-o1" xlink:href="#stickerA" transform="translate(3, 0)" style="fill: red"/>
    <use id="CORNERS-l0-o2" xlink:href="#stickerA" transform="translate(7.4, 0)" style="fill: blue"/>

    <use id="CORNERS-l3-o0" xlink:href="#stickerA" transform="translate(4.2, 3.2)" style="fill: yellow"/>
    <use id="CORNERS-l3-o1" xlink:href="#stickerA" transform="translate(2, 1)" style="fill: red"/>
    <use id="CORNERS-l3-o2" xlink:href="#stickerV" transform="translate(4.2, 2.066666667)" style="fill: limegreen"/>

    <use id="CORNERS-l2-o0" xlink:href="#stickerA" transform="translate(6.2, 3.2)" style="fill: yellow"/>
    <use id="CORNERS-l2-o1" xlink:href="#stickerV" transform="translate(6.2, 2.066666667)" style="fill: limegreen"/>
    <use id="CORNERS-l2-o2" xlink:href="#stickerA" transform="translate(8.4, 1)" style="fill: blue"/>

    <use id="CORNERS-l1-o1" xlink:href="#stickerA" transform="translate(9.4, 0)" style="fill: blue"/>
    <use id="CORNERS-l1-o2" xlink:href="#stickerA" transform="translate(1, 0)" style="fill: red"/>
    <use id="CORNERS-l1-o0" xlink:href="#stickerA" transform="translate(5.2, 4.2)" style="fill: yellow"/>

    <!-- "TIPS" -->
    <!-- CORNERS2 -->
    <use id="CORNERS2-l0-o0" xlink:href="#stickerA" transform="translate(5.2, 0.066666667)" style="fill: limegreen"/>
    <use id="CORNERS2-l0-o1" xlink:href="#stickerV" transform="translate(4, 0)" style="fill: red"/>
    <use id="CORNERS2-l0-o2" xlink:href="#stickerV" transform="translate(6.4, 0)" style="fill: blue"/>

    <use id="CORNERS2-l3-o0" xlink:href="#stickerV" transform="translate(3.2, 3.2)" style="fill: yellow"/>
    <use id="CORNERS2-l3-o1" xlink:href="#stickerV" transform="translate(2, 2)" style="fill: red"/>
    <use id="CORNERS2-l3-o2" xlink:href="#stickerA" transform="translate(3.2, 2.066666667)" style="fill: limegreen"/>

    <use id="CORNERS2-l2-o0" xlink:href="#stickerV" transform="translate(7.2, 3.2)" style="fill: yellow"/>
    <use id="CORNERS2-l2-o1" xlink:href="#stickerA" transform="translate(7.2, 2.066666667)" style="fill: limegreen"/>
    <use id="CORNERS2-l2-o2" xlink:href="#stickerV" transform="translate(8.4, 2)" style="fill: blue"/>

    <use id="CORNERS2-l1-o1" xlink:href="#stickerV" transform="translate(10.4,0)" style="fill: blue"/>
    <use id="CORNERS2-l1-o2" xlink:href="#stickerV" transform="translate(0, 0)" style="fill: red"/>
    <use id="CORNERS2-l1-o0" xlink:href="#stickerV" transform="translate(5.2, 5.2)" style="fill: yellow"/>

    <!-- EDGES -->
    <use id="EDGES-l0-o0" xlink:href="#stickerV" transform="translate(3, 1)" style="fill: red"/>
    <use id="EDGES-l0-o1" xlink:href="#stickerA" transform="translate(4.2, 1.066666667)" style="fill: limegreen"/>

    <use id="EDGES-l5-o0" xlink:href="#stickerA" transform="translate(6.2, 1.066666667)" style="fill: limegreen"/>
    <use id="EDGES-l5-o1" xlink:href="#stickerV" transform="translate(7.4, 1)" style="fill: blue"/>

    <use id="EDGES-l1-o0" xlink:href="#stickerV" transform="translate(8.4, 0)" style="fill: blue"/>
    <use id="EDGES-l1-o1" xlink:href="#stickerV" transform="translate(2, 0)" style="fill: red"/>

    <use id="EDGES-l2-o0" xlink:href="#stickerV" transform="translate(5.2, 3.2)" style="fill: yellow"/>
    <use id="EDGES-l2-o1" xlink:href="#stickerA" transform="translate(5.2, 2.066666667)" style="fill: limegreen"/>

    <use id="EDGES-l3-o0" xlink:href="#stickerV" transform="translate(9.4, 1)" style="fill: blue"/>
    <use id="EDGES-l3-o1" xlink:href="#stickerV" transform="translate(6.2, 4.2)" style="fill: yellow"/>

    <use id="EDGES-l4-o0" xlink:href="#stickerV" transform="translate(4.2, 4.2)" style="fill: yellow"/>
    <use id="EDGES-l4-o1" xlink:href="#stickerV" transform="translate(1, 1)" style="fill: red"/>
  </g>

</svg>`,n={name:"Square-1",orbits:{WEDGES:{numPieces:24,numOrientations:9},EQUATOR:{numPieces:2,numOrientations:6}},startStateData:{WEDGES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{pieces:[0,1],orientation:[0,0]}},moves:{U_SQ_:{WEDGES:{permutation:[11,0,1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22,23],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{permutation:[0,1],orientation:[0,0]}},D_SQ_:{WEDGES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,23,12,13,14,15,16,17,18,19,20,21,22],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{permutation:[0,1],orientation:[0,0]}},_SLASH_:{WEDGES:{permutation:[0,1,2,3,4,5,12,13,14,15,16,17,6,7,8,9,10,11,18,19,20,21,22,23],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{permutation:[0,1],orientation:[0,3]}}}},r=`<?xml version="1.0" encoding="UTF-8"?>
<svg width="360px" height="552px" viewBox="0 0 360 552" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 59.1 (86144) - https://sketch.com -->
    <title>sq1-fancy</title>
    <desc>Created with Sketch.</desc>
    <!-- stroke="none" -->
    <g id="sq1-fancy" stroke="#888" stroke-width="0.25" fill="none" fill-rule="evenodd">
        <g id="EQUATOR" transform="translate(24.000000, 264.000000)">
            <rect id="EQUATOR-l1-o3" style="fill: red" x="168" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o4" style="fill: red" x="192" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o5" style="fill: limegreen" x="216" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o2" style="fill: limegreen" x="240" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o1" style="fill: limegreen" x="264" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o0" style="fill: orange" x="288" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o3" style="fill: orange" x="0" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o4" style="fill: orange" x="24" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o5" style="fill: limegreen" x="48" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o2" style="fill: limegreen" x="72" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o1" style="fill: limegreen" x="96" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o0" style="fill: red" x="120" y="0" width="24" height="24"></rect>
        </g>
        <g id="BOTTOM" transform="translate(41.000000, 257.000000)" stroke-linejoin="round">
            <g id="WEDGES-23" transform="translate(130.000000, 88.588457) rotate(120.000000) translate(-130.000000, -88.588457) translate(82.000000, 22.588457)">
                <polygon id="WEDGES-l23-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l23-o7" style="fill: red" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l23-o6" style="fill: red" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l23-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l23-o4" style="fill: red" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l23-o3" style="fill: white" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l23-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l23-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l23-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-22" transform="translate(97.157677, 115.157677) rotate(90.000000) translate(-97.157677, -115.157677) translate(49.157677, 49.157677)">
                <polygon id="WEDGES-l22-o8" style="fill: blue" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l22-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l22-o6" style="fill: blue" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l22-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l22-o4" style="fill: white" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l22-o3" style="fill: blue" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l22-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l22-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l22-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-21" transform="translate(82.000000, 154.588457) rotate(60.000000) translate(-82.000000, -154.588457) translate(34.000000, 88.588457)">
                <polygon id="WEDGES-l21-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l21-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l21-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l21-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l21-o4" style="fill: blue" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l21-o3" style="fill: blue" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l21-o2" style="fill: blue" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l21-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l21-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-20" transform="translate(88.588457, 196.315353) rotate(30.000000) translate(-88.588457, -196.315353) translate(40.588457, 130.315353)">
                <polygon id="WEDGES-l20-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l20-o7" style="fill: blue" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l20-o6" style="fill: blue" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l20-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l20-o4" style="fill: blue" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l20-o3" style="fill: white" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l20-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l20-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l20-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-19" transform="translate(67.157677, 163.157677)">
                <polygon id="WEDGES-l19-o8" style="fill: orange" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l19-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l19-o6" style="fill: orange" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l19-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l19-o4" style="fill: white" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l19-o3" style="fill: orange" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l19-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l19-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l19-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-18" transform="translate(154.588457, 244.315353) scale(-1, -1) rotate(150.000000) translate(-154.588457, -244.315353) translate(106.588457, 178.315353)">
                <polygon id="WEDGES-l18-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l18-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l18-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l18-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l18-o4" style="fill: orange" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l18-o3" style="fill: orange" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l18-o2" style="fill: orange" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l18-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l18-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-17" transform="translate(196.315353, 237.726896) scale(-1, -1) rotate(120.000000) translate(-196.315353, -237.726896) translate(148.315353, 171.726896)">
                <polygon id="WEDGES-l17-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l17-o7" style="fill: orange" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l17-o6" style="fill: orange" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l17-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l17-o4" style="fill: orange" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l17-o3" style="fill: white" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l17-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l17-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l17-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-16" transform="translate(229.157677, 211.157677) scale(-1, -1) rotate(90.000000) translate(-229.157677, -211.157677) translate(181.157677, 145.157677)">
                <polygon id="WEDGES-l16-o8" style="fill: limegreen" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l16-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l16-o6" style="fill: limegreen" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l16-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l16-o4" style="fill: white" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l16-o3" style="fill: limegreen" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l16-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l16-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l16-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-15" transform="translate(244.315353, 171.726896) scale(-1, -1) rotate(60.000000) translate(-244.315353, -171.726896) translate(196.315353, 105.726896)">
                <polygon id="WEDGES-l15-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l15-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l15-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l15-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l15-o4" style="fill: limegreen" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l15-o3" style="fill: limegreen" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l15-o2" style="fill: limegreen" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l15-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l15-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-14" transform="translate(237.726896, 130.000000) scale(-1, -1) rotate(30.000000) translate(-237.726896, -130.000000) translate(189.726896, 64.000000)">
                <polygon id="WEDGES-l14-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l14-o7" style="fill: limegreen" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l14-o6" style="fill: limegreen" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l14-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l14-o4" style="fill: limegreen" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l14-o3" style="fill: white" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l14-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l14-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l14-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-13" transform="translate(211.157677, 97.157677) scale(-1, -1) translate(-211.157677, -97.157677) translate(163.157677, 31.157677)">
                <polygon id="WEDGES-l13-o8" style="fill: red" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l13-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l13-o6" style="fill: red" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l13-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l13-o4" style="fill: white" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l13-o3" style="fill: red" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l13-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l13-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l13-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-12" transform="translate(171.726896, 82.000000) rotate(150.000000) translate(-171.726896, -82.000000) translate(123.726896, 16.000000)">
                <polygon id="WEDGES-l12-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l12-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l12-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l12-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l12-o4" style="fill: red" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l12-o3" style="fill: red" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l12-o2" style="fill: red" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l12-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l12-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
        </g>
        <g id="TOP" transform="translate(41.000000, -31.000000)" stroke-linejoin="round">
            <g id="WEDGES-11" transform="translate(154.588457, 244.315353) scale(-1, -1) rotate(150.000000) translate(-154.588457, -244.315353) translate(106.588457, 178.315353)">
                <polygon id="WEDGES-l11-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l11-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l11-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l11-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l11-o4" style="fill: red" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l11-o3" style="fill: red" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l11-o2" style="fill: red" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l11-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l11-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-10" transform="translate(196.315353, 237.726896) scale(-1, -1) rotate(120.000000) translate(-196.315353, -237.726896) translate(148.315353, 171.726896)">
                <polygon id="WEDGES-l10-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l10-o7" style="fill: red" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l10-o6" style="fill: red" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l10-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l10-o4" style="fill: red" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l10-o3" style="fill: yellow" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l10-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l10-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l10-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-9" transform="translate(229.157677, 211.157677) scale(-1, -1) rotate(90.000000) translate(-229.157677, -211.157677) translate(181.157677, 145.157677)">
                <polygon id="WEDGES-l9-o8" style="fill: limegreen" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l9-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l9-o6" style="fill: limegreen" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l9-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l9-o4" style="fill: yellow" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l9-o3" style="fill: limegreen" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l9-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l9-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l9-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-8" transform="translate(244.315353, 171.726896) scale(-1, -1) rotate(60.000000) translate(-244.315353, -171.726896) translate(196.315353, 105.726896)">
                <polygon id="WEDGES-l8-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l8-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l8-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l8-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l8-o4" style="fill: limegreen" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l8-o3" style="fill: limegreen" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l8-o2" style="fill: limegreen" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l8-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l8-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-7" transform="translate(237.726896, 130.000000) scale(-1, -1) rotate(30.000000) translate(-237.726896, -130.000000) translate(189.726896, 64.000000)">
                <polygon id="WEDGES-l7-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l7-o7" style="fill: limegreen" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l7-o6" style="fill: limegreen" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l7-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l7-o4" style="fill: limegreen" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l7-o3" style="fill: yellow" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l7-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l7-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l7-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-6" transform="translate(211.157677, 97.157677) scale(-1, -1) translate(-211.157677, -97.157677) translate(163.157677, 31.157677)">
                <polygon id="WEDGES-l6-o8" style="fill: orange" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l6-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l6-o6" style="fill: orange" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l6-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l6-o4" style="fill: yellow" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l6-o3" style="fill: orange" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l6-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l6-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l6-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-5" transform="translate(171.726896, 82.000000) rotate(150.000000) translate(-171.726896, -82.000000) translate(123.726896, 16.000000)">
                <polygon id="WEDGES-l5-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l5-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l5-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l5-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l5-o4" style="fill: orange" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l5-o3" style="fill: orange" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l5-o2" style="fill: orange" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l5-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l5-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-4" transform="translate(130.000000, 88.588457) rotate(120.000000) translate(-130.000000, -88.588457) translate(82.000000, 22.588457)">
                <polygon id="WEDGES-l4-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l4-o7" style="fill: orange" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l4-o6" style="fill: orange" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l4-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l4-o4" style="fill: orange" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l4-o3" style="fill: yellow" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l4-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l4-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l4-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-3" transform="translate(97.157677, 115.157677) rotate(90.000000) translate(-97.157677, -115.157677) translate(49.157677, 49.157677)">
                <polygon id="WEDGES-l3-o8" style="fill: blue" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l3-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l3-o6" style="fill: blue" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l3-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l3-o4" style="fill: yellow" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l3-o3" style="fill: blue" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l3-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l3-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l3-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-2" transform="translate(82.000000, 154.588457) rotate(60.000000) translate(-82.000000, -154.588457) translate(34.000000, 88.588457)">
                <polygon id="WEDGES-l2-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l2-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l2-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l2-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l2-o4" style="fill: blue" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l2-o3" style="fill: blue" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l2-o2" style="fill: blue" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l2-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l2-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-1" transform="translate(88.588457, 196.315353) rotate(30.000000) translate(-88.588457, -196.315353) translate(40.588457, 130.315353)">
                <polygon id="WEDGES-l1-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l1-o7" style="fill: blue" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l1-o6" style="fill: blue" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l1-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l1-o4" style="fill: blue" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l1-o3" style="fill: yellow" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l1-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l1-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l1-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-0" transform="translate(67.157677, 163.157677)">
                <polygon id="WEDGES-l0-o8" style="fill: red" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l0-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l0-o6" style="fill: red" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l0-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l0-o4" style="fill: yellow" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l0-o3" style="fill: red" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l0-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l0-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l0-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
        </g>
        <g id="DIAGONALS" transform="translate(168.861561, 1.019238)" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <line x1="0" y1="287.842323" x2="70.2768775" y2="550.119201" id="BOTTOM"></line>
            <line x1="0.15767665" y1="262.276878" x2="70.4345542" y2="2.27488928e-16" id="TOP"></line>
        </g>
    </g>
</svg>`;export{t as clockJSON,e as clockSVG,l as cube2x2x2JSON,o as cube2x2x2SVG,i as pyraminxSVG,n as sq1HyperOrbitJSON,r as sq1HyperOrbitSVG};
