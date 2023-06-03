import { injectable } from "inversify";
import { PlaylistRepository } from "../../../Domain/Repository/Music/PlaylistRepository";
import { Playlist, PlaylistPage } from "../../../Domain/Model/Music/Playlist";
import { CreatePlaylistRequest, EditPlaylistRequest } from "../../DataSource/Music/Playlists/PlaylistDataSource";
import moment from "moment";
import { BASE_URL } from "../../DataSource/API/constant";
import { Genre } from "../../../Domain/Model/Music/Genre";

@injectable()
export class PlaylistRepositoryMock implements PlaylistRepository{
    private _playlistPage : PlaylistPage
    public constructor(){
        const playlists = [...Array(10)].map((p,i) => {
            return {
                id: `${i}`,
                imgPath : "https://picsum.photos/200",
                isFidarr : i % 2 == 0 ? true : false,
                likes: 10,
                name : `playlist ${i}`,
                streams : 1000,
                tracks : 5,
                songs:[...Array(6)].map((a,i) =>{
                    return  {
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
            } as Playlist
        })
        this._playlistPage = {
            count: 20,
            data: playlists
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