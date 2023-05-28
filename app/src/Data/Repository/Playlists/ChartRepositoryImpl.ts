import { injectable, inject } from "inversify";
import { TYPES } from "../../../DI/types";
import { ChartPage } from "../../../Domain/Model/Music/Chart";
import { ChartRepository } from "../../../Domain/Repository/Music/ChartRepository";
import { ChartDataSource } from "../../DataSource/Music/Playlists/ChartDataSource";

@injectable()
export class ChartRepositoryImpl implements ChartRepository{
    private _dataSource : ChartDataSource;
  
    public constructor(
        @inject(TYPES.ChartDataSource) dataSource : ChartDataSource
    ){
        this._dataSource = dataSource
    }
    async getDailyCharts(page: number, size: number): Promise<ChartPage> {
        throw new Error("Method not implemented.");
    }
    async getWeeklyCharts(page: number, size: number): Promise<ChartPage> {
        throw new Error("Method not implemented.");
    }
    
}