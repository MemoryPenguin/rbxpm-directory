import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
Vue.use(VueMaterial);

Vue.material.registerTheme("directory", {
  primary: "blue",
  accent: "green"
})

Vue.material.setCurrentTheme("directory");

new Vue({
  el: '#app',
  render: h => h(App)
})
