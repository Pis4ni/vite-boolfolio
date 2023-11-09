import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import BlogPage from './pages/BlogPage.vue';
const router = createRouter({
history: createWebHistory(),
routes: [
{
path: '/',
name: 'home',
component: AppHome
},
{
path: '/blog',
name: 'Blog',
component: BlogPage
},
]
});
export { router };