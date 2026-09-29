# 设计约定

本文档约束 Base-UI 的令牌、组件、命名与变更方式。新增内容前先读本文。

## 令牌使用规则

- 视觉值（颜色、间距、字号、字重、行高、圆角、阴影、动效时长）必须来自 `src/tokens/`，禁止在组件中写魔法数字或裸色值。
- 令牌分三层，定义在 `src/tokens/core.json`，由 `src/tokens/index.ts` 导出：
  - **品牌令牌（brand）**：与产品品牌绑定的底层值，如 `brand.color.blue-500`、`brand.space.4`。
  - **语义令牌（semantic）**：表达用途的别名，只引用品牌令牌，如 `semantic.color.primary`。
  - **组件令牌（component）**：面向具体组件的别名，只引用语义令牌，如 `component.button.primary.background`。
- 引用优先级：组件实现优先用组件令牌；无对应组件令牌时用语义令牌；禁止直接引用品牌令牌。
- 新增令牌顺序：品牌 → 语义 → 组件；禁止跳过上层直接写死下层值。
- 颜色一律使用 HSL 实色值，格式 `hsl(H, S%, L%)`。禁止 `rgba`、`hsla`、`#RRGGBBAA` 及任何带 alpha 通道的写法。阴影同样使用实色 HSL，不用透明叠色。
- 间距按 4px 基准：`space.0` = 0px，`space.N` = `N * 4px`，范围 `0`–`12`。
- 圆角档位固定为 `none` / `sm` / `md` / `lg` / `full`。
- 字体族必须包含中文栈：`PingFang SC`、`Microsoft YaHei`。
- 字号档位：`xs`–`3xl`；字重：`normal` / `medium` / `semibold` / `bold`。
- 令牌命名使用点分路径；JSON 键用小写短横线或小驼峰，对外引用保持同一路径。
- 修改已发布令牌视为破坏性变更，必须走变更流程。

## 组件开发规则

开发顺序固定为：**契约 → 组件 → 展示页 → 文档同步**。不得跳步。

1. 在 `src/contracts/` 写契约（`*.contract.json`），写清组件名、令牌引用、变体、尺寸、`allowed-edit`、`forbidden`。
2. 实现必须满足契约；新增属性先改契约再改实现。契约 `allowed-edit` 为 `none` 时，实现不得另开视觉通道。
3. 组件只使用 Tailwind 原子类名，不写自定义 CSS，不依赖浏览器特有 API。
4. 新增组件时，优先从已有令牌中挑选，不新增令牌，除非出现新的语义需求。
5. 每个组件至少覆盖契约中列出的变体与尺寸。
6. 组件范围与优先级以 `docs/COMPONENTS.md` 为唯一事实来源；新增组件先改清单再写契约。每完成一个组件必须更新该文件状态。
7. 组件完成后，必须在 `src/showcase/` 增加展示页，并同步 `docs/STATUS.md` 与 `README.md` 的组件数 / 契约数。

## 命名规范

| 类别 | 规则 | 示例 |
|------|------|------|
| 组件名 | PascalCase | `Button`、`TextField` |
| 组件目录 | 与组件名一致的 PascalCase | `src/components/Button/` |
| 契约文件 | 小写短横线 + `.contract.json` | `src/contracts/button.contract.json` |
| 令牌路径 | 小写点分 | `color.text.primary` |
| 文档与看板 | 大写文件名 | `STATUS.md`、`COMPONENTS.md`、`CONVENTIONS.md` |
| Git 提交 | `[类型] 简述` | `[初始化] 项目骨架与自描述文档` |

提交类型：`初始化`、`令牌`、`契约`、`组件`、`展示`、`文档`、`修复`、`重构`。

## 文件结构约定

```text
src/tokens/          # 仅放令牌定义与令牌索引
src/contracts/       # 一组件一契约，不放实现
src/components/      # 一组件一目录，内含实现与本地样式
src/showcase/        # 展示站入口、路由、示例页
docs/                # 项目级文档，不放组件实现说明的正文副本
```

- 组件实现不得引用 `src/showcase/`。
- 展示站可以引用 `src/components/` 与 `src/tokens/`。
- 契约是实现的唯一规格来源；实现与展示站不得 silently 扩展契约未声明的行为。

## 禁止事项

- 在组件中硬编码颜色、字号、间距、圆角、阴影（`raw-hex`、`raw-padding`）。
- 写自定义 CSS，或依赖浏览器特有 API。
- 跳过契约直接写组件，或跳过「契约 → 组件 → 展示页 → 文档同步」中的任一步。
- 在未更新 `docs/COMPONENTS.md` 与 `docs/STATUS.md` 的情况下宣称组件已完成。
- 删除或覆盖已有用户文件前未经确认。
- 把构建产物、密钥、`node_modules` 提交进仓库。
- 为了赶进度复制第三方组件源码却不声明来源与许可证。

## 变更流程

1. 改令牌或契约：先更新对应文件，再改实现与展示站。
2. 改实现：对照契约自检，更新展示站示例。
3. 同步文档：更新 `docs/STATUS.md`（阶段、组件清单、已知问题）、`README.md`（当前状态数字）、`docs/CHANGELOG.md`（记一笔）。
4. 提交：按命名规范写 commit message；一次提交只做一类变更。
5. 破坏性变更：在 CHANGELOG 中单独标明，并在 STATUS 的已知问题或待办中记录迁移事项。
