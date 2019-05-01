<template>
  <div class="home full-height">
    <div class="left_home photo_mtt">
        <!-- <img src="../assets/img/home/home.jpg" alt=""> -->
    </div>
    <div class="right_home">
        <!-- <h1 class="logo">mahti.</h1> -->
        <p>Hey! <br> My name is <a href="">Matthieu Harbich</a>. <br> I <span class="red">&hearts;</span> <a href="">engineering softwares</a>  and playing with <a href="">data</a>  to
         <a href="">prototype new products</a>. <br> <br> Please, feel free to <a href="">contact me</a>!!</p>

         <p></p>
    </div>
   <Menu />
  </div>
</template>

<script>

import Menu from './Menu'
import Ripple from 'jquery.ripples'
import JqueryUi from 'jquery-ui-bundle'
import jqueryUiTouchPunchC from 'jquery-ui-touch-punch-c'
import {bus} from '../main.js'
import * as PIXI from 'pixi.js'


export default {
  name: 'Home',
  data () {
    return {
      menu:  true,
      menuOpen: false
    }
  },
  mounted: function(){
   
  
  //   $('.photo_mtt').ripples({
  //     resolution: 512,
  //     dropRadius: 59,
  //     perturbance: 0.1
  //   });

  //   var $el = $('.photo_mtt');
  //   var x = $el.outerWidth();
  //   var y = $el.outerHeight();
  //   $el.ripples( 'drop',x, y, 50, 0.3);

  //   setInterval(function() {
  //     var $el = $('.photo_mtt');
  //     var x = Math.random() * $el.outerWidth();
  //     var y = Math.random() * $el.outerHeight();
  //     var dropRadius = 60;
  //     var strength = 0.04 + Math.random() * 0.04;
  //     $el.ripples( 'drop',x, y, dropRadius, strength);
  //   }, 2000);
  
  },
  components:{
    Menu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import "../assets/scss/_global.scss";

.home{
  display: grid;
  // height: 100vh;
  grid-template-columns:1fr 1fr;
  grid-template-rows: repeat(1, 1fr);
  .left_home{
    grid-column: 1;
    grid-row:1;
    background-color:rgb(128, 85, 85);
    overflow: hidden;
    // background-image:    url("https://66.media.tumblr.com/c7be4c3ba0d09334e248f430673bf80e/tumblr_oadbv083qC1qdr59lo1_1280.jpg");
    background-image: url("../assets/img/home/home2.png");
    background-size:     cover;                 
    background-repeat:   no-repeat;
    background-position: center center;
    canvas{
      width: 30%;
    }
  }
  .right_home{
    grid-column: 2;
    .logo{
      font-family: 'NeueEinstellung-SemiBold';
      position: absolute;
      top:50%;
      left: 75%;
      transform:translate(-50%, -50%);
      -webkit-transform:translate(-50%, -50%);
      // display:none;
    }
    p{
      position: absolute;
      font-size: 1.2rem;
      top:47%;
      left: 75%;
      transform:translate(-50%, -50%);
      -webkit-transform:translate(-50%, -50%);
      .red{
          color:red;
        }
      a{
        // background-color:$yellow;
        // text-decoration: none;
        color:black;
        &:hover{
          background-color:$yellow;
        }
        
      }
    }
    
  }



  
  
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */

    .home{
      // display: grid;
      grid-template-columns:1fr;
      grid-template-rows: repeat(2, 1fr);
      .left_home{
        grid-column: 1;
        grid-row:2;
      }
      .right_home{
        grid-column: 1;
        grid-row:1;
        p{
          top:25%;
          left: 50%;
          // width:100%;
          // transform:translate(-50%, -50%);
          // -webkit-transform:translate(-50%, -50%);
          // display:none;
        }
      }
    }
  
}


</style>
