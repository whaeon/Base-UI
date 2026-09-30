<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    variant?: "default" | "open";
    open?: boolean;
    title?: string;
  }>(),
  {
    variant: "default",
    open: false,
    title: "",
  },
);

const emit = defineEmits<{
  "update:open": [value: boolean];
}>();

const isOpen = computed(() => props.open || props.variant === "open");

function close() {
  emit("update:open", false);
}
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-20 flex items-center justify-center p-6">
    <button type="button" class="absolute inset-0 bg-foreground" aria-label="关闭" @click="close" />
    <div
      class="relative z-10 w-full max-w-md rounded-lg border border-border bg-card p-6 text-card-foreground shadow-lg"
      role="dialog"
      aria-modal="true"
    >
      <h2 v-if="title || $slots.title" class="text-lg font-semibold">
        <slot name="title">{{ title }}</slot>
      </h2>
      <div class="mt-4 text-sm">
        <slot />
      </div>
      <div v-if="$slots.footer" class="mt-6 flex justify-end gap-2">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
