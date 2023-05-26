import { injectable } from "inversify";
import { SongRepository } from "../../../../Domain/Repository/Music/SongRepository";
import { TrackPage } from "../../../../Domain/Model/Music/Track";
import { CreateSongRequest, CreateSongResponse, EditSongRequest, EditSongResponse } from "../../../DataSource/Music/Songs/SongDataSource";
import moment from "moment";

@injectable()
export class SongRepositoryMock implements SongRepository{
    private _songPage : TrackPage
    public constructor(){
        
        this._songPage = {
            data : [...Array(10)].map((a,i) =>{
                  return  {
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
            }),
            count: 20
        }
    }
    getSongsPaging(page: number, size: number): Promise<TrackPage> {
        return new Promise(resolve => setTimeout(() => resolve(this._songPage), 5000)) ;
    }
    getSearchSongsPaging(searchText: string, page: number, size: number): Promise<TrackPage> {
        return new Promise(resolve => setTimeout(() => resolve(this._songPage), 5000)) ;
    }
    createSong(request: CreateSongRequest, onUploadProgress: any): Promise<CreateSongResponse> {
        const res = {
            name : "song",
            path: "",
            artworkPath: "https://picsum.photos/200",
            id : "1234"
        }
        return new Promise(resolve => setTimeout(() => resolve(res), 5000)) ;
    }
    editSong(request: EditSongRequest, onUploadProgress: any): Promise<EditSongResponse> {
        const res = {
            name : "song",
            path: "",
            artworkPath: "https://picsum.photos/200",
            id : "1234"
        }
        return new Promise(resolve => setTimeout(() => resolve(res), 5000)) ;
    }
    deleteSong(songId: string): Promise<boolean> {
        return new Promise(resolve => setTimeout(() => resolve(true), 5000)) ;
    }
}