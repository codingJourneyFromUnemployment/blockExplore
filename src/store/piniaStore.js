import { defineStore } from 'pinia';
import { ethers } from 'ethers';

const gasDataStore = defineStore({
    id: 'gasDataStore',
    state: () => ({
        blockNumberArray: [],
        baseFeePerGasArray: [],
        blockGasUsedArray: [],
        blockGasLimitArray: [],
        gasUsagePercentArray: [],
    }),
    actions: {
        async getBlocks() {
            
        }
    }
})

export { gasDataStore }
