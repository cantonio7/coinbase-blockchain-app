import '../styles/globals.css'
import { ThirdwebWeb3Provider } from '@thirdweb-dev/sdk'

const supportedChains = [4, 80001]
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
