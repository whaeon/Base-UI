<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    variant?: "default" | "checked" | "disabled";
    disabled?: boolean;
    modelValue?: boolean;
  }>(),
  {
    variant: "default",
    disabled: false,
    modelValue: false,
  },
);

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

const isDisabled = computed(() => props.disabled || props.variant === "disabled");
const isOn = computed(() => props.modelValue || props.variant === "checked");

const trackClass = computed(() =>
  [
    "inline-flex h-6 w-10 shrink-0 items-center rounded-full p-1",
    "focus-visible:outline-none focus-visible:ring focus-visible:ring-ring",
    isOn.value ? "justify-end bg-primary" : "justify-start bg-muted",
    isDisabled.value ? "bg-muted cursor-not-allowed" : "",
  ].join(" "),
);

function toggle() {
  if (isDisabled.value) {
    return;
  }
  emit("update:modelValue", !isOn.value);
}
</script>

<template>
  <label
    class="inline-flex items-center gap-2 text-sm"
    :class="isDisabled ? 'text-muted-foreground' : 'text-foreground'"
  >
    <button
      type="button"
      :class="trackClass"
      :disabled="isDisabled"
      role="switch"
      :aria-checked="isOn"
      @click.prevent="toggle"
    >
      <span class="size-4 rounded-full bg-background shadow-sm" aria-hidden="true" />
    </button>
    <span v-if="$slots.default"><slot /></span>
  </label>
</template>
