
   
import { gql } from "@apollo/client"
import { apolloClient } from "./apollo"
import { getWalletAddress } from "./ethers";

const GET_PROFILES = `
  query($request: ProfileQueryRequest!) {
    profiles(request: $request) {
      items {
        id
        name
        bio
        location
        website
        twitterUrl
        picture {
          ... on NftImage {
            contractAddress
            tokenId
            uri
            verified
          }
          ... on MediaSet {
            original {
              url
              mimeType
            }
          }
          __typename
        }
        handle
        coverPicture {
          ... on NftImage {
            contractAddress
            tokenId
            uri
            verified
          }
          ... on MediaSet {
            original {
              url
              mimeType
            }
          }
          __typename
        }
        ownedBy
        depatcher {
          address
          canUseRelay
        }
        stats {
          totalFollowers
          totalFollowing
          totalPosts
          totalComments
          totalMirrors
          totalPublications
          totalCollects
        }
        followModule {
          ... on FeeFollowModuleSettings {
            type
            amount {
              asset {
                symbol
                name
                decimals
                address
              }
              value
            }
            recipient
          }
          __typename
        }
      }
      pageInfo {
        prev
        next
        totalCount
      }
    }
  }
`;

export interface ProfilesRequest {
  profileIds?: string[];
  ownedBy?: string;
  handles?: string[];
  whoMirroredPublicationId?: string;
}

export interface Profile {
  id: string
  name: string
  bio: string
  location: string
  website: string
  twitterUrl: string
  picture: string
  handle: string
  coverPicture: string
  ownedBy: string
  depatcher: {
    address: string
  }
  stats: {
    totalFollowers: number
    totalFollowing: number
    totalPosts: number
    totalComments: number
    totalMirrors: number
    totalPublications: number
    totalCollects: number
  }
  followModule: null
}

const getProfilesRequest = (request: ProfilesRequest) => {
  return apolloClient.query({
    query: gql(GET_PROFILES),
    variables: {
      request,
    },
  });
};

export const getProfile = async (request?: ProfilesRequest): Promise<Profile> => {
  const address = await getWalletAddress();
  console.log('profiles: address', address);

  if (!request) {
    request = { ownedBy: address };
  }
  const response = await getProfilesRequest(request);
  const profile = response.data.profiles.items[0];
  console.log('profiles: result', profile);

  if (profile != null) {
    localStorage.setItem('profile_id', profile.id);
  }

  return profile;
};