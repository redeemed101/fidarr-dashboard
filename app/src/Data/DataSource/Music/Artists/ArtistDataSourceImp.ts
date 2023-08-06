import { injectable } from "inversify";
import { ArtistDataSource, ArtistsPaginated, ArtistsPaging, CreateArtist, EditArtist, GeneralResponse, SearchArtistsPaging } from "./ArtistDataSource";
import { graphQLArtistClient } from "../../GraphQL/Client/client";
import { GetArtistsPagingDocument, GetArtistsPagingQueryResult, GetSearchArtistsPagingDocument, GetSearchArtistsPagingQueryResult } from "../../GraphQL/Generated/Artists/graphql";
import { deleteAPI, postAPI } from "../../API/axios_instance";
import { MUSIC_URL } from "../../API/constant";


@injectable()
export class ArtistDataSourceImpl implements ArtistDataSource{
    async DeleteArtist(artistId: string): Promise<GeneralResponse> {
        return await deleteAPI<GeneralResponse>(`${MUSIC_URL}ArtistAdmin/delete/${artistId}`)
    }
   
    async searchGetArtistsPaging(searchText: string, page: number, size: number): Promise<SearchArtistsPaging> {
        const result = await graphQLArtistClient.query<GetSearchArtistsPagingQueryResult>({
            query : GetSearchArtistsPagingDocument,
            variables: {
                page: page,
                size: size,
                searchWord: searchText
            }
        })
        const data = result.data 
        const artistsPaginated = data as unknown as SearchArtistsPaging 
      
        return  artistsPaginated;
    }
    async createArtist(request: CreateArtist): Promise<GeneralResponse> {
        let formData = new FormData();  
        formData.append("artistProfilePic",request.artistPhoto);
        formData.append("bio",request.bio);
        formData.append("website",request.website);
        formData.append("name",request.name);
        formData.append("address",request.address);
        formData.append("user.userId",request.user.countryId.toString());
        formData.append("user.email",request.user.email);
        formData.append("user.fullname",request.user.fullname);
        formData.append("user.phoneNumber",request.user.phoneNumber);
        formData.append("user.profile",request.user.profile);
        formData.append("user.username",request.user.username);
        return await postAPI<GeneralResponse>(`${MUSIC_URL}AdminArtist/create`, formData) 
    }
    async EditArtist(request: EditArtist): Promise<GeneralResponse> {
        let formData = new FormData();  
        formData.append("artistProfilePic",request.artistPhoto);
        formData.append("bio",request.bio);
        formData.append("website",request.website);
        formData.append("name",request.name);
        formData.append("address",request.address);
        return await postAPI<GeneralResponse>(`${MUSIC_URL}AdminArtist/edit`, formData) 
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
  

}