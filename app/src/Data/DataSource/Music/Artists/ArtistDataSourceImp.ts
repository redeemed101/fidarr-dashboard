import { injectable } from "inversify";
import { ArtistDataSource, ArtistsPaginated, ArtistsPaging, CreateArtist, GeneralResponse } from "./ArtistDataSource";
import { graphQLArtistClient } from "../../GraphQL/Client/client";
import { GetArtistsPaginatedDocument, GetArtistsPaginatedQueryResult, GetArtistsPagingDocument, GetArtistsPagingQueryResult } from "../../GraphQL/Generated/Artists/graphql";
import { postAPI } from "../../API/axios_instance";


@injectable()
export class ArtistDataSourceImpl implements ArtistDataSource{
    async createArtist(request: CreateArtist): Promise<GeneralResponse> {
        let formData = new FormData();  
        formData.append("artistProfilePic",request.artistPhoto);
        formData.append("bio",request.bio);
        formData.append("website",request.website);
        formData.append("name",request.name);
        formData.append("address",request.address);
        formData.append("username",request.username);
        return await postAPI<GeneralResponse>("AdminArtist/create", formData) 
    }
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