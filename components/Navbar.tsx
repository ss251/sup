import { Provider, chain, defaultChains } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { WalletLinkConnector } from 'wagmi/connectors/walletLink'
import Link from 'next/link'

import { Connect } from './Connect'

const infuraId = process.env.INFURA_ID

const Navbar = () => {

  const chains = defaultChains

  const connectors = ({ chainId }) => {
  const rpcUrl =
    chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
    chain.polygonTestnetMumbai.rpcUrls[0]
  return [
    new InjectedConnector({
      chains,
      options: { shimDisconnect: true },
    }),
    new WalletConnectConnector({
      options: {
        infuraId,
        qrcode: true,
      },
    }),
    new WalletLinkConnector({
      options: {
        appName: 'My wagmi app',
        jsonRpcUrl: `${rpcUrl}/${infuraId}`,
      },
    }),
  ]
}

  return (
    <div>
      <nav className="flex flex-row justify-between items-center flex-wrap pt-2 pl-6 pr-6 bg-black">
        <h1 className="font-bold text-5xl mb-4 text-warning-600"><Link href="/"><img className='w-32' src='/icons/Logo.png'></img></Link></h1>
        <Provider autoConnect connectors={connectors}><div><Connect/></div></Provider>
      </nav>
    </div>
  );
};

export default Navbar;
