/**
 * @file {@link https://github.com/CianciarusoCataldo/modular-plugin-themer modular-plugin-themer} init file
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-themer
 *
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 */

import { ThemerPlugin } from "./types";

/** utils  */

import { applyTheme, setBodyClass } from "./helper";

/**
 * Extend [modular-engine](https://github.com/CianciarusoCataldo/modular-plugin-engine) with the a theme manager. Themer plugin checks
 * the modular-engine config file for `theme` field. If the field is set, the given theme will be applied on the entire web-app through global
 * window object
 *
 * @returns `themer` plugin
 *
 * @example <caption>Use `themer` plugin with `modular-engine` </caption>
 * //Inside your modular-engine config file
 *
 * const { themerPlugin } = require("modular-plugin-themer");
 *
 * const config = {
 *  appName: "custom-app",
 *  plugins: [themerPlugin],
 *
 * //Define theme field
 *  theme: {
 *    //Settings applied when dark mode is on
 *    dark: {
 *      //body background color set when dark-mode is on
 *      bodyColor: "linear-gradient(to right, #3c4a5f, #4d5f7d)",
 *         },
 *
 *    //Settings applied when dark mode is off
 *    default: {
 *      //body background color set when dark-mode is off
 *      bodyColor: "linear-gradient(to right, #eaebec, #cccdcf)",
 *    },
 *  },
 *};
 *
 * module.exports = { config };
 *
 * @see https://cianciarusocataldo.github.io/modular-plugin-themer
 *
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 *
 */
const themerPlugin: ThemerPlugin = () => ({
  feature: "themer",
  create: (config) => {
    const theme = applyTheme(config.theme);

    return {
      field: "theme",
      content: theme,
    };
  },
  format: (config, enabledPlugins) => {
    enabledPlugins.ui &&
      config.ui.onDarkModeChange.push((darkMode) => {
        setBodyClass(darkMode);
        window.document.body.style.background = "";
      });

    return config;
  },
  preInit: (config, enabledPlugins) => {
    const darkMode = (enabledPlugins.ui && config.ui.darkMode) || false;
    setBodyClass(darkMode);
  },
});

export default themerPlugin;
