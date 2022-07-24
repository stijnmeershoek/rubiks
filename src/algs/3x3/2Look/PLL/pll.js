import { Face, Masking } from "sr-visualizer";

export const arr = [
  {
    name: "Diagonal",
    actualAlg: "F R U' R' U' R U R' F' R U R' U' R' F R F'",
    mask: Masking.COLL,
    arrows: [
      {
        s1: { face: Face.U, n: 8 },
        s2: { face: Face.U, n: 0 },
        scale: 8,
      },
      {
        s1: { face: Face.U, n: 0 },
        s2: { face: Face.U, n: 8 },
        scale: 8,
      },
    ],
  },
  {
    name: "Headlights",
    mask: Masking.COLL,
    actualAlg: "R U R' U' R' F R2 U' R' U' R U R' F'",
    arrows: [
      {
        s1: { face: Face.U, n: 8 },
        s2: { face: Face.U, n: 2 },
        scale: 8,
      },
      {
        s1: { face: Face.U, n: 2 },
        s2: { face: Face.U, n: 8 },
        scale: 8,
      },
    ],
  },
  {
    name: "PLL (H)",
    actualAlg: "M2 U M2 U2 M2 U M2",
    arrows: [
      {
        s1: { face: Face.U, n: 7 },
        s2: { face: Face.U, n: 1 },
        scale: 8,
      },
      {
        s1: { face: Face.U, n: 1 },
        s2: { face: Face.U, n: 7 },
        scale: 8,
      },
      {
        s1: { face: Face.U, n: 5 },
        s2: { face: Face.U, n: 3 },
        scale: 8,
      },
      {
        s1: { face: Face.U, n: 3 },
        s2: { face: Face.U, n: 5 },
        scale: 8,
      },
    ],
  },
  {
    name: "PLL (Ua)",
    alg: "(M2 U M U2 M' U M2) (M2 U M U2 M' U M2)",
    actualAlg: "M2 U M U2 M' U M2",
    arrows: [
      {
        s1: { face: Face.U, n: 5 },
        s2: { face: Face.U, n: 3 },
        scale: 8,
      },
      {
        s1: { face: Face.U, n: 3 },
        s2: { face: Face.U, n: 7 },
        scale: 8,
      },
      {
        s1: { face: Face.U, n: 7 },
        s2: { face: Face.U, n: 5 },
        scale: 8,
      },
    ],
  },
  {
    name: "PLL (Ub)",
    alg: "(M2 U' M U2 M' U' M2) (M2 U' M U2 M' U' M2)",
    actualAlg: "M2 U' M U2 M' U' M2",
    arrows: [
      {
        s1: { face: Face.U, n: 3 },
        s2: { face: Face.U, n: 5 },
        scale: 8,
      },
      {
        s1: { face: Face.U, n: 5 },
        s2: { face: Face.U, n: 7 },
        scale: 8,
      },
      {
        s1: { face: Face.U, n: 7 },
        s2: { face: Face.U, n: 3 },
        scale: 8,
      },
    ],
  },
  {
    name: "PLL (Z)",
    alg: "y M' U M2 U M2 U M' U2 M2 y",
    actualAlg: "M' U M2 U M2 U M' U2 M2",
    arrows: [
      {
        s1: { face: Face.U, n: 1 },
        s2: { face: Face.U, n: 5 },
        scale: 8,
      },
      {
        s1: { face: Face.U, n: 5 },
        s2: { face: Face.U, n: 1 },
        scale: 8,
      },
      {
        s1: { face: Face.U, n: 7 },
        s2: { face: Face.U, n: 3 },
        scale: 8,
      },
      {
        s1: { face: Face.U, n: 3 },
        s2: { face: Face.U, n: 7 },
        scale: 8,
      },
    ],
  },
];
