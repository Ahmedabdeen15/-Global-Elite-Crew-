import type { Dictionary } from "../types";
import { common } from "./common";
import { home } from "./home";
import { about } from "./about";
import { contact } from "./contact";
import { iso27020Ar } from "./services/iso27020";
import { iso27001Ar } from "./services/iso27001";
import { iso17020Ar } from "./services/iso17020";
import { wrapAr } from "./services/wrap";
import { gotsAr } from "./services/gots";
import { sedexAr } from "./services/sedex";
import { inditexAr } from "./services/inditex";
import { bsciAr } from "./services/bsci";

/**
 * Arabic dictionary - structurally validated against the English one.
 * TS will fail the build here if any key/section drifts out of sync.
 */
export const ar: Dictionary = {
  common,
  home,
  about,
  contact,
  services: [
    ...iso27020Ar,
    ...iso27001Ar,
    ...iso17020Ar,
    ...wrapAr,
    ...gotsAr,
    ...sedexAr,
    ...inditexAr,
    ...bsciAr,
  ],
};
