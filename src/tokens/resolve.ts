import { brand } from "./index";

type TokenTree = Record<string, unknown>;

function lookup(tree: TokenTree, path: string): string {
  const parts = path.split(".");
  let current: unknown = tree;
  for (const part of parts) {
    if (current === null || typeof current !== "object" || !(part in current)) {
      throw new Error(`Unknown token path: ${path}`);
    }
    current = (current as TokenTree)[part];
  }
  if (typeof current !== "string") {
    throw new Error(`Token path is not a leaf: ${path}`);
  }
  return current;
}

export function resolveToken(ref: string): string {
  const match = ref.match(/^\{(.+)\}$/);
  if (!match) {
    return ref;
  }
  const path = match[1];
  if (path.startsWith("brand.")) {
    return lookup(brand as unknown as TokenTree, path.slice("brand.".length));
  }
  throw new Error(`Unresolved token reference: ${ref}`);
}

export function brandColor(name: keyof typeof brand.color): string {
  return brand.color[name];
}

export function brandSpace(name: keyof typeof brand.space): string {
  return brand.space[name];
}

export function brandRadius(name: keyof typeof brand.radius): string {
  return brand.radius[name];
}

export function brandShadow(name: keyof typeof brand.shadow): string {
  return brand.shadow[name];
}

export function brandFontSize(name: keyof typeof brand.fontSize): string {
  return brand.fontSize[name];
}

export function brandFontWeight(name: keyof typeof brand.fontWeight): string {
  return brand.fontWeight[name];
}

export function brandLineHeight(name: keyof typeof brand.lineHeight): string {
  return brand.lineHeight[name];
}

export function brandFontFamily(): string {
  return brand.fontFamily.sans;
}
