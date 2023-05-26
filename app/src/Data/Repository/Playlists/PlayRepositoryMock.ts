import { injectable } from "inversify";
import { PlaylistRepository } from "../../../Domain/Repository/Music/PlaylistRepository";
import { PlaylistPage } from "../../../Domain/Model/Music/Playlist";
import { CreatePlaylistRequest, EditPlaylistRequest } from "../../DataSource/Music/Playlists/PlaylistDataSource";
import moment from "moment";

@injectable()
export class PlaylistRepositoryImpl implements PlaylistRepository{
    private _playlistPage : PlaylistPage
    public constructor(){
        
        this._playlistPage = {
            data : [...Array(10)].map((a,i) =>{
                  return  {
                    id: `playlist-${i}`,
                    imgPath : "https://picsum.photos/200",
                    name :  `playlist ${i}`,
                    streams : 12000,
                    tracks : 12,
                    songs: [...Array(5)].map((_,s) => {
                        return {
                            id: `track-${i}`,                    
                            imgSrc : "https://picsum.photos/200",
                            name : `song ${i}`,
                            artistName: `artist ${i}`,
                            genres : ["Genre 1", "Genre 2"],
                            streams : "10M",
                            duration : "",
                            lastUpdated: moment(Date.parse("2023-10-31")).format('MMMM DD, YYYY'), 
                            releaseDate: moment(Date.parse("2023-10-31")).format('MMMM DD, YYYY'),
                        }
                       
                    })
                }
            }),
            count: 20
        }
    }
    getPlaylistsPaging(page: number, size: number): Promise<PlaylistPage> {
        return new Promise(resolve => setTimeout(() => resolve(this._playlistPage), 5000)) ;
    }
    getPlaylistsbyGenrePaging(genreId: string, page: number, size: number): Promise<PlaylistPage> {
        return new Promise(resolve => setTimeout(() => resolve(this._playlistPage), 5000)) ;
    }
    createPlaylist(request: CreatePlaylistRequest): Promise<boolean> {
        return new Promise(resolve => setTimeout(() => resolve(true), 5000)) ;
    }
    editPlaylist(playlistId: string, request: EditPlaylistRequest): Promise<boolean> {
        return new Promise(resolve => setTimeout(() => resolve(true), 5000)) ;
    }
    deletePlaylist(playlistId: string): Promise<boolean> {
        return new Promise(resolve => setTimeout(() => resolve(true), 5000)) ;
    }
}