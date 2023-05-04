import { inject, injectable } from "inversify";
import { SongRepository } from "../../../../Domain/Repository/Music/SongRepository";
import { Track } from "../../../../Domain/Model/Music";
import { TrackPage } from "../../../../Domain/Model/Music/Track";
import { CreateSongRequest, CreateSongResponse, SongDataSource } from "../../../DataSource/Music/Songs/SongDataSource";
import { TYPES } from "../../../../DI/types";
import { BASE_URL } from "../../../DataSource/API/constant";


@injectable()
export class SongRepositoryImpl implements SongRepository{
    private _dataSource : SongDataSource;
    public constructor(
        @inject(TYPES.SongDataSource) dataSource : SongDataSource
    ){
        this._dataSource = dataSource
    }
    async getSongsPaginated(page: number, size: number): Promise<Track[]> {
       const response =  await this._dataSource.getSongsPaginated(page,size);
       const songs =  response.songsPaginated.map(s => {
             return {
                imgSrc : `${BASE_URL}${s.artworkPath}`,
                name : s.name,
                genres : s.genres?.map(g => g?.name),
                streams : s.streams ?? "",
                duration : "",
                releaseDate: "",
                lastUpdated: ""
             } as Track
        })
        return songs;
    }
    async getSongsPaging(page: number, size: number): Promise<TrackPage> {
        const songsResponse = await this._dataSource.getSongsPaging(page,size)
        console.log("Page  ",page, " ", songsResponse.songsPaging)
        const songs = songsResponse.songsPaging.songs.map(s => {
           return  {
                imgSrc : `${BASE_URL}${s.artworkPath}`,
                name : s.name,
                genres : s.genres?.map(g => g?.name),
                streams : s.streams ?? "",
                duration : "",
                releaseDate: "",
                lastUpdated: ""
            } as Track
       });
       return {
          count: songsResponse.songsPaging.count,
          data: songs
       }
    }
    async createSong(request: CreateSongRequest,onUploadProgress: any): Promise<CreateSongResponse> {
        return await this._dataSource.createSong(request,onUploadProgress);
    }
}