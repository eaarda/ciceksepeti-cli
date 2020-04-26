import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    token: 0,
    username: 0
};

const mutations = {
    changeuser(state, un) {
        state.username = un;
    },
    setToken(state, token) {
        state.token = token;
    },
}

export default new Vuex.Store({
    state,
    mutations,
    actions: {},
    modules: {}
});