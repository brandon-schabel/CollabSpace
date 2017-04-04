<template>
    <div class="container login-form align-middle" >
        <div class="col-md-4">
        </div>
        <div class="col-md-4">
            <div class="login-panel panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title" v-if="currentEdit === -1" >Create Project</h3>
                    <h3 class="panel-title" v-if="currentEdit >= 0" >Update Project</h3>
                </div>
                <div class="panel-body">
                        <fieldset>
                            <div class="form-group">
                                <input class="form-control" placeholder="Project Name" name="projectName" type="text" autofocus="" v-model="taskText">
                            </div>
                        </fieldset>

                    
                    <transition name="fade">
                        <button class="btn btn-default glyphicon glyphicon-plus" @click="createProject()" v-if="currentEdit === -1 && this.taskText.length > 0" ></button>
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
                        <li class="list-group-item" v-for="(task,index) in userTasks" :key="task._id">
                            
                            <button class="btn btn-default glyphicon glyphicon-trash" @click="deleteTask(task)"></button>
                            <button class="btn btn-default glyphicon glyphicon-pencil" @click="editTask(index)"></button>
                            {{task.taskText}}
                        </li>
                    </transition-group>
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
  name: 'createProject',
  data () {
    return {
      taskText: '',
      //make userTask an object
      userProjects: [],
      currentEdit: -1,
      textBeforeEdit: '',
      show: true,
      
    }
  },
  methods: {

        submitEdit(indexInsert) {
            /*
            var vm = this; 

            const config = {
            method: 'post',
            url: 'http://127.0.0.1:3000/api/deleteTask',
            data:{'_id': task._id}
            //config: { headers: { Authorization: 'Bearer ' + window.sessionStorage.accessToken}}
            }

            this.axios(config)
            .then(function (response) {
                console.log(response);
                vm.userTasks.splice(vm.userTasks.indexOf(task),1); 
                
            }).catch(function(error) {
                console.log(error);
            });
            */

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
            this.taskText = this.userTasks[index].taskText;
            this.currentEdit = index;
            console.log(this.currentEdit);
        },

        cancelEdit() {
            this.taskText = this.textBeforeEdit;
            this.currentEdit = -1;
        },
        
        deleteTask(task) {
            var vm = this;
            //console.log(task);

            //var taskIndex = this.userTasks.indexOf(task);

            //this.userTasks.splice(this.userTasks.indexOf(task),1); 

            const config = {
            method: 'post',
            url: 'http://127.0.0.1:3000/api/deleteTask',
            data:{'_id': task._id}
            //config: { headers: { Authorization: 'Bearer ' + window.sessionStorage.accessToken}}
            }

            this.axios(config)
            .then(function (response) {
                console.log(response);
                vm.userTasks.splice(vm.userTasks.indexOf(task),1); 
                
            }).catch(function(error) {
                console.log(error);
            });
            
            
            //this.userTasks.splice(index, 1);
            

            //api call to delete task
        },

        createProject () {
            var vm = this;

            const config = {
            method: 'post',
            url: 'http://127.0.0.1:3000/api/createProject',
            data:{username:'beans', taskText: this.taskText}
            //config: { headers: { Authorization: 'Bearer ' + window.sessionStorage.accessToken}}
            }
            
            this.axios(config)
            .then(function (response) {
                console.log(response);
                vm.userTasks.push(response.data);
                vm.taskText = '';
                vm.textBeforeEdit = '';
            })
            .catch(function (error) {
                console.log(error);
            }); 
        },
        getProjects() {
        var vm = this;
        const config = {method: 'get',
                        url:'http://127.0.0.1:3000/api/getUserProjects',
                        //headers: this.jwtAuthHeader
                        //supposed to be a get request when we have the auth setup
                        }
        this.axios(config)
        .then(function (response) {
            console.log(response);
            vm.userTasks = response.data;
        }).catch(function(error) {
            console.log(error);
        });
        }
    },

    beforeMount() {
         this.getProjects();
    }
}

</script>

<style scoped src='./CreateProjectStyle.css'></style>
