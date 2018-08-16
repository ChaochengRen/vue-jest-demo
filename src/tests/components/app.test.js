import App from './../../template/App.vue'
import {mount} from '@vue/test-utils'

const msgValue = 'test';

describe('App.test.js', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = mount(App);
    })
  
    test(`equals messages to ${msgValue}`, () => {
      wrapper.setData({msg: msgValue});
      expect(wrapper.vm.msg).toEqual(msgValue);
    })

    test('has expected html', () => {
        expect(wrapper.vm.$el).toMatchSnapshot();
    })

    describe('test toggle button', () => {
        test('equals button default content to "暂停"', () => {
          expect(wrapper.find('button').element.textContent).toEqual('暂停');
        })

        test('test button content when clicked', () => {
          let btnWrapper = wrapper.find('button');
          expect(btnWrapper.element.textContent).toEqual('暂停');
          btnWrapper.trigger('click');
          expect(btnWrapper.element.textContent).toEqual('继续');
          btnWrapper.trigger('click');
          expect(btnWrapper.element.textContent).toEqual('暂停');
        })
    })

    describe('test h1 classes', () => {
      test.only('element h1 default classes contain font-active', () => {
          let h1Wrapper = wrapper.find('h1');
          expect(h1Wrapper.classes()).toContain('font-active');
      })

      test.only('element h1 classes changed by clicking button', () => {
          let h1Wrapper = wrapper.find('h1');
          let btnWrapper = wrapper.find('button');
          expect(h1Wrapper.classes()).toContain('font-active');
          btnWrapper.trigger('click');
          expect(h1Wrapper.classes()).toContain('font-inactive');
      })
    })
  })