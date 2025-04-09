import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

const app = createApp(App)
app.use(router)
app.mount('#app')