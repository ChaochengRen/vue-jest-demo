import Vue from 'vue'
import App from './template/App'
import store from './js/store'

new Vue({
    el: "#app",
    store,
    render: h => h(App)
})