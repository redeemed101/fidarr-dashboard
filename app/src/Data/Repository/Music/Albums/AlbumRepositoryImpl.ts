import { inject, injectable } from "inversify";
import { AlbumRepository } from "../../../../Domain/Repository/Music/AlbumRepository";
import { CreateAlbumRequest, CreateAlbumResponse, type AlbumDataSource, EditAlbumRequest, EditAlbumResponse } from "../../../DataSource/Music/Albums/AlbumDataSource";
import { TYPES } from "../../../../DI/types";
import { Album, Artist, Track } from "../../../../Domain/Model/Music";
import { BASE_URL } from "../../../DataSource/API/constant";
import { AlbumPage } from "../../../../Domain/Model/Music/Album";
import moment from "moment";
import { GeneralResponse } from "../../../DataSource/Music/Artists/ArtistDataSource";
import { Genre } from "../../../../Domain/Model/Music/Genre";


@injectable()
export class AlbumRepositoryImpl implements AlbumRepository{
    private _dataSource : AlbumDataSource;
   
    public constructor(
        @inject(TYPES.AlbumDataSource) dataSource : AlbumDataSource
    ){
        this._dataSource = dataSource
    }
   async deleteAlbum(albumId: string, onUploadProgress: any): Promise<GeneralResponse> {
     return this._dataSource.deleteAlbum(albumId,onUploadProgress)
   }
   
    async searchAlbumsPaging(searchText: string, page: number, size: number): Promise<AlbumPage> {
        const albumResponse = await this._dataSource.searchAlbumsPaging(searchText,page,size)
        console.log("Page  ",page, " ", albumResponse.searchAlbumsPaging)
        const albums = albumResponse.searchAlbumsPaging.albums.map(a => {
           return  {
              imgSrc: `${BASE_URL}${a.artworkPath}`,
              id: a.id,
              description: a.description,
              name: a.name,
              artist: {
                  id: a.artist?.id,     
                  website: a.artist?.website,
                  bio: a.artist?.bio,               
                  imgSrc : `${BASE_URL}${a.artist?.imagePath}`,
                  name : a.artist?.name,
                  genres : a.artist?.genres?.map(g => {
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
                  streams : 0,
                  tracks : 0,
                  albums: 0,
                  lastUpdated: moment(Date.parse(a.artist?.lastUpdated)).format('MMMM DD, YYYY'),
              } as Artist,
              songs : a.songs?.map(s => {
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
                           streams : `${s?.streams?.length ?? 0}`,
                           duration : "",
                           lastUpdated: moment(Date.parse(s?.lastUpdated)).format('MMMM DD, YYYY'), 
                           releaseDate: moment(Date.parse(s?.releaseDate)).format('MMMM DD, YYYY'),
                        
                     } 
               }) as Track[],
              genres: a.genres?.map(g => {
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
              streams: a.streams?.length.toString() ?? "0",
              tracks: a.songs?.length ?? 0,
              releaseDate:moment(Date.parse(a.releaseDate)).format('MMMM DD, YYYY'),
              lastUpdated: moment(Date.parse(a.lastUpdated)).format('MMMM DD, YYYY')
            }
       });
       return {
          count: albumResponse.searchAlbumsPaging.count,
          data: albums
       }
    }
    async createAlbum(request: CreateAlbumRequest, onUploadProgress: any): Promise<CreateAlbumResponse> {
        return this._dataSource.createAlbum(request,onUploadProgress);
    }
    async editAlbum(request: EditAlbumRequest, onUploadProgress: any): Promise<EditAlbumResponse> {
      return this._dataSource.editAlbum(request,onUploadProgress);
   }
    async getAlbumsPaging(page: number, size: number): Promise<AlbumPage> {
        const albumResponse = await this._dataSource.getAlbumsPaging(page,size)
        console.log("Page  ",page, " ", albumResponse.albumsPaging)
        const albums = albumResponse.albumsPaging.albums.map(a => {
           return  {
              imgSrc: `${BASE_URL}${a.artworkPath}`,
              id: a.id,
              name: a.name,
              description: a.description,
              artist: {
                  id: a.artist?.id,     
                  website: a.artist?.website,
                  bio: a.artist?.bio,               
                  imgSrc : a.artist?.imagePath,
                  name : a.artist?.name,
                  genres : a.artist?.genres?.map(g => {
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
                  streams : 0,
                  tracks : 0,
                  albums: 0,
                  lastUpdated: moment(Date.parse(a.artist?.lastUpdated)).format('MMMM DD, YYYY'),
              } as Artist,
              songs : a.songs?.map(s => {
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
                        streams : `${s?.streams?.length ?? 0}`,
                        duration : "",
                        lastUpdated: moment(Date.parse(s?.lastUpdated)).format('MMMM DD, YYYY'), 
                        releaseDate: moment(Date.parse(s?.releaseDate)).format('MMMM DD, YYYY'),
                     
                  } 
              }) as Track[],
              genres: a.genres?.map(g => {
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
              streams: a.streams?.length.toString() ?? "0",
              tracks: a.songs?.length ?? 0,
              releaseDate:moment(Date.parse(a.releaseDate)).format('MMMM DD, YYYY'),
              lastUpdated: moment(Date.parse(a.lastUpdated)).format('MMMM DD, YYYY')
            }
       });
       return {
          count: albumResponse.albumsPaging.count,
          data: albums
       }
    }
   
}