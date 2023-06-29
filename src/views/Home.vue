<template>
    <div class="home">
        <div>
            baseFeePerGasArr:{{ baseFeePerGasArr }}
        </div>
        <div>
            gasUsagePercentArr:{{ gasUsagePercentArr }}
        </div>
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
        const blockNumberArr = [];
        const baseFeePerGasArr = [];
        const gasUsagePercentArr = [];
        return {
            gasData,
            blockNumberArr,
            baseFeePerGasArr,
            gasUsagePercentArr,
        }
    },
    methods: {
        async fetchData() {
            await this.gasData.getBlockNumberArr();
            this.blockNumberArr = this.gasData.blockNumberArray;
            await this.gasData.getBaseFeePerGasArr();
            this.baseFeePerGasArr = this.gasData.baseFeePerGasArray;
            await this.gasData.getGasUsagePercentArr();
            this.gasUsagePercentArr = this.gasData.gasUsagePercentArray;
        }
        
    },
    computed: {
        
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