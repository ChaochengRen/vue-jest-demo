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
            msgList: [{
                message: 'Test1',
                name: 'a'
            }, {
                message: 'Test2',
                name: 'b'
            }]
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