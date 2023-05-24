import { gql } from "@apollo/client";

export const QUERY_PLAYLISTS_BY_GENRE = gql`
query getFidarrPlaylistsPagingByGenre($page:Int!,$size:Int!, $genreId:String!){
    fidarrPlaylistsPagingByGenre(page:$page, size:$size, genreId:$genreId) {
       count
       playlists{
        name
        id
        imagePath
        streams
        songs{
          id
          path
          previewPath
          artworkPath
          lastUpdated
          releaseDate
          artist{
            id
            name
          }
          genres{
            name
            id
          }
          description
        }
      }
    }
  }
`
export const QUERY_PLAYLISTS = gql`
query getFidarrPlaylistsPaging($page:Int!,$size:Int!){
    fidarrPlaylistsPaging(page:$page, size:$size) {
       count
       playlists{
        name
        id
        imagePath
        streams
        songs{
          id
          path
          previewPath
          artworkPath
          lastUpdated
          releaseDate
          artist{
            id
            name
          }
          genres{
            name
            id
          }
          description
        }
      }
    }
  }
`