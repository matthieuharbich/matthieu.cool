<template>
  <div class="projectList">
        <div class="metadata">
          <span class="date">02.10.2019</span>
         
        </div>
        <div class="teaser">
          <span class="projectTitle">project title</span>
          <p class="smallTeaser">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam beatae, fuga est eum aspernatur quam enim corporis? Facere aut ipsum et. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel blanditiis delectus aut aliquam obcaecati! Dicta amet reprehenderit soluta molestiae sequi quasi laudantium ut eligendi inventore esse dolore, fugiat, voluptates quaerat.</p>
           <ul class="tags">
             <li class="tagTitle">Tags:</li>
            <li>data</li>
            <li>video</li>
            <li>digital</li>
            <li>data science</li>
            <li>dev</li>
          </ul>
        </div>
      </div>
      <!-- <ProjectListDetail /> -->
</template>

<script>
// import ProjectListDetail from './ProjectListDetail'

export default {
  name: 'ProjectList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    // ProjectListDetail
  },
  mounted: function(){
    $('.projectList').on('click',function(){
      $('.projectList').removeClass('active_teaser')
      $(this).addClass('active_teaser')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import "../assets/scss/_global.scss";

.projectList{
  // width:40%;
  grid-column: 1;
  padding-left:20px;
  display: flex;
  padding-top:12px;
  padding-bottom:10px;
  border-bottom: 1px solid rgb(233, 233, 233);

  &:hover{
    cursor:pointer;
    .projectTitle{
      background-color: rgb(255, 255, 181);
    }
    
  }
}

.active_teaser{
  .projectTitle{
    background-color: yellow;
    
  }
&:hover{
     .projectTitle{
      background-color:yellow;
    }
    }
}
.metadata{
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
  width:100px;
  float:left;
  // background-color:pink;
  text-align: left;
  
  .date{
    // font-weight: bold;
    font-size:0.8em;
    font-family: 'Monoist';
  }

}

.teaser{
  width:calc(100% - 180px);
  margin-top: 10px;
  float:left;
  text-align: left;
  max-height: 130px;
  .projectTitle{
    font-weight: bold;
    font-size: 1.2em;
    font-family: 'NeueEinstellung-SemiBold';
  }
  .smallTeaser{
    margin-top:15px;
    font-family: "Amicale";
    font-size: 1em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color:rgb(120,120,120);
    overflow: hidden;
    text-overflow: ellipsis; // This is where the magic happens
  }
  .tag{
    float:left;
  }
  .tags{
    list-style-type: none;
    padding:0;
    font-size: 0.8em;
    // margin-left: 7px;
    color:rgb(143, 143, 143);
    float:left;
    margin-top: 3px;
    font-family: "Monoist";
    .tagTitle{
      color:black;
      font-family: "Amicale-book"
    }
    li{
      display: inline;
    }
    li:not(:first-child){
      // margin-top: 5px;
      padding:2px 4px 2px 4px;
      background-color:rgb(244,244,244);

      
    }
  }


}
// .projectListDetail{
//   grid-column: 2;
//   height: 100vh;
// }
</style>
