 import Vue from "vue";
 import Vuex from "vuex";

 Vue.use(Vuex);

import state from './state';
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

export default ({
    namespaced:true,
    state,
    actions,
    getters,
    mutations

});