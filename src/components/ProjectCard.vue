<template>
  <div class="projectCard">
    <div class="project_card">
      <div class="card_inner">
        <div class="front_card">
          <img :src="project.image" alt="">
          <ul class="project_tags">
            <li  v-for="(tag, index) in project.tags" :key="index">{{tag}} </li>
						<!-- <li>{{project.short_title}}</li> -->
          </ul>
          <h2>{{project.short_title}}</h2>
          <p class="card_date card_date_front">{{project.year}}</p>
        </div>
       <router-link :to="{ name: 'project', params: { id: project.url }}" class="back_card">
          <p class="card_date card_date_back">{{project.year}}</p>
          <h2>{{project.long_title}}</h2>
          <a href="#" class="read_more">Read more about this project!</a>
      </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import ProjectListDetail from './ProjectListDetail'

export default {
	name: 'ProjectCard',
	props:['project'],
  data () {
    return {
			msg: 'LOL'
    }
  },
  components:{
    // ProjectListDetail
  },
  mounted: function(){
		// console.log(project)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/_global.scss";

.project_card{
	height:391px;
	width:236px;
	background-color: transparent;
	perspective: 1000px;
	&:hover .card_inner{
		transform: rotateY(180deg);
		cursor:pointer;
	}
	.card_inner{
		position:relative;
		width: 100%;
		height: 100%;
		transition: transform 0.5s;
		transform-style: preserve-3d;
	}
	.card_date{
		font-size: 0.8rem;
		font-family: "Monoist";
		position: absolute;
		padding:2px 10px 2px 10px;
		margin:0;
		background-color:$yellow;
	}
	.front_card, .back_card{
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
	}
	.front_card{
		background-color:$white;
		img{
			object-fit: cover;
			width:100%;
			height:40%;
		}
		ul{
			margin: 0;
			padding:0;
			text-align: center;
			list-style: none;
			li{
				margin: 0;
				display: inline;
				color: rgb(153, 153, 153);
				font-family: 'Monoist';
				font-size:0.7rem;
				// &:not(:first-child):before{
				&:before{
					content:'#';
					// padding: 0 12px;
				}
			}
		}
		h2{
			margin-left: 15px;
			margin-right: 15px;
			line-height: 1.4;
		}
		.card_date_front{
			left:10px;
			bottom:10px;
		}
	}
	.back_card{
    text-decoration: none;
    color:$dark;
		background-color:$yellow;
		transform: rotateY(180deg);
		h2{
			margin-left: 15px;
			margin-right: 15px;
			margin-top: 50px;
			line-height: 1.4;
      text-decoration: none;
		}
		.card_date_back{
			top:10px;
			right:10px;
		}
		a{
			font-family: "Monoist";
			font-size:0.7rem;
			text-align: center;
			color:$dark;
			width:100%;
			position: absolute;
			bottom:15px;
			&:hover{
				color:black;
			}
		}
		
	}
}
</style>
