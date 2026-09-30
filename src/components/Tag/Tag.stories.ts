export const tagStories = {
  name: "Tag",
  description: "标签。样式来自 tag.contract.json 绑定的语义令牌。",
  variants: ["default", "primary", "destructive", "closable"] as const,
  examples: {
    default: `<Tag>默认</Tag>`,
    primary: `<Tag variant="primary">主色</Tag>`,
    destructive: `<Tag variant="destructive">危险</Tag>`,
    closable: `<Tag variant="closable">可关闭</Tag>`,
  },
};

export type TagVariant = (typeof tagStories.variants)[number];
