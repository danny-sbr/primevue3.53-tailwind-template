<script setup>
import Sidebar from 'primevue/sidebar'
import StyleClass from 'primevue/styleclass'
const vStyleclass = StyleClass

const visible = ref(false)
</script>
<template>
  <header class="flex items-center bg-slate-900 p-4 text-white">
    <Button
      icon="pi pi-bars"
      icon-class="text-2xl"
      @click="visible = true"
      text
      unstyled
      class="text-white transition-all duration-300 hover:scale-125"
    >
    </Button>
    <h1 class="mx-auto text-2xl">SZUI Package Dashboard 系統</h1>
    <div class="flex justify-center">
      <Sidebar v-model:visible="visible" class="bg-slate-900 text-white">
        <template #container="{ closeCallback }">
          <div class="flex h-full flex-col">
            <div class="flex items-center justify-between px-4 pt-3">
              <div></div>
              <Button
                type="button"
                @click="closeCallback"
                icon="pi pi-times"
                text
              />
            </div>
            <div class="flex-1 overflow-y-auto">
              <ul class="m-0 list-none px-3 py-0">
                <li>
                  <!-- 這裡不使用 Tailwind 的 class（如 enterClass:hidden）是因為 Tailwind 採用靜態編譯，
                   動態添加的 class "可能"不會被編譯，而無法生效。因此改用自定義 class 名稱，再透過 @apply
                   來套用 Tailwind 的樣式 -->
                  <div
                    v-styleclass="{
                      selector: '.favorite-ul',
                      eventType: 'click',
                      enterClass: 'menu-hidden',
                      enterActiveClass: 'menu-fade-in',
                      leaveActiveClass: 'menu-fade-out',
                      leaveToClass: 'menu-hidden',
                    }"
                    class="flex cursor-pointer items-center justify-between p-3"
                  >
                    <span class="font-medium">連結甲</span>
                    <i class="pi pi-chevron-down"></i>
                  </div>
                  <ul class="favorite-ul m-0 list-none px-0 pl-3 duration-300">
                    <li>
                      <a
                        class="flex cursor-pointer items-center rounded p-3 transition duration-500 hover:bg-slate-800"
                      >
                        <i class="pi pi-home mr-2"></i>
                        <span class="font-medium">連結甲 - 1</span>
                      </a>
                    </li>
                    <li>
                      <a
                        class="flex cursor-pointer items-center rounded p-3 transition duration-500 hover:bg-slate-800"
                      >
                        <i class="pi pi-bookmark mr-2"></i>
                        <span class="font-medium">連結甲 - 2</span>
                      </a>
                    </li>
                    <li>
                      <div
                        v-styleclass="{
                          selector: '.report-ul',
                          eventType: 'click',
                          enterClass: 'menu-hidden',
                          enterActiveClass: 'menu-fade-in',
                          leaveActiveClass: 'menu-fade-out',
                          leaveToClass: 'menu-hidden',
                        }"
                        class="flex cursor-pointer items-center rounded p-3 hover:bg-slate-800"
                      >
                        <i class="pi pi-chart-line mr-2"></i>
                        <span class="font-medium">連結甲 - 3</span>
                        <i class="pi pi-chevron-down ml-auto"></i>
                      </div>
                      <ul
                        class="report-ul m-0 list-none overflow-hidden py-0 pl-3 pr-0 transition-all duration-300 ease-in-out"
                      >
                        <li>
                          <div
                            v-styleclass="{
                              selector: '.revenue-ul',
                              eventType: 'click',
                              enterClass: 'menu-hidden',
                              enterActiveClass: 'menu-fade-in',
                              leaveActiveClass: 'menu-fade-out',
                              leaveToClass: 'menu-hidden',
                            }"
                            class="flex cursor-pointer items-center rounded p-3 transition duration-500 hover:bg-slate-800"
                          >
                            <i class="pi pi-chart-line mr-2"></i>
                            <span class="font-medium">連結甲 - 3 - A</span>
                            <i class="pi pi-chevron-down ml-auto"></i>
                          </div>
                          <ul
                            class="revenue-ul m-0 list-none overflow-hidden py-0 pl-3 pr-0 transition-all duration-300 ease-in-out"
                          >
                            <li>
                              <a
                                class="flex cursor-pointer items-center rounded p-3 transition duration-500 hover:bg-slate-800"
                              >
                                <i class="pi pi-table mr-2"></i>
                                <span class="font-medium"
                                  >連結甲 - 3 - A - I</span
                                >
                              </a>
                            </li>
                            <li>
                              <a
                                class="flex cursor-pointer items-center rounded p-3 transition duration-500 hover:bg-slate-800"
                              >
                                <i class="pi pi-search mr-2"></i>
                                <span class="font-medium"
                                  >連結甲 - 3 - A - II</span
                                >
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </template>
      </Sidebar>
    </div>
  </header>
</template>
<style scoped lang="scss">
.p-button-icon-only {
  @apply text-white transition-all duration-300 hover:scale-150 hover:text-white;
}

.menu-hidden {
  @apply hidden;
}

.menu-fade-out {
  @apply animate-fadeout;
}

.menu-fade-in {
  @apply animate-fadein;
}

.animation__duration {
  @apply duration-300;
}
</style>
