/** types */

import { ThemerPlugin } from "./types";

/** utils  */

import { applyTheme, setBodyClass } from "./helper";

/**
 * Extend modular-engine with the a theme manager. Themer plugin checks the modular-engine config file for `theme` field.
 * If the field is set, the given theme will be applied on the entire web-app through global window object
 *
 * @returns `themer` plugin
 *
 * @see https://github.com/CianciarusoCataldo/modular-plugin-themer
 *
 * @see https://github.com/CianciarusoCataldo/modular-engine
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
    if (enabledPlugins.ui) {
      setBodyClass(config.ui.darkMode);
    }
  },
});

export default themerPlugin;
