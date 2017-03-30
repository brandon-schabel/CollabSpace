<template>
    <div class="container login-form align-middle" >\
        <div class="col-md-3">
        </div>
        <div class="col-md-4">
            <div class="login-panel panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Sign In</h3>
                </div>
                <div class="panel-body">
                    <form role="form">
                        <fieldset>
                            <div class="form-group">
                                <input class="form-control" placeholder="E-mail" name="email" type="email" autofocus="" v-model="userData.email">
                            </div>
                            <div class="form-group">
                                <input class="form-control" placeholder="Password" name="password" type="password" value="" v-model="userData.password">
                            </div>
                        </fieldset>
                        <button class="btn btn-default" @click="submitLogin()">Login</button>
                    </form>
                    
                    <p>
                        {{userData.email}}
                        {{userData.password}}
                    </p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
        </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      userData: {
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style scoped src='./LoginRegisterStyle.css'>
</style>
