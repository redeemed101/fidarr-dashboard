import { Song } from "../../GraphQL/Generated/Songs/graphql"

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
export interface SongDataSource {
    getSongsPaginated(page : number, size:number): Promise<SongsPaginated>;
    getSongsPaging(page: number, size:number) : Promise<SongsPaging>;
    getSearchSongsPaging(searchText:string,page: number, size:number) : Promise<SearchSongsPaging>;
    createSong(request: CreateSongRequest,onUploadProgress: any) : Promise<CreateSongResponse>
}