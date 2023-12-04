
import { baseAddresses } from 'op-viem/chains'

export const customL2Chains = {
  // Base
  8453: {
chainId: 8453,
  l1ChainId: 1,
  l1Addresses: baseAddresses,
  l2Addresses: {
    l2L1MessagePasserAddress: { address: '0x4200000000000000000000000000000000000016', chainId: 8453 },
    l2StandardBridge: { address: '0x4200000000000000000000000000000000000010', chainId: 8453 },
  },
  },
} as const