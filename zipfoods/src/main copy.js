import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router';

import { store } from '@/common/store.js'
import HomePage from '@/components/pages/HomePage.vue';
import ProductsPage from '@/components/pages/ProductsPage.vue';
import CategoriesPage from '@/components/pages/CategoriesPage.vue';
import ProductPage from '@/components/pages/ProductPage.vue';
import ProductCreatePage from '@/components/pages/ProductCreatePage.vue';
import ProductEditPage from '@/components/pages/ProductEditPage.vue';
import CartPage from '@/components/pages/CartPage.vue';
import AccountPage from '@/components/pages/AccountPage.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: HomePage },
        { path: "/products", component: ProductsPage },
        { path: "/products/:id", component: ProductPage, props: true },
        { path: "/categories", component: CategoriesPage },
        { path: "/product/new", component: ProductCreatePage },
        { path: "/product/edit", component: ProductEditPage },
        { path: "/cart", component: CartPage },
        { path: '/account', component: AccountPage },

    ]
});
createApp(App).use(router).use(store).mount('#app')
