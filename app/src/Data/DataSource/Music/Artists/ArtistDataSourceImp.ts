import { injectable } from "inversify";
import { ArtistDataSource, ArtistsPaginated } from "./ArtistDataSource";
import { graphQLArtistClient } from "../../GraphQL/Client/client";
import { GetArtistsPaginatedDocument, GetArtistsPaginatedQueryResult } from "../../GraphQL/Generated/Artists/graphql";


@injectable()
export class ArtistDataSourceImpl implements ArtistDataSource{
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