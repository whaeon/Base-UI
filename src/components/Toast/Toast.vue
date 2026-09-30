<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    variant?: "default" | "success" | "error";
  }>(),
  {
    variant: "default",
  },
);

const toneClass = computed(() => {
  if (props.variant === "success") {
    return "bg-primary text-primary-foreground";
  }
  if (props.variant === "error") {
    return "bg-destructive text-destructive-foreground";
  }
  return "bg-foreground text-primary-foreground";
});

const rootClass = computed(() =>
  ["inline-flex items-center rounded-md px-4 py-2 text-sm shadow-md", toneClass.value].join(" "),
);
</script>

<template>
  <div :class="rootClass" role="status">
    <slot />
  </div>
</template>
