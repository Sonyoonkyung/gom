<template>
	<div class="wrap_box">
		<h2>핫이슈</h2>
		<router-link to="/mypage">마이페이지</router-link>
		<todo-list></todo-list>
	</div>
</template>

<script>
import TodoList from '@/components/list/TodoList.vue';

export default {
	components: {
		TodoList
	}
}
</script>

<style>

</style>
