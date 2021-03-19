<template>
	<div class="wrap_box">
		<h2>마이페이지</h2>
		<div class="bx_bor">
			<div class="tab_inner">
				<router-link to="/">홈</router-link>
				<router-link to="/mypage">마이페이지</router-link>
			</div>
		</div>
		<news-view></news-view> <!-- PascalCase 표기법(파스칼 케이스) -->
	</div>
</template>

<script>
import NewsView from '@/components/list/NewsView.vue';

export default {
	components: {
		NewsView
	}
}
</script>

<style>

</style>

