import ApolloClient, {
  createNetworkInterface,
  addTypeName,
} from 'apollo-client';
const productionUrl = 'https://udacity-api.herokuapp.com/graphql';

const client = new ApolloClient({
  networkInterface: createNetworkInterface(productionUrl),
  queryTransformer: addTypeName,
});

export default client;
