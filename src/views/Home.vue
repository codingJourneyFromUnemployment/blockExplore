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
        
    },
    computed: {
        
    },
    async created() {
        await this.gasData.getBlockNumberArr();
        this.blockNumberArr = this.gasData.blockNumberArray;
        await this.gasData.getBaseFeePerGasArr();
        this.baseFeePerGasArr = this.gasData.baseFeePerGasArray;
        await this.gasData.getGasUsagePercentArr();
        this.gasUsagePercentArr = this.gasData.gasUsagePercentArray;
    },
}

</script>

<style scoped>

</style>