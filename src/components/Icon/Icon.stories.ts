export const iconStories = {
  name: "Icon",
  description: "图标容器。通过插槽放入 SVG，颜色与尺寸来自 icon.contract.json 绑定的语义令牌。",
  variants: ["default", "muted", "primary", "disabled"] as const,
  sizes: ["sm", "md", "lg"] as const,
  examples: {
    default: `<Icon label="检查">\n  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\n    <path d="M5 12l5 5L20 7" />\n  </svg>\n</Icon>`,
    sizes: `<Icon size="sm">...</Icon>\n<Icon size="md">...</Icon>\n<Icon size="lg">...</Icon>`,
    muted: `<Icon variant="muted">...</Icon>`,
  },
};

export type IconVariant = (typeof iconStories.variants)[number];
export type IconSize = (typeof iconStories.sizes)[number];
