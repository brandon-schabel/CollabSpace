
<template>

<div class="app-navbar">
    <!-- built files will be auto injected -->
  <!-- Left Nav -->
  <div class="navbar navbar-inverse navbar-fixed-left">
    <a class="navbar-brand" href="#">Brand</a><br>
    <ul class="nav navbar-nav">
    <li><a href="#">Dashboard</a></li>
    <li><span class="navbar-text">Projects
      <button type="button" class="btn btn-default btn-xs">
        <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
      </button>
      </span>
      </li>
    <div class="nav navbar-nav" id="project-menu">
      <li><a href="#">Project1</a></li>
      <li><a href="#">Project2</a></li>
    </div>
    </ul>
  </div>
  <!-- Top Nav -->
  <nav class="navbar navbar-light" style="background-color: #f4f1f0" id="top-nav">
    <div class="input-group" id="search-bar">
      <input type="text" class="form-control search-form" placeholder="Search" id="search-box">
      <span class="input-group-btn">
        <button type="submit" class="btn btn-danger search-btn" data-target="#search-form" name="q">
          <i class="fa fa-search"></i>
        </button>
      </span>  
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navbar-fixed-left {
  width: 240px;
  position: fixed;
  border-radius: 0;
  height: 100%;
}

.navbar-fixed-left .navbar-nav > li {
  width: 230px;
}

.navbar-fixed-left + .container {
  padding-left: 160px;
}

/* On using dropdown menu (To right shift popuped) */
.navbar-fixed-left .navbar-nav > li > .dropdown-menu {
  margin-top: -50px;
  margin-left: 140px;
}

#new-project-btn{

}

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

h1{
    margin-left: 560px;
}

</style>
