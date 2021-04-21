export const axios = require('axios').create({
    baseURL: process.env.VUE_APP_API_URL ?? 'http://e28api.hesdev.com',
    // baseURL: process.env.VUE_APP_API_URL ?? 'https://api.unsplash.com',
    responseType: 'json'
})