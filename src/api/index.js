import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
	baseUrl: 'https://api.hnpwa.com/v0/' // 기본적으로 중복되는 url 주소 부분
};

// 2. API 함수들을 정리
function fetchNewsList() {
	return axios.get(`${config.baseUrl}news/1.json`); // 나머지 주소
}
function fetchAskList(userData) {
	//return 을 해줘야지 fetchAskList 를 호출하고 이후 비동기 동작을 수행
	return axios.post(`${config.baseUrl}ask/1.json`, userData);
}


export {
	fetchNewsList,
	fetchAskList
}