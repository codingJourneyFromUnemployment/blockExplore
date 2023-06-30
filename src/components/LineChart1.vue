<template>
    <div class="container flex flex-row space-x-0 relative">
        <Line 
            :data="chartData" 
            :options="chartOptions"
            class="h-40 ml-0 pl-0 md:h-64">
        </Line>
    </div>
</template>

<script>
import { gasDataStore } from '@/store/piniaStore.js';
import { Line } from 'vue-chartjs'
import {Chart as ChartJS, Title, Legend, Tooltip, LineController, LinearScale, PointElement, LineElement, CategoryScale} from 'chart.js'
ChartJS.register(Title, Legend, Tooltip, LineController, LinearScale, CategoryScale, PointElement, LineElement)

export default {
    name: 'LineChart1',
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
                        label: 'Base Fee Per Gas (gwei)',
                        data: this.baseFeePerGasArr,
                        borderColor: 'hsl(12, 88%, 69%)',
                        backgroundColor: 'hsl(12, 88%, 69%)',
                        xAxisID: 'x',
                        yAxisID: 'y',
                        fill: false,
                    },
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
                            text:'gwei',
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
            await this.gasData.getBaseFeePerGasArr();
            this.chartData = {
                labels: this.gasData.blockNumberArray,
                datasets: [
                    {
                        label: 'Base Fee Per Gas (gwei)',
                        data: this.gasData.baseFeePerGasArray,
                        borderColor: 'hsl(12, 88%, 69%)',
                        fill: false,
                        xAxisID: 'x',
                        yAxisID: 'y',
                    },
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