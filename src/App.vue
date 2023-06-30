<template>
	<Header></Header>
	<div>
		<router-view></router-view>
	</div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
	name: 'App',
	components: {
		Header
	},
	data() {
		return {

		}
	},
	methods: {
		
	},
	computed: {
		
	},
	mounted() {
		
	}
}

</script>


<style scoped></style>
