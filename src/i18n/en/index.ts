import { common } from "./common";
import { home } from "./home";
import { about } from "./about";
import { contact } from "./contact";
import { iso27001 } from "./services/iso27001";
import { iso17020 } from "./services/iso17020";
import { wrap } from "./services/wrap";
import { gots } from "./services/gots";
import { sedex } from "./services/sedex";
import { inditex } from "./services/inditex";
import { bsci } from "./services/bsci";
import { part1 } from "./services/part1";

export const en = {
  common,
  home,
  about,
  contact,
  services: [...part1, ...iso27001, ...iso17020, ...wrap, ...gots, ...sedex, ...inditex, ...bsci],
} as const;
