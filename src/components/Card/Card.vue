<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: "default" | "hover";
  }>(),
  {
    variant: "default",
  },
);
</script>

<template>
  <div class="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-md">
    <slot />
  </div>
</template>
