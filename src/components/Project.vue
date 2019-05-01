<template>
  <div id="project" >
    <Header/>
    <Menu/>
    <div class="project_detail">
      <!-- <h2>This is a subtitle to the project detail section, which needs to be more explicit than the title. </h2> -->
      <div class="content">
        <div class="project_description">
          <div class="project_title">
            <h1>{{project.long_title}}</h1>
          </div>
          <div class="project_description_content">
              
              <p><span class="projectTitle">Project </span>  {{project.project_description}}</p>
              <p><span class="projectTitle">Concept </span>  {{project.concept}}</p>
          </div>
          <div class="project_metadata">
            <ul>
              <li v-for="(metadata, index) in project.project_metadata" :key="index">
                <h1>{{metadata.category}}</h1>
                <ul>
                  <li v-for="(c, index) in metadata.content" :key="index">{{c}}</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        </div>
        <div class="project_content">
          <div v-for="(project, index) in project.project_detail" :key="index">
            <div v-if="project.type == 'img_txt' " class="img_left_text_right">
              <div class="left_side">
                <img :src="project.image" alt="">
              </div>
              <div class="right_side">
                <p v-for="(t, index) in project.text" :key="index">{{t}}</p>
              </div>
            </div>
            <div v-if="project.type == 'jusified_text' " class="text_justified">
              <p v-for="(p, index) in project.content" :key="index">{{p}}</p>
            </div>
            <div v-if="project.type == 'image'" class="project_image">
              <img :src="project.url" alt="">
            </div>
            <div v-if="project.type == 'full_image'" class="full_img">
              <img :src="project.full_image" alt="">
            </div>
          </div>
        </div>
        
      </div>
    </div>
</template>
<script>

import Menu from './Menu'
import Header from './Header'
import axios from 'axios'

export default {
  name: 'Project',
  data () {
    return {
      menu:  true,
      menuOpen: false,
      project: ''
    }
  },
  mounted(){
    
    axios
      .get('http://localhost:5000/matthieuharbich/api_v1/projects/'+this.$route.params.id)
      .then(response => (this.project = response.data))
  },
  components:{
    Menu,
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import "../assets/scss/_global.scss";
$project_title: "type-36-extrabold-hdc";

.project_detail{
  margin-top: 50px;

  

  h1{
    font-family: $project_title;
    text-transform: uppercase;
    margin-bottom: 0;
    font-size:3em;
    color:$dark;
  }
  h2{
    margin-top: 0;
  }
  p{
    color:$dark;
    font-weight: 40;
  }

  .content{
    margin-top: 50px;
    
    .project_description{
    display:grid;
    grid-template-columns: repeat(12, 1fr);
    // grid-template-rows: 1fr;
    grid-column-gap: 10px;

    .project_title{
      grid-column: 4/10;
    }

    .project_description_content{
      grid-column: 5/9;
      p{
        text-align: justify;
        margin-bottom: 40px;
        .projectTitle{
          font-size:1.3em;
          font-weight: 500;
          font-family: $project_title;
          text-transform: uppercase;
        }
      }
    }

    .project_metadata{
      grid-column: 10/12;

      >ul{
        list-style-type: none;
        padding-left: 15px;
        border-top:1px dotted rgb(145, 145, 145);
        border-bottom:1px dotted rgb(145, 145, 145);
        padding-top:10px;
        padding-bottom:20px;
        li{
          font-family: 'Monoist';
          font-size: 1em;
          margin-left: 0;
          margin-bottom: 5px;
          margin-top: 5px;
          >ul{
            list-style-type: none;
            padding-left: 15px;
          }
        }
      }
      h1{
        font-size: 1.3em;
        text-align: left;
        margin-left: 0;
      }
    }
    }
    
  }

  

  

  .project_content{
    margin-top: 100px;
    div{
      margin-bottom:25px;
      margin-top: 25px;
    }
    .img_left_text_right{
      display:grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: 1fr;
      grid-column-gap: 20px;
      .left_side{
        grid-column: 2/5;
        // background-color: pink;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

      }
      .right_side{
        grid-column: 5/9;
        
        // background-color: green;
        justify-self: stretch;
        p{
          margin-left:0;
          width: 100%;
          text-align: justify;
        }
      
      }
    }
    .text_center{
      display:grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: 1fr;
      grid-column-gap: 20px;
      p{
        display:block;
        text-align: center;
        grid-column: 6/8;
      }
      
      
    }

    .text_justified{
      display:grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: 1fr;
      grid-column-gap: 20px;
      p{
        display:block;
        text-align: justify;
        grid-column: 5/9;

      }
      
      
    }


    .full_img{
      width:100%;
      height: 200px;
      img{
        width:100%;
        height:100%;
        object-fit: cover;
      }
    }

    .project_image{
      display:grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: 1fr;
      grid-column-gap: 20px;
      img{
        grid-column: 5/9;
        object-fit: cover;
        width:100%;
      }
    }
  }
}


</style>
