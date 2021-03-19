import Vue from 'vue';
import App from './App.vue';

// 변수를 불러오는거니까 { } 요놈으로 감싸줘야한다.
import { router } from './router/index.js'
import { store } from './store/index.js'


new Vue({ // 루트 컴포넌트
  render: h => h(App),
	router, // router: router 와 같은 말인 축약형 ES6 문법
	store,
}).$mount('#app')


var STORAGE_KEY = 'todos-vuekr-demo'
var todoStorage = {
  fetch: function() {
    var todos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    todos.forEach(function(todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

Vue.config.productionTip = false

