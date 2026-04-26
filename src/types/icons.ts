/** simple-icons slugs bundled in `src/utils/brandIcons.ts` — add there when using a new brand. */
export type SimpleBrand =
  | "siAstro"
  | "siExpress"
  | "siGithub"
  | "siNextdotjs"
  | "siPostgresql"
  | "siReact"
  | "siTailwindcss"
  | "siTypescript"
  | "siX";

/** Tailwind `size-*` scale used for the icon box (and material font size). */
export type IconSize = 3.5 | 4 | 5 | 6 | 8;

type IconSizing = {
  /** Box on the Tailwind scale. Default `6`. */
  size?: IconSize;
  class?: string;
};

export type IconsProps =
  | ({ type: "brand"; brandName: SimpleBrand } & IconSizing)
  | ({ type: "linkedin" } & IconSizing)
  | ({ type: "material"; materialIcon: string } & IconSizing);
