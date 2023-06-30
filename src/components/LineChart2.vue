<template>
    <div class="container">
        <Line 
            :data="chartData" 
            :options="chartOptions"
            class="h-40 md:h-64">
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
                        label: 'Gas Usage Percentage (%)',
                        data: this.gasUsagePercentArr,
                        borderColor: 'hsl(228, 39%, 23%)',
                        backgroundColor: 'hsl(228, 39%, 23%)',
                        xAxisID: 'x',
                        yAxisID: 'y',
                        fill: false,
                    }
                ]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                scales:{
                    x:{
                        title:{
                            display:true,
                            text:'Block Number',
                            align: 'start',
                            font: {
                                size: 10,
                            },
                        },
                    },
                    y:{
                        title:{
                            display:true,
                            text:'percentage',
                            align: 'end',
                            font: {
                                size: 10,
                            },
                        },
                    },
                }
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
                        label: 'Gas Usage Percentage (%)',
                        data: this.gasData.gasUsagePercentArray,
                        borderColor: 'hsl(228, 39%, 23%)',
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