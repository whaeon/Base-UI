<script setup lang="ts">
export type TabItem = {
  label: string;
  value: string;
};

withDefaults(
  defineProps<{
    variant?: "default" | "active";
    modelValue?: string;
    items?: TabItem[];
  }>(),
  {
    variant: "default",
    modelValue: "",
    items: () => [],
  },
);

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

function activate(value: string) {
  emit("update:modelValue", value);
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-4 border-b border-border" role="tablist">
      <button
        v-for="tab in items"
        :key="tab.value"
        type="button"
        class="border-b-2 px-1 py-2 text-sm"
        :class="
          tab.value === modelValue || (variant === 'active' && tab.value === items[0]?.value)
            ? 'border-primary text-foreground'
            : 'border-transparent text-muted-foreground'
        "
        role="tab"
        :aria-selected="tab.value === modelValue"
        @click="activate(tab.value)"
      >
        {{ tab.label }}
      </button>
    </div>
    <div role="tabpanel">
      <slot />
    </div>
  </div>
</template>
