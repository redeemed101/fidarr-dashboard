import { useState } from "react";
import { PeopleRepository } from "../../../Domain/Repository/Users/people/PeopleRepository";
import { PagedData, RequestStatus } from "../../Music/hooks/common";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PAGE_SIZE } from "../../../Data/Utils/constants";
import { UpdateUserRequest } from "../../../Data/DataSource/Users/People/PeopleDataSource";
import { User } from "../../../Domain/Model/Auth/User";

export const usePeopleModelController = (repository : PeopleRepository) => {   
    const [successful, setSuccess] = useState<boolean>(true)
    const [currentPage, setCurrentPage] = useState(1); 
    const [fetchStatus, setFetchStatus] = useState<RequestStatus>(RequestStatus.Success);
    const [data, setData] = useState<PagedData>({count: 0, data: []});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const updateUser = async (request: UpdateUserRequest) => {
        try{
           var response =  await repository.updateUser(request)
           setSuccess(response.success)

        }
        catch(e : any){ setSuccess(false)}   
    }
    const deleteUser = async (id: string,finish: () => void) => {
        try{
           var response =  await repository.deleteUser(id)
           if(response)
              finish()
           setSuccess(response.success)

        }
        catch(e : any){ setSuccess(false)}   
    }
    const refreshSubscribers= async () =>  {
      try{
        setFetchStatus(RequestStatus.Loading)
        const newPage = 1;
        setCurrentPage(newPage)
        const response = await repository.getSubscribersPaging(newPage, PAGE_SIZE);
        setFetchStatus(RequestStatus.Success)
        setData({count: response.count, data : response.data});
        }catch(e : any){ setFetchStatus(RequestStatus.Error)}    
    }
    const refreshPeople = async () =>  {
      try{
        setFetchStatus(RequestStatus.Loading)
        const newPage = 1;
        setCurrentPage(newPage)
        const response = await repository.getUsersPaging(newPage, PAGE_SIZE);
        setFetchStatus(RequestStatus.Success)
        setData({count: response.count, data : response.data});
        }catch(e : any){ setFetchStatus(RequestStatus.Error)}    
    }
    const getPeople = async (more: boolean = true) => {
        try{
            if(more){
              const newPage = currentPage + 1;
              setCurrentPage(newPage)
              console.log("Page number ", currentPage, " ", newPage)
              const response = await repository.getUsersPaging(newPage, PAGE_SIZE);
              setFetchStatus(RequestStatus.Success)
              const oldData = data.data
              const responseData = response.data
              const newData = oldData.concat(responseData)
              console.log("New data ", newData)
              setData({count: response.count, data :newData});
            }
            else{
              setFetchStatus(RequestStatus.Loading)
              const response = await repository.getUsersPaging(currentPage, PAGE_SIZE);         
              setFetchStatus(RequestStatus.Success)         
              setData({count: response.count, data : response.data});
            }
        }
        catch(e : any){ setFetchStatus(RequestStatus.Error)}   

    }
    const getSubscribers = async (more: boolean = true) => {
        try{
            if(more){
              const newPage = currentPage + 1;
              setCurrentPage(newPage)
              console.log("Page number ", currentPage, " ", newPage)
              const response = await repository.getSubscribersPaging(newPage, PAGE_SIZE);
              setFetchStatus(RequestStatus.Success)
              const oldData = data.data
              const responseData = response.data
              const newData = oldData.concat(responseData)
              console.log("New data ", newData)
              setData({count: response.count, data :newData});
            }
            else{
              setFetchStatus(RequestStatus.Loading)
              const response = await repository.getSubscribersPaging(currentPage, PAGE_SIZE);         
              setFetchStatus(RequestStatus.Success)         
              setData({count: response.count, data : response.data});
            }
        }
        catch(e : any){ setFetchStatus(RequestStatus.Error)}   

    }
    return{
        fetchStatus,
        successful,
        currentUsers : data.data as User[],
        count: data.count,
        currentPage,
        refreshPeople,
        refreshSubscribers,
        getPeople,
        getSubscribers,
        updateUser,
        deleteUser
    }
}