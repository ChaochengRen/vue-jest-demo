import Vue from 'vue'
import App from './../../template/App'

describe('App.test.js', () => {
    let cmp, vm
  
    beforeEach(() => {
      cmp = Vue.extend(App) // Create a copy of the original component
      vm = new cmp({
        data: { // Replace data value with this fake data
          msg: 'Boom!'
        }
      }).$mount() // Instances and mounts the component
    })
  
    it('equals messages to \'Boom!\'', () => {
      expect(vm.msg).toEqual('Boom!');
    })

    it('has expected html', () => {
        expect(vm.$el).toMatchSnapshot();
    })
  })
  