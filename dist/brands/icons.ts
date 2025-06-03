export type IconsId =
  | "yapstone"
  | "worldpay"
  | "trustpayments"
  | "tokenex"
  | "recaptcha"
  | "qualpay"
  | "kount"
  | "gpayments"
  | "flexpay"
  | "epx"
  | "cwams"
  | "clearhaus"
  | "checkout"
  | "chargehive"
  | "bottomline"
  | "adyen";

export type IconsKey =
  | "Yapstone"
  | "Worldpay"
  | "Trustpayments"
  | "Tokenex"
  | "Recaptcha"
  | "Qualpay"
  | "Kount"
  | "Gpayments"
  | "Flexpay"
  | "Epx"
  | "Cwams"
  | "Clearhaus"
  | "Checkout"
  | "Chargehive"
  | "Bottomline"
  | "Adyen";

export enum Icons {
  Yapstone = "yapstone",
  Worldpay = "worldpay",
  Trustpayments = "trustpayments",
  Tokenex = "tokenex",
  Recaptcha = "recaptcha",
  Qualpay = "qualpay",
  Kount = "kount",
  Gpayments = "gpayments",
  Flexpay = "flexpay",
  Epx = "epx",
  Cwams = "cwams",
  Clearhaus = "clearhaus",
  Checkout = "checkout",
  Chargehive = "chargehive",
  Bottomline = "bottomline",
  Adyen = "adyen",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Yapstone]: "61697",
  [Icons.Worldpay]: "61698",
  [Icons.Trustpayments]: "61699",
  [Icons.Tokenex]: "61700",
  [Icons.Recaptcha]: "61701",
  [Icons.Qualpay]: "61702",
  [Icons.Kount]: "61703",
  [Icons.Gpayments]: "61704",
  [Icons.Flexpay]: "61705",
  [Icons.Epx]: "61706",
  [Icons.Cwams]: "61707",
  [Icons.Clearhaus]: "61708",
  [Icons.Checkout]: "61709",
  [Icons.Chargehive]: "61710",
  [Icons.Bottomline]: "61711",
  [Icons.Adyen]: "61712",
};
