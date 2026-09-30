# 更新日志

## 未发布

### 第 3 步：Button 组件 + 展示站骨架

- 新增 `src/components/Button/`：`Button.vue`、`Button.stories.ts`、`index.ts`
- 新增展示站骨架：`src/showcase/`（Vue Router，`/` 概览，`/components/:name` 详情）
- 设计决策：左侧导航从 `docs/COMPONENTS.md` 解析分类与状态，仅 ✅ 组件可点击进入详情页
- 展示站与组件共用 `tailwind.config.js` 中从 `src/tokens/core.json` 注入的语义色、间距、圆角、字体、阴影
- 启动：`npm install` 后执行 `npm run dev`

### 第 2 步：组件契约 + 组件清单

- 确认 `docs/COMPONENTS.md` 已存在，作为组件开发的唯一事实来源；本次仅把 Button / Input / Card 标为 🔄
- 新增契约：`src/contracts/button.contract.json`、`src/contracts/input.contract.json`、`src/contracts/card.contract.json`
- 设计决策：契约统一含 `tokens`、`variants`、`allowed-edit: none`、`forbidden: ["raw-hex", "raw-padding"]`；实现不得另开视觉通道
- Button 额外声明 `sizes: ["sm", "md", "lg"]`

### 组件清单

- 新增 `docs/COMPONENTS.md`：按 Element Plus 分类、对照 daisyUI 去重补全，共 83 个组件
- 状态按实际进度全部标记为待开始（契约 / 实现 / 展示页均为 0）
- 去掉规范页与重复项（Border、Color、Text、TimeSelect、TableV2、Accordion、Notification、InfiniteScroll）
- 补入 Element Plus 缺口与 daisyUI 独有组件（Splitter、Navbar、Chat、Swap 等）

### 第 1 步：设计令牌

- 新增 `src/tokens/core.json`：品牌 → 语义 → 组件 三层令牌
- 新增 `src/tokens/index.ts`：将令牌导出为 TypeScript 常量（`tokens` / `brand` / `semantic` / `component`）
- 设计决策：全部颜色使用 HSL 实色值（`hsl(H, S%, L%)`），禁止 `rgba`、`hsla` 及任何带 alpha 通道的写法；阴影用实色 HSL 模拟层次，不用透明黑
- 覆盖：语义色 18 项、间距 `space.0`–`space.12`、圆角 5 档、字体族/字号/字重/行高、阴影 `sm` / `md` / `lg`
- 令牌叶节点合计：136

### 初始化

- 创建项目骨架：`README.md`、`docs/STATUS.md`、`docs/CONVENTIONS.md`、`docs/CHANGELOG.md`、`.gitignore`
- 创建目录：`src/tokens/`、`src/contracts/`、`src/components/`、`src/showcase/`、`docs/`
- 初始化自描述机制：阶段看板、设计约定、变更记录
- 当前状态：阶段 = 初始化，组件数 = 0，令牌数 = 0
