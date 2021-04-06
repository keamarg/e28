import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/components/pages/HomePage.vue';
import ResearchPage from '@/components/pages/ResearchPage.vue';
import ProjectPage from '@/components/pages/ProjectPage.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: HomePage },
        { path: "/research", component: ResearchPage },
        { path: "/project", component: ProjectPage },
    ]
});

createApp(App).use(router).mount('#app')
