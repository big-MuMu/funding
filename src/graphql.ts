import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
  import { setContext } from '@apollo/client/link/context';

  const httpLink = createHttpLink({
    uri: 'http://47.102.99.172:8080/nc/funding_9u0a/v1/graphql?',
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        'xc-auth': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InpoYW5nc2VuLm1haWxAZ21haWwuY29tIiwiZmlyc3RuYW1lIjpudWxsLCJsYXN0bmFtZSI6bnVsbCwiaWQiOjEsInJvbGVzIjoidXNlciIsImlhdCI6MTY0MTM0OTk5NH0.ZZ123KXYxvwPuX6_uj510aCObBxauYZ6uzo9RBbwa7A",
      }
    }
  });

  const client = new ApolloClient({
    // uri: 'http://47.102.99.172:8080/nc/funding_9u0a/v1/graphql?',
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
  });

  export { client };
