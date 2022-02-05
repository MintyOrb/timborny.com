<template>
  <div id='app'>
    <header class="limited">
      <div class="header">


      <router-link to="/">
        <img class="icon" src="/static/tb.PNG" />
      </router-link>
      <div class='title'>
        <router-link to="/">{{ title }}</router-link>
      </div>
      <div style="clear: both"></div>

      <div class='links no-print'>
        <a class='separator' target='_blank' href='http://github.com/MintyOrb'>github</a>
        <!-- <router-link to="/resume">resume</router-link> -->
        <a href="static/Timothy Borny - Resume 2022.pdf" target="_blank">resume</a>
      </div>

      <div class='yes-print links'>
        <span >tim@knowlo.org</span>
        <span class='separator'> </span>
        <span style='padding-left:6px'>+1.978.543.2115</span>
      </div>

      <div style="clear: both"></div>
      <search-bar v-if="isPageList"></search-bar>
      </div>
    </header>

    <transition name="fade" mode="out-in" appear>
      <router-view class='content'></router-view>
    </transition>

    <div class='foot'>
      <img class="footicon" src="/static/tb.PNG" /> 
    </div>
  </div>
</template>

<style src="../static/index.css"></style>
<style>
body {
  margin: 0;
}
html, body {
  height: 100%;
  overflow-y: scroll;
}
body {
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1 0 auto;
}
.foot {
  flex-shrink: 0;
}

#StayFocusd-infoba {
  padding: 0;
}

/* * {outline:1px black solid;} */

.footicon {
  display: block;
  width: 20px;
  padding: 30px;
  margin: 0 auto;
}
.limited {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
}
.yes-print{
  visibility: hidden;
  height: 0px;
}
@media print
{
    .yes-print
    {
        visibility: visible !important;
    }
}
#app {
  min-height: 100vh;
}
.title a{
  margin-left:-50px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.8s
}
.fade-enter, .fade-leave-active, .fade-leave-to {
  opacity: 0
}
.fade-enter-to, .fade-leave {
  opacity: 1;
}

.icon {
  float: left;
  width: 30px;
  margin-left: 20px;
}
.header {
  background-color: white;
  z-index: 1;
}
.links{
  margin-top: 20px;
  text-align:center;
}
.links a {
  color: gray;
  transition: color .3s;
  padding-right:3px;
}
.links a:hover{
  color:black;
}
.separator{
  border-right: 1px solid black;
  padding-right:3px;
}
</style>
<script>
  import conf from './config'
  import searchBar from './components/searchBar.vue'

  export default {
    name: 'app',

    data () {
      return {
        title: conf.blogTitle,
        test: ''
      }
    },

    computed: {
      isPageList () {
        return this.$route.name === 'list'
      }
    },

    components: {
      searchBar
    }
  }
</script>
