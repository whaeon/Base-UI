<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import catalogMarkdown from "../../docs/COMPONENTS.md?raw";
import { countByStatus, parseComponentCatalog } from "./catalog";

const groups = parseComponentCatalog(catalogMarkdown);
const stats = countByStatus(groups);
const route = useRoute();
const activeSlug = computed(() => (typeof route.params.name === "string" ? route.params.name : ""));
</script>

<template>
  <div class="min-h-screen bg-background text-foreground font-sans">
    <div class="flex min-h-screen">
      <aside class="w-64 shrink-0 border-r border-border bg-card px-4 py-6">
        <RouterLink to="/" class="block px-2 text-lg font-semibold text-foreground">Base-UI</RouterLink>
        <p class="mt-1 px-2 text-xs text-muted-foreground">{{ stats.done }}/{{ stats.total }} 已完成</p>
        <nav class="mt-6 space-y-6">
          <section v-for="group in groups" :key="group.category">
            <h2 class="px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {{ group.category }}
            </h2>
            <ul class="mt-2 space-y-1">
              <li v-for="item in group.items" :key="item.slug">
                <RouterLink
                  v-if="item.status === 'done'"
                  :to="`/components/${item.slug}`"
                  class="block rounded-md px-2 py-1 text-sm"
                  :class="
                    activeSlug === item.slug
                      ? 'bg-accent text-accent-foreground'
                      : 'text-foreground hover:bg-muted'
                  "
                >
                  {{ item.name }}
                </RouterLink>
                <span
                  v-else
                  class="block rounded-md px-2 py-1 text-sm text-muted-foreground"
                >
                  {{ item.name }}
                </span>
              </li>
            </ul>
          </section>
        </nav>
      </aside>
      <main class="min-w-0 flex-1 px-8 py-8">
        <RouterView />
      </main>
    </div>
  </div>
</template>
