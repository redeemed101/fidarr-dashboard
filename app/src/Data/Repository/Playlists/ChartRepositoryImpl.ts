import { injectable, inject } from "inversify";
import { TYPES } from "../../../DI/types";
import { Chart, ChartPage, SongPosition } from "../../../Domain/Model/Music/Chart";
import { ChartRepository } from "../../../Domain/Repository/Music/ChartRepository";
import { ChartDataSource, CreateChartRequest, EditChartRequest } from "../../DataSource/Music/Playlists/ChartDataSource";
import { BASE_URL } from "../../DataSource/API/constant";
import moment from "moment";
import { Genre } from "../../../Domain/Model/Music/Genre";

@injectable()
export class ChartRepositoryImpl implements ChartRepository{
    private _dataSource : ChartDataSource;
  
    public constructor(
        @inject(TYPES.ChartDataSource) dataSource : ChartDataSource
    ){
        this._dataSource = dataSource
    }
    async deleteChart(chartId: string): Promise<boolean> {
        const response = await this._dataSource.deleteChart(chartId)
        return response.success
    }
    async createChart(request: CreateChartRequest): Promise<boolean> {
        const response = await this._dataSource.createChart(request)
        return response.success
    }
    async editChart(chartId:string,request: EditChartRequest): Promise<boolean> {
        const response = await this._dataSource.editChart(chartId, request)
        return response.success
    }
    async getDailyCharts(page: number, size: number): Promise<ChartPage> {
        const response = await this._dataSource.getDailyCharts(page,size)
        var charts = response.dailyChartPaging.charts.map((c,i)=>
        {
           return {
                id: c.id,
                imgPath : c.imagePath,
                name : c.name,
                positions: c.positions?.map(p =>{
                   return {
                     position : p?.position!,
                     song : {
                        imgSrc : `${BASE_URL}${p?.song?.artworkPath}`,
                        id: p?.song?.id,
                        name : p?.song?.name,
                        artist:{
                            id: p?.song?.artist?.id,
                            website: p?.song?.artist?.website,
                            bio: p?.song?.artist?.bio,
                            imgSrc : `${BASE_URL}${p?.song?.artist?.imagePath}`,
                            name : p?.song?.artist?.name,
                            genres : p?.song?.artist?.genres?.map(g => {
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
                            streams : p?.song?.artist?.songs?.reduce( (a,b) => a + (b?.streams?.length ?? 0) ,0) ?? 0,
                            tracks : p?.song?.artist?.songs?.length ?? 0,
                            albums: p?.song?.artist?.albums?.length ?? 0,
                            lastUpdated: p?.song?.artist?.lastUpdated
                        },
                        genres : p?.song?.genres?.map(g => {
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
                        streams : p?.song?.streams ?? "",
                        duration : "",
                        releaseDate: moment(Date.parse(p?.song?.releaseDate)).format('MMMM DD, YYYY'),
                        lastUpdated: moment(Date.parse(p?.song?.lastUpdated)).format('MMMM DD, YYYY')
                     }
                   } as SongPosition
                }),
                dateCreated: ""

            } as Chart
          }
        )
        return {
            count: response.dailyChartPaging.count,
            data: charts
        }
    }
    async getWeeklyCharts(page: number, size: number): Promise<ChartPage> {
        const response = await this._dataSource.getWeeklyCharts(page,size)
        var charts = response.weeklyChartPaging.charts.map((c,i)=>
        {
           return {
                id: c.id,
                imgPath : c.imagePath,
                name : c.name,
                positions: c.positions?.map(p =>{
                   return {
                     position : p?.position!,
                     song : {
                        imgSrc : `${BASE_URL}${p?.song?.artworkPath}`,
                        id: p?.song?.id,
                        name : p?.song?.name,
                        artist:{
                            id: p?.song?.artist?.id,
                            website: p?.song?.artist?.website,
                            bio: p?.song?.artist?.bio,
                            imgSrc : `${BASE_URL}${p?.song?.artist?.imagePath}`,
                            name : p?.song?.artist?.name,
                            genres : p?.song?.artist?.genres?.map(g => {
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
                            streams : p?.song?.artist?.songs?.reduce( (a,b) => a + (b?.streams?.length ?? 0) ,0) ?? 0,
                            tracks : p?.song?.artist?.songs?.length ?? 0,
                            albums: p?.song?.artist?.albums?.length ?? 0,
                            lastUpdated: p?.song?.artist?.lastUpdated
                        },
                        genres : p?.song?.genres?.map(g => {
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
                        streams : p?.song?.streams ?? "",
                        duration : "",
                        releaseDate: moment(Date.parse(p?.song?.releaseDate)).format('MMMM DD, YYYY'),
                        lastUpdated: moment(Date.parse(p?.song?.lastUpdated)).format('MMMM DD, YYYY')
                     }
                   } as SongPosition
                }),
                dateCreated: c.dateCreated,
                lastUpdated : c.lastUpdated

            } as Chart
          }
        )
        return {
            count: response.weeklyChartPaging.count,
            data: charts
        }
    }
    
}