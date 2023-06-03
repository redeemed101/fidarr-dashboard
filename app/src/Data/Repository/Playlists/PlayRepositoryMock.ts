import { injectable } from "inversify";
import { PlaylistRepository } from "../../../Domain/Repository/Music/PlaylistRepository";
import { PlaylistPage } from "../../../Domain/Model/Music/Playlist";
import { CreatePlaylistRequest, EditPlaylistRequest } from "../../DataSource/Music/Playlists/PlaylistDataSource";
import moment from "moment";
import { Genre } from "../../../Domain/Model/Music/Genre";

@injectable()
export class PlaylistRepositoryImpl implements PlaylistRepository{
    private _playlistPage : PlaylistPage
    public constructor(){
        
        this._playlistPage = {
            data : [...Array(10)].map((a,i) =>{
                  return  {
                    id: `playlist-${i}`,            
                    isFidarr : i%2 == 0 ? true: false,
                    imgPath : "https://picsum.photos/200",
                    likes: 1000,
                    name :  `playlist ${i}`,
                    streams : 12000,
                    lastUpdated: moment(Date.parse("2023-10-31")).format('MMMM DD, YYYY'), 
                    createdAt: moment(Date.parse("2023-10-31")).format('MMMM DD, YYYY'), 
                    tracks : 12,
                    songs: [...Array(5)].map((_,s) => {
                        return {
                            id: `track-${i}`,                    
                            imgSrc : "https://picsum.photos/200",
                            name : `song ${i}`,
                            artistName: `artist ${i}`,
                            genres : [...Array(5)].map(g => {
                                return  {
                                    imgSrc : "",
                                    name : "Pop",
                                    albums : 0,
                                    tracks : 0,
                                    artists: 0,
                                    lastUpdated: "2019-09-09",
                                    id: "1"
                                }
                            }) as Genre[],
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
    getAllPlaylistsPaging(page: number, size: number): Promise<PlaylistPage> {
        return new Promise(resolve => setTimeout(() => resolve(this._playlistPage), 5000)) ;
    }
    getFidarrPlaylistsPaging(page: number, size: number): Promise<PlaylistPage> {
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