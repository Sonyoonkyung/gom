import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  }
]

const router = new VueRouter({
  mode: 'history',
	scrollBehavior() {
		return {
			x: 0, y: 0,
		};
	},
	routes,
})

export default router
