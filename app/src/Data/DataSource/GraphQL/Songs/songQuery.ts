import { gql } from '@apollo/client';

export const QUERY_SONG_PAGINATED = gql`query getSongPaginated($page:Int!,$size:Int!){
    songsPaginated(page:$page,size:$size){
       
        id
        name
        path
        artworkPath
        artist{
            name
            id                
        }
        likes{
            userId
        }
        streams{
            id
        }
        featurungArtists{
            id
            name
            imagePath
        }
        genres{
            id
            name
        }
    
 }
} 

`