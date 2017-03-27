<template>
  <div id="app">
    <app-leftnav></app-leftnav>
    <app-topnav></app-topnav>

    <router-view></router-view>
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'
import LeftNav from './components/LeftNav.vue'

export default {
  name: 'app',
  components: {
    'app-topnav': TopNav,
    'app-leftnav': LeftNav
  }
}
</script>

<style>
/*
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
