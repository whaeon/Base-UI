export const badgeStories = {
  name: "Badge",
  description: "徽章。样式来自 badge.contract.json 绑定的语义令牌。",
  variants: ["default", "muted", "destructive"] as const,
  examples: {
    default: `<Badge>新</Badge>`,
    muted: `<Badge variant="muted">草稿</Badge>`,
    destructive: `<Badge variant="destructive">紧急</Badge>`,
  },
};

export type BadgeVariant = (typeof badgeStories.variants)[number];
