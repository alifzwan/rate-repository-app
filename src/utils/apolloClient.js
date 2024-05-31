import { ApolloClient, InMemoryCache } from '@apollo/client';


const createApolloClient = () => {
  return new ApolloClient({
    uri: 'http://172.29.183.39:4000/graphql',
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;