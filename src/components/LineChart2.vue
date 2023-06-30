<template>
    <div class="container">
        <Line 
            :data="chartData" 
            :options="chartOptions">
        </Line>
    </div>
</template>

<script>
import { gasDataStore } from '@/store/piniaStore.js';
import { Line } from 'vue-chartjs'
import {Chart as ChartJS, Title, Legend, Tooltip, LineController, LinearScale, PointElement, LineElement, CategoryScale} from 'chart.js'
ChartJS.register(Title, Legend, Tooltip, LineController, LinearScale, CategoryScale, PointElement, LineElement)

export default {
    name: 'LineChart2',
    components: {
        Line,
    },
    data() {
        const gasData = gasDataStore();
        return {
            gasData,
            chartData: {
                labels: this.blockNumberArr,
                datasets: [
                    {
                        label: 'Gas Usage Percentage %',
                        data: this.gasUsagePercentArr,
                        borderColor: '#05CBE1',
                        fill: false,
                    }
                ]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
            }
        }
    },
    methods: {
        async fetchData() {
            await this.gasData.getBlockNumberArr();
            await this.gasData.getGasUsagePercentArr();
            this.chartData = {
                labels: this.gasData.blockNumberArray,
                datasets: [
                    {
                        label: 'Gas Usage Percentage %',
                        data: this.gasData.gasUsagePercentArray,
                        borderColor: '#05CBE1',
                        fill: false,
                    }
                ]
            }
        } 
    },
    async created() {
        while(true) {
            await this.fetchData();
            await new Promise(resolve => setTimeout(resolve, 1200));
        }
    },
}

</script>

<style scoped>

</style>