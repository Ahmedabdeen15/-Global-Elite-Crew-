import { common } from "./common";
import { home } from "./home";
import { about } from "./about";
import { contact } from "./contact";
import { iso27001 } from "./services/iso27001";
import { wrap } from "./services/wrap";
import { gots } from "./services/gots";
import { sedex } from "./services/sedex";
import { inditex } from "./services/inditex";
import { bsci } from "./services/bsci";
import { iso9001 } from "./services/iso9001";
import { iso45001 } from "./services/iso45001";

export const en = {
  common,
  home,
  about,
  contact,
  services: [...wrap, ...gots, ...sedex, ...inditex, ...bsci,...iso9001, ...iso45001, ...iso27001],
} as const;
