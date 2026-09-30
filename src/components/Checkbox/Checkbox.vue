<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    variant?: "default" | "checked" | "indeterminate" | "disabled";
    disabled?: boolean;
    modelValue?: boolean;
    indeterminate?: boolean;
  }>(),
  {
    variant: "default",
    disabled: false,
    modelValue: false,
    indeterminate: false,
  },
);

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

const isDisabled = computed(() => props.disabled || props.variant === "disabled");
const isIndeterminate = computed(
  () => props.indeterminate || props.variant === "indeterminate",
);
const isChecked = computed(
  () => !isIndeterminate.value && (props.modelValue || props.variant === "checked"),
);

const boxClass = computed(() =>
  [
    "inline-flex size-4 shrink-0 items-center justify-center rounded-sm border",
    "focus-visible:outline-none focus-visible:ring focus-visible:ring-ring",
    isChecked.value || isIndeterminate.value
      ? "border-primary bg-primary text-primary-foreground"
      : "border-border bg-background",
    isDisabled.value ? "border-border bg-muted text-muted-foreground" : "",
  ].join(" "),
);

function toggle() {
  if (isDisabled.value) {
    return;
  }
  emit("update:modelValue", isIndeterminate.value ? true : !isChecked.value);
}
</script>

<template>
  <label
    class="inline-flex items-center gap-2 text-sm"
    :class="isDisabled ? 'text-muted-foreground' : 'text-foreground'"
  >
    <button
      type="button"
      :class="boxClass"
      :disabled="isDisabled"
      role="checkbox"
      :aria-checked="isIndeterminate ? 'mixed' : isChecked"
      @click.prevent="toggle"
    >
      <svg
        v-if="isChecked"
        class="size-3"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path d="M5 12l5 5L20 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <svg
        v-else-if="isIndeterminate"
        class="size-3"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path d="M6 12h12" stroke-width="2" stroke-linecap="round" />
      </svg>
    </button>
    <span v-if="$slots.default"><slot /></span>
  </label>
</template>
