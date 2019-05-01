<template>
  <div class="dot">
  </div>
</template>



<script>
export default {
  name: 'Dot',
  data () {
    return {
      show: true
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dot {
  height: 5px;
  width: 5px;
  background-color:black;
  border-radius: 50%;
  position:absolute;
  display: inline-block;
  display:none;
}
</style>
