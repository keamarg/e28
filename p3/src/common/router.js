import { createRouter, createWebHistory } from 'vue-router';
import { store } from '@/common/store';

const routes = [
    {
        path: '/',
        component: () => import('@/components/pages/HomePage.vue'),
    },

    {
        path: '/create',
        component: () => import('@/components/pages/CreatePage.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/questions/:id',
        component: () => import('@/components/pages/QuestionPage.vue'),
        props: true,
    },
    {
        path: '/quiz',
        component: () => import('@/components/pages/QuizPage.vue'),
    },

    {
        path: '/account',
        component: () => import('@/components/pages/AccountPage.vue'),
    },
    {
        path: '/denied',
        component: () => import('@/components/pages/AccessDeniedPage.vue'),
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to) => {

    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    const decide = (user) => {
        if (requiresAuth && !user) {
            return '/denied';
        } else {
            return true;
        }
    }
    if (store.state.user === null) {
        let authUser = await store.dispatch('authUser');
        if (authUser !== null) {
            return decide(store.state.user);
        }
    } else {
        return decide(store.state.user);
    }
});

export { router };