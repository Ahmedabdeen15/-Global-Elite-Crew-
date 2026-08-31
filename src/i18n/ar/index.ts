import type { Dictionary } from "../types";
import { common } from "./common";
import { home } from "./home";
import { about } from "./about";
import { contact } from "./contact";
import { iso27001Ar } from "./services/iso27001";
import { wrapAr } from "./services/wrap";
import { gotsAr } from "./services/gots";
import { sedexAr } from "./services/sedex";
import { inditexAr } from "./services/inditex";
import { bsciAr } from "./services/bsci";
import { iso9001 } from "../en/services/iso9001";
import { iso9001Ar } from "./services/iso9001";
import { iso45001Ar } from "./services/iso45001";

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
    ...wrapAr,
    ...gotsAr,
    ...sedexAr,
    ...inditexAr,
    ...bsciAr,
    ...iso9001Ar,
    ...iso45001Ar,
    ...iso27001Ar,
  ],
};
