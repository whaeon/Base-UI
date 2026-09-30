export const selectStories = {
  name: "Select",
  description: "下拉选择器。样式来自 select.contract.json 绑定的语义令牌。",
  variants: ["default", "focus", "error", "disabled"] as const,
  examples: {
    default: `<Select v-model="value" :options="options" placeholder="请选择" />`,
    focus: `<Select variant="focus" :options="options" placeholder="聚焦态" />`,
    error: `<Select variant="error" :options="options" placeholder="校验失败" />`,
    disabled: `<Select disabled :options="options" placeholder="不可用" />`,
  },
};

export type SelectVariant = (typeof selectStories.variants)[number];
