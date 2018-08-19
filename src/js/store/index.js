import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex);

const request = axios.create({
    baseURL:
      "https://www.easy-mock.com/mock/5b765aef4d2b8f332fda9656/msgpool"
});

export const state = {
    msgList: [],
    maxListSize: 1000
}

export const getters = {
    msgAmount: state => state.msgList.length
}

export const mutations = {
    pushMsg: (state, payload) => {
        let msgList = state.msgList, currLen = msgList.length;
        if (currLen === state.maxListSize) {
            msgList.splice(0, 1);
        }
        msgList.push(payload.msg);
    }
}

const actions = {
    getMsgFromRemote: ({commit}) => {
        request
            .get('/mock-msg')
            .then(resp => {
                commit('pushMsg', {
                    msg: resp.data
                })
            })
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});