import { gql } from '@apollo/client';

export const QUERY_GENRES_PAGINATED = gql`query getGenres{
    genres{
          id
          name
          imageUrl
          lastUpdated
          dateCreated
          songs{
             id
             name
          }
          artists{
            id
            name
          }
          albums{
            id
            name
          }
        
    }
}`

export const QUERY_GENRE_PAGING = gql`query getGenresPaging($page:Int, $size :Int){
    genresPaging(page:$page,size:$size){      
        count
        genres{
          id
          name
          imageUrl
          lastUpdated
          dateCreated
          songs{
             id
             name
          }
          artists{
            id
            name
          }
          albums{
            id
            name
          }
        }
        
    }
}`

export const QUERY_GENRE_ALBUMS_PAGINATED = gql`query getGenreAlbumsPaginated($id:String, $page:Int, $size :Int){
    genre(id: $id){
        id
        name
        imageUrl
        lastUpdated
        dateCreated
    }
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
            }
            genres{
                id
                name
            }
        }
    }

}`


export const QUERY_GENRE_ARTISTS_PAGINATED = gql`query getGenreArtistsPaginated($id: String, $page:  Int, $size :  Int){
    genre(id: $id){
        id
        name
        imageUrl
        lastUpdated
        dateCreated
    }
    artistsPaginated(page:$page,size:$size){
        id
        name
        userId
        imagePath
        isProfileClaimed
    }

}`


export const QUERY_GENRE_SONGS_PAGINATED = gql`query getGenreSongsPaginated($id: String, $page:  Int, $size :  Int){
    genre(id: $id){
        id
        name
        imageUrl
        lastUpdated
        dateCreated
    }
    songsPaginated(page:$page,size:$size){
        id
        name
        path
        likes{
            userId
        }
        artworkPath
        artist{
            id
            name
        }
    }

}`