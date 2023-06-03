import { inject, injectable } from "inversify";
import { MoodRepository } from "../../../Domain/Repository/Music/MoodRepository";
import { MoodPage, Mood } from "../../../Domain/Model/Music/Mood";
import { CreateMoodRequest, EditMoodRequest, MoodDataSource } from "../../DataSource/Music/Playlists/MoodDataSource";
import { TYPES } from "../../../DI/types";
import { ChartDataSource } from "../../DataSource/Music/Playlists/ChartDataSource";
import { BASE_URL } from "../../DataSource/API/constant";
import moment from "moment";
import { Genre } from "../../../Domain/Model/Music/Genre";

@injectable()
export class MoodRepositoryImpl implements MoodRepository{
    private _dataSource : MoodDataSource;
  
    public constructor(
        @inject(TYPES.MoodDataSource) dataSource : MoodDataSource
    ){
        this._dataSource = dataSource
    }
    async getMoods(page: number, size: number): Promise<MoodPage> {
        const response = await this._dataSource.getMoods(page,size);
        const moods = response.moodsPaging.moods.map(m => 
            {
             return {
                name : m.name,
                id: m.id,
                imgPath : `${BASE_URL}${m.imagePath}`,
                lastUpdated: m.lastUpdated,
                dateCreated: m.dateCreated,
                playlists: m.playlists?.map(p => 
                    {
                        return {
                            id: p?.id,
                            imgPath : `${BASE_URL}${p?.imagePath}`,
                            isFidarr : p?.userId == null ? true : false,
                            likes: p?.likes?.length,
                            name : p?.name,
                            streams : p?.streams,
                            tracks : p?.songs?.length ?? 0,
                            songs: p?.songs?.map(s => {
                                return {
                                    id: s?.id,
                                    imgSrc : `${BASE_URL}${s?.artworkPath}`,
                                    name : s?.name,
                                    artistName: s?.artist?.name,
                                    genres : s?.genres?.map(g => {
                                        return {
                                            id: g?.id,
                                            imgSrc : `${BASE_URL}${g?.imageUrl}`,
                                            name : g?.name,
                                            albums : g?.albums?.length ?? 0,
                                            tracks : g?.songs?.length ?? 0,
                                            artists: g?.artists?.length ?? 0,
                                            lastUpdated: g?.dateCreated
                                        } 
                                      }) as Genre[],
                                    streams : s?.streams ?? "",
                                    duration : "",
                                    releaseDate: moment(Date.parse(s?.releaseDate)).format('MMMM DD, YYYY'),
                                    lastUpdated: moment(Date.parse(s?.lastUpdated)).format('MMMM DD, YYYY')
                                }
                            })
                        }
                    }
                    
                )

             }as Mood

            }  
        )
        return {
            count : response.moodsPaging.count,
            data: moods
        }
    }
    async createMood(request: CreateMoodRequest): Promise<boolean> {
        const response = await this._dataSource.createMood(request)
        return response.success
    }
    async editMood(id: string, request: EditMoodRequest): Promise<boolean> {
        const response = await this._dataSource.editMood(id,request)
        return response.success
    }
    async deleteMood(id: string): Promise<boolean> {
        const response = await this._dataSource.deleteMood(id)
        return response.success
    }
}