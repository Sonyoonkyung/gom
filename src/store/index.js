import Vue from 'vue';
import Vuex from 'vuex'; // vuex란?  상태관리 도구이다. 상태 ->  여러 컴포너트간에 사용되는 데이터 속성

Vue.use(Vuex); //vuex라는 플러그인을 사용한다.?

export const store = new Vuex.store({
	state: {
		news: [

		]
	}, 
	getters, mutations, actions,
});