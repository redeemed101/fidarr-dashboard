import { inject, injectable } from "inversify";
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";
import { AlbumRepository } from "../../../../Domain/Repository/Music/AlbumRepository";
import { type AlbumDataSource } from "../../../DataSource/Music/Albums/AlbumDataSource";
import { TYPES } from "../../../../DI/types";
import { Album } from "../../../../Domain/Model/Music";
import { graphQLclient } from "../../../DataSource/GraphQL/Client/client";
import { GetAlbumsPaginatedDocument } from "../../../DataSource/GraphQL/Generated/Albums/graphql";


@injectable()
export class AlbumRepositoryImpl implements AlbumRepository{
    private _dataSource : AlbumDataSource;
  
    public constructor(
        @inject(TYPES.AlbumDataSource) dataSource : AlbumDataSource
    ){
        this._dataSource = dataSource
    }
    async getAlbumsPaginated(page: number, size: number): Promise<Album[]> {
        const result = await graphQLclient.query({
            query : GetAlbumsPaginatedDocument,
            variables: {
                page: page,
                size: size
            }
        })
        const data = result.data
        console.log(result)
        const albumResponse = await this._dataSource.getAlbumsPaginated(page,size)
        return albumResponse.toAlbumModels();
    }
}