import MessagePool from './../../template/MessagePool'
import {mount} from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import {state, getters} from './../../js/store'

Vue.use(Vuex);

describe('MessagePool', () => {
    let wrapper;
    let store;
    let GET_MSG_FROM_REMOTE, PUSH_MSG;

    beforeEach(() => {
        GET_MSG_FROM_REMOTE = jest.fn();
        PUSH_MSG = jest.fn();
        
        store = new Vuex.Store({
          state,
          getters,
          mutations: {
            pushMsg: PUSH_MSG
          },
          actions: {
              getMsgFromRemote: GET_MSG_FROM_REMOTE
          }        
        });
        wrapper = mount(MessagePool, {
            mocks: {
                $store: store
            }
        });
    })

    test('has expected html', () => {
        expect(wrapper.vm.$el).toMatchSnapshot();
    })

    test('has two message', () => {
        GET_MSG_FROM_REMOTE = jest.fn();
        PUSH_MSG = jest.fn();
        
        store = new Vuex.Store({
          state: {
            msgList: [{
                "name": "mock-name1",
                "message": "mock-msg1"
            }, {
                "name": "mock-name2",
                "message": "mock-msg2"
            }],
            maxListSize: 1000
          },  
          getters,
          mutations: {
            pushMsg: PUSH_MSG
          },
         actions: {
              getMsgFromRemote: GET_MSG_FROM_REMOTE
          }        
        });
        wrapper = mount(MessagePool, {
            mocks: {
                $store: store
            }
        });
        expect(wrapper.findAll('li').length).toBe(2);
    })

    test('is timer started', () => {
        expect(wrapper.vm.timer).not.toBeNull();
    })

    describe('test stop and resume', () => {
        test('is timer stopped', () => {
            wrapper.vm.stop();
            expect(wrapper.vm.timer).toBeNull();
        })

        test('is timer resume', () => {
            wrapper.vm.stop();
            wrapper.vm.resume();
            expect(wrapper.vm.timer != null).toBe(true);
        })
    })
})