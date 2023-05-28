import { CreateChartRequest, EditChartRequest } from "../../../Data/DataSource/Music/Playlists/ChartDataSource"
import { ChartPage } from "../../Model/Music/Chart"


export interface ChartRepository {
    getDailyCharts(page: number, size: number) : Promise<ChartPage>
    getWeeklyCharts(page: number, size: number) : Promise<ChartPage>
    createChart(request: CreateChartRequest) : Promise<boolean>
    editChart(chartId:string,request: EditChartRequest) : Promise<boolean>
    deleteChart(chartId:string) : Promise<boolean>
}