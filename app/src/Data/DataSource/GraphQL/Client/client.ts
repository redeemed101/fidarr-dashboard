import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";
import { ALBUM_GRAPH_URL, ARTIST_GRAPH_URL, BASE_URL, GENRE_GRAPH_URL, SONG_GRAPH_URL } from "../../API/constant";
import { setContext } from '@apollo/client/link/context';
import { useToken } from "../../API/token";

const authLink = setContext((_, { headers }) => {
    
    const {tokenObj } = useToken()
    return {
      headers: {
        ...headers,
        authorization: tokenObj ? `Bearer ${tokenObj.token}` : "",
      }
    }
  });

  const albumsQL = new HttpLink({
    uri: `${BASE_URL}${ALBUM_GRAPH_URL}`,
  })
  authLink.concat(albumsQL)

  export const graphQLAlbumClient = new ApolloClient({
    link:  authLink.concat(albumsQL)
    ,
    cache: new InMemoryCache(),
  });

  const artistQL = new HttpLink({
    uri: `${BASE_URL}${ARTIST_GRAPH_URL}`,
  })
  export const graphQLArtistClient = new ApolloClient({
    link:  authLink.concat(artistQL),
    cache: new InMemoryCache(),

  });

  const genreQL = new HttpLink({
    uri: `${BASE_URL}${GENRE_GRAPH_URL}`,
  })
  export const graphQLGenreClient = new ApolloClient({
    link:  authLink.concat(genreQL)
    ,
    cache: new InMemoryCache(),
  });

  const songQL = new HttpLink({
    uri: `${BASE_URL}${SONG_GRAPH_URL}`,
  })
  export const graphQLSongClient = new ApolloClient({
    link:  authLink.concat(songQL)
    ,
    cache: new InMemoryCache(),
  });


  