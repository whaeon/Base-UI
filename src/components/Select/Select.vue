<script setup lang="ts">
import { computed, ref } from "vue";

export type SelectOption = {
  label: string;
  value: string;
};

const props = withDefaults(
  defineProps<{
    variant?: "default" | "focus" | "error" | "disabled";
    disabled?: boolean;
    modelValue?: string;
    placeholder?: string;
    options?: SelectOption[];
  }>(),
  {
    variant: "default",
    disabled: false,
    modelValue: "",
    placeholder: "请选择",
    options: () => [],
  },
);

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const open = ref(false);
const isDisabled = computed(() => props.disabled || props.variant === "disabled");
const isOpen = computed(() => !isDisabled.value && (open.value || props.variant === "focus"));
const selected = computed(() => props.options.find((item) => item.value === props.modelValue));

const triggerClass = computed(() =>
  [
    "flex w-full items-center justify-between gap-2 rounded-md border bg-background px-3 py-2 text-sm",
    "focus-visible:outline-none focus-visible:ring focus-visible:ring-ring",
    selected.value ? "text-foreground" : "text-muted-foreground",
    props.variant === "error" ? "border-destructive" : "border-border",
    props.variant === "focus" || isOpen.value ? "ring ring-ring" : "",
    isDisabled.value ? "bg-muted text-muted-foreground cursor-not-allowed" : "",
  ].join(" "),
);

function toggle() {
  if (isDisabled.value) {
    return;
  }
  open.value = !open.value;
}

function choose(value: string) {
  emit("update:modelValue", value);
  open.value = false;
}
</script>

<template>
  <div class="relative w-full">
    <button
      type="button"
      :class="triggerClass"
      :disabled="isDisabled"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      @click="toggle"
    >
      <span class="truncate">{{ selected ? selected.label : placeholder }}</span>
      <svg
        class="size-4 shrink-0"
        :class="isOpen ? 'rotate-180' : ''"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path d="M6 9l6 6 6-6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
    <ul
      v-if="isOpen"
      class="absolute left-0 right-0 z-10 mt-1 overflow-hidden rounded-md border border-border bg-popover text-popover-foreground shadow-md"
      role="listbox"
    >
      <li v-for="option in options" :key="option.value">
        <button
          type="button"
          class="flex w-full px-3 py-2 text-left text-sm"
          :class="
            option.value === modelValue
              ? 'bg-accent text-accent-foreground'
              : 'text-popover-foreground hover:bg-accent hover:text-accent-foreground'
          "
          role="option"
          :aria-selected="option.value === modelValue"
          @click="choose(option.value)"
        >
          {{ option.label }}
        </button>
      </li>
    </ul>
  </div>
</template>
