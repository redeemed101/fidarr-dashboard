import { injectable } from "inversify";
import { AllPlaylistsPaging, CreatePlaylistRequest, EditPlaylistRequest, FidarrPlaylistsPaging, FidarrPlaylistsPagingByGenre, PlaylistDataSource, SearchPlaylistsPaging } from "./PlaylistDataSource";
import { GeneralResponse } from "../Artists/ArtistDataSource";
import { GetAllPlaylistsPagingDocument, GetAllPlaylistsPagingQueryResult, GetFidarrPlaylistsPagingByGenreDocument, GetFidarrPlaylistsPagingByGenreQueryResult, GetFidarrPlaylistsPagingDocument, GetFidarrPlaylistsPagingQueryResult, SearchPlaylistsPagingDocument, SearchPlaylistsPagingQueryResult } from "../../GraphQL/Generated/Playlists/graphql";
import { graphQLPlaylistClient } from "../../GraphQL/Client/client";
import { deleteAPI, postAPI, putAPI } from "../../API/axios_instance";
import { MUSIC_URL } from "../../API/constant";

@injectable()
export class PlaylistDataSourceImpl implements PlaylistDataSource{
    async searchPlaylistsPaging(searchText: string, page: number, size: number): Promise<SearchPlaylistsPaging> {
        const result = await graphQLPlaylistClient.query<SearchPlaylistsPagingQueryResult>({
            query : SearchPlaylistsPagingDocument,
            variables: {
                page: page,
                size: size,
                searchText: searchText
            }
        })
        const data = result.data 
        const playlistsPaginated = data as unknown as SearchPlaylistsPaging 
      
        return  playlistsPaginated;
    }
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
        
        return await postAPI<GeneralResponse>(`${MUSIC_URL}AdminPlaylist`, formData, { "Content-Type": "multipart/form-data"}) 
    }
    async editPlaylist(playlistId: string, request: EditPlaylistRequest): Promise<GeneralResponse> {
        let formData = new FormData();  
        formData.append("name",request.name);
        if(request.artworkFile)
           formData.append("artworkFile",request.artworkFile);
        request.SongIds.forEach(song => {
            formData.append("songIds[]", song)
        })
        
        return await putAPI<GeneralResponse>(`${MUSIC_URL}AdminPlaylist/${playlistId}`, formData, { "Content-Type": "multipart/form-data"})
    }
    async deletePlaylist(playlistId: string): Promise<GeneralResponse> {
        return await deleteAPI<GeneralResponse>(`${MUSIC_URL}AdminPlaylist/delete/${playlistId}`)
    }
}