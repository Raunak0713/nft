import '@/styles/globals.css'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import { Sepolia } from "@thirdweb-dev/chains"

export default function App({ Component, pageProps }) {
  return <ThirdwebProvider desiredChainId={ChainId.Sepolia}>
    <Component {...pageProps} />
  </ThirdwebProvider>
}
