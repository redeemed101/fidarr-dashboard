import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";
import { ALBUM_GRAPH_URL, ARTIST_GRAPH_URL, BASE_URL, GENRE_GRAPH_URL, SONG_GRAPH_URL } from "../../API/constant";



/*const artistsQL = new HttpLink({
    uri: 'https://9ee7-102-70-3-142.ngrok-free.app/api/artistql',
  })
  const genreQL = new HttpLink({
    uri: 'https://9ee7-102-70-3-142.ngrok-free.app/api/genreql',
  })*/
  const albumsQL = new HttpLink({
    uri: `${BASE_URL}${ALBUM_GRAPH_URL}`,
  })
  export const graphQLAlbumClient = new ApolloClient({
    link: albumsQL
    ,
    cache: new InMemoryCache(),
  });

  const artistQL = new HttpLink({
    uri: `${BASE_URL}${ARTIST_GRAPH_URL}`,
  })
  export const graphQLArtistClient = new ApolloClient({
    link: artistQL
    ,
    cache: new InMemoryCache(),
  });

  const genreQL = new HttpLink({
    uri: `${BASE_URL}${GENRE_GRAPH_URL}`,
  })
  export const graphQLGenreClient = new ApolloClient({
    link: genreQL
    ,
    cache: new InMemoryCache(),
  });

  const songQL = new HttpLink({
    uri: `${BASE_URL}${SONG_GRAPH_URL}`,
  })
  export const graphQLSongClient = new ApolloClient({
    link: songQL
    ,
    cache: new InMemoryCache(),
  });


  