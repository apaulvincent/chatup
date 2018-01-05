/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import store from './store'
import directives from './directives'

import App from './components/App.vue'
import ChatUp from './components/ChatUp.vue'

const routes = [
    {
        name: 'ChatUp',
        path: '/home',
        component: ChatUp
    }
];
  
const router = new VueRouter({ mode: 'history', routes: routes});
new Vue(Vue.util.extend({ router, store }, App)).$mount('#app');