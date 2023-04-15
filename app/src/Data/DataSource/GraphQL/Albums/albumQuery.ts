
import { gql } from '@apollo/client';

export const QUERY_ALBUMS_PAGINATED = gql`query getAlbumsPaginated($page:Int,$size:Int){
    albumsPaginated(page:$page,size:$size){
        id
        name
        artworkPath
        path
        likes{
            userId
        }
        songs{
            id
            name
            path
            artworkPath
            artist{
                name
                imagePath
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
}`