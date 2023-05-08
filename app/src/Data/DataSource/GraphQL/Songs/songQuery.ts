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
export const QUERY_SEARCH_SONG_PAGING = gql`query getSearchSongsPaging($page:Int!,$size:Int!,$searchWord:String!){
searchSongsPaging(page:$page,size:$size,searchWord:$searchWord){
    count
    songs{
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
}
`
export const QUERY_SONG_PAGINING = gql`query getSongPaging($page:Int!,$size:Int!){
    songsPaging(page:$page,size:$size){
        count
        songs{
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
} 

`