<template>
    <div class="container login-form align-middle" >\
        <div class="col-md-4">
        </div>
        <div class="col-md-4">
            <div class="login-panel panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Register</h3>
                </div>
                <div class="panel-body">
                    <form role="form">
                        <fieldset>
                          <div class="form-group">
                                <input class="form-control" placeholder="Username" name="Username" type="text" value="" v-model="userData.username">
                            </div>
                            <div class="form-group">
                                <input class="form-control" placeholder="E-mail" name="email" type="email" autofocus="" v-model="userData.email">
                            </div>
                            <div class="form-group">
                                <input class="form-control" placeholder="Confirm E-mail" name="confirmEmail" type="email" autofocus="" v-model="userData.confirmEmail">
                            </div>
                            <div class="form-group">
                                <input class="form-control" placeholder="Password" name="password" type="password" value="" v-model="userData.password">
                            </div>
                            <div class="form-group">
                                <input class="form-control" placeholder="Confirm Password" name="confirmPassword" type="password" value="" v-model="userData.confirmPassword">
                            </div>
                        </fieldset>
                        <button class="btn btn-default" @click="submitRegistration()">Register</button>
                    </form>
                    
                    <p>
                        {{userData.username}}
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
  name: 'Register',
  data () {
    return {
      userData: {
        password: '',
        username: '',
        email: ''
      },
      confirmEmail: '',
      confirmPassword: ''
    }
  }
}
</script>
<style scoped src='./FormStyle.css'>
</style>

