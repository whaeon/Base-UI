<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    variant?: "default" | "muted" | "destructive";
  }>(),
  {
    variant: "default",
  },
);

const toneClass = computed(() => {
  if (props.variant === "muted") {
    return "bg-muted text-muted-foreground";
  }
  if (props.variant === "destructive") {
    return "bg-destructive text-destructive-foreground";
  }
  return "bg-primary text-primary-foreground";
});

const rootClass = computed(() =>
  ["inline-flex items-center rounded-full px-2 py-1 text-xs font-medium", toneClass.value].join(" "),
);
</script>

<template>
  <span :class="rootClass">
    <slot />
  </span>
</template>
