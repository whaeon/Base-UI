export const checkboxStories = {
  name: "Checkbox",
  description: "复选框。样式来自 checkbox.contract.json 绑定的语义令牌。",
  variants: ["default", "checked", "indeterminate", "disabled"] as const,
  examples: {
    default: `<Checkbox>同意协议</Checkbox>`,
    checked: `<Checkbox variant="checked">已选中</Checkbox>`,
    indeterminate: `<Checkbox variant="indeterminate">部分选中</Checkbox>`,
    disabled: `<Checkbox disabled>不可用</Checkbox>`,
  },
};

export type CheckboxVariant = (typeof checkboxStories.variants)[number];
