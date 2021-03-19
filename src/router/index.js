import Vue from 'vue';
import VueRouter from 'vue-router';

// 라우터에서 사용할 페이지들을 임포트 (임포트: 모듈을 가져오다)
import Main from '../views/Main.vue';
import MHome from '../views/mypage/MHome.vue';

Vue.use(VueRouter)


export const router = new VueRouter({ //main.js로 넘기기 위해 맨앞에 export 구문을 추가
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
			name: 'Mypage',
			component: MHome
		}
	],
})

export default router;
