import './bootstrap';

// import Alpine from 'alpinejs';

// window.Alpine = Alpine;

// Alpine.start();

import { createApp } from 'vue'
import App from './components/Posts/Index.vue'


createApp(App).mount("#app")

// const app = createApp({})
// app.component('posts-index', PostsIndex)
// app.mount('#app')