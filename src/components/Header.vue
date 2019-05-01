<template>
  <div class="header">
      <div class="title">
        <p><a href="/">matthieu harbich</a></p>
      </div>
      <div v-if="home" class="links-menu">
        <ul>
          <li @mouseover="mouseOver"><a  href="#projects">projects</a><Dot/></li>
          <li><a href="#photographies">photographies</a><Dot/></li>
          <li><a href="#about">about</a><Dot/></li>
          <li><a href="#contact">contact</a><Dot/></li>
        </ul>
      </div>
      <div v-else @click="toggleMenu()" class="hamburger-menu">
          
          <svg width="23px" height="15px" viewBox="0 0 29 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <!-- Generator: Sketch 43 (38999) - http://www.bohemiancoding.com/sketch -->
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                  <g id="menu" transform="translate(1.000000, 0.000000)" stroke="#676767" stroke-width="3">
                      <path d="M1.34692469,1.5 L25.5348165,1.5" id="Line"></path>
                      <path d="M1.34692469,8.5 L25.5348165,8.5" id="Line-Copy"></path>
                      <path d="M1.34692469,15.5 L25.5348165,15.5" id="Line-Copy-2"></path>
                  </g>
              </g>
          </svg>
     
      </div>
    
  </div>
</template>



<script>
import Dot from './Dot'
import {bus} from '../main.js'

export default {
  name: 'Header',
  data () {
    return {
      home: false,
      menuOpen: false,
      scrolled: false
    }
  },
  methods:{
    toggleMenu: function(){
      if(this.menuOpen){
        this.menuOpen = false;
        $('svg').css({
          "-webkit-transform" : "rotate(0deg)",
          "transform" : "rotate(0deg)",
          "-webkit-transform-origin" : "50% 50%",
          "transform-origin" : "50% 50%",
          "-webkit-transition-duration": "0.5s",
          "-moz-transition-duration": "0.5s",
          "-o-transition-duration": "0.5s",
          "transition-duration": "0.5s"
        })
      }else{
        this.menuOpen = true;
        $('svg').css({
          "-webkit-transform" : "rotate(90deg)",
          "transform" : "rotate(90deg)",
          "-webkit-transform-origin" : "50% 50%",
          "transform-origin" : "50% 50%",
           "-webkit-transition-duration": "0.5s",
          "-moz-transition-duration": "0.5s",
          "-o-transition-duration": "0.5s",
          "transition-duration": "0.5s"
        })
      }
      bus.$emit('menuChanged', this.menuOpen)
      

      
    }
  },
  components:{
    Dot
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/_global.scss";

.header{
  width:100%;
  height:$header_heigth; 
  position:fixed;
  top:0;
  margin-left: 0;
  padding-left: 0;
  left:0;
  background-color:$white;
  // background-color:green;
  z-index:10;
}

.links-menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  float:right;
  margin-right:20px;
  line-height:30px;
  vertical-align: middle;
}

.links-menu li {
  float: left;
  list-style-type: none;
  margin-right: 30px;
  font-family: 'Monoist';
  font-size:14px;
  text-align: center;
  
}

.links-menu li a {
  display: block;
  
  text-decoration: none;
  color:black;
}

.links-menu li a:hover {
  /* background-color: #111111; */
}

.hamburger-menu{
  float:right;
  margin-right: 30px;
  line-height:$header_heigth;
  vertical-align: middle;
  &:hover{
    cursor: pointer;
    svg g{
      stroke:black;
    }
  }
}


.title p{
  float:left;
  font-size: 14px;
  line-height:30px;
  vertical-align: middle;
  margin-left: 20px;
  font-family:'Monoist';
  a{
  text-decoration: none;
  color: black;
  }

}
</style>
