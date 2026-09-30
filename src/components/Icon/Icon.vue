<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    size?: "sm" | "md" | "lg";
    variant?: "default" | "muted" | "primary" | "disabled";
    label?: string;
  }>(),
  {
    size: "md",
    variant: "default",
  },
);

const sizeClass = computed(() => {
  if (props.size === "sm") {
    return "size-4";
  }
  if (props.size === "lg") {
    return "size-6";
  }
  return "size-5";
});

const colorClass = computed(() => {
  if (props.variant === "muted" || props.variant === "disabled") {
    return "text-muted-foreground";
  }
  if (props.variant === "primary") {
    return "text-primary";
  }
  return "text-foreground";
});

const rootClass = computed(() =>
  ["inline-flex shrink-0 items-center justify-center [&>svg]:size-full", sizeClass.value, colorClass.value].join(" "),
);
</script>

<template>
  <span
    :class="rootClass"
    :role="label ? 'img' : undefined"
    :aria-label="label"
    :aria-hidden="label ? undefined : true"
  >
    <slot />
  </span>
</template>
