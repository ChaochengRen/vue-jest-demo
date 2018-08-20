import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex);

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

export const actions = {
    getMsgFromRemote: ({commit}) => {
        axios
            .get('https://www.easy-mock.com/mock/5b765aef4d2b8f332fda9656/msgpool/mock-msg')
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