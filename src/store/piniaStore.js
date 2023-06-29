import { defineStore } from 'pinia';
import { ethers } from 'ethers';

const gasDataStore = defineStore({
    id: 'gasDataStore',
    state: () => ({
        apiKey: import.meta.env.VITE_ALCHEMY_API_KEY,
        blockNumberArray: [],
        baseFeePerGasArray: [],
        gasUsagePercentArray: [],
    }),
    actions: {
        async getBlockNumberArr() {
            const provider = new ethers.providers.AlchemyProvider('homestead', this.apiKey);
            const latestBlockNumber = await provider.getBlockNumber();
            const blockNumberArray = [];
            for (let i = 0; i < 10; i++) {
                blockNumberArray.push(latestBlockNumber - i);
            }
            this.blockNumberArray = blockNumberArray;
        },
        async getBaseFeePerGasArr() {
            const provider = new ethers.providers.AlchemyProvider('homestead', this.apiKey)
            const baseFeePerGasArray = [];
            for (let i = 0; i < this.blockNumberArray.length; i++) {
                const block = await provider.getBlock(this.blockNumberArray[i]);
                let baseFeePerGas = block.baseFeePerGas.toNumber();
                baseFeePerGas = Number(ethers.utils.formatUnits(baseFeePerGas, 'gwei')).toFixed(2);
                baseFeePerGas = Number(baseFeePerGas);
                baseFeePerGasArray.push(baseFeePerGas);
            }
            this.baseFeePerGasArray = baseFeePerGasArray;
        },
        async getGasUsagePercentArr() {
            const provider = new ethers.providers.AlchemyProvider('homestead', this.apiKey)
            const gasUsagePercentArray = [];
            for (let i = 0; i < this.blockNumberArray.length; i++) {
                const block = await provider.getBlock(this.blockNumberArray[i]);
                const gasUsed = block.gasUsed.toNumber();
                const gasLimit = block.gasLimit.toNumber();
                let gasUsagePercent = (gasUsed / gasLimit) * 100;
                gasUsagePercent = Number(gasUsagePercent).toFixed(2);
                gasUsagePercent = Number(gasUsagePercent);
                gasUsagePercentArray.push(gasUsagePercent);
            }
            this.gasUsagePercentArray = gasUsagePercentArray;
        }
    }
})

export { gasDataStore }
