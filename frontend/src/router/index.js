import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
// import NavBar from '@/components/NavBar'
import About from '@/components/About'
import Login from '@/components/Login'
import CreateTask from '@/components/CreateTask'
import Register from '@/components/Register'

/* eslint-disable */
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    }, {
        path: '/about',
        name: 'About',
        component: About
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/createtask',
        name: 'CreateTask',
        component: CreateTask
    }, {
        path:'/register',
        name: 'Register',
        component: Register
    }]
})