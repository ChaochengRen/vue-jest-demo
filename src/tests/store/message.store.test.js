import { state, getters, mutations, actions } from './../../js/store'
import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import axios from 'axios';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('actions', () => {
    let store, mutations = {};
    beforeEach(() => {
        mutations.pushMsg = jest.fn((state, payload) => {
            state.msgList.push(payload.msg);
        });
        store = new Vuex.Store({
            state,
            getters,
            mutations,
            actions
        });
    })

    test('test action isolated', () => {
        store.dispatch('getMsgFromRemote');
        setTimeout(() => {
            expect(mutations.pushMsg).toBeCalled();
            expect(store.state.msgList.length).toBe(1);
            expect(store.state.msgList[0]).toEqual({
                "name": "mock-name",
                "message": "mock-msg"
            });
        }, 100)
    })
})

describe('mutations', () => {
    let store;
    beforeEach(() => {
        store = new Vuex.Store({
            state: {
                msgList: [],
                maxListSize: 10
            },
            mutations
        });
    })

    test('test pushMsg', () => {
        for (let i = 0; i < 12; i++) {
            store.commit('pushMsg', {
                msg: {
                    "name": "mock-name",
                    "message": "mock-msg"
                }
            });
        }
        expect(store.state.msgList.length).toBe(10);
    })
})

/* async test */
describe('asyn test', () => {
    let asynMethod = jest.fn(() => {
        return axios.get('/mock');
    })

    test.only('option one', async () => {
        const resp = await asynMethod();
        expect(resp.data).toEqual({
            "name": "mock-name",
            "message": "mock-msg"
        });
    })

    test.only('option two', () => {
        asynMethod().then(resp => {
            expect(resp.data).toEqual({
                "name": "mock-name",
                "message": "mock-msg"
            });
        })
    })

    test.only('option three', async () => {
        await expect(asynMethod()).resolves.toHaveProperty('data', {
            "name": "mock-name",
            "message": "mock-msg"
        });
    })
})