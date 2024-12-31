<script setup>
import HeaderMain from './HeaderMain.vue'
import FooterMain from './FooterMain.vue'

const sidebarOpen = ref(false)

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <HeaderMain @toggleSidebar="toggleSidebar" />
    <main class="flex-1 p-4">
      <slot />
    </main>
    <FooterMain />
  </div>
</template>

<script setup></script>

<style scoped>
/* 針對 LayoutMain 元件的自定義樣式 */
</style>
