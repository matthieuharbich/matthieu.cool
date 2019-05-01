// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import KsVueScrollmagic from 'ks-vue-scrollmagic'
Vue.use(KsVueScrollmagic)
// import VuePIXI from 'vue-pixi'
 
// Vue.use(VuePIXI)

Vue.config.productionTip = false


// export const globalStore = new Vue({
//   data: {
//     menuOpen: false
//   }
// })

// export var store = {
//   debug: true,
//   state: {
//     menuOpen: true
//   },
//   toggleMenu () {
//     if(this.state.menuOpen){
//       this.state.menuOpen = false
//       console.log(this.state.menuOpen)
//     }else{
//       this.state.menuOpen = true
//       console.log(this.state.menuOpen)
//     }
//   },
//   getMenuState () {
//     return this.state.menuOpen
//   }
// }

export const bus = new Vue();

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
