import Vue from 'vue'
import App from './App.vue'

require('./assets/sass/main.scss');

let mv = new Vue({
  render: h => h(App)
}).$mount('#app');