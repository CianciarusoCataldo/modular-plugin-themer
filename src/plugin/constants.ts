/**
 * @file {@link https://github.com/CianciarusoCataldo/modular-plugin-themer modular-plugin-themer} constants file
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-themer
 *
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 */

import { ThemerPluginTheme } from "./types";

export const themerPluginCssProperties = {
  default: {
    background: "--modular-custom-background-light",
    text: "--modular-custom-text-color-light",
  },
  dark: {
    background: "--modular-custom-background-dark",
    text: "--modular-custom-text-color-dark",
  },
} as const;

export const themerPluginDefaultTheme: ThemerPluginTheme = {
  default: {},
  dark: {},
};
