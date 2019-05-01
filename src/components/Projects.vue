<template>
  <div id="projects" class="projects full-height">
    <div class="projects_intro intro">
      <h1>Some of my projects</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem corrupti repudiandae unde quia minus, voluptatum commodi pariatur, quibusdam dolorem ex, totam dolores autem dolorum eligendi sint. Consectetur provident totam eligendi.</p>
      <div id="filters">
        <button class="btn" :class="{active: isActive.all }" v-on:click="filter('all'); click_all()">All</button>
        <button class="btn" :class="{active: isActive.data_science}" v-on:click="filter('data_science'); isActive.data_science = !isActive.data_science; close_all_label()"> data science</button>
        <button class="btn" :class="{active: isActive.photography}" v-on:click="filter('photography'); isActive.photography = !isActive.photography; close_all_label()"> photography</button>
        <button class="btn" :class="{active: isActive.software_development}" v-on:click="filter('software_development'); isActive.software_development = !isActive.software_development; close_all_label()"> software development</button>
        <button class="btn" :class="{active: isActive.open_data}" v-on:click="filter('open_data'); isActive.open_data = !isActive.open_data; close_all_label()"> open data</button>
      </div>
    </div>
    <div class="project_cards">
      <ProjectCard class="project_card" v-for="(project,index) in filteredProjects" :key="index" :project="project"></ProjectCard>

    </div>
    
  </div>
</template>

<script>

import ProjectList from './ProjectList'
import ProjectListDetail from './ProjectListDetail'
import ProjectCard from './ProjectCard'
import axios from 'axios'

export default {
  name: 'Projects',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      projects: [],
      filters: ["all"],
      isActive: {
        "all":true,
        "data_science": false,
        "photography": false,
        "software_development": false,
        "open_data": false,
      }
    }
  },
  mounted(){
    axios
      .get('http://localhost:5000/matthieuharbich/api_v1/projects')
      .then(response => (this.projects = response.data))
  },
  methods:{
    filter: function(tag, event){
      if(tag == 'all'){
        this.filters = []
        this.filters.push('all')
      }else{
        if(this.filters.includes('all')){
          this.filters.splice(this.filters.indexOf('all'), 1);
        }
        if(this.filters.includes(tag)){
          this.filters.splice(this.filters.indexOf(tag), 1);
          if(this.filters.length == 0){
            this.filters.push('all')
            this.isActive.all = true;
          }
        }else{
          this.filters.push(tag)
        }
        
      }
    },
    click_all:function(){
      this.isActive.all = true;
      this.isActive.data_science = false;
      this.isActive.photography = false;
      this.isActive.software_development = false;
      this.isActive.open_data = false;
    },
    close_all_label:function(){
      this.isActive.all = false;
    }
    
  },
  computed:{
    filteredProjects(){
      // console.log(this.projects)
			var filters = this.filters;
			
			if(filters.includes("all")) {
				return this.projects;
			} else {
				return this.projects.filter(function(project) {
          return project.tags.some(r=> filters.indexOf(r) >= 0)
				});
			}
    }
  },
  components:{
    ProjectList,
    ProjectListDetail,
    ProjectCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import "../assets/scss/_global.scss";

.projects{
  .intro{
    margin-left: 15%;
    width:70%;
    font-family: "type-36-extrabold-hdc";
    text-transform: uppercase;
    p{
      text-transform: lowercase;
    }
  }
}

#filters{
  margin-top: 30px;
}
button{
  height:30px;
  font-family: 'NeueEinstellung-regular';
  vertical-align:center;
  border:none;
  background-color: rgb(243, 243, 243);
  &:hover{
    cursor: pointer;
  }
  &:focus{
    outline:none !important;
  }
}
.active{
  background-color:yellow;
}

.project_cards{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  overflow:hidden;
  margin-left: auto;
  margin-right: auto;
  padding-top:60px;
  padding-bottom:60px;
  // background-color:$light;
  background-color: #ffffff;
  // background-image: url("data:image/svg+xml,%3Csvg width='12' height='16' viewBox='0 0 12 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 .99C4 .445 4.444 0 5 0c.552 0 1 .45 1 .99v4.02C6 5.555 5.556 6 5 6c-.552 0-1-.45-1-.99V.99zm6 8c0-.546.444-.99 1-.99.552 0 1 .45 1 .99v4.02c0 .546-.444.99-1 .99-.552 0-1-.45-1-.99V8.99z' fill='%23c7c7c7' fill-opacity='0.53' fill-rule='evenodd'/%3E%3C/svg%3E");
}
.project_card{
  float:left;
  flex: 0 1 236px;
  margin:25px;
}

</style>
