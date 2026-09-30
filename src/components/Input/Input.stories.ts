export const inputStories = {
  name: "Input",
  description: "单行文本输入。样式来自 input.contract.json 绑定的语义令牌。",
  variants: ["default", "focus", "error", "disabled"] as const,
  examples: {
    default: `<Input placeholder="请输入" />`,
    focus: `<Input variant="focus" placeholder="聚焦态" />`,
    error: `<Input variant="error" placeholder="格式错误" />`,
    disabled: `<Input disabled placeholder="不可用" />`,
  },
};

export type InputVariant = (typeof inputStories.variants)[number];
