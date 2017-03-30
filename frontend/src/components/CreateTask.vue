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
                    <transition name="fade">
                        <button class="btn btn-default glyphicon glyphicon-plus" @click="createTask()" v-if="currentEdit === -1 && this.taskText.length > 0" ></button>
                    </transition>
                    <transition name="fade">
                        <button class="btn btn-default" @click="submitEdit(currentEdit)" v-if="currentEdit >= 0 && this.taskText.length > 0">Update</button>
                    </transition>
                    <transition name="fade">
                        <button class="btn btn-default" @click="cancelEdit()" v-if="currentEdit >= 0">Cancel Edit</button>
                    </transition>
                </div>
                
            </div>

            <div >
                <ul class="view-task list-group">
                    <transition-group name="fade">
                        <li class="list-group-item" v-for="(task,index) in userTasks" :key="index">
                            
                            <button class="btn btn-default glyphicon glyphicon-trash" @click="deleteTask(index)"></button>
                            <button class="btn btn-default glyphicon glyphicon-pencil" @click="editTask(index)"></button>
                            {{task}}
                        </li>
                    </transition-group>
                </ul>
                <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>

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
      textBeforeEdit: '',
      show: true
      /*
      postData: {
          url: 'http://127.0.0.1:3000/api/createTask',
          params:{id:id},
          //config: { headers: { Authorization: 'Bearer ' + window.sessionStorage.accessToken}}

      } */
    }
  },
  methods: {

    submitEdit(indexInsert) {
        console.log(indexInsert);
        this.currentEdit = -1;
        this.userTasks.splice(indexInsert, 0, this.taskText);
        if(this.textBeforeEdit.length > 0) {
            this.taskText = this.textBeforeEdit;
        } else {
            this.taskText = '';
        }
    },

    editTask(index) {
        console.log(index);
        this.textBeforeEdit = this.taskText;
        this.taskText = this.userTasks[index];
        this.currentEdit = index;
        console.log(this.currentEdit);
    },

    cancelEdit() {
        this.taskText = this.textBeforeEdit;
        this.currentEdit = -1;
    },
    
    deleteTask(index) {
        console.log(index);
        this.userTasks.splice(index, 1);

        //api call to delete task
    },

    createTask () {
        var vm = this;
        this.userTasks.push(vm.taskText);
        this.taskText = '';
        this.textBeforeEdit = '';
        
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
