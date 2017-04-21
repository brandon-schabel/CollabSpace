<template>
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
            url: 'http://127.0.0.1:3000/api/deleteProject',
            data:{'_id': project._id}
            //config: { headers: { Authorization: 'Bearer ' + window.sessionStorage.accessToken}}
            }

            this.axios(config)
            .then(function (response) {
                console.log(response);
                vm.userProject.splice(vm.userProject.indexOf(project),1); 
                
            }).catch(function(error) {
                console.log(error);
            });
            */

            console.log(indexInsert);
            this.currentEdit = -1;
            this.userProjects.splice(indexInsert, 0, this.projectText);
            if(this.textBeforeEdit.length > 0) {
                this.projectText = this.textBeforeEdit;
            } else {
                this.projectText = '';
            }
        },

        editProject(index) {
            console.log(index);
            this.textBeforeEdit = this.projectText;
            this.projectText = this.userProjects[index].projectText;
            this.currentEdit = index;
            console.log(this.currentEdit);
        },

        cancelEdit() {
            this.projectText = this.textBeforeEdit;
            this.currentEdit = -1;
        },
        
        deleteProject(project) {
            this.projectText = this.textBeforeEdit;
            this.currentEdit = -1;
            var vm = this;
            //console.log(project);

            //var projectIndex = this.userProject.indexOf(project);

            //this.userProjects.splice(this.userProjects.indexOf(project),1); 

            const config = {
            method: 'post',
            url: 'http://127.0.0.1:3000/api/deleteProject',
            data:{'_id': project._id}
            //config: { headers: { Authorization: 'Bearer ' + window.sessionStorage.accessToken}}
            }

            this.axios(config)
            .then(function (response) {
                console.log(response);
                vm.userProjects.splice(vm.userProjects.indexOf(project),1); 
                
            }).catch(function(error) {
                console.log(error);
            });
            
            
            //this.userProjects.splice(index, 1);
            

            //api call to delete project
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
            vm.userProjects = response.data;
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
