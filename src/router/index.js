import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main.vue';
import MHome from '../views/mypage/MHome.vue';

Vue.use(VueRouter)


export const router = new VueRouter({
	mode: 'history', //해쉬값 (#) 이 제거되는것
	scrollBehavior() {
		return {
			x: 0, y: 0,
		};
	},
	routes: [
		{
			// path: url 주소
			path: '/',
			name: 'Main',
			component: Main //component: url 주소로 갔을 때 표시될 컴포넌트
		},
		{
			path: '/mypage',
			name: 'MHome',
			component: MHome
		}
	],
})

export default router
