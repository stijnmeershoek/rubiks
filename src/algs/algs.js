import { Masking } from "sr-visualizer";

export const algorithms = {
  "2x2": [
    {
      name: "OLL",
      masking: Masking.OLL,
      case: "R U2 R' U' R U' R'",
    },
    {
      name: "PBL",
      case: "R2 U' B2 U2 R2 U' R2",
    },
    {
      name: "CLL",
      case: "L' U' L U L F' L' F L' U' L U' L' U2 L",
      masking: Masking.CLL,
    },
    {
      name: "EG-1",
      case: "R' U' R' F R F' R U' R' U2 R",
    },
  ],
  "3x3": [
    {
      name: "2look",
      desc: "(OLL/PLL)",
      case: "R U R' U' R' F R2 U' R' U' R U R' F'",
      arr: [
        {
          name: "OLL",
          case: "R U2 R' U' R U' R'",
          masking: Masking.OLL,
        },
        {
          name: "PLL",
          case: "R U R' U' R' F R2 U' R' U' R U R' F'",
        },
      ],
    },
    {
      name: "OLL",
      case: "R U2 R' U' R U' R'",
      masking: Masking.OLL,
    },
    {
      name: "PLL",
      case: "R U R' F' R U R' U' R' F R2 U' R'",
    },
    {
      name: "COLL",
      case: "R U R' U R U' R' U R U2 R'",
      masking: Masking.COLL,
    },
    {
      name: "WV",
      desc: "(Winter Variation)",
      case: "U R U2 R'",
      masking: Masking.WV,
    },
  ],
  "4x4": [
    {
      name: "OLL",
      case: "Rw U2 x Rw U2 Rw U2 Rw' U2 Lw U2 Rw' U2 Rw U2 Rw' U2 Rw' R2 D' R U2 R' D R U2 R",
      masking: Masking.OLL,
    },
    {
      name: "PLL",
      case: "F R U' R' U' R U R' F' R U R' U' R' F R F' U' Rw2 R2 U2 Rw2 R2 Uw2 Rw2 R2 Uw2",
    },
  ],
};
