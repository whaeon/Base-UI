export const dialogStories = {
  name: "Dialog",
  description: "对话框。样式来自 dialog.contract.json 绑定的语义令牌。",
  variants: ["default", "open"] as const,
  examples: {
    default: `<Dialog v-model:open="open" title="确认">内容</Dialog>`,
    open: `<Dialog variant="open" title="已打开">内容</Dialog>`,
  },
};

export type DialogVariant = (typeof dialogStories.variants)[number];
