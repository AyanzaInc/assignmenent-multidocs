import Vue from "vue";
import Vuex from "vuex";

import docs from "./docs";

Vue.use(Vuex);

export interface ActionFuncs {
  commit: (arg1: string, arg2: any) => void;
}

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    docs,
  },
});
