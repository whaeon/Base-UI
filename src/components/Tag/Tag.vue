<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    variant?: "default" | "primary" | "destructive" | "closable";
    closable?: boolean;
  }>(),
  {
    variant: "default",
    closable: false,
  },
);

const emit = defineEmits<{
  close: [];
}>();

const showClose = computed(() => props.closable || props.variant === "closable");

const toneClass = computed(() => {
  if (props.variant === "primary") {
    return "bg-primary text-primary-foreground";
  }
  if (props.variant === "destructive") {
    return "bg-destructive text-destructive-foreground";
  }
  return "bg-secondary text-secondary-foreground";
});

const rootClass = computed(() =>
  ["inline-flex items-center gap-1 rounded-sm px-2 py-1 text-xs font-medium", toneClass.value].join(" "),
);
</script>

<template>
  <span :class="rootClass">
    <slot />
    <button
      v-if="showClose"
      type="button"
      class="inline-flex size-3 items-center justify-center"
      aria-label="关闭"
      @click="emit('close')"
    >
      <svg class="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M6 6l12 12M18 6L6 18" stroke-width="2" stroke-linecap="round" />
      </svg>
    </button>
  </span>
</template>
