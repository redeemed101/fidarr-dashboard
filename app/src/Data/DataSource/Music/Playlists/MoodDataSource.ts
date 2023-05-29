import { Mood } from "../../GraphQL/Generated/Playlists/graphql";
import { GeneralResponse } from "../Artists/ArtistDataSource";

export interface MoodPage{
    count: number,
    moods : Mood[],
    
}
export interface MoodsPaging {
   
    moodsPaging : MoodPage
}
export type EditMoodRequest = {
    name: string,
    artwork: File,
    playlists: string[]
}
export type CreateMoodRequest = {
    name: string,
    artwork: File,
    playlists: string[]
}

export interface MoodDataSource{
    getMoods(page:number, size: number): Promise<MoodsPaging>
    createMood(request: CreateMoodRequest): Promise<GeneralResponse>
    editMood(id: string,request: EditMoodRequest): Promise<GeneralResponse>
    deleteMood(id: string): Promise<GeneralResponse>
}