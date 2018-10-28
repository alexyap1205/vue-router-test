import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'

import {routes} from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes,
    mode: 'history' // to remove # in the url, but the server have to always return index.html even on 404
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
