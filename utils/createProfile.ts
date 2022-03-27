import { gql } from "@apollo/client"
import { apolloClient } from "./apollo"
import { getWalletAddress, signMessage } from "./ethers"
import { BigNumber, utils } from 'ethers';
import { pollUntilIndexed } from './has-transaction-been-indexed';


export const createProfileRequest = async (createProfileRequest: {
  handle: string;
  profilePictureUri?: string;
  followNFTURI?: string;
}) => {
    const res = await apolloClient.mutate({
    mutation: gql`
      mutation($request: CreateProfileRequest!) { 
        createProfile(request: $request) {
      ... on RelayerResult {
        txHash
      }
      ... on RelayError {
        reason
      }
			__typename
        }
      }
    `,
    variables: {
      request: createProfileRequest,
    },
    })
    console.log("createProfile", res);
    return res.data.createProfile;
}
  
export const createProfile = async (handle: string) => {
  const address = await getWalletAddress()
  console.log('create profile: address', address);

  const createProfileResult = await createProfileRequest({
    handle: handle,
  });

  const result = await pollUntilIndexed(createProfileResult.data.createProfile.txHash);
  const logs = result.txReceipt.logs;
  const topicId = utils.id(
    'ProfileCreated(uint256,address,address,string,string,address,bytes,string,uint256)'
  );
  const profileCreatedLog = logs.find((l: any) => l.topics[0] === topicId);
  let profileCreatedEventLog = profileCreatedLog.topics;
  const profileId = utils.defaultAbiCoder.decode(['uint256'], profileCreatedEventLog[1])[0];
  console.log('profile_id', BigNumber.from(profileId).toHexString());

  localStorage.setItem('profile_id', profileId);

  return profileId;
};