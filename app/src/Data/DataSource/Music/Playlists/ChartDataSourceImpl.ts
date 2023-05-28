import { injectable } from "inversify";
import { ChartDataSource, DailyChartPaging, WeeklyChartPaging } from "./ChartDataSource";
import { graphQLPlaylistClient } from "../../GraphQL/Client/client";
import { GetDailyChartPagingDocument, GetDailyChartPagingQueryResult, GetWeeklyChartPagingDocument, GetWeeklyChartPagingQueryResult } from "../../GraphQL/Generated/Playlists/graphql";


@injectable()
export class ChartDataSourceImpl implements ChartDataSource{
    async getDailyCharts(page: number, size: number): Promise<DailyChartPaging> {
        const result = await graphQLPlaylistClient.query<GetDailyChartPagingQueryResult>({
            query : GetDailyChartPagingDocument,
            variables: {
                page: page,
                size: size,
            }
        })
        const data = result.data 
        const playlistsPaginated = data as unknown as DailyChartPaging
      
        return  playlistsPaginated;
    }
    async getWeeklyCharts(page: number, size: number): Promise<WeeklyChartPaging> {
        const result = await graphQLPlaylistClient.query<GetWeeklyChartPagingQueryResult>({
            query : GetWeeklyChartPagingDocument,
            variables: {
                page: page,
                size: size,
            }
        })
        const data = result.data 
        const playlistsPaginated = data as unknown as WeeklyChartPaging
      
        return  playlistsPaginated;
    }

}