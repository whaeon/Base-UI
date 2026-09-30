export const formStories = {
  name: "Form",
  description: "表单容器与校验。样式来自 form.contract.json 绑定的语义令牌。",
  variants: ["default", "error"] as const,
  examples: {
    default: `<Form>\n  <FormItem label="用户名">\n    <Input placeholder="请输入" />\n  </FormItem>\n</Form>`,
    error: `<Form variant="error">\n  <FormItem label="用户名" error="必填">\n    <Input variant="error" />\n  </FormItem>\n</Form>`,
  },
};

export type FormVariant = (typeof formStories.variants)[number];
