import Vue from 'vue'
import VueRouter from 'vue-router'

import ListView from '../views/List.vue'
import PostView from '../views/Post.vue'
import resume from '../views/resume.vue'
import home from '../views/home.vue'
import dev from '../views/dev.vue'
import photography from '../views/photography.vue'
import writing from '../views/writing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/dev',
    name: 'dev',
    component: dev
  },
  {
    path: '/writing',
    name: 'writing',
    component: writing
  },
  {
    path: '/photography',
    name: 'photography',
    component: photography
  },
  {
    path: '/list',
    name: 'list',
    component: ListView
  },
  {
    path: '/post/:hash', // :title?
    name: 'post',
    component: PostView
  },
  {
    path: '/resume',
    name: 'resume',
    component: resume
  }
]

export default new VueRouter({
  // mode: 'history',
  routes
})
