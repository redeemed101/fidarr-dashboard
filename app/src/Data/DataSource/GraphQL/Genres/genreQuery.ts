import { gql } from '@apollo/client';

export const QUERY_GENRES_PAGINATED = gql`query getGenres{
    genres{
        id,
        name
    }
}`


export const QUERY_GENRE_ALBUMS_PAGINATED = gql`query getGenreAlbumsPaginated($id:String, $page:Int, $size :Int){
    genre(id: $id){
        id
        name
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