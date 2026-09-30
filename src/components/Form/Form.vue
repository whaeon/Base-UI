<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    variant?: "default" | "error";
  }>(),
  {
    variant: "default",
  },
);

const rootClass = computed(() =>
  ["flex flex-col gap-4 text-sm text-foreground", props.variant === "error" ? "text-destructive" : ""].join(" "),
);
</script>

<template>
  <form :class="rootClass" @submit.prevent>
    <slot />
  </form>
</template>
