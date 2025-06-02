export type IconsId =
  | "paypal";

export type IconsKey =
  | "Paypal";

export enum Icons {
  Paypal = "paypal",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Paypal]: "61697",
};
