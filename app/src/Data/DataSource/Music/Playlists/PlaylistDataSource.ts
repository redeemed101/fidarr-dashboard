import { Playlist } from "../../GraphQL/Generated/Playlists/graphql";
import { GeneralResponse } from "../Artists/ArtistDataSource";

export interface PlaylistPage{
    count: number,
    playlists : Playlist[],
    
}
export interface FidarrPlaylistsPagingByGenre {
   
    fidarrPlaylistsPagingByGenre : PlaylistPage
}

export interface AllPlaylistsPaging {
   
    allPlaylistsPaging : PlaylistPage
}

export interface SearchPlaylistsPaging {
   
    searchPlaylistsPaging : PlaylistPage
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
    getAllPlaylistsPaging(page: number, size:number) : Promise<AllPlaylistsPaging>;
    searchPlaylistsPaging(searchText:string,page: number, size:number) : Promise<SearchPlaylistsPaging>;
    getFidarrPlaylistsPaging(page: number, size:number) : Promise<FidarrPlaylistsPaging>;
    getPlaylistsbyGenrePaging(genreId:string,page: number, size:number) : Promise<FidarrPlaylistsPagingByGenre>;
    createPlaylist(request :CreatePlaylistRequest): Promise<GeneralResponse>
    editPlaylist(playlistId:string, request: EditPlaylistRequest) : Promise<GeneralResponse>
    deletePlaylist(playlistId:string): Promise<GeneralResponse>
}