import { useState } from "react";
import { ChartRepository } from "../../../Domain/Repository/Music/ChartRepository";
import { RequestStatus, PagedData } from "./common";
import { Chart } from "../../../Domain/Model/Music/Chart";
import { request } from "http";
import { CreateChartRequest, EditChartRequest } from "../../../Data/DataSource/Music/Playlists/ChartDataSource";
import { PAGE_SIZE } from "../../../Data/Utils/constants";

export const useChartModelController = (repository : ChartRepository) => {
    const [currentPage, setCurrentPage] = useState(1); 
    const [fetchStatus, setFetchStatus] = useState<RequestStatus>(RequestStatus.Success);
    const [data, setData] = useState<PagedData>({count: 0, data: []});


    const createChart = async (request: CreateChartRequest) => {
        try{
        const result = await repository.createChart(request)
        if(result)
            setFetchStatus(RequestStatus.Success)
        else
            setFetchStatus(RequestStatus.Error)
        }
        catch(e : any){ setFetchStatus(RequestStatus.Error)} 
    }
    const editChart = async (chartId:string,request: EditChartRequest) => {

        try{
            const result = await repository.editChart(chartId,request)
            if(result)
                setFetchStatus(RequestStatus.Success)
            else
                setFetchStatus(RequestStatus.Error)
        }
        catch(e : any){ setFetchStatus(RequestStatus.Error)} 

    }
    const deleteChart = async (chartId:string, finish: () => void) => {

        try{
            const result = await repository.deleteChart(chartId)
            if(result){
                setFetchStatus(RequestStatus.Success)
                finish()
            }
            else
                setFetchStatus(RequestStatus.Error)
        }
        catch(e : any){ setFetchStatus(RequestStatus.Error)} 

    }
    const getDailyChartsPaginated = async (getMore: boolean = false) =>{
        try{
         
            if(getMore){
                const newPage = currentPage + 1;
                setCurrentPage(newPage)
                const response = await repository.getDailyCharts(newPage, PAGE_SIZE);
                setFetchStatus(RequestStatus.Success)
                const oldData = data.data
                const responseData = response.data
                const newData = oldData.concat(responseData)
                console.log("New data ", newData)
                setData({count: response.count, data :newData});
            }
            else{
              setFetchStatus(RequestStatus.Loading)
              const response =  await repository.getDailyCharts(currentPage, PAGE_SIZE)          
              setFetchStatus(RequestStatus.Success)         
              setData({count: response.count, data : response.data});
            }
        }
        catch(e : any){ setFetchStatus(RequestStatus.Error)}  
      }
     
      const refreshDailyChartsPaginated = async () =>  {
        try{
          setFetchStatus(RequestStatus.Loading)
          const newPage = 1;
          setCurrentPage(newPage)
          const response = await repository.getDailyCharts(newPage, PAGE_SIZE);
          setFetchStatus(RequestStatus.Success)
          setData({count: response.count, data : response.data});
          }catch(e : any){ setFetchStatus(RequestStatus.Error)}    
      }

      const getWeeklyChartsPaginated = async (getMore: boolean = false) =>{
        try{
         
            if(getMore){
                const newPage = currentPage + 1;
                setCurrentPage(newPage)
                const response = await repository.getWeeklyCharts(newPage, PAGE_SIZE);
                setFetchStatus(RequestStatus.Success)
                const oldData = data.data
                const responseData = response.data
                const newData = oldData.concat(responseData)
                console.log("New data ", newData)
                setData({count: response.count, data :newData});
            }
            else{
              setFetchStatus(RequestStatus.Loading)
              const response =  await repository.getWeeklyCharts(currentPage, PAGE_SIZE)          
              setFetchStatus(RequestStatus.Success)         
              setData({count: response.count, data : response.data});
            }
        }
        catch(e : any){ setFetchStatus(RequestStatus.Error)}  
      }
     
      const refreshWeeklyChartsPaginated = async () =>  {
        try{
          setFetchStatus(RequestStatus.Loading)
          const newPage = 1;
          setCurrentPage(newPage)
          const response = await repository.getWeeklyCharts(newPage, PAGE_SIZE);
          setFetchStatus(RequestStatus.Success)
          setData({count: response.count, data : response.data});
          }catch(e : any){ setFetchStatus(RequestStatus.Error)}    
      }



    return {
        currentCharts : data.data as Chart[],
        count: data.count,
        fetchStatus,
        currentPage,
        editChart,
        createChart,
        deleteChart,
        getDailyChartsPaginated,
        getWeeklyChartsPaginated,
        refreshDailyChartsPaginated,
        refreshWeeklyChartsPaginated
    }
}