<template>
	<div class="wrap_box">
		<h2>핫이슈</h2>
		<hot-issue></hot-issue> <!-- PascalCase 표기법(파스칼 케이스) -->
	</div>
</template>

<script>
import HotIssue from '@/components/list/HotIssue.vue';

export default {
	components: {
		HotIssue
	}
}
</script>

<style>

</style>
