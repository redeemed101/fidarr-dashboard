import { useState } from "react";
import { MoodRepository } from "../../../Domain/Repository/Music/MoodRepository";
import { RequestStatus, PagedData } from "./common";
import { Mood } from "../../../Domain/Model/Music/Mood";
import { CreateMoodRequest, EditMoodRequest } from "../../../Data/DataSource/Music/Playlists/MoodDataSource";
import { PAGE_SIZE } from "../../../Data/Utils/constants";

export const useMoodModelController = (repository : MoodRepository) => {
    const [currentPage, setCurrentPage] = useState(1); 
    const [moodModified, setMoodModified] = useState(false)
    const [fetchStatus, setFetchStatus] = useState<RequestStatus>(RequestStatus.Success);
    const [data, setData] = useState<PagedData>({count: 0, data: []});

    const createMood = async (request: CreateMoodRequest) => {
        try{
        const result = await repository.createMood(request)
        if(result){
            setFetchStatus(RequestStatus.Success)
            setMoodModified(true)
        }
        else
            setFetchStatus(RequestStatus.Error)
        }
        catch(e : any){ setFetchStatus(RequestStatus.Error)} 
    }
    const editMood = async (id:string,request: EditMoodRequest) => {

        try{
            const result = await repository.editMood(id,request)
            if(result){
                setFetchStatus(RequestStatus.Success)
                setMoodModified(true)
            }
            else
                setFetchStatus(RequestStatus.Error)
        }
        catch(e : any){ setFetchStatus(RequestStatus.Error)} 

    }
    const deleteMood = async (id:string, finish: () => void) => {

        try{
            const result = await repository.deleteMood(id)
            if(result){
                setFetchStatus(RequestStatus.Success)
                finish()
            }
            else
                setFetchStatus(RequestStatus.Error)
        }
        catch(e : any){ setFetchStatus(RequestStatus.Error)} 

    }
    const getMoodsPaginated = async (getMore: boolean = false) =>{
        try{
         
            if(getMore){
                const newPage = currentPage + 1;
                setCurrentPage(newPage)
                const response = await repository.getMoods(newPage, PAGE_SIZE);
                setFetchStatus(RequestStatus.Success)
                const oldData = data.data
                const responseData = response.data
                const newData = oldData.concat(responseData)
                console.log("New data ", newData)
                setData({count: response.count, data :newData});
            }
            else{
              setFetchStatus(RequestStatus.Loading)
              const response =  await repository.getMoods(currentPage, PAGE_SIZE)          
              setFetchStatus(RequestStatus.Success)         
              setData({count: response.count, data : response.data});
            }
        }
        catch(e : any){ setFetchStatus(RequestStatus.Error)}  
      }
     
      const refreshMoodsPaginated = async () =>  {
        try{
          setFetchStatus(RequestStatus.Loading)
          const newPage = 1;
          setCurrentPage(newPage)
          const response = await repository.getMoods(newPage, PAGE_SIZE);
          setFetchStatus(RequestStatus.Success)
          setData({count: response.count, data : response.data});
          }catch(e : any){ setFetchStatus(RequestStatus.Error)}    
      }

    return {
        currentMoods : data.data as Mood[],
        count: data.count,
        fetchStatus,
        currentPage,
        moodModified,
        createMood,
        editMood,
        deleteMood,
        getMoodsPaginated,
        refreshMoodsPaginated,
    }
}