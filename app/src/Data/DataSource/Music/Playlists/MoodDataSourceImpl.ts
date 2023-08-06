import { injectable } from "inversify";
import { CreateMoodRequest, EditMoodRequest, MoodDataSource, MoodsPaging } from "./MoodDataSource";
import { GeneralResponse } from "../Artists/ArtistDataSource";
import { deleteAPI, postAPI, putAPI } from "../../API/axios_instance";
import { graphQLPlaylistClient } from "../../GraphQL/Client/client";
import { GetMoodsDocument, GetMoodsQueryResult } from "../../GraphQL/Generated/Playlists/graphql";
import { MUSIC_URL } from "../../API/constant";

@injectable()
export class MoodDataSourceImpl implements MoodDataSource{
    async getMoods(page: number, size: number): Promise<MoodsPaging> {
        const result = await graphQLPlaylistClient.query<GetMoodsQueryResult>({
            query : GetMoodsDocument,
            variables: {
                page: page,
                size: size,
            }
        })
        const data = result.data 
        const moodsPaginated = data as unknown as MoodsPaging
      
        return  moodsPaginated;
    }
    async createMood(request: CreateMoodRequest): Promise<GeneralResponse> {
        let formData = new FormData();  
        request.artwork && formData.append("moodArtwork",request.artwork);
        formData.append("name",request.name);
        request.playlists.forEach(position => {
            formData.append("playlistIds[]",JSON.stringify(position));
        })
        return await postAPI<GeneralResponse>(`${MUSIC_URL}AdminMood`, formData)
    }
    async editMood(id: string, request: EditMoodRequest): Promise<GeneralResponse> {
        let formData = new FormData();  
        request.artwork && formData.append("moodArtwork",request.artwork);
        formData.append("name",request.name);
        request.playlists.forEach(position => {
            formData.append("playlistIds[]",JSON.stringify(position));
        })
        return await putAPI<GeneralResponse>(`${MUSIC_URL}AdminMood/${id}`, formData)
    }
    async deleteMood(id: string): Promise<GeneralResponse> {
        
     return deleteAPI<GeneralResponse>(`${MUSIC_URL}AdminMood/delete/${id}`)
    
    }
}