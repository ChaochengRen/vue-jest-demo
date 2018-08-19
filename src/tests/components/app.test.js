import App from './../../template/App.vue'
import {mount} from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import {state, getters} from './../../js/store'

Vue.use(Vuex);

const msgValue = 'Amount of message: 0';

describe('App.test.js', () => {
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
      wrapper = mount(App, {
        mocks: {
          $store: store
        }
      });
    })
  
    test(`equals messages to ${msgValue}`, () => {
      expect(wrapper.vm.msg).toEqual(msgValue);
    })

    test('has expected html', () => {
        expect(wrapper.vm.$el).toMatchSnapshot();
    })

    describe('test toggle button', () => {
        test('equals button default content to "暂停"', () => {
          expect(wrapper.find('.toggle-btn').element.textContent).toEqual('暂停');
        })

        test('test button content when clicked', () => {
          let btnWrapper = wrapper.find('.toggle-btn');
          expect(btnWrapper.element.textContent).toEqual('暂停');
          btnWrapper.trigger('click');
          expect(btnWrapper.element.textContent).toEqual('继续');
          btnWrapper.trigger('click');
          expect(btnWrapper.element.textContent).toEqual('暂停');
        })
    })

    /* structure and style testing */
    describe('test h1 classes', () => {
      test('element h1 default classes contain font-active', () => {
          let h1Wrapper = wrapper.find('h1');
          expect(h1Wrapper.classes()).toContain('font-active');
      })

      test('element h1 classes changed by clicking button', () => {
          let h1Wrapper = wrapper.find('h1');
          let btnWrapper = wrapper.find('.toggle-btn');
          expect(h1Wrapper.classes()).toContain('font-active');
          btnWrapper.trigger('click');
          expect(h1Wrapper.classes()).toContain('font-inactive');
      })
    })

    describe('test custom event', () => {
      let updateHandler = jest.fn(), spied;
      beforeEach(() => {
        // replace with a mock function
        wrapper.setMethods({
          poolUpdate: updateHandler
        });
        // spy on poolUpdate()
        spied = jest.spyOn(wrapper.vm, 'poolUpdate');
      })

      test('custom event emitted calls update handler', () => {
        jest.useFakeTimers();
        setTimeout(() => {
          expect(spied).toHaveBeenCalled();
        }, 2000);
      })
    })
  })