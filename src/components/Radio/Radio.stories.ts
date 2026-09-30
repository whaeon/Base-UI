export const radioStories = {
  name: "Radio",
  description: "单选框。样式来自 radio.contract.json 绑定的语义令牌。",
  variants: ["default", "checked", "disabled"] as const,
  examples: {
    default: `<Radio v-model="value" value="a">选项 A</Radio>`,
    checked: `<Radio variant="checked">已选中</Radio>`,
    disabled: `<Radio disabled>不可用</Radio>`,
  },
};

export type RadioVariant = (typeof radioStories.variants)[number];
