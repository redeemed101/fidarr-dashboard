import { useState } from "react";
import { GenreRepository } from "../../../Domain/Repository/Music/GenreRepository";
import { PagedData, RequestStatus, useGetData } from "./common";
import { PAGE_SIZE } from "../../../Data/Utils/constants";
import { Genre } from "../../../Domain/Model/Music/Genre";


type GenreDetails = {
  name : string,
  image: File,
}
export const useGenreModelController = (repository : GenreRepository) => {

    const [currentPage, setCurrentPage] = useState(1); 
    const [genreModified, setGenreModified] = useState(false)
    const [fetchStatus, setFetchStatus] = useState<RequestStatus>(RequestStatus.Success);
    const [data, setData] = useState<PagedData>({count: 0, data: []});
    //const {fetchStatus,setFetchStatus,setData, data} = useGetData(() => repository.getGenresPaging(currentPage, PAGE_SIZE));
    const [genres, setGenres] = useState<Genre[] | []>([]);
    const getAllGenres = async () =>{
        try{
          const response = await repository.getAllGenres()
          setFetchStatus(RequestStatus.Success)
          setGenres(response)
        }
       catch(e : any){ setFetchStatus(RequestStatus.Error)} 
    }
    const deleteGenre = async (genreId : string, finish: () => void) => {
      try{
        setFetchStatus(RequestStatus.Loading)
        const response = await repository.deleteGenre(genreId);
        if(response){
          setFetchStatus(RequestStatus.Success)
          setGenreModified(true)
        }
        else{
          setFetchStatus(RequestStatus.Error)
          setGenreModified(false)
        }
       
        
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
    const editGenre = async (id: string,genre: GenreDetails,onUploadProgress: any) => {
      try{
       setFetchStatus(RequestStatus.Loading)
       const response = await repository.editGenre(id,{name: genre.name, artworkFile: genre.image}, onUploadProgress)
       if(response){
          setFetchStatus(RequestStatus.Success)
          setGenreModified(true)
       }
       else
          setFetchStatus(RequestStatus.Failure)
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
        editGenre,
        deleteGenre,
        getGenresPaginated,
        createGenre,
        getAllGenres,
        setCurrentPage,
        getMoreGenresPaginated,
        refreshGenresPaginated
      };
}