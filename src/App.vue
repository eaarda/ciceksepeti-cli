<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import homecss from './assets/css/bundle-home.css'
import layoutcss from './assets/css/layout.css'
import stylecss from './assets/css/style.css'
import ordercss from './assets/css/bundle-order.css'

export default {
  name: 'app',
  created(){
    this.$store.commit('windowload')
  },
   data () {
    return {};
  }
};
</script>
