import { Chart } from "../../GraphQL/Generated/Playlists/graphql";

export interface ChartPage{
    count: number,
    playlists : Chart[],
    
}
export interface WeeklyChartPaging {
   
    weeklyChartPaging : ChartPage
}
export interface DailyChartPaging {
   
    dailyChartPaging : ChartPage
}

export interface ChartDataSource {
    getDailyCharts(page: number, size: number) : Promise<DailyChartPaging>
    getWeeklyCharts(page: number, size: number) : Promise<WeeklyChartPaging>
}