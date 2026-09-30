<script setup lang="ts">
import { computed, ref } from "vue";
import catalogMarkdown from "../../../docs/COMPONENTS.md?raw";
import buttonContract from "../../contracts/button.contract.json";
import cardContract from "../../contracts/card.contract.json";
import iconContract from "../../contracts/icon.contract.json";
import inputContract from "../../contracts/input.contract.json";
import checkboxContract from "../../contracts/checkbox.contract.json";
import radioContract from "../../contracts/radio.contract.json";
import selectContract from "../../contracts/select.contract.json";
import switchContract from "../../contracts/switch.contract.json";
import formContract from "../../contracts/form.contract.json";
import textareaContract from "../../contracts/textarea.contract.json";
import { Button } from "../../components/Button";
import { buttonStories } from "../../components/Button/Button.stories";
import { Card } from "../../components/Card";
import { cardStories } from "../../components/Card/Card.stories";
import { Checkbox } from "../../components/Checkbox";
import { checkboxStories } from "../../components/Checkbox/Checkbox.stories";
import { Icon } from "../../components/Icon";
import { iconStories } from "../../components/Icon/Icon.stories";
import { Input } from "../../components/Input";
import { inputStories } from "../../components/Input/Input.stories";
import { Radio } from "../../components/Radio";
import { radioStories } from "../../components/Radio/Radio.stories";
import { Select } from "../../components/Select";
import { selectStories } from "../../components/Select/Select.stories";
import { Switch } from "../../components/Switch";
import { switchStories } from "../../components/Switch/Switch.stories";
import { Textarea } from "../../components/Textarea";
import { textareaStories } from "../../components/Textarea/Textarea.stories";
import { Form, FormItem } from "../../components/Form";
import { formStories } from "../../components/Form/Form.stories";
import { findCatalogItem, parseComponentCatalog } from "../catalog";

const props = defineProps<{ name: string }>();
const groups = parseComponentCatalog(catalogMarkdown);
const item = computed(() => findCatalogItem(groups, props.name));

const contractMap: Record<string, Record<string, unknown>> = {
  button: buttonContract,
  card: cardContract,
  icon: iconContract,
  checkbox: checkboxContract,
  input: inputContract,
  radio: radioContract,
  select: selectContract,
  switch: switchContract,
  form: formContract,
  textarea: textareaContract,
};

const storiesMap = {
  button: buttonStories,
  card: cardStories,
  icon: iconStories,
  checkbox: checkboxStories,
  input: inputStories,
  radio: radioStories,
  select: selectStories,
  switch: switchStories,
  form: formStories,
  textarea: textareaStories,
};

const contract = computed(() => contractMap[props.name]);
const stories = computed(() => storiesMap[props.name as keyof typeof storiesMap]);
const copied = ref(false);
const inputValue = ref("");
const checkboxValue = ref(false);
const radioValue = ref("a");
const switchValue = ref(false);
const textareaValue = ref("");
const selectValue = ref("");
const selectOptions = [
  { label: "选项一", value: "one" },
  { label: "选项二", value: "two" },
  { label: "选项三", value: "three" },
];

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
        <div class="mt-4 flex flex-wrap items-center gap-4 rounded-lg border border-border bg-muted p-6">
        <template v-if="item.slug === 'button'">
          <Button v-for="variant in stories.variants" :key="variant" :variant="variant">
            {{ variant }}
          </Button>
        </template>
        <template v-else-if="item.slug === 'input'">
          <div v-for="variant in stories.variants" :key="variant" class="w-56">
            <p class="mb-2 text-xs text-muted-foreground">{{ variant }}</p>
            <Input :variant="variant" :placeholder="variant" />
          </div>
        </template>
        <template v-else-if="item.slug === 'card'">
          <Card v-for="variant in stories.variants" :key="variant" :variant="variant" class="w-56">
            {{ variant }}
          </Card>
        </template>
        <template v-else-if="item.slug === 'icon'">
          <div v-for="variant in stories.variants" :key="variant" class="flex flex-col items-center gap-2">
            <Icon :variant="variant" :label="variant">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12l5 5L20 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </Icon>
            <span class="text-xs text-muted-foreground">{{ variant }}</span>
          </div>
        </template>
        <template v-else-if="item.slug === 'select'">
          <div v-for="variant in stories.variants" :key="variant" class="w-56">
            <p class="mb-2 text-xs text-muted-foreground">{{ variant }}</p>
            <Select :variant="variant" :options="selectOptions" :placeholder="variant" />
          </div>
        </template>
        <template v-else-if="item.slug === 'checkbox'">
          <Checkbox v-for="variant in stories.variants" :key="variant" :variant="variant">
            {{ variant }}
          </Checkbox>
        </template>
        <template v-else-if="item.slug === 'radio'">
          <Radio v-for="variant in stories.variants" :key="variant" :variant="variant">
            {{ variant }}
          </Radio>
        </template>
        <template v-else-if="item.slug === 'switch'">
          <Switch v-for="variant in stories.variants" :key="variant" :variant="variant">
            {{ variant }}
          </Switch>
        </template>
        <template v-else-if="item.slug === 'textarea'">
          <div v-for="variant in stories.variants" :key="variant" class="w-56">
            <p class="mb-2 text-xs text-muted-foreground">{{ variant }}</p>
            <Textarea :variant="variant" :placeholder="variant" />
          </div>
        </template>
        <template v-else-if="item.slug === 'form'">
          <Form class="w-56">
            <FormItem label="默认">
              <Input placeholder="用户名" />
            </FormItem>
          </Form>
          <Form variant="error" class="w-56">
            <FormItem label="错误" error="必填项">
              <Input variant="error" placeholder="用户名" />
            </FormItem>
          </Form>
        </template>
      </div>
    </section>

    <section v-if="'sizes' in stories && stories.sizes" class="mt-8">
      <h2 class="text-xl font-semibold">尺寸</h2>
      <div class="mt-4 flex flex-wrap items-end gap-4 rounded-lg border border-border bg-muted p-6">
        <template v-if="item.slug === 'button'">
          <Button v-for="size in stories.sizes" :key="size" :size="size">{{ size }}</Button>
        </template>
        <template v-else-if="item.slug === 'icon'">
          <div v-for="size in stories.sizes" :key="size" class="flex flex-col items-center gap-2">
            <Icon :size="size" :label="size">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12l5 5L20 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </Icon>
            <span class="text-xs text-muted-foreground">{{ size }}</span>
          </div>
        </template>
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
      <template v-if="item.slug === 'button'">
        <p class="mt-2 text-sm text-muted-foreground">将指针移到按钮上、用键盘 Tab 聚焦，或查看禁用态。</p>
      <div class="mt-4 flex flex-wrap items-center gap-4 rounded-lg border border-border bg-muted p-6">
          <Button>Hover / Focus</Button>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </div>
      </template>
      <template v-else-if="item.slug === 'input'">
        <p class="mt-2 text-sm text-muted-foreground">输入文字、聚焦输入框，或查看错误与禁用态。</p>
        <div class="mt-4 grid gap-4 rounded-lg border border-border bg-muted p-6 sm:grid-cols-2">
          <Input v-model="inputValue" placeholder="可输入" />
          <Input variant="error" placeholder="错误态" />
          <Input variant="focus" placeholder="聚焦态" />
          <Input disabled placeholder="禁用态" />
        </div>
      </template>
      <template v-else-if="item.slug === 'card'">
        <p class="mt-2 text-sm text-muted-foreground">将指针移到卡片上查看悬停态。</p>
        <div class="mt-4 grid gap-4 rounded-lg border border-border bg-muted p-6 sm:grid-cols-2">
          <Card>默认卡片</Card>
          <Card variant="hover">悬停态卡片</Card>
        </div>
      </template>
      <template v-else-if="item.slug === 'select'">
        <p class="mt-2 text-sm text-muted-foreground">点击展开选项、选择一项，或查看错误与禁用态。</p>
        <div class="mt-4 grid gap-4 rounded-lg border border-border bg-muted p-6 sm:grid-cols-2">
          <Select v-model="selectValue" :options="selectOptions" placeholder="可选择" />
          <Select variant="error" :options="selectOptions" placeholder="错误态" />
          <Select variant="focus" :options="selectOptions" placeholder="聚焦态" />
          <Select disabled :options="selectOptions" placeholder="禁用态" />
        </div>
      </template>
      <template v-else-if="item.slug === 'checkbox'">
        <p class="mt-2 text-sm text-muted-foreground">点击切换选中，或查看半选与禁用态。</p>
        <div class="mt-4 flex flex-wrap items-center gap-4 rounded-lg border border-border bg-muted p-6">
          <Checkbox v-model="checkboxValue">可切换</Checkbox>
          <Checkbox variant="checked">已选中</Checkbox>
          <Checkbox variant="indeterminate">部分选中</Checkbox>
          <Checkbox disabled>禁用</Checkbox>
        </div>
      </template>
      <template v-else-if="item.slug === 'radio'">
        <p class="mt-2 text-sm text-muted-foreground">同一组内点击切换选中项，或查看禁用态。</p>
        <div class="mt-4 flex flex-wrap items-center gap-4 rounded-lg border border-border bg-muted p-6">
          <Radio v-model="radioValue" value="a">选项 A</Radio>
          <Radio v-model="radioValue" value="b">选项 B</Radio>
          <Radio variant="checked">已选中</Radio>
          <Radio disabled>禁用</Radio>
        </div>
      </template>
      <template v-else-if="item.slug === 'switch'">
        <p class="mt-2 text-sm text-muted-foreground">点击切换开/关，或查看禁用态。</p>
        <div class="mt-4 flex flex-wrap items-center gap-4 rounded-lg border border-border bg-muted p-6">
          <Switch v-model="switchValue">可切换</Switch>
          <Switch variant="checked">已开启</Switch>
          <Switch disabled>禁用</Switch>
        </div>
      </template>
      <template v-else-if="item.slug === 'textarea'">
        <p class="mt-2 text-sm text-muted-foreground">输入多行文字、聚焦，或查看错误与禁用态。</p>
        <div class="mt-4 grid gap-4 rounded-lg border border-border bg-muted p-6 sm:grid-cols-2">
          <Textarea v-model="textareaValue" placeholder="可输入" />
          <Textarea variant="error" placeholder="错误态" />
          <Textarea variant="focus" placeholder="聚焦态" />
          <Textarea disabled placeholder="禁用态" />
        </div>
      </template>
      <template v-else-if="item.slug === 'form'">
        <p class="mt-2 text-sm text-muted-foreground">表单项带标签，错误态显示校验文案。</p>
        <div class="mt-4 grid gap-4 rounded-lg border border-border bg-muted p-6 sm:grid-cols-2">
          <Form>
            <FormItem label="用户名">
              <Input placeholder="请输入" />
            </FormItem>
            <FormItem label="简介">
              <Textarea placeholder="选填" />
            </FormItem>
          </Form>
          <Form variant="error">
            <FormItem label="邮箱" error="格式不正确">
              <Input variant="error" placeholder="name@example.com" />
            </FormItem>
          </Form>
        </div>
      </template>
      <template v-else-if="item.slug === 'icon'">
        <p class="mt-2 text-sm text-muted-foreground">默认 / 弱化 / 主色 / 禁用四种颜色，以及三种尺寸。</p>
        <div class="mt-4 flex flex-wrap items-center gap-6 rounded-lg border border-border bg-muted p-6">
          <Icon label="默认">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12l5 5L20 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </Icon>
          <Icon variant="muted" label="弱化">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="8" stroke-width="2" />
            </svg>
          </Icon>
          <Icon variant="primary" label="主色">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 5v14M5 12h14" stroke-width="2" stroke-linecap="round" />
            </svg>
          </Icon>
          <Icon variant="disabled" label="禁用">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M6 6l12 12M18 6L6 18" stroke-width="2" stroke-linecap="round" />
            </svg>
          </Icon>
        </div>
      </template>
    </section>
  </section>

  <section v-else class="max-w-xl">
    <h1 class="text-2xl font-semibold">组件未就绪</h1>
    <p class="mt-3 text-sm text-muted-foreground">
      {{ item ? `${item.name} 仍在 ${item.status === "wip" ? "进行中" : "待开始"}，完成后方可进入详情页。` : "未找到该组件。" }}
    </p>
  </section>
</template>
