<template>
  <div v-if="menuOpen" class="menuComponent">
     <transition name="fade">
      <div id="draggable" class="menu">
        <ul>
              <li><a href="#projects">projects</a></li>
              <li><a href="#about">about</a></li>
              <li><a href="#contact">contact</a></li>
          </ul>
        </div>
    </transition>
  </div>
</template>



<script>
import Header from './Header'
import JqueryUi from 'jquery-ui-bundle'
import jqueryUiTouchPunchC from 'jquery-ui-touch-punch-c'
import {bus} from '../main.js'

export default {
  name: 'Menu',
  data () {
    return {
      show: false,
      menuOpen:false
    }
  },
  created: function(){
    bus.$on('menuChanged', (data) => {
      this.menuOpen = data      
    })
  },
  updated : function() {
      $('#draggable').draggable()
  },
  components:{
    Header
  }
    
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/_global.scss";

.menu{
      // list-style-type: none;
      text-align: center;
      font-family: "Monoist";
      position:fixed;
      top:calc(50% - 100px);
      left:calc(50% - 100px);
      width:200px;
      height: 200px;
      background-color: yellow;
      transform:translate(0, 0);
      -webkit-transform:translate(0, 0);
      list-style-type: none;
      z-index:11;
      ul{
        margin: 0;
        padding:0;
        margin-top:50%;
        transform:translate(0, -50%);
        -webkit-transform:translate(0, -50%);
      }
      
      
      li{
        display:block;
        margin-left: 0;
        width: 100%;
        line-height: 2.5;
        a{
            
            text-decoration:none;
            color:rgb(56, 56, 56);
            &:hover{
              color:black;
              font-size:1.01em;
            }
        }


      }
    }


.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
