import type { SimpleBrand } from "../types/icons";
import {
  siAstro,
  siDocker,
  siExpress,
  siGithub,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siReact,
  siRedux,
  siTailwindcss,
  siTypescript,
  siX,
} from "simple-icons";

/** Tree-shaken subset of simple-icons used by `Icons.astro` (brand SVGs). */
export const BRAND_ICONS: Record<SimpleBrand, (typeof siGithub)> = {
  siGithub,
  siX,
  siNextdotjs,
  siNodedotjs,
  siReact,
  siRedux,
  siTypescript,
  siExpress,
  siDocker,
  siAstro,
  siTailwindcss,
  siPostgresql,
};
