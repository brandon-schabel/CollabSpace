<template>
    <div class="container login-form align-middle" >
        <div class="col-md-3">
        </div>
        <div class="col-md-4">
            <div class="login-panel panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Create Task</h3>
                </div>
                <div class="panel-body">
                    <form role="form">
                        <fieldset>
                            <div class="form-group">
                                <input class="form-control" placeholder="task" name="task" type="text" autofocus="" v-model="taskText">
                            </div>
                        </fieldset>
                        <button class="btn btn-default" @click="createTask()">Create</button>
                    </form>
                    
                    <p>
                        {{taskText}}
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

    /* eslint-disable */
  name: 'CreateTask',
  data () {
    return {
      taskText: ''
    }
  },
  methods: {

    createTask () {
        var vm = this
        console.log(this.taskText)
        this.axios.post('http://127.0.0.1:3000/createtask',vm.taskText)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        }
    }
}

</script>

<style scoped src='./CreateTaskStyle.css'></style>
