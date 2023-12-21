import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { mainnet,bsc, polygon,bscTestnet,optimism, base,avalanche,polygonZkEvm, goerli,sepolia,polygonMumbai,avalancheFuji,fantomTestnet, arbitrumGoerli,
  baseGoerli,polygonZkEvmTestnet,optimismGoerli,telosTestnet,arbitrum
} from 'wagmi/chains'

// 1. Get projectId
const projectId = 'ccab91ea8a4b1fd79836263a3f7ab7b6'

// 2. Create wagmiConfig
const chains = [mainnet,bsc, polygon, arbitrum,optimism, base, avalanche, polygonZkEvm,sepolia ,goerli,polygonMumbai,avalancheFuji,fantomTestnet,arbitrumGoerli,
  optimismGoerli,polygonZkEvmTestnet,baseGoerli,bscTestnet]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, appName: 'Web3Modal' })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

export default function App({ Component, pageProps }: AppProps) {

  return (
    <WagmiConfig config={wagmiConfig}>
      <Component {...pageProps} />
    </WagmiConfig>
  )
}


