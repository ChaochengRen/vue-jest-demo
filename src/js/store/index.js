import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const state = {
    msgList: []
}

const getters = {
    msgAmount: state => state.msgList.length
}

export default new Vuex.Store({
    state
});