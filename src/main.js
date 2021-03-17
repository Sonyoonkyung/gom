import Vue from 'vue';
import App from './App.vue';

// 라우터
import router from './router/index.js'

new Vue({ // 루트 컴포넌트
  router,
  render: h => h(App)
}).$mount('#app')
//라우터

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

