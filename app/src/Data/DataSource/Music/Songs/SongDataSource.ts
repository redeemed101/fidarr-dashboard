import { Song } from "../../GraphQL/Generated/Songs/graphql"

export interface SongsPaginated {
    songsPaginated : Song[]
}
export interface SongsPaging {
   
    songsPaging : SongPage
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
    songFile : File
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
    createSong(request: CreateSongRequest,onUploadProgress: any) : Promise<CreateSongResponse>
}