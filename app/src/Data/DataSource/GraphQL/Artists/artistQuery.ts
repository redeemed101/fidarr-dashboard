
import { gql } from '@apollo/client';

export const QUERY_ARTISTS_PAGINATED = gql`query getArtistsPaginated($page:Int!,$size:Int!){
    artistsPaginated(page:$page,size:$size){
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
}`