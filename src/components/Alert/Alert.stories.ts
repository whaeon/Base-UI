export const alertStories = {
  name: "Alert",
  description: "警告提示。样式来自 alert.contract.json 绑定的语义令牌。",
  variants: ["default", "success", "error"] as const,
  examples: {
    default: `<Alert title="提示">请核对后再提交。</Alert>`,
    success: `<Alert variant="success" title="成功">保存完成。</Alert>`,
    error: `<Alert variant="error" title="错误">无法提交。</Alert>`,
  },
};

export type AlertVariant = (typeof alertStories.variants)[number];
