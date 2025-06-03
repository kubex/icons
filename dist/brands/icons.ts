export type IconsId =
  | "kount"
  | "flexpay"
  | "chargehive"
  | "adyen";

export type IconsKey =
  | "Kount"
  | "Flexpay"
  | "Chargehive"
  | "Adyen";

export enum Icons {
  Kount = "kount",
  Flexpay = "flexpay",
  Chargehive = "chargehive",
  Adyen = "adyen",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Kount]: "61697",
  [Icons.Flexpay]: "61698",
  [Icons.Chargehive]: "61699",
  [Icons.Adyen]: "61700",
};
