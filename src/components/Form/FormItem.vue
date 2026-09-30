<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    label?: string;
    error?: string;
  }>(),
  {
    label: "",
    error: "",
  },
);

const labelClass = computed(() => "block text-sm font-medium text-foreground");
</script>

<template>
  <div class="flex flex-col gap-2">
    <label v-if="label || $slots.label" :class="labelClass">
      <slot name="label">{{ label }}</slot>
    </label>
    <slot />
    <p v-if="error" class="text-xs text-destructive">{{ error }}</p>
  </div>
</template>
