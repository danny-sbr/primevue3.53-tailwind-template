<script setup></script>

<template>
  <nav class="flex gap-4 bg-gray-800 p-4 shadow-md">
    <RouterLink
      to="/"
      class="rounded-md px-4 py-2 font-medium text-gray-200 transition-all duration-200 hover:bg-blue-600 hover:text-white"
    >
      首頁
    </RouterLink>
    <RouterLink
      to="/about"
      class="rounded-md px-4 py-2 font-medium text-gray-200 transition-all duration-200 hover:bg-blue-600 hover:text-white"
    >
      關於我們
    </RouterLink>
  </nav>

  <div class="container mx-auto">
    <RouterView />
  </div>
</template>
