<template>
	<div>
		<slick ref="slick" :options="slickOptions" class="slide">
			<a v-for="item in users" :key="item.title" href="">
				{{ item.title }}
				<!-- <img :src="item.itemUrl" /> -->
			</a>
		</slick>
	</div>
</template>

<script>
import Slick from 'vue-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import { fetchNewsList } from '@/api/index.js';

export default {
	components: {
		Slick
	},
	data() {
		return {
			slickOptions: {
				infinite: true,
				slidesToShow: 3,
				dots: false,
				arrows: true,
				prevArrow: '<button type="button" class="prev_btn">앞으로</button>',
				nextArrow: '<button type="button" class="next_btn">뒤로</button>',
			}
		}
	},
	//인스턴스가 작성된 후 동기적으로 호출 (라이플 사이클 훅) created : funtion()의 줄임 형태
	created() { 
		fetchNewsList
			.then( response => this.users = response.data )
			.catch(); //에러 핸드링을 하는곳
	},
}

</script>

<style lang="scss">
@import '@/styles/_reset.scss';
@import '@/styles/_mixin.scss';

.slide {
	position: relative;
	width: 100%;
	.slick-list {
		padding: 20px 7.8%; 
		border-radius: 12px;
		overflow: hidden;
	}
	.slick-slide {
		display: inline-block;
		height: 100%;
		min-height: 1px;
	}
}
.prev_btn, .next_btn {
	@include blind;
	@include set_content(70px, 70px);
	position: absolute;
	top: calc(50% - 35px);
	z-index: 5;
}
.prev_btn {
	background: url('https://www.gomlab.com/gomlab_v2/ui/gommarket/img/common/slide_btn_pre.png?v=1') no-repeat center center;
	left: 30px;
}
.next_btn {
	background: url('https://www.gomlab.com/gomlab_v2/ui/gommarket/img/common/slide_btn_next.png?v=1') no-repeat center center;
	right: 30px;
}
</style>