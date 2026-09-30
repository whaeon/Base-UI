export const buttonStories = {
  name: "Button",
  description: "用于触发操作的按钮。样式来自 button.contract.json 绑定的语义令牌。",
  variants: ["default", "hover", "active", "disabled", "loading"] as const,
  sizes: ["sm", "md", "lg"] as const,
  examples: {
    default: `<Button>确认</Button>`,
    sizes: `<Button size="sm">小</Button>\n<Button size="md">中</Button>\n<Button size="lg">大</Button>`,
    loading: `<Button loading>提交中</Button>`,
    disabled: `<Button disabled>不可用</Button>`,
  },
};

export type ButtonVariant = (typeof buttonStories.variants)[number];
export type ButtonSize = (typeof buttonStories.sizes)[number];
