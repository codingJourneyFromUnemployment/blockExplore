import { defineStore } from 'pinia';

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

    }
})

export { gasDataStore }
