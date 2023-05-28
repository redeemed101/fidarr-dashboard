import { Chart } from "../../GraphQL/Generated/Playlists/graphql";
import { GeneralResponse } from "../Artists/ArtistDataSource";

export interface ChartPage{
    count: number,
    charts : Chart[],
    
}
export interface WeeklyChartPaging {
   
    weeklyChartPaging : ChartPage
}
export interface DailyChartPaging {
   
    dailyChartPaging : ChartPage
}
export type EditChartRequest = {
    name: string,
    artwork: File,
    isDailyChart: boolean
    isWeeklyChart: boolean
    positions: SongPositionRequest[]
}
export type CreateChartRequest = {
    name: string,
    artwork: File,
    isDailyChart: boolean
    isWeeklyChart: boolean
    positions: SongPositionRequest[]
}
export type SongPositionRequest = {
    position: number
    songId: string
}

export interface ChartDataSource {
    getDailyCharts(page: number, size: number) : Promise<DailyChartPaging>
    getWeeklyCharts(page: number, size: number) : Promise<WeeklyChartPaging>
    createChart(request: CreateChartRequest) : Promise<GeneralResponse>
    editChart(chartId:string, request: EditChartRequest) : Promise<GeneralResponse>
    deleteChart(chartId:string) : Promise<GeneralResponse>
}