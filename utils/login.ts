import { gql } from "@apollo/client"
import { apolloClient } from "./apollo"
import { getWalletAddress, signMessage } from "./ethers"


export const generateChallenge = async (address: string): Promise<string> => {
   const res = await apolloClient.query({
    query: gql`
      query($request: ChallengeRequest!) {
        challenge(request: $request) { text }
      }
    `,
    variables: {
      request: {
        address,
      },
    },
  })
  console.log("generateChallenge", res)
  return res.data.challenge.text
}

export const authenticate = async (address: string, signature: string): Promise<{accessToken: string, refreshToken: string}> => {
  const res = await apolloClient.mutate({
    mutation: gql`
      mutation($request: SignedAuthChallenge!) { 
        authenticate(request: $request) {
          accessToken
          refreshToken
        }
      }
    `,
    variables: {
      request: {
        address,
        signature,
      },
    },
  })
  console.log("authenticate", res)
  return res.data.authenticate
}

export const login = async () => {
  const address = await getWalletAddress()
  const challengeText = await generateChallenge(address)
  const signature = await signMessage(challengeText)
  const accessTokens = await authenticate(address, signature)
  localStorage.setItem('accessToken', JSON.stringify(accessTokens))
  console.log(accessTokens)
  return accessTokens
}