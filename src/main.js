import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from "../src/router"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faXmark, faMagnifyingGlass, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faXmark)
library.add(faMagnifyingGlass)
library.add(faTrash)

import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(pinia)
app.use(router)
app.mount('#app')
