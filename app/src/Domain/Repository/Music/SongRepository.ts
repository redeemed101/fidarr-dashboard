import { CreateSongRequest, CreateSongResponse, EditSongRequest, EditSongResponse } from "../../../Data/DataSource/Music/Songs/SongDataSource";
import { Track, TrackPage } from "../../Model/Music/Track";

export interface SongRepository{
    getSongsPaging(page : number, size:number): Promise<TrackPage>;
    getSearchSongsPaging(searchText:string,page : number, size:number): Promise<TrackPage>;
    createSong(request: CreateSongRequest,onUploadProgress: any) : Promise<CreateSongResponse>
    editSong(request: EditSongRequest,onUploadProgress: any) : Promise<EditSongResponse>
}
