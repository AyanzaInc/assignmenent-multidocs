import Vue from "vue";
import moment from "moment";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from "./api";

import './setup/axios';

Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$moment = moment;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app-mount");
