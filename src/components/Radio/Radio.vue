<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    variant?: "default" | "checked" | "disabled";
    disabled?: boolean;
    modelValue?: string;
    value?: string;
  }>(),
  {
    variant: "default",
    disabled: false,
    modelValue: "",
    value: "",
  },
);

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const isDisabled = computed(() => props.disabled || props.variant === "disabled");
const isChecked = computed(
  () => props.variant === "checked" || (props.value !== "" && props.modelValue === props.value),
);

const discClass = computed(() =>
  [
    "inline-flex size-4 shrink-0 items-center justify-center rounded-full border",
    "focus-visible:outline-none focus-visible:ring focus-visible:ring-ring",
    isChecked.value ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background",
    isDisabled.value ? "border-border bg-muted text-muted-foreground" : "",
  ].join(" "),
);

function choose() {
  if (isDisabled.value) {
    return;
  }
  emit("update:modelValue", props.value);
}
</script>

<template>
  <label
    class="inline-flex items-center gap-2 text-sm"
    :class="isDisabled ? 'text-muted-foreground' : 'text-foreground'"
  >
    <button
      type="button"
      :class="discClass"
      :disabled="isDisabled"
      role="radio"
      :aria-checked="isChecked"
      @click.prevent="choose"
    >
      <span v-if="isChecked" class="size-2 rounded-full bg-current" aria-hidden="true" />
    </button>
    <span v-if="$slots.default"><slot /></span>
  </label>
</template>
