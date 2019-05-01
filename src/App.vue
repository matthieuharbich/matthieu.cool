<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}

</script>



<style  lang="scss">
@import "assets/scss/_global.scss";
// @import "assets/scss/_fonts.scss";
// @import "http://68.183.208.228:9010/assets/toolkit/styles/toolkit.css"



body{
  margin:0;
  padding:0;
  font-family: "type-36-regular-hdc";
  color:$dark;
  ::selection {
    background:$yellow; /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    background:$yellow; /* Gecko Browsers */
  }
}

p{
	font-family: "Monoist";
}

#app {
  margin-top:-22px
}


@font-face {
  font-family: 'NeueEinstellung-SemiBold';
  src:  url('assets/fonts/NeueEinstellung/WEB/NeueEinstellung-SemiBold.woff') format('woff'),
        url('assets/fonts/NeueEinstellung/WEB/NeueEinstellung-SemiBold.woff2') format('woff2');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'NeueEinstellung-Regular';
  src:  url('assets/fonts/NeueEinstellung/WEB/NeueEinstellung-Regular.woff') format('woff'),
        url('assets/fonts/NeueEinstellung/WEB/NeueEinstellung-Regular.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'NeueEinstellung-Black';
  src:  url('assets/fonts/NeueEinstellung/WEB/NeueEinstellung-Black.woff') format('woff'),
        url('assets/fonts/NeueEinstellung/WEB/NeueEinstellung-Black.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'NeueEinstellung-Normal';
  src:  url('assets/fonts/NeueEinstellung/WEB/NeueEinstellung-Normal.woff') format('woff'),
        url('assets/fonts/NeueEinstellung/WEB/NeueEinstellung-Normal.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}


@font-face {
  font-family: 'Monoist';
  src:  url('assets/fonts/Monoist/WEB/Monoist-Regular.woff2') format('woff2'),
        url('assets/fonts/Monoist/WEB/Monoist-Regular.woff') format('woff');
}

@font-face {
  font-family: 'Amicale-book';
  src:  url('assets/fonts/Amicale/WEB/amicale-book-webfont.woff2') format('woff2'),
        url('assets/fonts/Amicale/WEB/amicale-book-webfont.woff') format('woff');
}

@font-face {
  font-family: 'Venetian-regular';
  src:  url('assets/fonts/Venetian/WEB/HKVenetian-Regular.woff2') format('woff2'),
        url('assets/fonts/Venetian/WEB/HKVenetian-Regular.woff') format('woff');
}

@font-face {
  font-family: 'type-36-black-hdc';
  src:  url('assets/fonts/Type-36/WEB/type-36-black-hdc.woff2') format('woff2'),
        url('assets/fonts/Type-36/WEB/type-36-black-hdc.woff') format('woff');
}

@font-face {
  font-family: 'type-36-bold-hdc';
  src:  url('assets/fonts/Type-36/WEB/type-36-bold-hdc.woff2') format('woff2'),
        url('assets/fonts/Type-36/WEB/type-36-bold-hdc.woff') format('woff');
}

@font-face {
  font-family: 'type-36-extrabold-hdc';
  src:  url('assets/fonts/Type-36/WEB/type-36-extrabold-hdc.woff2') format('woff2'),
        url('assets/fonts/Type-36/WEB/type-36-extrabold-hdc.woff') format('woff');
}

@font-face {
  font-family: 'type-36-extralight-hdc';
  src:  url('assets/fonts/Type-36/WEB/type-36-extralight-hdc.woff2') format('woff2'),
        url('assets/fonts/Type-36/WEB/type-36-extralight-hdc.woff') format('woff');
}

@font-face {
  font-family: 'Type-36-Italic';
  src:  url('assets/fonts/Type-36/WEB/Type-36-Italic.woff2') format('woff2'),
        url('assets/fonts/Type-36/WEB/Type-36-Italic.woff') format('woff');
}

@font-face {
  font-family: 'type-36-light-hdc';
  src:  url('assets/fonts/Type-36/WEB/type-36-light-hdc.woff2') format('woff2'),
        url('assets/fonts/Type-36/WEB/type-36-light-hdc.woff') format('woff');
}

@font-face {
  font-family: 'type-36-regular-hdc';
  src:  url('assets/fonts/Type-36/WEB/type-36-regular-hdc.woff2') format('woff2'),
        url('assets/fonts/Type-36/WEB/type-36-regular-hdc.woff') format('woff');
}

$project_title: "type-36-black-hdc";

</style>
