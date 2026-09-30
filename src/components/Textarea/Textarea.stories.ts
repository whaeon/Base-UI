export const textareaStories = {
  name: "Textarea",
  description: "多行文本。样式来自 textarea.contract.json 绑定的语义令牌。",
  variants: ["default", "focus", "error", "disabled"] as const,
  examples: {
    default: `<Textarea placeholder="请输入内容" />`,
    focus: `<Textarea variant="focus" placeholder="聚焦态" />`,
    error: `<Textarea variant="error" placeholder="格式错误" />`,
    disabled: `<Textarea disabled placeholder="不可用" />`,
  },
};

export type TextareaVariant = (typeof textareaStories.variants)[number];
