import { useAccount, useConnect } from 'wagmi'

export const Connect = () => {
  const [{ data: connectData, error: connectError }, connect] = useConnect()
  const [{ data: accountData }, disconnect] = useAccount({
  })

  if (accountData) {
    return (
      <div>
        <div>
            {accountData.address}
        </div>
        <div>Connected to {accountData.connector.name}</div>
        <button onClick={disconnect}>Disconnect</button>
      </div>
    )
  }

  return (
      <div>
          <button className="font-bold bg-white text-primary-500 border border-primary-500 pt-2 pb-2 pl-5 pr-5 mb-2 rounded-md hover:bg-primary-500 hover:text-white">
              <div className='flex flex-row'>
              Connect to:
          
            {connectData.connectors.map((connector) => (
                <button
                    disabled={!connector.ready}
                    key={connector.id}
                    onClick={() => connect(connector)}
                    >
                    {connector.name === 'MetaMask' ? <img
                        src={"/icons/metamask.svg"}
                        draggable={false}
                        className="w-6 ml-2 hover:bg-primary-800 rounded"
                        alt={"metamask"}
                    /> : ""}
                    {connector.name === 'WalletConnect' ? <img
                        src={"/icons/walletconnect.svg"}
                        draggable={false}
                        className="w-6 ml-2 hover:bg-primary-800 rounded"
                        alt={"metamask"}
                    /> : ""}
                    {connector.name === 'Coinbase Wallet' ? <img
                        src={"/icons/coinbase.svg"}
                        draggable={false}
                        className="w-6 ml-2 hover:bg-primary-800 rounded"
                        alt={"metamask"}
                    /> : ""}
                    {/* {connector.name === 'WalletConnect' ? walletconnect : ""}
                    {connector.name === 'Coinbase' ? coinbase: ""} */}
                    
                    {!connector.ready && ' (unsupported)'}
                </button>
            ))}
                  </div>
          </button>

      {connectError && <div>{connectError?.message ?? 'Failed to connect'}</div>}
    </div>
  )
}