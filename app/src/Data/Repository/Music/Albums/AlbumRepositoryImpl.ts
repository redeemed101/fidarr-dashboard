import { inject, injectable } from "inversify";
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";
import { AlbumRepository } from "../../../../Domain/Repository/Music/AlbumRepository";
import { type AlbumDataSource } from "../../../DataSource/Music/Albums/AlbumDataSource";
import { TYPES } from "../../../../DI/types";
import { Album } from "../../../../Domain/Model/Music";
import { graphQLAlbumClient } from "../../../DataSource/GraphQL/Client/client";
import { GetAlbumsPaginatedDocument, GetAlbumsPaginatedQueryResult } from "../../../DataSource/GraphQL/Generated/Albums/graphql";
import { BASE_URL } from "../../../DataSource/API/constant";
import { AlbumPage } from "../../../../Domain/Model/Music/Album";
import moment from "moment";


@injectable()
export class AlbumRepositoryImpl implements AlbumRepository{
    private _dataSource : AlbumDataSource;
  
    public constructor(
        @inject(TYPES.AlbumDataSource) dataSource : AlbumDataSource
    ){
        this._dataSource = dataSource
    }
    async getAlbumsPaging(page: number, size: number): Promise<AlbumPage> {
        const albumResponse = await this._dataSource.getAlbumsPaging(page,size)
        console.log("Page  ",page, " ", albumResponse.albumsPaging)
        const albums = albumResponse.albumsPaging.albums.map(a => {
           return  {
              imgSrc: `${BASE_URL}${a.artworkPath}`,
              name: a.name,
              artist: a.artist?.name ?? "",
              genre: a.genres?.map(g => g?.name ?? "") ?? [""],
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
    async getAlbumsPaginated(page: number, size: number): Promise<Album[]> {
        

        const albumResponse = await this._dataSource.getAlbumsPaginated(page,size)
        return albumResponse.albumsPaginated.map(a => {
           return  {
              imgSrc: `${BASE_URL}${a.artworkPath}`,
              name: a.name,
              artist: a.artist?.name ?? "",
              genre: a.genres?.map(g => g?.name ?? "") ?? [""],
              streams: a.streams?.length.toString() ?? "0",
              tracks: a.songs?.length ?? 0,
              releaseDate: a.releaseDate,
              lastUpdated: a.lastUpdated
            }
       });
    }
}