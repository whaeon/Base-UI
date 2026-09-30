export const switchStories = {
  name: "Switch",
  description: "开关。样式来自 switch.contract.json 绑定的语义令牌。",
  variants: ["default", "checked", "disabled"] as const,
  examples: {
    default: `<Switch>开启通知</Switch>`,
    checked: `<Switch variant="checked">已开启</Switch>`,
    disabled: `<Switch disabled>不可用</Switch>`,
  },
};

export type SwitchVariant = (typeof switchStories.variants)[number];
