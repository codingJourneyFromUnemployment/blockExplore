import { ethers } from 'ethers';

const apiKey = "3Xvh92nTS77uwrZ6Jle23gRZZrJtMtqf"
const provider = new ethers.providers.AlchemyProvider('homestead', apiKey);
const latestBlockNumber = await provider.getBlockNumber()
const block = await provider.getBlock(latestBlockNumber)

const baseFeePerGasInWei = block.baseFeePerGas.toNumber()
console.log(baseFeePerGasInWei)

const baseFeePerGasInGwei = Number(ethers.utils.formatUnits(baseFeePerGasInWei, 'gwei')).toFixed(2)
console.log(baseFeePerGasInGwei)
