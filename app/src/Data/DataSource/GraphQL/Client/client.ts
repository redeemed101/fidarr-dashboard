import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";



/*const artistsQL = new HttpLink({
    uri: 'https://9ee7-102-70-3-142.ngrok-free.app/api/artistql',
  })
  const genreQL = new HttpLink({
    uri: 'https://9ee7-102-70-3-142.ngrok-free.app/api/genreql',
  })*/
  const albumsQL = new HttpLink({
    uri: 'https://9ee7-102-70-3-142.ngrok-free.app/api/albumql',
  })
  export const graphQLclient = new ApolloClient({
    link: albumsQL
    ,
    cache: new InMemoryCache(),
  });

  