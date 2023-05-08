import { CreateSongRequest, CreateSongResponse } from "../../../Data/DataSource/Music/Songs/SongDataSource";
import { Track, TrackPage } from "../../Model/Music/Track";

export interface SongRepository{
    getSongsPaginated(page : number, size:number): Promise<Track[]>;
    getSongsPaging(page : number, size:number): Promise<TrackPage>;
    getSearchSongsPaging(searchText:string,page : number, size:number): Promise<TrackPage>;
    createSong(request: CreateSongRequest,onUploadProgress: any) : Promise<CreateSongResponse>
}