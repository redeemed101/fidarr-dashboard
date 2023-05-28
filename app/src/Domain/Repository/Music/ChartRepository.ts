import { ChartPage } from "../../Model/Music/Chart"


export interface ChartRepository {
    getDailyCharts(page: number, size: number) : Promise<ChartPage>
    getWeeklyCharts(page: number, size: number) : Promise<ChartPage>
}