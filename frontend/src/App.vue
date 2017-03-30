<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-md-2 app-nav">
        <app-leftnav></app-leftnav>
      </div>

      <div class="col-md-10 app-nav">
        <app-topnav></app-topnav>
      </div>

      <div class="col-md-2"></div>
      
      <div class="col-md-10">
        <router-view></router-view>
      </div>
    </div>
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

<style src="./AppMainStyle.css">
/*div {
  background-color: #34495e;
}*/
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
