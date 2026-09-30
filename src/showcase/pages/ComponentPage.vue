<script setup lang="ts">
import { computed, ref } from "vue";
import catalogMarkdown from "../../../docs/COMPONENTS.md?raw";
import buttonContract from "../../contracts/button.contract.json";
import { Button } from "../../components/Button";
import { buttonStories } from "../../components/Button/Button.stories";
import { findCatalogItem, parseComponentCatalog } from "../catalog";

const props = defineProps<{ name: string }>();
const groups = parseComponentCatalog(catalogMarkdown);
const item = computed(() => findCatalogItem(groups, props.name));

const contractMap: Record<string, Record<string, unknown>> = {
  button: buttonContract,
};

const storiesMap = {
  button: buttonStories,
};

const contract = computed(() => contractMap[props.name]);
const stories = computed(() => storiesMap[props.name as keyof typeof storiesMap]);
const copied = ref(false);

async function copyExample(code: string) {
  await navigator.clipboard.writeText(code);
  copied.value = true;
  window.setTimeout(() => {
    copied.value = false;
  }, 1200);
}

const tokenEntries = computed(() => {
  const tokens = contract.value?.tokens as Record<string, string> | undefined;
  return tokens ? Object.entries(tokens) : [];
});
</script>

<template>
  <section v-if="item && item.status === 'done' && contract && stories" class="max-w-4xl">
    <p class="text-sm text-muted-foreground">{{ item.category }}</p>
    <h1 class="mt-1 text-3xl font-bold">{{ item.name }}</h1>
    <p class="mt-3 text-md leading-relaxed text-muted-foreground">{{ stories.description }}</p>

    <section class="mt-8">
      <h2 class="text-xl font-semibold">变体预览</h2>
      <div class="mt-4 flex flex-wrap items-center gap-4 rounded-lg border border-border bg-card p-6">
        <Button v-for="variant in stories.variants" :key="variant" :variant="variant">
          {{ variant }}
        </Button>
      </div>
    </section>

    <section class="mt-8">
      <h2 class="text-xl font-semibold">尺寸</h2>
      <div class="mt-4 flex flex-wrap items-end gap-4 rounded-lg border border-border bg-card p-6">
        <Button v-for="size in stories.sizes" :key="size" :size="size">{{ size }}</Button>
      </div>
    </section>

    <section class="mt-8">
      <h2 class="text-xl font-semibold">设计令牌</h2>
      <dl class="mt-4 divide-y divide-border rounded-lg border border-border bg-card">
        <div v-for="[key, value] in tokenEntries" :key="key" class="flex items-center justify-between px-4 py-3">
          <dt class="text-sm text-muted-foreground">{{ key }}</dt>
          <dd class="font-medium text-sm">{{ value }}</dd>
        </div>
      </dl>
    </section>

    <section class="mt-8">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-semibold">代码示例</h2>
        <button
          type="button"
          class="rounded-md bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
          @click="copyExample(stories.examples.default)"
        >
          {{ copied ? "已复制" : "复制" }}
        </button>
      </div>
      <pre class="mt-3 overflow-x-auto rounded-lg border border-border bg-muted p-4 text-sm">{{ stories.examples.default }}</pre>
    </section>

    <section class="mt-8">
      <h2 class="text-xl font-semibold">交互状态</h2>
      <p class="mt-2 text-sm text-muted-foreground">将指针移到按钮上、用键盘 Tab 聚焦，或查看禁用态。</p>
      <div class="mt-4 flex flex-wrap items-center gap-4 rounded-lg border border-border bg-card p-6">
        <Button>Hover / Focus</Button>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
      </div>
    </section>
  </section>

  <section v-else class="max-w-xl">
    <h1 class="text-2xl font-semibold">组件未就绪</h1>
    <p class="mt-3 text-sm text-muted-foreground">
      {{ item ? `${item.name} 仍在 ${item.status === "wip" ? "进行中" : "待开始"}，完成后方可进入详情页。` : "未找到该组件。" }}
    </p>
  </section>
</template>
