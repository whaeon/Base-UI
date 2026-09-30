<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    variant?: "default" | "focus" | "error" | "disabled";
    disabled?: boolean;
    modelValue?: string;
    placeholder?: string;
    type?: "text" | "password" | "email" | "search" | "number" | "tel" | "url";
  }>(),
  {
    variant: "default",
    disabled: false,
    modelValue: "",
    placeholder: "",
    type: "text",
  },
);

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const isDisabled = computed(() => props.disabled || props.variant === "disabled");

const rootClass = computed(() =>
  [
    "w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground",
    "placeholder:text-muted-foreground",
    "focus-visible:outline-none focus-visible:ring focus-visible:ring-ring",
    props.variant === "error" ? "border-destructive" : "border-border",
    props.variant === "focus" ? "ring ring-ring" : "",
    isDisabled.value ? "bg-muted text-muted-foreground cursor-not-allowed" : "",
  ].join(" "),
);

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
}
</script>

<template>
  <input
    :type="type"
    :class="rootClass"
    :disabled="isDisabled"
    :value="modelValue"
    :placeholder="placeholder"
    @input="onInput"
  />
</template>
