import { injectable } from "inversify";
import { ChartRepository } from "../../../Domain/Repository/Music/ChartRepository";
import { ChartPage } from "../../../Domain/Model/Music/Chart";
import { CreateChartRequest, EditChartRequest } from "../../DataSource/Music/Playlists/ChartDataSource";
import { Genre } from "../../../Domain/Model/Music/Genre";

@injectable()
export class ChartRepositoryMock implements ChartRepository{
    getDailyCharts(page: number, size: number): Promise<ChartPage> {
        const charts = [...Array(20)].map((c,i) => {
            return {
                id: `${i}`,
                imgPath : "https://picsum.photos/200",
                name : `chart ${i}`,
                positions: [...Array(10)].map((p,y) => {
                    return {
                            position: y +1,
                            song:  {
                                id: `track-${y}`,                    
                                imgSrc : "https://picsum.photos/200",
                                name : `song ${y}`,
                                artistName: `artist ${y}`,
                                genres : [...Array(5)].map(g => {
                                    return  {
                                        imgSrc : "",
                                        name : "Pop",
                                        albums : 0,
                                        tracks : 0,
                                        artists: 0,
                                        lastUpdated: "2019-09-09",
                                        id: "1"
                                    }
                                }) as Genre[],
                                streams : "10M",
                                duration : "",
                                lastUpdated: "2023-10-31", 
                                releaseDate: "2023-10-31",
                               
                            }
                        }
                    
                }),
                dateCreated: "2023-10-31",
                lastUpdated: "2023-10-31",
            }
        })
        const res = {
            count: 20,
            data: charts
        }
        return new Promise(resolve => setTimeout(() => resolve(res), 5000)) ;
    }
    getWeeklyCharts(page: number, size: number): Promise<ChartPage> {
        const charts = [...Array(20)].map((c,i) => {
            return {
                id: `${i}`,
                imgPath : "https://picsum.photos/200",
                name : `chart ${i}`,
                positions: [...Array(10)].map((p,y) => {
                    return {
                            position: y +1,
                            song:  {
                                id: `track-${y}`,                    
                                imgSrc : "https://picsum.photos/200",
                                name : `song ${y}`,
                                artistName: `artist ${y}`,
                                genres : [...Array(5)].map(g => {
                                    return  {
                                        imgSrc : "",
                                        name : "Pop",
                                        albums : 0,
                                        tracks : 0,
                                        artists: 0,
                                        lastUpdated: "2019-09-09",
                                        id: "1"
                                    }
                                }) as Genre[],
                                streams : "10M",
                                duration : "",
                                lastUpdated: "2023-10-31", 
                                releaseDate: "2023-10-31",
                               
                            }
                        }
                    
                }),
                dateCreated: "2023-10-31",
                lastUpdated: "2023-10-31",
            }
        })
        const res = {
            count: 20,
            data: charts
        }
        return new Promise(resolve => setTimeout(() => resolve(res), 5000)) ;
    }
    createChart(request: CreateChartRequest): Promise<boolean> {
        return new Promise(resolve => setTimeout(() => resolve(true), 5000)) ;
    }
    editChart(chartId: string, request: EditChartRequest): Promise<boolean> {
        return new Promise(resolve => setTimeout(() => resolve(true), 5000)) ;
    }
    deleteChart(chartId: string): Promise<boolean> {
        return new Promise(resolve => setTimeout(() => resolve(true), 5000)) ;
    }
}