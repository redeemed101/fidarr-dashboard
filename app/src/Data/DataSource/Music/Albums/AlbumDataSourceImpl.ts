import { injectable } from "inversify";
import { AlbumDataSource, AlbumsPaginated, AlbumsPaging } from "./AlbumDataSource";
import { graphQLAlbumClient } from "../../GraphQL/Client/client";
import { Album, GetAlbumPagingDocument, GetAlbumPagingQueryResult, GetAlbumsPaginatedDocument, GetAlbumsPaginatedQueryResult } from "../../GraphQL/Generated/Albums/graphql";


@injectable()
export class AlbumDataSourceImpl implements AlbumDataSource{
    async getAlbumsPaging(page: number, size: number): Promise<AlbumsPaging> {
        const result = await graphQLAlbumClient.query<GetAlbumPagingQueryResult>({
            query : GetAlbumPagingDocument,
            variables: {
                page: page,
                size: size
            }
        })
        const data = result.data 
        const albumsPaginated = data as unknown as AlbumsPaging 
      
        return  albumsPaginated;
    }
    async getAlbumsPaginated(page: number, size: number): Promise<AlbumsPaginated> {
        const result = await graphQLAlbumClient.query<GetAlbumsPaginatedQueryResult>({
            query : GetAlbumsPaginatedDocument,
            variables: {
                page: page,
                size: size
            }
        })
        const data = result.data
        const albumsPaginated = data as unknown as AlbumsPaginated 
        return  albumsPaginated;
    }

}