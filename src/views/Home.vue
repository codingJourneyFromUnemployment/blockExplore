<template>
    <div class="home">
        Hello World!
    </div>
</template>

<script>
import { gasDataStore } from '@/store/piniaStore.js';

export default {
    name: 'Header',
    components: {
        
    },
    data() {
        const gasData = gasDataStore();
        return {
            gasData,
        }
    },
    methods: {
        
    },
    computed: {
        
    },
    created() {
        console.log('Home.vue created');        
    },
}

</script>

<style scoped>

</style>