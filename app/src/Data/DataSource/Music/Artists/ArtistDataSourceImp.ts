import { injectable } from "inversify";
import { ArtistDataSource, ArtistsPaginated, ArtistsPaging } from "./ArtistDataSource";
import { graphQLArtistClient } from "../../GraphQL/Client/client";
import { GetArtistsPaginatedDocument, GetArtistsPaginatedQueryResult, GetArtistsPagingDocument, GetArtistsPagingQueryResult } from "../../GraphQL/Generated/Artists/graphql";


@injectable()
export class ArtistDataSourceImpl implements ArtistDataSource{
    async getArtistsPaging(page: number, size: number): Promise<ArtistsPaging> {
        const result = await graphQLArtistClient.query<GetArtistsPagingQueryResult>({
            query : GetArtistsPagingDocument,
            variables: {
                page: page,
                size: size
            }
        })
        const data = result.data 
        const artistsPaginated = data as unknown as ArtistsPaging 
      
        return  artistsPaginated;
    }
    async getArtistsPaginated(page: number, size: number): Promise<ArtistsPaginated> {
        const result = await graphQLArtistClient.query<GetArtistsPaginatedQueryResult>({
            query : GetArtistsPaginatedDocument,
            variables: {
                page: page,
                size: size
            }
        })
        const data = result.data 
        console.log(data) 
        const artistsPaginated = data as unknown as ArtistsPaginated 
        return  artistsPaginated;
    }

}