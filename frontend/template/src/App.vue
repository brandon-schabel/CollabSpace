<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{#router}}
    <router-view></router-view>
    {{else}}
    <dashboard></dashboard>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import Dashboard from './components/Dashboard'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{/unless}}
export default {
  name: 'app'{{#router}}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{else}},
  components: {
    Dashboard{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{/router}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
