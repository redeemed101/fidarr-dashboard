import { CreatePlaylistRequest, EditPlaylistRequest } from "../../../Data/DataSource/Music/Playlists/PlaylistDataSource";
import { PlaylistPage } from "../../Model/Music/Playlist";

export interface PlaylistRepository{
    getAllPlaylistsPaging(page: number, size:number) : Promise<PlaylistPage>;
    searchPlaylistsPaging(searchText: string,page: number, size:number) : Promise<PlaylistPage>;
    getFidarrPlaylistsPaging(page: number, size:number) : Promise<PlaylistPage>;
    getPlaylistsbyGenrePaging(genreId:string,page: number, size:number) : Promise<PlaylistPage>;
    createPlaylist(request :CreatePlaylistRequest): Promise<boolean>
    editPlaylist(playlistId:string, request: EditPlaylistRequest) : Promise<boolean>
    deletePlaylist(playlistId:string): Promise<boolean>
}