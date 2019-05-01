import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Project from '@/components/Project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/project/:id',
      name: 'project',
      component: Project
    }
  ]
})
