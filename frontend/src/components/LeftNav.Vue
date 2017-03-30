<template>
<!-- Left Nav -->
  <div class="navbar navbar-inverse navbar-fixed-left nav-styling">
    <a class="navbar-brand" href="#">Collab Space</a><br>
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
      <li><router-link to="About">About</router-link></li>
      <li><router-link to="Login">Login</router-link></li>
      <li><router-link to="Register">Register</router-link></li>
      <li><router-link to="CreateTask">Create Task</router-link></li>
    </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LeftNav',
  data () {
    return {
      testVar: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped src="./leftNavStyle.css">

</style>
