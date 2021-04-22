import Cart from '@/common/Cart.js';
export const axios = require('axios').create({
    baseURL: process.env.VUE_APP_API_URL ?? 'http://e28api.hesdev.loc',
    responseType: 'json'
})

export const cart = new Cart();

import { reactive } from 'vue'

// To begin, our store will contain one property, `cartCount`
export const store = reactive({
    cartCount: 0
});