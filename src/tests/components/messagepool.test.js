import MessagePool from './../../template/MessagePool'
import {mount} from '@vue/test-utils'

describe('MessagePool', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(MessagePool);
    })

    test('has expected html', () => {
        expect(wrapper.vm.$el).toMatchSnapshot();
    })

    test('has two message', () => {
        wrapper.setData({
            msgList: ['Test Msg1', 'Test Msg2']
        });
        expect(wrapper.findAll('li').length).toBe(2);
    })

    test('is timer started', () => {
        expect(wrapper.vm.timer).not.toBeNull();
    })

    describe('test stop and resume', () => {
        test.only('is timer stopped', () => {
            wrapper.vm.stop();
            expect(wrapper.vm.timer).toBeNull();
        })

        test.only('is timer stopped', () => {
            wrapper.vm.resume();
            expect(wrapper.vm.timer).not.toBeNull();
        })
    })
})