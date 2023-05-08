import { useState } from "react";
import { GenreRepository } from "../../../Domain/Repository/Music/GenreRepository";
import { RequestStatus, useGetData } from "./common";
import { PAGE_SIZE } from "../../../Data/Utils/constants";
import { Genre } from "../../../Domain/Model/Music/Genre";


type GenreDetails = {
  name : string,
  image: File,
}
export const useGenreModelController = (repository : GenreRepository) => {

    const [currentPage, setCurrentPage] = useState(1); 
    const {fetchStatus,setFetchStatus,setData, data} = useGetData(() => repository.getGenresPaging(currentPage, PAGE_SIZE));
    const [genres, setGenres] = useState<Genre[] | []>([]);
    const getAllGenres = async () =>{
        try{
          const response = await repository.getAllGenres()
          setFetchStatus(RequestStatus.Success)
          setGenres(response)
        }
       catch(e : any){ setFetchStatus(RequestStatus.Error)} 
    }
    const getGenresPaginated = async() => {
        try{
          setFetchStatus(RequestStatus.Loading)
          const response = await repository.getGenresPaging(currentPage, PAGE_SIZE);
          setFetchStatus(RequestStatus.Success)
          setData({count: response.count, data : response.data});
        }
      catch(e : any){ setFetchStatus(RequestStatus.Error)} 
    }
    const createGenre = async (genre: GenreDetails,onUploadProgress: any) => {
       try{
        setFetchStatus(RequestStatus.Loading)
        const response = await repository.createGenre({name: genre.name, artworkFile: genre.image}, onUploadProgress)
        if(response.success)
           setFetchStatus(RequestStatus.Success)
        else
           setFetchStatus(RequestStatus.Failure)
       }
       catch(e : any){ setFetchStatus(RequestStatus.Error)} 
    }
    const getMoreGenresPaginated = async () =>  {
      try{
       
        const newPage = currentPage + 1;
        setCurrentPage(newPage)
        console.log("Page number ", currentPage, " ", newPage)
        const response = await repository.getGenresPaging(newPage, PAGE_SIZE);
        setFetchStatus(RequestStatus.Success)
        const oldData = data.data
        const responseData = response.data
        const newData = oldData.concat(responseData)
        console.log("New data ", newData)
        setData({count: response.count, data :newData});
        }catch(e : any){ setFetchStatus(RequestStatus.Error)}     
    }
    const refreshGenresPaginated = async () =>  {
      try{
        setFetchStatus(RequestStatus.Loading)
        const newPage = 1;
        setCurrentPage(newPage)
        const response = await repository.getGenresPaging(newPage, PAGE_SIZE);
        setFetchStatus(RequestStatus.Success)
        setData({count: response.count, data : response.data});
        }catch(e : any){ setFetchStatus(RequestStatus.Error)}    
  }
    return {
        currentGenres : data.data as Genre[],
        count: data.count,
        fetchStatus,
        currentPage,
        genres,
        getGenresPaginated,
        createGenre,
        getAllGenres,
        setCurrentPage,
        getMoreGenresPaginated,
        refreshGenresPaginated
      };
}