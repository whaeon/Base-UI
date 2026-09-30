# 组件清单

参考 Element Plus 分类（基础 / 表单 / 数据展示 / 导航 / 反馈 / 其他），并对照 daisyUI 补齐常用组件、去掉规范页与重复项。

当前实际进度：契约 6（Button / Input / Card / Icon / Select / Checkbox）、实现 6、展示页 6。

## 状态图例

- ⬜ 待开始
- 🔄 进行中（契约已建，组件未完成）
- ✅ 已完成（契约 + 组件 + 展示页 + 文档同步全部完成）

## 开发策略

按分类分批推进，每个分类内的组件按优先级排序。首批聚焦基础组件的 P0 与表单组件的前 8 个，跑通「契约 → 实现 → 展示页 → 文档同步」后再扩展到其余组件。

| 分类 | 数量 | 已完成 |
|------|------|--------|
| 基础组件 | 11 | 2 |
| 表单组件 | 21 | 3 |
| 数据展示 | 23 | 1 |
| 导航 | 13 | 0 |
| 反馈 | 11 | 0 |
| 其他 | 4 | 0 |
| **合计** | **83** | **6** |

## 基础组件（Basic）

相对 Element Plus 基础 12 项：去掉 `Border`、`Color`（设计规范页，不是组件），将 `Text` 并入 `Typography`；补入 `Splitter`（Element Plus）与 `ButtonGroup`（daisyUI Join）。

| 组件名 | 状态 | 契约文件 | 组件目录 | 展示页 | 优先级 | 备注 |
|---|---|---|---|---|---|---|
| Button | ✅ | contracts/button.contract.json | components/Button/ | /components/button | P0 | 契约 + 组件 + 展示页已完成 |
| Icon | ✅ | contracts/icon.contract.json | components/Icon/ | /components/icon | P0 | 契约 + 组件 + 展示页已完成 |
| ButtonGroup | ⬜ | - | - | - | P1 | 按钮组（daisyUI Join） |
| Link | ⬜ | - | - | - | P1 | 文字链接 |
| Layout | ⬜ | - | - | - | P1 | 布局容器 |
| Container | ⬜ | - | - | - | P1 | 外层容器 |
| Space | ⬜ | - | - | - | P1 | 间距 |
| Typography | ⬜ | - | - | - | P1 | 排版（含标题、段落、行内文本） |
| Divider | ⬜ | - | - | - | P2 | 分割线 |
| Scrollbar | ⬜ | - | - | - | P2 | 滚动条 |
| Splitter | ⬜ | - | - | - | P2 | 分割面板 |

## 表单组件（Form）

相对 Element Plus 表单 25 项：去掉与 `TimePicker` 重复的 `TimeSelect`，`Transfer` 归入其他；补入 `FileInput`（daisyUI）、`DateTimePicker`、`TreeSelect`、`Mention`、`InputTag`。

首批前 8 个：Input、Select、Checkbox、Radio、Switch、Textarea、Form、DatePicker。

| 组件名 | 状态 | 契约文件 | 组件目录 | 展示页 | 优先级 | 备注 |
|---|---|---|---|---|---|---|
| Input | ✅ | contracts/input.contract.json | components/Input/ | /components/input | P0 | 契约 + 组件 + 展示页已完成 |
| Select | ✅ | contracts/select.contract.json | components/Select/ | /components/select | P0 | 契约 + 组件 + 展示页已完成 |
| Checkbox | ✅ | contracts/checkbox.contract.json | components/Checkbox/ | /components/checkbox | P0 | 契约 + 组件 + 展示页已完成 |
| Radio | ⬜ | - | - | - | P0 | 单选框 |
| Switch | ⬜ | - | - | - | P0 | 开关 |
| Textarea | ⬜ | - | - | - | P0 | 多行文本 |
| Form | ⬜ | - | - | - | P0 | 表单容器与校验 |
| DatePicker | ⬜ | - | - | - | P1 | 日期选择器 |
| Upload | ⬜ | - | - | - | P1 | 文件上传 |
| FileInput | ⬜ | - | - | - | P1 | 原生文件选择（daisyUI） |
| Slider | ⬜ | - | - | - | P1 | 滑块 |
| InputNumber | ⬜ | - | - | - | P1 | 数字输入 |
| Rate | ⬜ | - | - | - | P2 | 评分 |
| Autocomplete | ⬜ | - | - | - | P2 | 自动补全 |
| Cascader | ⬜ | - | - | - | P2 | 级联选择 |
| ColorPicker | ⬜ | - | - | - | P2 | 颜色选择器 |
| TimePicker | ⬜ | - | - | - | P2 | 时间选择器 |
| DateTimePicker | ⬜ | - | - | - | P2 | 日期时间选择器 |
| TreeSelect | ⬜ | - | - | - | P2 | 树形选择 |
| Mention | ⬜ | - | - | - | P2 | 提及输入 |
| InputTag | ⬜ | - | - | - | P2 | 标签输入 |

## 数据展示（Data）

相对 Element Plus 数据展示 23 项：去掉与表格重复的 TableV2、与指令更接近的 Infinite Scroll；补入 daisyUI 的 Indicator、Kbd、Chat、Countdown、Diff、Stack，以及 Element Plus 的 Image。`List` 保留（daisyUI / 常用列表）。

| 组件名 | 状态 | 契约文件 | 组件目录 | 展示页 | 优先级 | 备注 |
|---|---|---|---|---|---|---|
| Card | ✅ | contracts/card.contract.json | components/Card/ | /components/card | P0 | 契约 + 组件 + 展示页已完成 |
| Badge | ⬜ | - | - | - | P0 | 徽章 |
| Tag | ⬜ | - | - | - | P0 | 标签 |
| Avatar | ⬜ | - | - | - | P0 | 头像 |
| Table | ⬜ | - | - | - | P1 | 表格 |
| List | ⬜ | - | - | - | P1 | 列表 |
| Collapse | ⬜ | - | - | - | P1 | 折叠面板（覆盖 daisyUI Accordion） |
| Statistic | ⬜ | - | - | - | P1 | 统计数值 |
| Progress | ⬜ | - | - | - | P1 | 进度条 |
| Skeleton | ⬜ | - | - | - | P1 | 骨架屏 |
| Empty | ⬜ | - | - | - | P1 | 空状态 |
| Image | ⬜ | - | - | - | P1 | 图片 |
| Tree | ⬜ | - | - | - | P2 | 树形控件 |
| Descriptions | ⬜ | - | - | - | P2 | 描述列表 |
| Timeline | ⬜ | - | - | - | P2 | 时间轴 |
| Calendar | ⬜ | - | - | - | P2 | 日历 |
| Carousel | ⬜ | - | - | - | P2 | 走马灯 |
| Indicator | ⬜ | - | - | - | P2 | 定位指示点（daisyUI，区别于 Badge） |
| Kbd | ⬜ | - | - | - | P2 | 键盘按键（daisyUI） |
| Chat | ⬜ | - | - | - | P2 | 聊天气泡（daisyUI） |
| Countdown | ⬜ | - | - | - | P2 | 倒计时（daisyUI） |
| Diff | ⬜ | - | - | - | P2 | 前后对比（daisyUI） |
| Stack | ⬜ | - | - | - | P2 | 层叠容器（daisyUI） |

## 导航（Navigation）

相对 Element Plus 导航 9 项：补入 daisyUI 的 Navbar、Dock、Footer、Hero。Pagination 放在导航（与 Element Plus 导航用法一致）。

| 组件名 | 状态 | 契约文件 | 组件目录 | 展示页 | 优先级 | 备注 |
|---|---|---|---|---|---|---|
| Tabs | ⬜ | - | - | - | P0 | 标签页 |
| Breadcrumb | ⬜ | - | - | - | P1 | 面包屑 |
| Dropdown | ⬜ | - | - | - | P1 | 下拉菜单 |
| Menu | ⬜ | - | - | - | P1 | 导航菜单 |
| Navbar | ⬜ | - | - | - | P1 | 顶部导航栏（daisyUI） |
| Pagination | ⬜ | - | - | - | P1 | 分页 |
| Steps | ⬜ | - | - | - | P1 | 步骤条 |
| Affix | ⬜ | - | - | - | P2 | 固钉 |
| Backtop | ⬜ | - | - | - | P2 | 回到顶部 |
| Anchor | ⬜ | - | - | - | P2 | 锚点 |
| Dock | ⬜ | - | - | - | P2 | 底部导航（daisyUI） |
| Footer | ⬜ | - | - | - | P2 | 页脚（daisyUI） |
| Hero | ⬜ | - | - | - | P2 | 首屏区块（daisyUI） |

## 反馈（Feedback）

相对 Element Plus 反馈 10 项：用 `Toast` 覆盖 Notification 的轻量堆叠场景，保留 `Message` 作为全局消息；补入 `Tour`。`Result` 归入反馈。

| 组件名 | 状态 | 契约文件 | 组件目录 | 展示页 | 优先级 | 备注 |
|---|---|---|---|---|---|---|
| Dialog | ⬜ | - | - | - | P0 | 对话框 |
| Toast | ⬜ | - | - | - | P0 | 轻提示 |
| Alert | ⬜ | - | - | - | P0 | 警告提示 |
| Drawer | ⬜ | - | - | - | P1 | 抽屉 |
| Tooltip | ⬜ | - | - | - | P1 | 文字提示 |
| Popover | ⬜ | - | - | - | P1 | 弹出框 |
| Popconfirm | ⬜ | - | - | - | P1 | 气泡确认框 |
| Loading | ⬜ | - | - | - | P1 | 加载中 |
| Message | ⬜ | - | - | - | P1 | 全局消息 |
| Result | ⬜ | - | - | - | P2 | 结果页 |
| Tour | ⬜ | - | - | - | P2 | 漫游式引导 |

## 其他（Others）

相对 Element Plus 其他 2 项：保留 `Transfer`、`Watermark`；补入 `Swap`（daisyUI）、`Segmented`（Element Plus）。

| 组件名 | 状态 | 契约文件 | 组件目录 | 展示页 | 优先级 | 备注 |
|---|---|---|---|---|---|---|
| Transfer | ⬜ | - | - | - | P2 | 穿梭框 |
| Watermark | ⬜ | - | - | - | P2 | 水印 |
| Swap | ⬜ | - | - | - | P2 | 内容切换（daisyUI） |
| Segmented | ⬜ | - | - | - | P2 | 分段控制器 |

## 收录说明

去掉（重复或非组件）：

- `Border`、`Color`：设计令牌/规范展示，不是交互组件
- `Text`：能力并入 `Typography`
- `TimeSelect`：与 `TimePicker` 重复
- `TableV2`：与 `Table` 重复
- `Accordion`：与 `Collapse` 重复
- `Notification`：与 `Toast` / `Message` 重复
- `InfiniteScroll`：更接近指令/行为，不单列组件

补入：

- Element Plus：`Splitter`、`DateTimePicker`、`TreeSelect`、`Mention`、`InputTag`、`Image`、`Tour`、`Segmented`
- daisyUI：`ButtonGroup`、`FileInput`、`Navbar`、`Dock`、`Footer`、`Hero`、`Indicator`、`Kbd`、`Chat`、`Countdown`、`Diff`、`Stack`、`Swap`
