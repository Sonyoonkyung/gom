<template>
	<div>
		<slick class="slide hot" ref="slick" :options="slickOptions">
			<a href="http://placehold.it/200x100"><img src="http://placehold.it/200x100" alt=""></a>
      <a href="http://placehold.it/200x100"><img src="http://placehold.it/200x100" alt=""></a>
      <a href="http://placehold.it/200x100"><img src="http://placehold.it/200x100" alt=""></a>
      <a href="http://placehold.it/200x100"><img src="http://placehold.it/200x100" alt=""></a>
      <a href="http://placehold.it/200x100"><img src="http://placehold.it/200x100" alt=""></a>
		</slick>
	</div>
</template>

<script>
import Slick from 'vue-slick';

export default {
	components: {
		Slick
	},
	data() {
		return {
			slickOptions: {
				slideToShow: 3,
				dots: false,
				prevArrow: '<button type="button" class="prev_btn">앞으로</button>',
				nextArrow: '<button type="button" class="next_btn">뒤로</button>',
			}
		}
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
		border-radius: 12px;
		overflow: hidden;
	}
	.slick-slide {
		float: left;
		height: 100%;
		min-height: 1px;
	}
}
.prev_btn, .next_btn {
	@include blind;
	@include set_content(70px, 70px);
	position: absolute;
	top: 50%;
	z-index: 5;
}
.prev_btn {
	background: url('https://www.gomlab.com/gomlab_v2/ui/gommarket/img/common/slide_btn_pre.png?v=1') 50% 100% no-repeat;
	left: 30px;
}
.next_btn {
	background: url('https://www.gomlab.com/gomlab_v2/ui/gommarket/img/common/slide_btn_next.png?v=1') 50% 100% no-repeat;
	right: 30px;
}
</style>