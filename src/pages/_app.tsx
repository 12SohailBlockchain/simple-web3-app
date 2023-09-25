import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { bsc, goerli, mainnet, polygon } from 'wagmi/chains'

// 1. Get projectId
const projectId = 'cdbd18f9f96172be74c3e351ce99b908'

// 2. Create wagmiConfig
const chains = [mainnet, goerli, bsc, polygon]
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