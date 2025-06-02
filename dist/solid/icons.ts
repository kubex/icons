export type IconsId =
  | "house";

export type IconsKey =
  | "House";

export enum Icons {
  House = "house",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.House]: "61697",
};
