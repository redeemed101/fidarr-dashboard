import { injectable } from "inversify";
import { AlbumDataSource, AlbumsPaginated } from "./AlbumDataSource";
import { graphQLAlbumClient } from "../../GraphQL/Client/client";
import { Album, GetAlbumsPaginatedDocument, GetAlbumsPaginatedQueryResult } from "../../GraphQL/Generated/Albums/graphql";


@injectable()
export class AlbumDataSourceImpl implements AlbumDataSource{
    async getAlbumsPaginated(page: number, size: number): Promise<AlbumsPaginated> {
        const result = await graphQLAlbumClient.query<GetAlbumsPaginatedQueryResult>({
            query : GetAlbumsPaginatedDocument,
            variables: {
                page: page,
                size: size
            }
        })
        const data = result.data 
        console.log(data) 
        const albumsPaginated = data as unknown as AlbumsPaginated 
        return  albumsPaginated;
    }

}