import { inject, injectable } from "inversify";
import { SongRepository } from "../../../../Domain/Repository/Music/SongRepository";
import { Track } from "../../../../Domain/Model/Music";
import { TrackPage } from "../../../../Domain/Model/Music/Track";
import { CreateSongRequest, CreateSongResponse, EditSongRequest, EditSongResponse, SongDataSource } from "../../../DataSource/Music/Songs/SongDataSource";
import { TYPES } from "../../../../DI/types";
import { BASE_URL } from "../../../DataSource/API/constant";
import moment from "moment";
import { Genre } from "../../../../Domain/Model/Music/Genre";


@injectable()
export class SongRepositoryImpl implements SongRepository{
    private _dataSource : SongDataSource;
    public constructor(
        @inject(TYPES.SongDataSource) dataSource : SongDataSource
    ){
        this._dataSource = dataSource
    }
    async deleteSong(songId: string): Promise<boolean> {
        const result = await this._dataSource.deleteSong(songId)
        return result.success
    }
   
    async getSearchSongsPaging(searchText: string, page: number, size: number): Promise<TrackPage> {
        const songsResponse = await this._dataSource.getSearchSongsPaging(searchText,page,size)
        console.log("Page  ",page, " ", songsResponse.searchSongsPaging)
        const songs = songsResponse.searchSongsPaging.songs.map(s => {
           return  {
                imgSrc : `${BASE_URL}${s.artworkPath}`,
                id: s.id,
                name : s.name,
                artist: {
                    id: s.artist?.id,
                    website: s.artist?.website,
                    bio: s.artist?.bio,
                    imgSrc : `${BASE_URL}${s.artist?.imagePath}`,
                    name : s.artist?.name,
                    genres : s.artist?.genres?.map(g => {
                        return {
                            id: g?.id,
                            imgSrc : `${BASE_URL}${g?.imageUrl}`,
                            name : g?.name,
                            albums : g?.albums?.length ?? 0,
                            tracks : g?.songs?.length ?? 0,
                            artists: g?.artists?.length ?? 0,
                            lastUpdated: g?.dateCreated
                        } 
                      }) as Genre[],
                    streams : s.artist?.songs?.reduce( (a,b) => a + (b?.streams?.length ?? 0) ,0) ?? 0,
                    tracks : s.artist?.songs?.length ?? 0,
                    albums: s.artist?.albums?.length ?? 0,
                    lastUpdated: s.artist?.lastUpdated
                },
                genres : s.genres?.map(g => {
                    return {
                        id: g?.id,
                        imgSrc : `${BASE_URL}${g?.imageUrl}`,
                        name : g?.name,
                        albums : g?.albums?.length ?? 0,
                        tracks : g?.songs?.length ?? 0,
                        artists: g?.artists?.length ?? 0,
                        lastUpdated: g?.dateCreated
                    } 
                  }) as Genre[],
                streams : s.streams?.length ?? "0",
                duration : s.duration,
                releaseDate: moment(Date.parse(s?.releaseDate)).format('MMMM DD, YYYY'),
                lastUpdated: moment(Date.parse(s?.lastUpdated)).format('MMMM DD, YYYY')
            } as Track
       });
       return {
          count: songsResponse.searchSongsPaging.count,
          data: songs
       }
    }
   
    async getSongsPaging(page: number, size: number): Promise<TrackPage> {
        const songsResponse = await this._dataSource.getSongsPaging(page,size)
        console.log("Page  ",page, " ", songsResponse.songsPaging)
        const songs = songsResponse.songsPaging.songs.map(s => {
           return  {
                imgSrc : `${BASE_URL}${s.artworkPath}`,
                id: s.id,
                name : s.name,
                artist: {
                    id: s.artist?.id,
                    website: s.artist?.website,
                    bio: s.artist?.bio,
                    imgSrc : `${BASE_URL}${s.artist?.imagePath}`,
                    name : s.artist?.name,
                    genres : s.artist?.genres?.map(g => {
                        return {
                            id: g?.id,
                            imgSrc : `${BASE_URL}${g?.imageUrl}`,
                            name : g?.name,
                            albums : g?.albums?.length ?? 0,
                            tracks : g?.songs?.length ?? 0,
                            artists: g?.artists?.length ?? 0,
                            lastUpdated: g?.dateCreated
                        } 
                      }) as Genre[],
                    streams : s.artist?.songs?.reduce( (a,b) => a + (b?.streams?.length ?? 0) ,0) ?? 0,
                    tracks : s.artist?.songs?.length ?? 0,
                    albums: s.artist?.albums?.length ?? 0,
                    lastUpdated: s.artist?.lastUpdated
                },
                genres : s.genres?.map(g => {
                    return {
                        id: g?.id,
                        imgSrc : `${BASE_URL}${g?.imageUrl}`,
                        name : g?.name,
                        albums : g?.albums?.length ?? 0,
                        tracks : g?.songs?.length ?? 0,
                        artists: g?.artists?.length ?? 0,
                        lastUpdated: g?.dateCreated
                    } 
                  }) as Genre[],
                streams : s.streams?.length ?? "0",
                duration : s.duration,
                releaseDate: moment(Date.parse(s?.releaseDate)).format('MMMM DD, YYYY'),
                lastUpdated: moment(Date.parse(s?.lastUpdated)).format('MMMM DD, YYYY')
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
    async editSong(request: EditSongRequest, onUploadProgress: any): Promise<EditSongResponse> {
        return await this._dataSource.editSong(request, onUploadProgress)
    }
}