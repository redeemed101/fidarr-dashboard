import { useCallback, useEffect, useState } from "react";
import { AlbumRepository } from "../../../Domain/Repository/Music/AlbumRepository";
import { Artist } from "../../../Domain/Model/Music";
import { ArtistRepository } from "../../../Domain/Repository/Music/ArtistRepository";
import { RequestStatus, useGetData } from "./common";
import { PAGE_SIZE } from "../../../Data/Utils/constants";


export const useArtistModelController = (repository : ArtistRepository) => {

    const [currentPage, setCurrentPage] = useState(1); const {fetchStatus,setFetchStatus,setData, data} = useGetData(() => repository.getArtistsPaging(currentPage, PAGE_SIZE));
    

    const getMoreArtistsPaginated = async () =>  {
      try{
       
        const newPage = currentPage + 1;
        setCurrentPage(newPage)
        console.log("Page number ", currentPage, " ", newPage)
        const response = await repository.getArtistsPaging(newPage, PAGE_SIZE);
        setFetchStatus(RequestStatus.Success)
        const oldData = data.data
        const responseData = response.data
        const newData = oldData.concat(responseData)
        console.log("New data ", newData)
        setData({count: response.count, data :newData});
        }catch(e : any){ setFetchStatus(RequestStatus.Error)}     
    }
    const refreshArtistsPaginated = async () =>  {
      try{
        setFetchStatus(RequestStatus.Loading)
        const newPage = 1;
        setCurrentPage(newPage)
        const response = await repository.getArtistsPaging(newPage, PAGE_SIZE);
        setFetchStatus(RequestStatus.Success)
        setData({count: response.count, data : response.data});
        }catch(e : any){ setFetchStatus(RequestStatus.Error)}    
  }
    return {
        currentArtists : data.data as Artist[],
        count: data.count,
        fetchStatus,
        currentPage,
        setCurrentPage,
        getMoreArtistsPaginated,
        refreshArtistsPaginated
      };
}

