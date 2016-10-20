import ApolloClient, {
  createNetworkInterface,
  addTypeName,
} from 'apollo-client';
const baseUrl = typeof process.env.BASE_URL !== 'undefined' ?
  process.env.BASE_URL : 'https://udacity-api.herokuapp.com/';
const productionUrl = `${baseUrl}graphql`;

const client = new ApolloClient({
  networkInterface: createNetworkInterface(productionUrl),
  initialState: typeof window !== 'undefined' ? window.__APOLLO_STATE__ : null,
  queryTransformer: addTypeName,
});

export default client;
