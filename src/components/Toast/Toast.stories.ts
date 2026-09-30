export const toastStories = {
  name: "Toast",
  description: "轻提示。样式来自 toast.contract.json 绑定的语义令牌。",
  variants: ["default", "success", "error"] as const,
  examples: {
    default: `<Toast>已保存</Toast>`,
    success: `<Toast variant="success">操作成功</Toast>`,
    error: `<Toast variant="error">操作失败</Toast>`,
  },
};

export type ToastVariant = (typeof toastStories.variants)[number];
