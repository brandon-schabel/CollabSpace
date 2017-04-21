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
                                <input class="form-control" placeholder="Project Name" name="projectName" type="text" autofocus="" v-model="projectText">
                            </div>
                        </fieldset>

                    
                    <transition name="fade">
                        <button class="btn btn-default glyphicon glyphicon-plus" @click="createProject()" v-if="currentEdit === -1 && this.projectText.length > 0" ></button>
                    </transition>
                    <transition name="fade">
                        <button class="btn btn-default" @click="submitEdit(currentEdit)" v-if="currentEdit >= 0 && this.projectText.length > 0">Update</button>
                    </transition>
                    <transition name="fade">
                        <button class="btn btn-default" @click="cancelEdit()" v-if="currentEdit >= 0">Cancel Edit</button>
                    </transition>
                </div>
                
            </div>

            <div >
                <ul class="view-project list-group">
                    <transition-group name="fade">
                        <li class="list-group-item" v-for="(project,index) in userProject" :key="project._id">
                            
                            <button class="btn btn-default glyphicon glyphicon-trash" @click="deleteProject(project)"></button>
                            <button class="btn btn-default glyphicon glyphicon-pencil" @click="editProject(index)"></button>
                            {{project.projectText}}
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
      projectText: '',
      //make userProject an object
      userProjects: [],
      show: true,
      
    }
  },
  methods: {
        
        createProject () {
            var vm = this;

            const config = {
            method: 'post',
            url: 'http://127.0.0.1:3000/api/createProject',
            data:{username:'beans', projectText: this.projectText}
            //config: { headers: { Authorization: 'Bearer ' + window.sessionStorage.accessToken}}
            }
            
            this.axios(config)
            .then(function (response) {
                console.log(response);
                vm.userProjects.push(response.data);
                vm.projectText = '';
                vm.textBeforeEdit = '';
            })
            .catch(function (error) {
                console.log(error);
            }); 
        },
}

</script>

<style scoped src='./CreateProjectStyle.css'></style>
