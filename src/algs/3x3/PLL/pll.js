export const arr = [
  {
    name: "H",
    alg: "M2 U M2 U2 M2 U M2",

    arrows: [
      { s1: { face: 0, n: 1 }, s2: { face: 0, n: 7 }, scale: 8 },
      { s1: { face: 0, n: 7 }, s2: { face: 0, n: 1 }, scale: 8 },
      { s1: { face: 0, n: 3 }, s2: { face: 0, n: 5 }, scale: 8 },
      { s1: { face: 0, n: 5 }, s2: { face: 0, n: 3 }, scale: 8 },
    ],
  },
  {
    name: "Z",
    alg: "M' U M2 U M2 U M' U2 M2",

    arrows: [
      { s1: { face: 0, n: 3 }, s2: { face: 0, n: 7 }, scale: 8 },
      { s1: { face: 0, n: 7 }, s2: { face: 0, n: 3 }, scale: 8 },
      { s1: { face: 0, n: 1 }, s2: { face: 0, n: 5 }, scale: 8 },
      { s1: { face: 0, n: 5 }, s2: { face: 0, n: 1 }, scale: 8 },
    ],
  },
  {
    name: "Ua",
    alg: "M2 U M U2 M' U M2",

    arrows: [
      { s1: { face: 0, n: 5 }, s2: { face: 0, n: 3 }, scale: 8 },
      { s1: { face: 0, n: 7 }, s2: { face: 0, n: 5 }, scale: 8 },
      { s1: { face: 0, n: 3 }, s2: { face: 0, n: 7 }, scale: 8 },
    ],
  },
  {
    name: "Ub",
    alg: "M2 U' M U2 M' U' M2",

    arrows: [
      { s1: { face: 0, n: 3 }, s2: { face: 0, n: 5 }, scale: 8 },
      { s1: { face: 0, n: 5 }, s2: { face: 0, n: 7 }, scale: 8 },
      { s1: { face: 0, n: 7 }, s2: { face: 0, n: 3 }, scale: 8 },
    ],
  },
  {
    name: "Aa",
    alg: "x L2 D2 L' U' L D2 L' U L'",
    arrows: [
      { s1: { face: 0, n: 2 }, s2: { face: 0, n: 6 }, scale: 8 },
      { s1: { face: 0, n: 6 }, s2: { face: 0, n: 0 }, scale: 8 },
      { s1: { face: 0, n: 0 }, s2: { face: 0, n: 2 }, scale: 8 },
    ],
  },
  {
    name: "Ab",
    alg: "x' L2 D2 L U L' D2 L U' L",

    arrows: [
      { s1: { face: 0, n: 8 }, s2: { face: 0, n: 0 }, scale: 8 },
      { s1: { face: 0, n: 0 }, s2: { face: 0, n: 6 }, scale: 8 },
      { s1: { face: 0, n: 6 }, s2: { face: 0, n: 8 }, scale: 8 },
    ],
  },
  {
    name: "E",
    alg: "x' L' U L D' L' U' L D L' U' L D' L' U L D",

    arrows: [
      { s1: { face: 0, n: 0 }, s2: { face: 0, n: 6 }, scale: 8 },
      { s1: { face: 0, n: 6 }, s2: { face: 0, n: 0 }, scale: 8 },
      { s1: { face: 0, n: 2 }, s2: { face: 0, n: 8 }, scale: 8 },
      { s1: { face: 0, n: 8 }, s2: { face: 0, n: 2 }, scale: 8 },
    ],
  },
  {
    name: "F",
    alg: "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R",

    arrows: [
      { s1: { face: 0, n: 1 }, s2: { face: 0, n: 7 }, scale: 8 },
      { s1: { face: 0, n: 7 }, s2: { face: 0, n: 1 }, scale: 8 },
      { s1: { face: 0, n: 2 }, s2: { face: 0, n: 8 }, scale: 8 },
      { s1: { face: 0, n: 8 }, s2: { face: 0, n: 2 }, scale: 8 },
    ],
  },
  {
    name: "Ja",
    alg: "x R2 F R F' R U2 r' U r U2",

    arrows: [
      { s1: { face: 0, n: 1 }, s2: { face: 0, n: 5 }, scale: 8 },
      { s1: { face: 0, n: 5 }, s2: { face: 0, n: 1 }, scale: 8 },
      { s1: { face: 0, n: 2 }, s2: { face: 0, n: 8 }, scale: 8 },
      { s1: { face: 0, n: 8 }, s2: { face: 0, n: 2 }, scale: 8 },
    ],
  },
  {
    name: "Jb",
    alg: "R U R' F' R U R' U' R' F R2 U' R'",

    arrows: [
      { s1: { face: 0, n: 5 }, s2: { face: 0, n: 7 }, scale: 8 },
      { s1: { face: 0, n: 7 }, s2: { face: 0, n: 5 }, scale: 8 },
      { s1: { face: 0, n: 2 }, s2: { face: 0, n: 8 }, scale: 8 },
      { s1: { face: 0, n: 8 }, s2: { face: 0, n: 2 }, scale: 8 },
    ],
  },
  {
    name: "Ra",
    alg: "R U' R' U' R U R D R' U' R D' R' U2 R'",

    arrows: [
      { s1: { face: 0, n: 1 }, s2: { face: 0, n: 3 }, scale: 8 },
      { s1: { face: 0, n: 3 }, s2: { face: 0, n: 1 }, scale: 8 },
      { s1: { face: 0, n: 2 }, s2: { face: 0, n: 8 }, scale: 8 },
      { s1: { face: 0, n: 8 }, s2: { face: 0, n: 2 }, scale: 8 },
    ],
  },
  {
    name: "Rb",
    alg: "R2 F R U R U' R' F' R U2 R' U2 R",

    arrows: [
      { s1: { face: 0, n: 3 }, s2: { face: 0, n: 7 }, scale: 8 },
      { s1: { face: 0, n: 7 }, s2: { face: 0, n: 3 }, scale: 8 },
      { s1: { face: 0, n: 2 }, s2: { face: 0, n: 8 }, scale: 8 },
      { s1: { face: 0, n: 8 }, s2: { face: 0, n: 2 }, scale: 8 },
    ],
  },
  {
    name: "T",
    alg: "R U R' U' R' F R2 U' R' U' (R U R') F'",

    arrows: [
      { s1: { face: 0, n: 3 }, s2: { face: 0, n: 5 }, scale: 8 },
      { s1: { face: 0, n: 5 }, s2: { face: 0, n: 3 }, scale: 8 },
      { s1: { face: 0, n: 2 }, s2: { face: 0, n: 8 }, scale: 8 },
      { s1: { face: 0, n: 8 }, s2: { face: 0, n: 2 }, scale: 8 },
    ],
  },
  {
    name: "Y",
    alg: "F R U' R' U' R U R' F' R U R' U' R' F R F'",

    arrows: [
      { s1: { face: 0, n: 1 }, s2: { face: 0, n: 3 }, scale: 8 },
      { s1: { face: 0, n: 3 }, s2: { face: 0, n: 1 }, scale: 8 },
      { s1: { face: 0, n: 0 }, s2: { face: 0, n: 8 }, scale: 8 },
      { s1: { face: 0, n: 8 }, s2: { face: 0, n: 0 }, scale: 8 },
    ],
  },
  {
    name: "V",
    alg: "R' U R' U' y R' F' R2 U' R' U R' F R F",

    arrows: [
      { s1: { face: 0, n: 1 }, s2: { face: 0, n: 5 }, scale: 8 },
      { s1: { face: 0, n: 5 }, s2: { face: 0, n: 1 }, scale: 8 },
      { s1: { face: 0, n: 0 }, s2: { face: 0, n: 8 }, scale: 8 },
      { s1: { face: 0, n: 8 }, s2: { face: 0, n: 0 }, scale: 8 },
    ],
  },
  {
    name: "Na",
    alg: "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'",

    arrows: [
      { s1: { face: 0, n: 3 }, s2: { face: 0, n: 5 }, scale: 8 },
      { s1: { face: 0, n: 5 }, s2: { face: 0, n: 3 }, scale: 8 },
      { s1: { face: 0, n: 2 }, s2: { face: 0, n: 6 }, scale: 8 },
      { s1: { face: 0, n: 6 }, s2: { face: 0, n: 2 }, scale: 8 },
    ],
  },
  {
    name: "Nb",
    alg: "R' (U R U' R') F' U' F R U R' F R' F' R U' R",

    arrows: [
      { s1: { face: 0, n: 3 }, s2: { face: 0, n: 5 }, scale: 8 },
      { s1: { face: 0, n: 5 }, s2: { face: 0, n: 3 }, scale: 8 },
      { s1: { face: 0, n: 0 }, s2: { face: 0, n: 8 }, scale: 8 },
      { s1: { face: 0, n: 8 }, s2: { face: 0, n: 0 }, scale: 8 },
    ],
  },
  { name: "Ga", alg: "R2 U R' U R' U' R U' R2 U' D R' U R D'", arrows: [] },
  { name: "Gb", alg: "R' U' R U D' R2 U R' U R U' R U' R2 D", arrows: [] },
  { name: "Gc", alg: "R2 U' R U' R U R' U R2 U D' R U' R' D", arrows: [] },
  { name: "Gd", alg: "R U R' U' D R2 U' R U' R' U R' U R2 D'", arrows: [] },
];
