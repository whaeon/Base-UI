<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    variant?: "default" | "image" | "initials";
    size?: "sm" | "md" | "lg";
    src?: string;
    alt?: string;
    initials?: string;
  }>(),
  {
    variant: "default",
    size: "md",
    src: "",
    alt: "",
    initials: "",
  },
);

const sizeClass = computed(() => {
  if (props.size === "sm") {
    return "size-8 text-xs";
  }
  if (props.size === "lg") {
    return "size-12 text-lg";
  }
  return "size-10 text-sm";
});

const showImage = computed(() => props.variant === "image" || Boolean(props.src));
const showInitials = computed(() => props.variant === "initials" || Boolean(props.initials));

const rootClass = computed(() =>
  [
    "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted font-medium text-muted-foreground",
    sizeClass.value,
  ].join(" "),
);
</script>

<template>
  <span :class="rootClass">
    <img v-if="showImage && src" :src="src" :alt="alt" class="size-full" />
    <span v-else-if="showInitials">{{ initials || "A" }}</span>
    <slot v-else />
  </span>
</template>
