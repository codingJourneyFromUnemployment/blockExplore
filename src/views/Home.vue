<template>
    <div class="container max-w-full flex flex-col justify-center items-center space-y-6 md:flex-row md:justify-between md:space-x-6 md:space-y-0">
        <LineChart1></LineChart1>
        <LineChart2></LineChart2>
    </div>
</template>

<script>
import LineChart1 from '@/components/LineChart1.vue';
import LineChart2 from '@/components/LineChart2.vue';

export default {
    name: 'Header',
    components: {
        LineChart1,
        LineChart2,
    },
}

</script>

<style scoped>

</style>

