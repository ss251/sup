import { useAccount, useConnect, useSignMessage } from 'wagmi'
import { gql, useLazyQuery, useMutation } from '@apollo/client'
import { login } from "../utils/login"
import { createProfile } from '../utils/createProfile'
import { getProfile } from '../utils/getProfiles'
import { useState, useEffect } from 'react'
import truncateEthAddress from 'truncate-eth-address'

export const Connect = () => {
  const [{ data: connectData, error: connectError }, connect] = useConnect()
  const [{ data: accountData }, disconnect] = useAccount({
  })
    const [signedIn, setSignedIn] = useState(typeof window !== 'undefined' && localStorage.getItem("accessToken") !== null)
    const [profileExists, setProfileExists] = useState(typeof window !== 'undefined' && localStorage.getItem("profile_id") !== null)
    const handle= "lfgrowhackathontwenty" //update
    
    const logout = () => {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("profile")
        localStorage.removeItem("profile_id")
        window.location.reload()
        disconnect()
    }

    const signin = async () => {
        await login()
        setSignedIn(true)
        await getProfile({ownedBy: accountData.address})
        typeof window !== 'undefined' && localStorage.getItem("profile_id") !== null && setProfileExists(true)
    }
    

  if (accountData) {
    return (
        <div className='flex flex-row'>
        {signedIn && profileExists && <p className='text-warning-500 mt-2 mr-2 truncate overflow-hidden'>{ truncateEthAddress(accountData.address) }({localStorage.getItem("profile_id")})</p>}
        {connectData.connected && !(signedIn) && <button className='font-bold bg-white text-primary-500 border border-primary-500 pt-2 pb-2 pl-5 pr-5 mb-2 rounded-md hover:bg-primary-500 hover:text-white' onClick={signin}>Sign in</button>}
        { signedIn &&  <button className='font-bold bg-white text-primary-500 border border-primary-500 pt-2 pb-2 pl-5 pr-5 mb-2 rounded-md hover:bg-primary-500 hover:text-white' onClick={logout}>Disconnect</button>}
        { signedIn && !profileExists && <button className='font-bold bg-white text-primary-500 border border-primary-500 pt-2 pb-2 pl-5 pr-5 mb-2 rounded-md hover:bg-primary-500 hover:text-white' onClick={ () => {createProfile(handle)} }>Create Profile</button>}
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