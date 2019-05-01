<template>
      <div class="projectListDetail">
        <h1><span>K</span> - klikjs</h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam beatae, fuga est eum </h2>
        <ul class="technologies">
          <li>
            <!-- <img src="https://placeimg.com/100/100/black" alt=""> -->
            <h4>technology</h4>
          </li>
          <li>
            <!-- <img src="https://placeimg.com/100/100/black" alt=""> -->
            <h4>technology</h4>
          </li>
        </ul>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia consequuntur sint aperiam placeat quam veritatis impedit voluptate aut cumque nobis beatae cum unde temporibus ducimus quae quos ad, atque accusamus!</p>
        <!-- <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias excepturi quae incidunt, libero dolore odit ab aliquid iusto quo neque accusantium vero ratione cum fugiat suscipit laudantium similique consequatur. Rem.</p> -->
        <img src="https://placeimg.com/500/500/black">
        <div class="text_square">
          <h3>Square title</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit iusto, asperiores doloribus esse hic neque sed perspiciatis ratione totam delectus velit explicabo aspernatur sequi aut consequuntur laboriosam quis quidem a!</p>
          <a href="">Read more</a>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, officiis aliquam dolore dolores doloremque perferendis sit quo quam eligendi mollitia veniam? Ipsum voluptas sequi beatae corporis. Hic voluptatum porro voluptatem.</p>
        <button>Go to project page</button>
      </div>
</template>

<script>

export default {
  name: 'ProjectListDetail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function(){
    var elements = $('.projectListDetail').children()
    var window_height = $(window).height()
    var total_height = 0;
    for (let index = 0; index < elements.length; index++) {
      const element = elements[index];
      total_height = total_height + $(element).height()
    }
    if(window_height > total_height + 50){
      alert('window')
      $('.projectListDetail').css("height", window_height+50+"px")
    }else{
      alert('total')
      $('.projectListDetail').css("height", total_height+50+"px")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import "../assets/scss/_global.scss";


.technologies{
  li{
    display: inline;
    list-style: none; /* pour enlever les puces sur IE7 */
    margin: 10px;
    width:39px;
  }
}
.projectListDetail{
    position: sticky;
    overflow-y:scroll;
    box-sizing: content-box;
    // height:calc(100vh - 55px);
    top:55px;
    width:50%;
    // padding-left:30px;
    // background-color:red;
    text-align: justify;
    h1{
      margin-top: 60px;
      margin-left: 10%;
      span{
        font-family: "NeueEinstellung-Black";
        font-size:1.6em;
        background-color: yellow;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
      }
    }
    h2{
      margin-left: 10%;
      margin-top: -20px;
      width:80%;
      font-size: 1em;

    }
    p{
      width:80%;
      margin-left:15%;
      overflow: hidden;
    }
    img{
      margin-left: 12%;
      width:40%;
      float:left;
      margin-top: 40px;
      margin-bottom: 40px;
    }
    .text_square{
      h3{
        font-size:1em;
        font-family: "NeueEinstellung-Black";
      }
      p{
        margin-left: 10px;
        margin-right: 10px;
        width: calc(100% - 25px);
      }
      a{
        margin-left:20px;
        // background-color: yellow;
      }
      padding-left:10px;
      padding-bottom:10px;
      background-color:rgb(244,244,244);
      width: calc(40% + 40px);
      float:left;
      margin-left: -40px;
    }
    button{
        font-family: "NeueEinstellung-Black";
        background-color:rgb(255, 255, 102);
        padding: 15px;
        border:none;
        position:absolute;
        right:80px;
        &:hover{
          cursor:pointer;
          background-color:yellow;
        }
    }
}


</style>
