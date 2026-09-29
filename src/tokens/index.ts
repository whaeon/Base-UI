import core from "./core.json";

export const tokens = core;
export const brand = core.brand;
export const semantic = core.semantic;
export const component = core.component;

export type Tokens = typeof core;
export type BrandTokens = typeof core.brand;
export type SemanticTokens = typeof core.semantic;
export type ComponentTokens = typeof core.component;

export default tokens;
