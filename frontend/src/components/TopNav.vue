
<template>

<div class="app-navbar ">
    <!-- built files will be auto injected -->
  
  <!-- Top Nav -->
  <nav class="navbar navbar-inverse nav-styling">
    <div class="input-group" id="search-bar">
      <input type="text" class="form-control search-form" placeholder="Search" id="search-box">
      <span class="input-group-btn">
        <button type="submit" class="btn btn-danger search-btn" data-target="#search-form" name="q">
          <i class="fa fa-search">Search</i>
        </button>
      </span>  
    </div>
  </nav>

  
</div>
</template>

<script>
export default {
  name: 'TopNav',
  data () {
    return {
      testVar: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope src="./TopNavStyle.css">



</style>
