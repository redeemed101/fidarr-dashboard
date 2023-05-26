import { injectable } from "inversify";
import { AllPlaylistsPaging, CreatePlaylistRequest, EditPlaylistRequest, FidarrPlaylistsPaging, FidarrPlaylistsPagingByGenre, PlaylistDataSource } from "./PlaylistDataSource";
import { GeneralResponse } from "../Artists/ArtistDataSource";
import { GetAllPlaylistsPagingDocument, GetAllPlaylistsPagingQueryResult, GetFidarrPlaylistsPagingByGenreDocument, GetFidarrPlaylistsPagingByGenreQueryResult, GetFidarrPlaylistsPagingDocument, GetFidarrPlaylistsPagingQueryResult } from "../../GraphQL/Generated/Playlists/graphql";
import { graphQLPlaylistClient } from "../../GraphQL/Client/client";
import { deleteAPI, postAPI } from "../../API/axios_instance";

@injectable()
export class PlaylistDataSourceImpl implements PlaylistDataSource{
    async getAllPlaylistsPaging(page: number, size: number): Promise<AllPlaylistsPaging> {
        const result = await graphQLPlaylistClient.query<GetAllPlaylistsPagingQueryResult>({
            query : GetAllPlaylistsPagingDocument,
            variables: {
                page: page,
                size: size,
            }
        })
        const data = result.data 
        const playlistsPaginated = data as unknown as AllPlaylistsPaging 
      
        return  playlistsPaginated;
    }
   
    async getFidarrPlaylistsPaging(page: number, size: number): Promise<FidarrPlaylistsPaging> {
        const result = await graphQLPlaylistClient.query<GetFidarrPlaylistsPagingQueryResult>({
            query : GetFidarrPlaylistsPagingDocument,
            variables: {
                page: page,
                size: size,
            }
        })
        const data = result.data 
        const playlistsPaginated = data as unknown as FidarrPlaylistsPaging 
      
        return  playlistsPaginated;
    }
    async getPlaylistsbyGenrePaging(genreId: string, page: number, size: number): Promise<FidarrPlaylistsPagingByGenre> {
        const result = await graphQLPlaylistClient.query<GetFidarrPlaylistsPagingByGenreQueryResult>({
            query : GetFidarrPlaylistsPagingByGenreDocument,
            variables: {
                page: page,
                size: size,
            }
        })
        const data = result.data 
        const playlistsPaginated = data as unknown as FidarrPlaylistsPagingByGenre 
      
        return  playlistsPaginated;
    }
    async createPlaylist(request: CreatePlaylistRequest): Promise<GeneralResponse> {
        let formData = new FormData();  
        formData.append("name",request.name);
        formData.append("artworkFile",request.artworkFile);
        request.SongIds.forEach(song => {
            formData.append("songIds[]", song)
        })
        
        return await postAPI<GeneralResponse>("AdminPlaylist/create", formData, { "Content-Type": "multipart/form-data"}) 
    }
    async editPlaylist(playlistId: string, request: EditPlaylistRequest): Promise<GeneralResponse> {
        let formData = new FormData();  
        formData.append("name",request.name);
        if(request.artworkFile)
           formData.append("artworkFile",request.artworkFile);
        request.SongIds.forEach(song => {
            formData.append("songIds[]", song)
        })
        
        return await postAPI<GeneralResponse>(`AdminPlaylist/edit/${playlistId}`, formData, { "Content-Type": "multipart/form-data"})
    }
    async deletePlaylist(playlistId: string): Promise<GeneralResponse> {
        return await deleteAPI<GeneralResponse>(`AdminPlaylist/delete/${playlistId}`)
    }
}