import { useEffect, useState } from "react";
import { AlbumRepository } from "../../../Domain/Repository/Music/AlbumRepository";
import { Album } from "../../../Domain/Model/Music";
import { RequestStatus, useGetData } from "./common";


export const useAlbumModelController = (repository : AlbumRepository) => {

    
    const {fetchStatus,setFetchStatus,setData, data} = useGetData(() => repository.getAlbumsPaginated(1, 100));
    //const [currentAlbums, setAlbums] = useState<Album[]>([]);
    /*useEffect(() => {
        async function init() {
         const albums = await repository.getAlbumsPaginated(1, 100);
          setAlbums(albums);
        }
        init();
      }, [repository]);*/

    const getMoreAlbumsPaginated = async (page: number, size: number) =>  {
      try{
        setFetchStatus(RequestStatus.Loading)
        const data = await repository.getAlbumsPaginated(page, size);
        setFetchStatus(RequestStatus.Success)
        setData(data);
        }catch(e : any){ setFetchStatus(RequestStatus.Error)}        
    }
    const refreshAlbumsPaginated = async (page: number, size: number) =>  {
      try{
        setFetchStatus(RequestStatus.Loading)
        const data = await repository.getAlbumsPaginated(page, size);
        setFetchStatus(RequestStatus.Success)
        setData(data);
        }catch(e : any){ setFetchStatus(RequestStatus.Error)}     
    }
    return {
        currentAlbums : data as Album[],
        fetchStatus,
        getMoreAlbumsPaginated,
        refreshAlbumsPaginated
      };
}

