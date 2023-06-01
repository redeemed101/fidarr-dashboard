import { inject, injectable } from "inversify";
import { AlbumRepository } from "../../../../Domain/Repository/Music/AlbumRepository";
import { CreateAlbumRequest, CreateAlbumResponse, type AlbumDataSource, EditAlbumRequest, EditAlbumResponse } from "../../../DataSource/Music/Albums/AlbumDataSource";
import { TYPES } from "../../../../DI/types";
import { Album, Artist, Track } from "../../../../Domain/Model/Music";
import { BASE_URL } from "../../../DataSource/API/constant";
import { AlbumPage } from "../../../../Domain/Model/Music/Album";
import moment from "moment";
import { GeneralResponse } from "../../../DataSource/Music/Artists/ArtistDataSource";


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
                  imgSrc : a.artist?.imagePath,
                  name : a.artist?.name,
                  genres : a.artist?.genres?.map(g => g?.name),
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
                           artistName: s?.artist?.name,
                           genres : s?.genres?.map(g => g?.name),
                           streams : `${s?.streams?.length ?? 0}`,
                           duration : "",
                           lastUpdated: moment(Date.parse(s?.lastUpdated)).format('MMMM DD, YYYY'), 
                           releaseDate: moment(Date.parse(s?.releaseDate)).format('MMMM DD, YYYY'),
                        
                     } 
               }) as Track[],
              genres: a.genres?.map(g => g?.name ?? "") ?? [""],
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
                  genres : a.artist?.genres?.map(g => g?.name),
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
                        artistName: s?.artist?.name,
                        genres : s?.genres?.map(g => g?.name),
                        streams : `${s?.streams?.length ?? 0}`,
                        duration : "",
                        lastUpdated: moment(Date.parse(s?.lastUpdated)).format('MMMM DD, YYYY'), 
                        releaseDate: moment(Date.parse(s?.releaseDate)).format('MMMM DD, YYYY'),
                     
                  } 
              }) as Track[],
              genres: a.genres?.map(g => g?.name ?? "") ?? [""],
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