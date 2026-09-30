export const cardStories = {
  name: "Card",
  description: "内容容器。样式来自 card.contract.json 绑定的语义令牌。",
  variants: ["default", "hover"] as const,
  examples: {
    default: `<Card>卡片内容</Card>`,
    hover: `<Card variant="hover">悬停态卡片</Card>`,
  },
};

export type CardVariant = (typeof cardStories.variants)[number];
