
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');
import './bootstrap'

// window.Vue = require('vue');
// window.VueRouter = require('vue-router');
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSocialAuth from 'vue-social-auth'

Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(VueSocialAuth, {
	providers: {
		facebook: {
			clientId: '369052130609711',
			redirectUri: '/oauth/facebook/callback'
		}
	}
})

// axios.defaults.baseURL = 'http://localhost:8000/api';

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

import App from './components/App'

import store from './store'
import router from './router'

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.use(require('@websanova/vue-auth'), {
// 	auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
// 	http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
// 	router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js')
// })

const app = new Vue({
  el: '#app',
	components: { App },
	data: {
		title: ""
	},
	router,
	store,
})
