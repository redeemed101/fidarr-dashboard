import { inject, injectable } from "inversify";
import { PlaylistRepository } from "../../../Domain/Repository/Music/PlaylistRepository";
import { PlaylistPage } from "../../../Domain/Model/Music/Playlist";
import { CreatePlaylistRequest, EditPlaylistRequest, PlaylistDataSource } from "../../DataSource/Music/Playlists/PlaylistDataSource";
import { TYPES } from "../../../DI/types";
import { BASE_URL } from "../../DataSource/API/constant";
import { Playlist } from "../../../Domain/Model/Music/Playlist";
import moment from "moment";
import { Genre } from "../../../Domain/Model/Music/Genre";

@injectable()
export class PlaylistRepositoryImpl implements PlaylistRepository{
    private _dataSource : PlaylistDataSource;
  
    public constructor(
        @inject(TYPES.PlaylistDataSource) dataSource : PlaylistDataSource
    ){
        this._dataSource = dataSource
    }
    async searchPlaylistsPaging(searchText: string, page: number, size: number): Promise<PlaylistPage> {
        var response = await this._dataSource.searchPlaylistsPaging(searchText,page,size)
        const playlists = response.searchPlaylistsPaging.playlists.map(p => {
            return {
                id: p.id,
                imgPath : `${BASE_URL}${p.imagePath}`,
                isFidarr : p.userId == null ? true : false,
                likes: p.likes?.length,
                name : p.name,
                streams : p.streams,
                tracks : p.songs?.length ?? 0,
                songs: p.songs?.map(s => {
                    return {
                        id: s?.id,
                        imgSrc : `${BASE_URL}${s?.artworkPath}`,
                        name : s?.name,
                        artist: {
                            id: s?.artist?.id,
                            website: s?.artist?.website,
                            bio: s?.artist?.bio,
                            imgSrc : `${BASE_URL}${s?.artist?.imagePath}`,
                            name : s?.artist?.name,
                            genres : s?.artist?.genres?.map(g => {
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
                            streams : s?.artist?.songs?.reduce( (a,b) => a + (b?.streams?.length ?? 0) ,0) ?? 0,
                            tracks : s?.artist?.songs?.length ?? 0,
                            albums: s?.artist?.albums?.length ?? 0,
                            lastUpdated: s?.artist?.lastUpdated
                        },
                        genres : s?.genres?.map(g => {
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
                        streams : s?.streams ?? "",
                        duration : "",
                        releaseDate: s?.releaseDate,
                        lastUpdated: s?.lastUpdated
                    }
                })
            } as Playlist
        })
        return {
            count: response.searchPlaylistsPaging.count,
            data: playlists
         }
    }
    async getFidarrPlaylistsPaging(page: number, size: number): Promise<PlaylistPage> {
        var response = await this._dataSource.getFidarrPlaylistsPaging(page,size)
        const playlists = response.fidarrPlaylistsPaging.playlists.map(p => {
            return {
                id: p.id,
                imgPath : `${BASE_URL}${p.imagePath}`,
                isFidarr : p.userId == null ? true : false,
                likes: p.likes?.length,
                name : p.name,
                streams : p.streams,
                tracks : p.songs?.length ?? 0,
                songs: p.songs?.map(s => {
                    return {
                        id: s?.id,
                        imgSrc : `${BASE_URL}${s?.artworkPath}`,
                        name : s?.name,
                        artist:{
                            id: s?.artist?.id,
                            website: s?.artist?.website,
                            bio: s?.artist?.bio,
                            imgSrc : `${BASE_URL}${s?.artist?.imagePath}`,
                            name : s?.artist?.name,
                            genres : s?.artist?.genres?.map(g => {
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
                            streams : s?.artist?.songs?.reduce( (a,b) => a + (b?.streams?.length ?? 0) ,0) ?? 0,
                            tracks : s?.artist?.songs?.length ?? 0,
                            albums: s?.artist?.albums?.length ?? 0,
                            lastUpdated: s?.artist?.lastUpdated
                        },
                        genres : s?.genres?.map(g => {
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
                        streams : s?.streams ?? "",
                        duration : "",
                        releaseDate: moment(Date.parse(s?.releaseDate)).format('MMMM DD, YYYY'),
                        lastUpdated: moment(Date.parse(s?.lastUpdated)).format('MMMM DD, YYYY')
                    }
                })
            } as Playlist
        })
        return {
            count: response.fidarrPlaylistsPaging.count,
            data: playlists
         }
    }
    async getAllPlaylistsPaging(page: number, size: number): Promise<PlaylistPage> {
        var response = await this._dataSource.getAllPlaylistsPaging(page,size)
        const playlists = response.allPlaylistsPaging.playlists.map(p => {
            return {
                id: p.id,
                imgPath : `${BASE_URL}${p.imagePath}`,
                isFidarr : p.userId == null ? true : false,
                likes: p.likes?.length,
                name : p.name,
                streams : p.streams,
                tracks : p.songs?.length ?? 0,
                songs: p.songs?.map(s => {
                    return {
                        id: s?.id,
                        imgSrc : `${BASE_URL}${s?.artworkPath}`,
                        name : s?.name,
                        artist:{
                            id: s?.artist?.id,
                            website: s?.artist?.website,
                            bio: s?.artist?.bio,
                            imgSrc : `${BASE_URL}${s?.artist?.imagePath}`,
                            name : s?.artist?.name,
                            genres : s?.artist?.genres?.map(g => {
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
                            streams : s?.artist?.songs?.reduce( (a,b) => a + (b?.streams?.length ?? 0) ,0) ?? 0,
                            tracks : s?.artist?.songs?.length ?? 0,
                            albums: s?.artist?.albums?.length ?? 0,
                            lastUpdated: s?.artist?.lastUpdated
                        },
                        genres : s?.genres?.map(g => {
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
                        streams : s?.streams ?? "",
                        duration : "",
                        releaseDate: moment(Date.parse(s?.releaseDate)).format('MMMM DD, YYYY'),
                        lastUpdated: moment(Date.parse(s?.lastUpdated)).format('MMMM DD, YYYY')
                    }
                })
            } as Playlist
        })
        return {
            count: response.allPlaylistsPaging.count,
            data: playlists
         }
    }
    async getPlaylistsbyGenrePaging(genreId: string, page: number, size: number): Promise<PlaylistPage> {
        var response = await this._dataSource.getPlaylistsbyGenrePaging(genreId,page,size)
        const playlists = response.fidarrPlaylistsPagingByGenre.playlists.map(p => {
            return {
                id: p.id,
                imgPath : `${BASE_URL}${p.imagePath}`,
                name : p.name,
                streams : p.streams,
                tracks : p.songs?.length ?? 0,
                songs: p.songs?.map(s => {
                    return {
                        id: s?.id,
                        imgSrc : `${BASE_URL}${s?.artworkPath}`,
                        name : s?.name,
                        artist:{
                            id: s?.artist?.id,
                            website: s?.artist?.website,
                            bio: s?.artist?.bio,
                            imgSrc : `${BASE_URL}${s?.artist?.imagePath}`,
                            name : s?.artist?.name,
                            genres : s?.artist?.genres?.map(g => {
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
                            streams : s?.artist?.songs?.reduce( (a,b) => a + (b?.streams?.length ?? 0) ,0) ?? 0,
                            tracks : s?.artist?.songs?.length ?? 0,
                            albums: s?.artist?.albums?.length ?? 0,
                            lastUpdated: s?.artist?.lastUpdated
                        },
                        genres : s?.genres?.map(g => {
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
                        streams : s?.streams ?? "",
                        duration : "",
                        releaseDate: moment(Date.parse(s?.releaseDate)).format('MMMM DD, YYYY'),
                        lastUpdated: moment(Date.parse(s?.lastUpdated)).format('MMMM DD, YYYY')
                    }
                })
            } as Playlist
        })
        return {
            count: response.fidarrPlaylistsPagingByGenre.count,
            data: playlists
         }
    }
    async createPlaylist(request: CreatePlaylistRequest): Promise<boolean> {
       const response = await this._dataSource.createPlaylist(request)
       return response.success
    }
    async editPlaylist(playlistId: string, request: EditPlaylistRequest): Promise<boolean> {
        const response = await this._dataSource.editPlaylist(playlistId,request)
        return response.success
    }
    async deletePlaylist(playlistId: string): Promise<boolean> {
        const response = await this._dataSource.deletePlaylist(playlistId)
        return response.success
    }
}