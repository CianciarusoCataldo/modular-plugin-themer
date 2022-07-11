import { ModularEnginePlugin } from "modular-engine-types";

export type ThemerPluginThemeField = {
  bodyColor?: string;
  uiColor?: string;
};

export type ThemerPluginTheme = {
  default?: ThemerPluginThemeField;
  dark?: ThemerPluginThemeField;
};

export type ThemerPlugin = ModularEnginePlugin<{
  theme?: ThemerPluginTheme;
}>;
