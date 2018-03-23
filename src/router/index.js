import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import signUp from '@/components/SignUp'
import signIn from '@/components/SignIn'
import profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: signUp
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: signIn
    },
    {
      path: '/profile',
      name: 'Profile',
      component: profile
    }
  ]
})
