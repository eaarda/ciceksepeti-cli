import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    token: 0,
    nluser: 0
};

const mutations = {
    loguser(state, nluser) {

    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions: {},
    modules: {}
});