import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/components/pages/HomePage.vue';
import QuizPage from '@/components/pages/QuizPage.vue';
import CreatePage from '@/components/pages/CreatePage.vue';




const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: HomePage },
        { path: "/create", component: CreatePage },
        { path: "/quiz", component: QuizPage },
    ]
});

createApp(App).use(router).mount('#app')
