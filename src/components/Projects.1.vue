<template>
  <div id="projects" class="projects full-height">
    <div class="projectLists">
      <div class="projectsFilter">
        <ul id="tags">
          <li class="active">all</li>
          <li>tag1</li>
          <li>tag2</li>
          <li>tag3</li>
          <li>tag4</li>
          <li>tag5</li>
          <li>tag6</li>
        </ul>
      </div>
      <ProjectList/>
      <ProjectList/>
      <ProjectList/>
      <ProjectList/>
      <ProjectList/>
      <ProjectList/>
      <ProjectList/>
      <ProjectList/>
      <ProjectCard/>




    </div>
    <ProjectListDetail />
  </div>
</template>

<script>

import ProjectList from './ProjectList'
import ProjectListDetail from './ProjectListDetail'
import ProjectCard from './ProjectCard'

export default {
  name: 'Projects',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
  width:100%;
  display: flex;
  overflow: hidden;
  .projectsFilter{
    width:100%;
    // margin-bottom: 50px;
    height:60px;
    background-color:white;
    position:sticky;
    top:50px;
    h3{
      text-align: left;
      
    }
    #tags{
      text-align: center;
      vertical-align: middle;
      padding-top: 20px;
      li{
        display: inline;
        text-align: left;
        margin-right: 10px;
        background-color: rgb(244,244,244);
        font-family: "Monoist";
        font-size: 0.8em;
        color:rgb(100,100,100);
        padding:7px;  
        &:hover{
          background-color:rgb(235,235,235);
          cursor:pointer;
        }
      
      }
      .active{
        background-color: rgb(210,210,210);
      }
    }

  }
  .projectLists{
      width:40%;
      float:left;
      overflow-y:scroll;
  }
  .projectListDetail{
    width:60%;
  }
  // grid-template-rows: repeat(10, 1fr);
}
</style>
