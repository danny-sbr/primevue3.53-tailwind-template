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
    <Card class="mt-4">
      <template #title>Simple Card</template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </template>
    </Card>
  </div>
</template>
