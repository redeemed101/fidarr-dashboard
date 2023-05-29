import { CreateMoodRequest, EditMoodRequest } from "../../../Data/DataSource/Music/Playlists/MoodDataSource"
import { MoodPage } from "../../Model/Music/Mood"

export interface MoodRepository {
    getMoods(page:number, size: number): Promise<MoodPage>
    createMood(request: CreateMoodRequest): Promise<boolean>
    editMood(id: string,request: EditMoodRequest): Promise<boolean>
    deleteMood(id: string): Promise<boolean>
}