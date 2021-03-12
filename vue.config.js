module.exports = {
	css: {
		loaderOptions: {
			sass: {
				//전역으로 적용
				prependData: ` 
				@import "@/styles/_variable.scss"; 
				`,
			}
		}
	}
}