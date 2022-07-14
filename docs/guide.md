# modular-plugin-themer

![NPM](https://img.shields.io/npm/l/modular-plugin-themer?label=License&style=for-the-badge)
![npm](https://img.shields.io/npm/v/modular-plugin-themer?color=orange%20&label=Latest%20version&style=for-the-badge&logo=npm)
![npm bundle size](https://img.shields.io/bundlephobia/min/modular-plugin-themer?label=Package%20size&style=for-the-badge)
![Maintenance](https://img.shields.io/maintenance/yes/2025?label=Maintained&style=for-the-badge)

---

<br>

Enhance [modular-engine](https://github.com/CianciarusoCataldo/modular-engine) with a custom theme compatible with [modular-ui-components lib](https://github.com/CianciarusoCataldo/modular-ui-components)

<br>

---

## Getting started

<br>

### Installation

If you want to use this plugin with [modular-engine](https://github.com/CianciarusoCataldo/modular-engine), install it:

```sh
npm i modular-plugin-themer
```

<br>

### Usage

Check [modular-engine](https://github.com/CianciarusoCataldo/modular-engine) guide to init the system

Include this plugin inside your modular-engine config file, optionally with `theme` field set:

```tsx
//Inside your modular-engine config file

const { themerPlugin } = require("modular-plugin-themer");

const config = {
  appName: "custom-app",
  plugins: [themerPlugin],

  //Define theme field
  theme: {
    //Settings applied when dark mode is on
    dark: {
      //body background color set when dark-mode is on
      bodyColor: "linear-gradient(to right, #3c4a5f, #4d5f7d)",
    },

    //Settings applied when dark mode is off
    default: {
      //body background color set when dark-mode is off
      bodyColor: "linear-gradient(to right, #eaebec, #cccdcf)",
    },
  },
};

module.exports = { config };
```

As a side effect, a new class-name is applied on the body, dependent on `dark-mode` value (if [modular-plugin-ui](https://github.com/CianciarusoCataldo/modular-plugin-ui) is enabled):

- `light` : dark-mode is off
- `dark` : dark-mode is on

<br>

---

## API

### Config

This plugin adds adds a custom field inside modular-engine config, `theme`. Inside this field, there are the plugin settings:

- `default` : these settings are applied when `dark-mode` is off,
- `dark` : these settings are applied when `dark-mode` is on,

Both contain 2 optional fields:

- `uiColor` : this color is used as a background for every modular-ui-components lib, check its [guide](https://cianciarusocataldo.github.io/modular-ui-components/docs/#/?id=customizable-ui) for details (for now, the plugin support only `--modular-custom-background-dark` and `--modular-custom-background-light` css properties are supported)
- `bodyColor`: body background color

Check the [usage section](#usage) for a real example

---

## Integration with other plugins

- if you use [modular-plugin-ui](https://github.com/CianciarusoCataldo/modular-plugin-ui) too, you can keep the body background color in sync with actual dark mode. Try it with [modular-engine](https://github.com/CianciarusoCataldo/modular-engine) playground (enable/disable dark mode, and the body bakground will be updated) - https://cianciarusocataldo.github.io/modular-engine
  <br>

---

## Included libraries

- [Modular-engine-types](https://github.com/CianciarusoCataldo/modular-engine-types) - to use modular-engine type definitions inside the plugin
- [Modular-utils](https://github.com/CianciarusoCataldo/modular-utils) - to use shared utils functions during init process
- Modular-plugin-modal is written entirely with [Typescript](https://www.typescriptlang.org/)

<br>

---

## Authors

- [**Cataldo Cianciaruso**](https://github.com/CianciarusoCataldo)

<br>

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
