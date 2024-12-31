import { createApp } from 'vue'
import { createPinia } from 'pinia'
import StyleClass from 'primevue/styleclass'
import PrimeVue from 'primevue/config'
import './styles/tailiwnd.css'
import './styles/theme-variables.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/aura-light-blue/theme.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(PrimeVue, {
  theme: 'none',
})
app.directive('styleclass', StyleClass)

app.mount('#app')
