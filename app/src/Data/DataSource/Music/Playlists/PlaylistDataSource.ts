import { Playlist } from "../../GraphQL/Generated/Playlists/graphql";
import { GeneralResponse } from "../Artists/ArtistDataSource";

export interface PlaylistPage{
    count: number,
    playlists : Playlist[],
    
}
export interface FidarrPlaylistsPagingByGenre {
   
    fidarrPlaylistsPagingByGenre : PlaylistPage
}

export interface FidarrPlaylistsPaging {
   
    fidarrPlaylistsPaging : PlaylistPage
}
export interface CreatePlaylistRequest{
    name: string
    SongIds: string[],
    artworkFile: File,
}
export interface EditPlaylistRequest
{
    name: string
    SongIds: string[],
    artworkFile?: File,
}

export interface PlaylistDataSource{
    getPlaylistsPaging(page: number, size:number) : Promise<FidarrPlaylistsPaging>;
    getPlaylistsbyGenrePaging(genreId:string,page: number, size:number) : Promise<FidarrPlaylistsPagingByGenre>;
    createPlaylist(request :CreatePlaylistRequest): Promise<GeneralResponse>
    editPlaylist(playlistId:string, request: EditPlaylistRequest) : Promise<GeneralResponse>
    deletePlaylist(playlistId:string): Promise<GeneralResponse>
}