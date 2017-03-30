<template>
    <div class="container login-form align-middle" >
        <div class="col-md-4">
        </div>
        <div class="col-md-4">
            <div class="login-panel panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title" v-if="currentEdit === -1" >Create Task</h3>
                    <h3 class="panel-title" v-if="currentEdit >= 0" >Update Task</h3>
                </div>
                <div class="panel-body">
                        <fieldset>
                            <div class="form-group">
                                <input class="form-control" placeholder="Task" name="task" type="text" autofocus="" v-model="taskText">
                            </div>
                        </fieldset>

                    
                    <p>
                        {{taskText}}
                    </p>
                    <button class="btn btn-default" @click="createTask()" v-if="currentEdit === -1 && this.taskText.length > 0" >Create</button>
                    <button class="btn btn-default" @click="submitEdit(currentEdit)" v-if="currentEdit >= 0 && this.taskText.length > 0">Update</button>
                    <button class="btn btn-default" @click="cancelEdit()" v-if="currentEdit >= 0">Cancel Edit</button>
                </div>
                
            </div>

            <div>
                <ul>
                    <li v-for="(task,index) in userTasks" track-by="$index">
                        {{task}}
                        <!-- for the delete button make it a trashcan icon -->
                        <button class="btn btn-default" @click="deleteTask(index)">Delete</button>
                        <button class="btn btn-default" @click="editTask(index)">Edit</button>
                    </li>
                </ul>

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
      taskText: '',
      //make userTask an object
      userTasks: [],
      currentEdit: -1,
      postData: {
          url: 'http://127.0.0.1:3000/createTask',
          params:{id:id},
          //config: { headers: { Authorization: 'Bearer ' + window.sessionStorage.accessToken}}

      }
    }
  },
  methods: {

    submitEdit(indexInsert) {
        console.log(indexInsert);
        this.currentEdit = -1;
        this.userTasks.splice(indexInsert, 0, this.taskText);
        this.taskText = '';
    },

    editTask(index) {
        console.log(index);
        this.taskText = this.userTasks[index];
        this.currentEdit = index;
        console.log(this.currentEdit);
    },

    cancelEdit() {
        this.taskText = '';
        this.currentEdit = -1;
    },
    
    deleteTask(index) {
        console.log(index);
        this.userTasks.splice(index, 1);

        //api call to delete task
    },

    createTask () {
        var vm = this;
        vm.userTasks.push(vm.taskText);
        vm.taskText = '';
        
        console.log(this.taskText);

        /*
        this.axios.post('http://127.0.0.1:3000/createtask',vm.taskText)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        }); */
        }
    }
}

</script>

<style scoped src='./CreateTaskStyle.css'></style>
