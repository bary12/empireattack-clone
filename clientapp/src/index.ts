import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import App from './components/App.vue';
import routes from './routes';

import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

// tslint:disable-next-line:no-unused-expression
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  template: '<App />',
});
