<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    size?: "sm" | "md" | "lg";
    variant?: "default" | "hover" | "active" | "disabled" | "loading";
    disabled?: boolean;
    loading?: boolean;
    type?: "button" | "submit" | "reset";
  }>(),
  {
    size: "md",
    variant: "default",
    disabled: false,
    loading: false,
    type: "button",
  },
);

const isDisabled = computed(
  () => props.disabled || props.loading || props.variant === "disabled" || props.variant === "loading",
);
const isLoading = computed(() => props.loading || props.variant === "loading");

const sizeClass = computed(() => {
  if (props.size === "sm") {
    return "px-3 py-1 text-xs";
  }
  if (props.size === "lg") {
    return "px-5 py-3 text-lg";
  }
  return "px-4 py-2 text-sm";
});

const stateClass = computed(() => {
  if (props.variant === "hover") {
    return "bg-foreground text-primary-foreground";
  }
  if (props.variant === "active") {
    return "bg-foreground text-primary-foreground";
  }
  return "bg-primary text-primary-foreground hover:bg-foreground active:bg-foreground";
});

const rootClass = computed(() =>
  [
    "inline-flex items-center justify-center gap-2 font-medium rounded-md border-0",
    "focus-visible:outline-none focus-visible:ring focus-visible:ring-ring",
    "disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed",
    sizeClass.value,
    stateClass.value,
  ].join(" "),
);
</script>

<template>
  <button :type="type" :class="rootClass" :disabled="isDisabled" :aria-busy="isLoading || undefined">
    <span
      v-if="isLoading"
      class="inline-block size-4 rounded-full border border-primary-foreground border-t-muted animate-spin"
      aria-hidden="true"
    />
    <slot />
  </button>
</template>
