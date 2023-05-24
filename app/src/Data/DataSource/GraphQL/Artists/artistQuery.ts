
import { gql } from '@apollo/client';


export const QUERY_SEARCH_PAGING_ARTISTS = gql`
query getSearchArtistsPaging($page:Int!,$size:Int!,$searchWord:String!){
  searchArtistsPaging(page:$page,size:$size,searchWord:$searchWord){
      count
     artists{
      id
      name
      imagePath
      isProfileClaimed
      lastUpdated
      dateCreated
      genres{
        id
        name
      }
    songs{
      
       id
       name
       path
       artworkPath
       streams{
        id
      }
    }
    albums{
       id
      name
      streams{
        id
      }
      artworkPath
      lastUpdated
      releaseDate
      dateCreated
    }
       
  }
}
}
`



export const QUERY_TRENDING_ARTISTS_PAGING = gql`query
 getTrendingArtistsPaging($page:Int!,$size:Int!){
  trendingArtistsPaging(page:$page, size:$size) {
    count
       artists{
       id
       name
       imagePath
       isProfileClaimed
       lastUpdated
       dateCreated
       genres{
         id
         name
       }
     songs{
       
         id
         name
         path
         artworkPath
         streams{
         id
       }
     }
     albums{
         id
       name
       streams{
         id
       }
       artworkPath
       lastUpdated
       releaseDate
       dateCreated
     }
         
   }
 }
}`
export const QUERY_ARTISTS_PAGING = gql`query getArtistsPaging($page:Int!,$size:Int!){
  artistsPaging(page:$page,size:$size){
        count
        artists{
        id
        name
        imagePath
        isProfileClaimed
        lastUpdated
        dateCreated
        genres{
          id
          name
        }
      songs{
        
          id
          name
          path
          artworkPath
          streams{
          id
        }
      }
      albums{
          id
        name
        streams{
          id
        }
        artworkPath
        lastUpdated
        releaseDate
        dateCreated
      }
          
    }
  }
}`