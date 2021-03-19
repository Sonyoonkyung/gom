<template>
	<div id="my_page">
		<h3>내 정보</h3>
			<div class="bx_myinfo" v-for="item in users" :key="item.id">
				<div class="bx_left">
					{{ item.title }}
					<strong>{{ item.id }}</strong>
				</div>
				<div class="bx_right">
					<span>{{ item.users }}</span> <strong>{{ item.points }}</strong><br>
					<span>{{ item.users }}</span> <strong>{{ item.points }}</strong>
				</div>
			</div>
	</div>
</template>

<script>
import { fetchNewsList } from '@/api/index.js';

export default {
		data() {
		return {
			users: []
		}
	},
	
	created() {  // 속성에 함수가 붙으면(예를 들면 created: function(){} 요놈) 줄여서 쓴다. ES6 축약문법.
		fetchNewsList()
			.then( response => this.users = response.data )
			.catch(); //에러 핸드링을 하는곳
	},
}

</script>

<style lang="scss">
@import '@/styles/_reset.scss';
@import '@/styles/_mixin.scss';
#my_page {
	width: 1130px;
	margin: 0 auto;
}
.bx_myinfo {
	padding: 40px;
	border: 1px solid $color4;
	border-radius: 0 30px;
	box-sizing: border-box;
	color: $color1;
	strong {color: $black;}
	.bx_left {
		display: inline-block;
		padding-right: 50px;
		margin-right: 40px;
		border-right: 1px solid $color4;
		vertical-align: middle;
		strong {
			@include ellipsis();
			display: block;
			width: 300px;
			margin-top: 10px;
			font-size: 18px;
		}
	}
	.bx_right {
		display: inline-block;
		vertical-align: middle;
		em {color: $point;}
		span {
			display: inline-block;
			width: 180px;
			margin-bottom: 15px;
			&:last-of-type {margin-bottom:0;}
		}
	}
}

</style>