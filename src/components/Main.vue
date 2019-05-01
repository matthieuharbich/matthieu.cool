<template>
  <div class="main">
    <Header/>
    <Home/>
    <Projects/>
    <About />
    <Contact />

  </div>
</template>

<script>
import Home from './Home'
import Projects from './Projects'
import Header from './Header'
import Canvas from './Canvas'
import About from './About'
import Contact from './Contact'

export default {
  name: 'Main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      scrolled: false
    }
  },
  components:{
    Home,
    Projects,
    Header,
    About,
    Contact
  },
  methods:{
    handleScroll () {
      this.scrolled = window.scrollY > 0;
      console.log(this.scrolled)
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    },
    mouseOver: function(){
      console.log(this)
    }
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
</style>

