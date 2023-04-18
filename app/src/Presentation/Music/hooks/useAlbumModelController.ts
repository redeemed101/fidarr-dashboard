import { useEffect, useState } from "react";
import { AlbumRepository } from "../../../Domain/Repository/Music/AlbumRepository";
import { Album } from "../../../Domain/Model/Music";
import { RequestStatus, useGetData } from "./common";
import { PAGE_SIZE } from "../../../Data/Utils/constants";


export const useAlbumModelController = (repository : AlbumRepository) => {

    const [currentPage, setCurrentPage] = useState(1);
    console.log("Current Page number ", currentPage)
    const {fetchStatus,setFetchStatus,setData, data} = useGetData(() => repository.getAlbumsPaging(currentPage, PAGE_SIZE));
    //const [currentAlbums, setAlbums] = useState<Album[]>([]);
    /*useEffect(() => {
        async function init() {
         const albums = await repository.getAlbumsPaginated(1, 100);
          setAlbums(albums);
        }
        init();
      }, [repository]);*/
      
    const getMoreAlbumsPaginated = async () =>  {
      try{
        //setFetchStatus(RequestStatus.Loading)
        const newPage = currentPage + 1;
        setCurrentPage(newPage)
        console.log("Page number ", currentPage, " ", newPage)
        const response = await repository.getAlbumsPaging(newPage, PAGE_SIZE);
        setFetchStatus(RequestStatus.Success)
        const oldData = data.data
        const responseData = response.data
        const newData = oldData.concat(responseData)
        console.log("New data ", newData)
        setData({count: response.count, data :newData});
        }catch(e : any){ setFetchStatus(RequestStatus.Error)}        
    }
    const refreshAlbumsPaginated = async () =>  {
      try{
        setFetchStatus(RequestStatus.Loading)
        const response = await repository.getAlbumsPaging(currentPage, PAGE_SIZE);
        setFetchStatus(RequestStatus.Success)
        setData({count: response.count, data : response.data});
        }catch(e : any){ setFetchStatus(RequestStatus.Error)}     
    }
    console.log("Data is here ",data, "count ", data.count)
    console.log("Has more",data.count/(currentPage * PAGE_SIZE) > 1) 
    return {
        currentAlbums : data.data as Album[],
        count: data.count,
        fetchStatus,
        currentPage,
        setCurrentPage,
        getMoreAlbumsPaginated,
        refreshAlbumsPaginated
      };
}

