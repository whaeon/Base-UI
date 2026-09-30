<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    variant?: "default" | "hover";
  }>(),
  {
    variant: "default",
  },
);

const rootClass = computed(() =>
  [
    "rounded-lg border border-border p-6 text-card-foreground",
    props.variant === "hover" ? "bg-accent shadow-lg" : "bg-card shadow-md hover:bg-accent hover:shadow-lg",
  ].join(" "),
);
</script>

<template>
  <div :class="rootClass">
    <slot />
  </div>
</template>
