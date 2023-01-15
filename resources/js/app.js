import './bootstrap';

// import Alpine from 'alpinejs';

// window.Alpine = Alpine;

// Alpine.start();

import { createApp } from 'vue'
import PostsIndex from './components/Posts/Index.vue'


createApp(PostsIndex).mount("#app")

// const app = createApp({})
// app.component('posts-index', PostsIndex)
// app.mount("#app")