<template>
	<div>
		<!-- 여기에 템플릿을 작성할 것입니다.  -->
		<table class="tbl">
			<thead>
				<tr>
					<th>곰믹스 프로 / 별칭</th>
				</tr>
			</thead>
			<tbody>
				<!-- v-for="<요소> in <배열 또는 객체>" -->
				<!-- <tr v-for="item in lists" :key="item.id"> 
					<td>
						<strong>{{ item.id }}</strong>
					</td>
					<td>
						<strong>{{ item.comment }}</strong>
					</td>
				</tr> -->
			</tbody>
		</table>
		<div class="pop_footer">
			<div class="btn_wrap">
				<button type="button" class="btn">다운로드</button>
			</div>
		</div>
		<div>
			<div v-for="item in ask" :key="item.title">{{ item.title }}</div>
		</div>
	</div>
</template>

<script>
import { fetchAskList } from '@/api/index.js';

export default {
	data() {
		return {
			ask: []
		}
	},
	methods: {
		// 사용할 메서드
	},
	created() {
		fetchAskList()
			.then( response => this.ask = response.data )
			.catch();
	},
}

</script>

<style>

</style>