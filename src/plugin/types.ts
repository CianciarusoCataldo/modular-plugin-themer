/**
 * @file {@link https://github.com/CianciarusoCataldo/modular-plugin-themer modular-plugin-themer} type definitions
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-themer
 *
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 */

import { ModularEnginePlugin } from "modular-engine-types";

/**
 * [modular-plugin-themer](https://github.com/CianciarusoCataldo/modular-plugin-themer) theme field
 *
 * @returns `themer` plugin
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-themer
 *
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 */
export type ThemerPluginThemeField = {
  bodyColor?: string;
  uiColor?: string;
};

/**
 * [modular-plugin-themer](https://github.com/CianciarusoCataldo/modular-plugin-themer) theme
 *
 * @returns `themer` plugin
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-themer
 *
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 */
export type ThemerPluginTheme = {
  /** Settings applied when dark-mode is off */
  default?: ThemerPluginThemeField;

  /** Settings applied when dark-mode is on */
  dark?: ThemerPluginThemeField;
};

/**
 * [modular-plugin-themer](https://github.com/CianciarusoCataldo/modular-plugin-themer) interface
 *
 * @returns `themer` plugin
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-themer
 *
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 */
export type ThemerPlugin = ModularEnginePlugin<{
  theme?: ThemerPluginTheme;
}>;
