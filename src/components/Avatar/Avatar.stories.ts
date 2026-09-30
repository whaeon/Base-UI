export const avatarStories = {
  name: "Avatar",
  description: "头像。样式来自 avatar.contract.json 绑定的语义令牌。",
  variants: ["default", "image", "initials"] as const,
  sizes: ["sm", "md", "lg"] as const,
  examples: {
    default: `<Avatar />`,
    initials: `<Avatar variant="initials" initials="UI" />`,
    image: `<Avatar variant="image" src="/avatar.png" alt="用户" />`,
  },
};

export type AvatarVariant = (typeof avatarStories.variants)[number];
export type AvatarSize = (typeof avatarStories.sizes)[number];
