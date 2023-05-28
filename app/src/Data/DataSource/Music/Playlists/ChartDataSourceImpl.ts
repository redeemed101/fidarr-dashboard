import { injectable } from "inversify";
import { ChartDataSource, CreateChartRequest, DailyChartPaging, EditChartRequest, WeeklyChartPaging } from "./ChartDataSource";
import { graphQLPlaylistClient } from "../../GraphQL/Client/client";
import { GetDailyChartPagingDocument, GetDailyChartPagingQueryResult, GetWeeklyChartPagingDocument, GetWeeklyChartPagingQueryResult } from "../../GraphQL/Generated/Playlists/graphql";
import { GeneralResponse } from "../Artists/ArtistDataSource";
import { deleteAPI, postAPI, putAPI } from "../../API/axios_instance";


@injectable()
export class ChartDataSourceImpl implements ChartDataSource{
    async deleteChart(chartId: string): Promise<GeneralResponse> {
        return deleteAPI<GeneralResponse>(`AdminChart/delete/${chartId}`)
    }
    async createChart(request: CreateChartRequest): Promise<GeneralResponse> {
        let formData = new FormData();  
        request.artwork && formData.append("chartArtwork",request.artwork);
        formData.append("name",request.name);
        formData.append("isDailyChart",`${request.isDailyChart}`);
        formData.append("isWeeklyChart",`${request.isWeeklyChart}`);
        request.positions.forEach(position => {
            formData.append("positions[]",JSON.stringify(position));
        })
        return postAPI<GeneralResponse>("AdminChart", formData)
    }
    async editChart(chartId:string,request: EditChartRequest): Promise<GeneralResponse> {
        let formData = new FormData();  
        request.artwork && formData.append("chartArtwork",request.artwork);
        formData.append("name",request.name);
        formData.append("isDailyChart",`${request.isDailyChart}`);
        formData.append("isWeeklyChart",`${request.isWeeklyChart}`);
        request.positions.forEach(position => {
            formData.append("positions[]",JSON.stringify(position));
        })
        return putAPI<GeneralResponse>(`AdminChart/${chartId}`, formData)
    }
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