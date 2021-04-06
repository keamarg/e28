import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/components/pages/HomePage.vue';
import ProductsPage from '@/components/pages/ProductsPage.vue';
import CategoriesPage from '@/components/pages/CategoriesPage.vue';
import ProductPage from '@/components/pages/ProductPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: HomePage },
        { path: "/products", component: ProductsPage },
        { path: "/products/:id", component: ProductPage, props: true },
        { path: "/categories", component: CategoriesPage }

    ]
});
createApp(App).use(router).mount('#app')
