import { injectable } from "inversify";
import { AlbumDataSource, AlbumsPaginated, AlbumsPaging, CreateAlbumRequest, CreateAlbumResponse, EditAlbumRequest, EditAlbumResponse, SearchAlbumsPaging } from "./AlbumDataSource";
import { graphQLAlbumClient } from "../../GraphQL/Client/client";
import { Album, GetAlbumPagingDocument, GetAlbumPagingQueryResult, GetSearchingAlbumsPagingDocument, GetSearchingAlbumsPagingQueryResult } from "../../GraphQL/Generated/Albums/graphql";
import { deleteAPI, postAPI } from "../../API/axios_instance";
import { GeneralResponse } from "../Artists/ArtistDataSource";
import { MUSIC_URL } from "../../API/constant";


@injectable()
export class AlbumDataSourceImpl implements AlbumDataSource{
    async deleteAlbum(albumId: string, onUploadProgress: any): Promise<GeneralResponse> {
        return await deleteAPI<GeneralResponse>(`${MUSIC_URL}AdminAlbum/delete/${albumId}`)
    }
   
    async searchAlbumsPaging(searchText: string, page: number, size: number): Promise<SearchAlbumsPaging> {
        const result = await graphQLAlbumClient.query<GetSearchingAlbumsPagingQueryResult>({
            query : GetSearchingAlbumsPagingDocument,
            variables: {
                page: page,
                size: size,
                searchWord: searchText
            }
        })
        const data = result.data 
        const albumsPaginated = data as unknown as SearchAlbumsPaging 
      
        return  albumsPaginated;
    }
    async createAlbum(request: CreateAlbumRequest,onUploadProgress: any): Promise<CreateAlbumResponse> {
        let formData = new FormData();  
        formData.append("name",request.name);
        formData.append("description",request.description);
        formData.append("artistId",request.artistId);
        formData.append("artworkFile",request.artworkFile);
        request.songDescriptions.forEach(element => {
            formData.append("songDescriptions[]",element);
        });
        request.existingSongs.forEach(element => {
            formData.append("existingSongs[]",element);
        });
        request.genres.forEach(element => {
            formData.append("genres[]",element);
        });
        request.songNames.forEach(element => {
            formData.append("songNames[]",element);
        });
        request.songFiles.forEach(song => {
            formData.append("songFiles[]", song)
        })
        formData.append("releaseDate",request.releaseDate.toDateString())
        return await postAPI<CreateAlbumResponse>(`${MUSIC_URL}AdminAlbum/create`, formData, { "Content-Type": "multipart/form-data"}, onUploadProgress) 
    }
    async editAlbum(request: EditAlbumRequest, onUploadProgress: any): Promise<EditAlbumResponse> {
        let formData = new FormData();  
        formData.append("name",request.name);
        formData.append("albumId", request.albumId)
        formData.append("description",request.description);
        formData.append("artistId",request.artistId);
        formData.append("artworkFile",request.artworkFile);
        request.songDescriptions.forEach(element => {
            formData.append("songDescriptions[]",element);
        });
        request.genres.forEach(element => {
            formData.append("genres[]",element);
        });
        request.songNames.forEach(element => {
            formData.append("songNames[]",element);
        });
        request.songFiles.forEach(song => {
            formData.append("songFiles[]", song)
        })
        formData.append("releaseDate",request.releaseDate.toDateString())
        return await postAPI<EditAlbumResponse>(`${MUSIC_URL}AdminAlbum/edit`, formData, { "Content-Type": "multipart/form-data"}, onUploadProgress) 
    }
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
   

}