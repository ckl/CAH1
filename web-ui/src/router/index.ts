import Vue from 'vue'
import { createWebHistory, createRouter } from 'vue-router'

// const routes = [
// 	{
// 		path: '/',
// 		name: 'Home',
// 		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
// 	}]

const routes: never[] = []

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router