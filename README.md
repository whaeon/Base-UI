# Base-UI

基础自定义的 UI。

一套可自描述的设计系统与组件库骨架：先定义设计令牌与组件契约，再落地实现，最后用展示站验收。

## 快速开始

当前处于 **组件开发循环** 阶段。

```bash
npm install
npm run dev
```

浏览器打开开发服务器后，访问 `/` 查看概览，访问 `/components/button`、`/components/input` 或 `/components/card` 查看已完成组件。

进度看板见 `docs/STATUS.md`，组件清单见 `docs/COMPONENTS.md`，设计约定见 `docs/CONVENTIONS.md`。

## 项目结构

```text
.
├── README.md              # 项目门面
├── docs/
│   ├── STATUS.md          # 进度看板
│   ├── COMPONENTS.md      # 组件清单
│   ├── CONVENTIONS.md     # 设计约定
│   └── CHANGELOG.md       # 更新日志
└── src/
    ├── tokens/            # 设计令牌
    ├── contracts/         # 组件契约
    ├── components/        # 组件实现
    └── showcase/          # 组件展示站
```

## 当前状态

| 项 | 值 |
|----|----|
| 阶段 | 组件开发循环 |
| 组件数 | 3 |
| 契约数 | 3 |
| 令牌数 | 136 |
