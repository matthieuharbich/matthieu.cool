<template>
  <div class="main">
    <form class="move" style="position:fixed">
      <fieldset>
        <p id="high1">One</p>
        <p id="high2">Two</p>
        <p id="high3">Three</p>
        <p id="high4">Four</p>
      </fieldset>
    </form>
        <div class="spacer s1" id="sec1">
      <div class="box2" style="background-color: #8DBBE0;">
        <p>One</p>
        <a href="#" class="viewsource">view source</a>
      </div>
    </div>
    <div class="spacer s1" id="sec2">
      <div class="box2" style="background-color: #6AA6D8;">
        <p>Two</p>
        <a href="#" class="viewsource">view source</a>
      </div>
    </div>
    <div class="spacer s1" id="sec3">
      <div class="box2" style="background-color: #4E96D1;">
        <p>Three</p>
        <a href="#" class="viewsource">view source</a>
      </div>
    </div>
    <div class="spacer s1" id="sec4">
      <div class="box2" style="background-color: #307FB5;">
        <p>Four</p>
        <a href="#" class="viewsource">view source</a>
      </div>
    </div>
    <div class="spacer s2"></div>

  </div>
</template>

<script>
import Home from './Home'
import Projects from './Projects'
import Header from './Header'
import Canvas from './Canvas'
import ScrollMagic from 'scrollmagic'


export default {
  name: 'Scroll',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    Home,
    Projects,
    Header
  },
  mounted(){
  console.log('in')
    	// init controller
	var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 100}});

	// build scenes
	new ScrollMagic.Scene({triggerElement: "#sec1"})
					.setClassToggle("#high1", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#sec2"})
					.setClassToggle("#high2", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#sec3"})
					.setClassToggle("#high3", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#sec4"})
					.setClassToggle("#high4", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>

<style type="text/css">
	.active {
		background-color: #307FB5;
  }
  
  .s1{
    height: 400px;
  }
</style>

