import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from "@apollo/client"

const httpLink = new HttpLink({ uri: process.env.LENS_API });

const authLink = new ApolloLink((operation, forward) => {
  const token = JSON.parse(localStorage.getItem('accessToken'));
  operation.setContext({
    headers: {
      'x-access-token': token ? `Bearer ${token.accessToken}` : ''
    }
  });
  return forward(operation);
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
