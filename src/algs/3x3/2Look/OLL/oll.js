import { Masking } from "sr-visualizer";

export const arr = [
  {
    name: "I-Shape",

    alg: "F R U R' U' F'",
    mask: Masking.OELL,
  },
  {
    name: "L-Shape",
    mask: Masking.OELL,

    alg: "f R U R' U' f'",
  },
  {
    name: "Dot Shape",
    mask: Masking.OELL,
    alg: "F R U R' U' F' f R U R' U' f'",
  },
  {
    name: "H",

    alg: "R U R' U R U' R' U R U2 R'",
  },
  {
    name: "Pi",
    alg: "R U2 (R2 U' R2 U' R2) U2 R",
  },
  {
    name: "U",

    alg: "R2 D R' U2 R D' R' U2 R'",
  },
  {
    name: "T",

    alg: "r U R' U' r' F R F'",
  },
  {
    name: "L",

    alg: "F R' F' r U R U' r'",
  },
  {
    name: "Sune",

    alg: "R U R' U R U2 R'",
  },
  {
    name: "Antisune",

    alg: "R U2 R' U' R U' R'",
  },
];
