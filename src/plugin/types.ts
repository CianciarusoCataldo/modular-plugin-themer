import { ModularEnginePlugin } from "modular-engine-types";

export type ThemerThemeField = {
  bodyColor?: string;
  uiColor?: string;
};

export type ThemerTheme = {
  default?: ThemerThemeField;
  dark?: ThemerThemeField;
};

export type ThemerPlugin = ModularEnginePlugin<{
  theme?: ThemerTheme;
}>;
