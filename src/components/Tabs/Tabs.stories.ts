export const tabsStories = {
  name: "Tabs",
  description: "标签页。样式来自 tabs.contract.json 绑定的语义令牌。",
  variants: ["default", "active"] as const,
  examples: {
    default: `<Tabs v-model="value" :items="[{ label: '概览', value: 'a' }, { label: '详情', value: 'b' }]" />`,
    active: `<Tabs variant="active" :items="[{ label: '概览', value: 'a' }]" />`,
  },
};

export type TabsVariant = (typeof tabsStories.variants)[number];
