import { Song } from "../../GraphQL/Generated/Songs/graphql"
import { GeneralResponse } from "../../Users/Authentication/AuthenticationDataSource"

export interface SongsPaginated {
    songsPaginated : Song[]
}
export interface SongsPaging {
   
    songsPaging : SongPage
}
export interface SearchSongsPaging {
   
    searchSongsPaging : SongPage
}
export interface SongPage{
    count: number,
    songs : Song[]
}
export interface CreateSongRequest{
    name : string,
    description: string,
    artistId: string,
    featuringArtists?: string[],
    genres?: string[],
    albumId?: string,
    previewFile?: File
    artworkFile?: File,
    songFile : File,
    releaseDate: Date
}
export interface CreateSongResponse{
    name : string,
    path: string,
    artworkPath: string,
    id : string
}

export interface EditSongRequest{
    name : string,
    songId: string,
    description: string,
    artistId: string,
    featuringArtists?: string[],
    genres?: string[],
    albumId?: string,
    previewFile?: File
    artworkFile?: File,
    songFile : File,
    releaseDate: Date
}
export interface EditSongResponse{
    name : string,
    path: string,
    artworkPath: string,
    id : string
}
export interface SongDataSource {   
    getSongsPaging(page: number, size:number) : Promise<SongsPaging>;
    getSearchSongsPaging(searchText:string,page: number, size:number) : Promise<SearchSongsPaging>;
    createSong(request: CreateSongRequest,onUploadProgress: any) : Promise<CreateSongResponse>
    editSong(request: EditSongRequest,onUploadProgress: any) : Promise<EditSongResponse>
    deleteSong(songId: string): Promise<GeneralResponse>
}