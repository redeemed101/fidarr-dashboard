import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";
import { ALBUM_GRAPH_URL, ARTIST_GRAPH_URL, BASE_URL, GENRE_GRAPH_URL, SONG_GRAPH_URL } from "../../API/constant";
import { setContext } from '@apollo/client/link/context';
import { onError } from "@apollo/client/link/error";
import { tokenManager } from "../../API/token";

const authLink = setContext((_, { headers }) => {
    
    const token  = tokenManager.getToken()
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const resetTokenLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        switch (err.extensions.code) {
          // Apollo Server sets code to UNAUTHENTICATED
          // when an AuthenticationError is thrown in a resolver
          case "UNAUTHENTICATED":
            // Modify the operation context with a new token
            const oldHeaders = operation.getContext().headers;
            operation.setContext({
              headers: {
                ...oldHeaders,
                //authorization: getNewToken(),
              },
            });
            // Retry the request, returning the new observable
            return forward(operation);
        }
      }
    }
  
    // To retry on network errors, we recommend the RetryLink
    // instead of the onError link. This just logs the error.
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });

  const albumsQL = new HttpLink({
    uri: `${BASE_URL}${ALBUM_GRAPH_URL}`,
  })
  authLink.concat(albumsQL)

  export const graphQLAlbumClient = new ApolloClient({
    link:  ApolloLink.from([ errorLink, authLink,albumsQL])
    ,
    cache: new InMemoryCache(),
  });

  const artistQL = new HttpLink({
    uri: `${BASE_URL}${ARTIST_GRAPH_URL}`,
  })
  export const graphQLArtistClient = new ApolloClient({
    link:   ApolloLink.from([ errorLink, authLink,artistQL]),
    cache: new InMemoryCache(),

  });

  const genreQL = new HttpLink({
    uri: `${BASE_URL}${GENRE_GRAPH_URL}`,
  })
  export const graphQLGenreClient = new ApolloClient({
    link:   ApolloLink.from([ errorLink, authLink,genreQL])
    ,
    cache: new InMemoryCache(),
  });

  const songQL = new HttpLink({
    uri: `${BASE_URL}${SONG_GRAPH_URL}`,
  })
  export const graphQLSongClient = new ApolloClient({
    link:   ApolloLink.from([ errorLink, authLink,songQL])
    ,
    cache: new InMemoryCache(),
  });


  