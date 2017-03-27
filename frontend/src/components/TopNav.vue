
<template>

<div class="app-navbar">
    <!-- built files will be auto injected -->
  
  <!-- Top Nav -->
  <nav class="navbar navbar-light" style="background-color: #f4f1f0" id="top-nav">
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
<style >

#top-nav{
    margin-left: 240px; 
    -webkit-box-shadow: 0 8px 6px -6px #999;
    -moz-box-shadow: 0 8px 6px -6px #999;
    box-shadow: 0 8px 6px -6px #999;
}

#search-bar{
    margin-right: 550px;
    margin-left: 550px;
    padding-top: 10px;
    padding-bottom: 10px;
}

/*SEARCH FORM*/
.search-form {
    border-radius: 30px 0px 0px 30px;
}

 .search-btn {
    border-radius: 0px 30px 30px 0px;
    cursor:pointer;
}

.app-navbar{
    background-color: #F4F5F7;
}

</style>
