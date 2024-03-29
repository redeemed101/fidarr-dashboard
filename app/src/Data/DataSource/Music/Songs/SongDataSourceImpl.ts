import { injectable } from "inversify";
import { CreateSongRequest, CreateSongResponse, EditSongRequest, EditSongResponse, SearchSongsPaging, SongDataSource, SongsPaginated, SongsPaging } from "./SongDataSource";
import { graphQLSongClient } from "../../GraphQL/Client/client";
import { GetSearchSongsPagingDocument, GetSearchSongsPagingQueryResult, GetSongPagingDocument, GetSongPagingQueryResult } from "../../GraphQL/Generated/Songs/graphql";
import { deleteAPI, postAPI } from "../../API/axios_instance";
import { GeneralResponse } from "../../Users/Authentication/AuthenticationDataSource";
import { MUSIC_URL } from "../../API/constant";

@injectable()
export class SongDataSourceImpl implements SongDataSource{
    
   
    async getSearchSongsPaging(searchText: string, page: number, size: number): Promise<SearchSongsPaging> {
        console.log(searchText)
        const result = await graphQLSongClient.query<GetSearchSongsPagingQueryResult>({
            query : GetSearchSongsPagingDocument,
            variables: {
                page: page,
                size: size,
                searchWord: searchText
            }
        })
        const data = result.data 
        console.log(data)
        const songsPaginated = data as unknown as SearchSongsPaging 
      
        return  songsPaginated;
    }
   
    async getSongsPaging(page: number, size: number): Promise<SongsPaging> {
        const result = await graphQLSongClient.query<GetSongPagingQueryResult>({
            query : GetSongPagingDocument,
            variables: {
                page: page,
                size: size
            }
        })
        const data = result.data 
        const songsPaginated = data as unknown as SongsPaging 
      
        return  songsPaginated;
    }
    async createSong(request: CreateSongRequest,onUploadProgress: any): Promise<CreateSongResponse> {
        let formData = new FormData();  
        request.artworkFile && formData.append("artworkFile",request.artworkFile);
        formData.append("songFile",request.songFile);
        request.previewFile &&  formData.append("previewFile",request.previewFile);
        formData.append("name",request.name);
        formData.append("description",request.description);
        formData.append("artistId",request.artistId);
        formData.append("releaseDate",request.releaseDate.toDateString())
        request.featuringArtists?.forEach(artist => {
            formData.append("featuringArtists[]",artist);
        }) 
        request.genres?.forEach(genre => {
            formData.append("genres[]",genre);
        })
        
        request.albumId  && formData.append("albumId",request.albumId);
        return await postAPI<CreateSongResponse>(`${MUSIC_URL}AdminSong/create`, formData, { "Content-Type": "multipart/form-data"}, onUploadProgress) 
    }
    async editSong(request: EditSongRequest, onUploadProgress: any): Promise<EditSongResponse> {
        let formData = new FormData();  
        request.artworkFile && formData.append("artworkFile",request.artworkFile);
        formData.append("songFile",request.songFile);
        request.previewFile &&  formData.append("previewFile",request.previewFile);
        formData.append("name",request.name);
        formData.append("songId", request.songId);
        formData.append("description",request.description);
        formData.append("artistId",request.artistId);
        formData.append("releaseDate",request.releaseDate.toDateString())
        request.featuringArtists?.forEach(artist => {
            formData.append("featuringArtists[]",artist);
        }) 
        request.genres?.forEach(genre => {
            formData.append("genres[]",genre);
        })
        request.albumId  && formData.append("albumId",request.albumId);
        return await postAPI<EditSongResponse>(`${MUSIC_URL}AdminSong/edit`, formData, { "Content-Type": "multipart/form-data"}, onUploadProgress) 
    }
    async deleteSong(songId: string): Promise<GeneralResponse> {
       return await deleteAPI<GeneralResponse>(`${MUSIC_URL}AdminSong/${songId}`)
    }
}