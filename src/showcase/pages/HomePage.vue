<script setup lang="ts">
import { RouterLink } from "vue-router";
import catalogMarkdown from "../../../docs/COMPONENTS.md?raw";
import { countByStatus, parseComponentCatalog } from "../catalog";

const groups = parseComponentCatalog(catalogMarkdown);
const stats = countByStatus(groups);
const doneItems = groups.flatMap((group) => group.items.filter((item) => item.status === "done"));
</script>

<template>
  <section class="max-w-3xl">
    <p class="text-sm font-medium text-accent-foreground">Base-UI</p>
    <h1 class="mt-2 text-3xl font-bold">设计系统概览</h1>
    <p class="mt-3 text-md leading-relaxed text-muted-foreground">
      先定义设计令牌与组件契约，再落地实现，最后用展示站验收。导航数据来自 docs/COMPONENTS.md。
    </p>
    <dl class="mt-8 grid grid-cols-3 gap-4">
      <div class="rounded-lg border border-border bg-card p-6 shadow-sm">
        <dt class="text-sm text-muted-foreground">组件总数</dt>
        <dd class="mt-2 text-3xl font-semibold">{{ stats.total }}</dd>
      </div>
      <div class="rounded-lg border border-border bg-card p-6 shadow-sm">
        <dt class="text-sm text-muted-foreground">已完成</dt>
        <dd class="mt-2 text-3xl font-semibold">{{ stats.done }}</dd>
      </div>
      <div class="rounded-lg border border-border bg-card p-6 shadow-sm">
        <dt class="text-sm text-muted-foreground">进行中</dt>
        <dd class="mt-2 text-3xl font-semibold">{{ stats.wip }}</dd>
      </div>
    </dl>
    <div class="mt-8">
      <h2 class="text-xl font-semibold">已完成组件</h2>
      <ul v-if="doneItems.length" class="mt-4 flex flex-wrap gap-2">
        <li v-for="item in doneItems" :key="item.slug">
          <RouterLink
            :to="`/components/${item.slug}`"
            class="inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
      <p v-else class="mt-3 text-sm text-muted-foreground">暂无已完成组件。</p>
    </div>
  </section>
</template>
