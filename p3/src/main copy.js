import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router';

import { store } from '@/common/store.js'
import HomePage from '@/components/pages/HomePage.vue';
import QuizPage from '@/components/pages/QuizPage.vue';
import CreatePage from '@/components/pages/CreatePage.vue';
import QuestionPage from '@/components/pages/QuestionPage.vue';
import AccountPage from '@/components/pages/AccountPage.vue';






const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: HomePage },
        { path: "/create", component: CreatePage },
        { path: "/quiz", component: QuizPage },
        { path: '/questions/:id', component: QuestionPage, props: true },
        { path: '/account', component: AccountPage },

    ]
});

createApp(App).use(router).use(store).mount('#app')
