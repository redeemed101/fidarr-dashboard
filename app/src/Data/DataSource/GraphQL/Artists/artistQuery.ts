
import { gql } from '@apollo/client';

export const QUERY_ARTISTS_PAGINATED = gql`query getArtistsPaginated($page:Int!,$size:Int!){
    artistsPaginated(page:$page,size:$size){
        id
        name
        userId
        imagePath
        isProfileClaimed
    }
}`