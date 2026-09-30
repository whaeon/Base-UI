<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    variant?: "default" | "success" | "error";
    title?: string;
  }>(),
  {
    variant: "default",
    title: "",
  },
);

const toneClass = computed(() => {
  if (props.variant === "error") {
    return "border-destructive bg-destructive text-destructive-foreground";
  }
  return "border-primary bg-accent text-accent-foreground";
});

const rootClass = computed(() =>
  ["rounded-md border px-4 py-3 text-sm", toneClass.value].join(" "),
);
</script>

<template>
  <div :class="rootClass" role="alert">
    <p v-if="title" class="font-medium">{{ title }}</p>
    <div :class="title ? 'mt-1' : ''">
      <slot />
    </div>
  </div>
</template>
