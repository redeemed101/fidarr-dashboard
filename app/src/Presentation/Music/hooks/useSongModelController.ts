import { useState } from "react";
import { SongRepository } from "../../../Domain/Repository/Music/SongRepository";
import { PagedData, RequestStatus, useGetData } from "./common";
import { PAGE_SIZE } from "../../../Data/Utils/constants";
import { CreateSongRequest, EditSongRequest } from "../../../Data/DataSource/Music/Songs/SongDataSource";
import { Track } from "../../../Domain/Model/Music";

export type SongData = {
    name : string,
    description: string,
    artistId: string,
    featuringArtists?: string[],
    genres?: string[],
    albumId?: string,
    
}
export const useSongModelController = (repository : SongRepository) => {
    const [currentPage, setCurrentPage] = useState(1); 
    const [fetchStatus, setFetchStatus] = useState<RequestStatus>(RequestStatus.Success);
    const [data, setData] = useState<PagedData>({count: 0, data: []});
    const createSong = async (songFile: File, songData : SongData, onUploadProgress: any,artworkFile?: File | null, previewFile? : File) =>  {
     
        try{
           var result = await repository.createSong({
             name : songData.name,
             description: songData.description,
             artistId: songData.artistId,
             albumId: songData.albumId,
             featuringArtists: songData.featuringArtists,
             genres: songData.genres,
             artworkFile: artworkFile,
             previewFile: previewFile,
             songFile: songFile

           } as CreateSongRequest, onUploadProgress);
           if(result)
              setFetchStatus(RequestStatus.Success)
           else
           setFetchStatus(RequestStatus.Error)
        }
        catch(e : any){ setFetchStatus(RequestStatus.Error)}  
       }  
       
       const editSong = async (songId: string,songFile: File, songData : SongData, onUploadProgress: any,artworkFile?: File | null, previewFile? : File) =>  {
     
        try{
           var result = await repository.editSong({
             name : songData.name,
             songId: songId,
             description: songData.description,
             artistId: songData.artistId,
             albumId: songData.albumId,
             featuringArtists: songData.featuringArtists,
             genres: songData.genres,
             artworkFile: artworkFile,
             previewFile: previewFile,
             songFile: songFile

           } as EditSongRequest, onUploadProgress);
           if(result)
              setFetchStatus(RequestStatus.Success)
           else
           setFetchStatus(RequestStatus.Error)
        }
        catch(e : any){ setFetchStatus(RequestStatus.Error)}  
       }  
       const getSearchSongsPaginated = async (searchText:string, getMore:boolean= false) =>{
        try{
          if(getMore){
              const newPage = currentPage + 1;
              setCurrentPage(newPage)
              const response = await repository.getSearchSongsPaging(searchText,newPage, PAGE_SIZE);
              setFetchStatus(RequestStatus.Success)
              const oldData = data.data
              const responseData = response.data
              const newData = oldData.concat(responseData)
              console.log("New data ", newData)
              setData({count: response.count, data :newData});
          }
          else{
            setFetchStatus(RequestStatus.Loading)
            const response =  await repository.getSearchSongsPaging(searchText,currentPage, PAGE_SIZE)          
            setFetchStatus(RequestStatus.Success)         
            setData({count: response.count, data : response.data});
          }
        }
        catch(e : any){ setFetchStatus(RequestStatus.Error)}  
      }
      
      const getSongsPaginated = async () =>{
        try{
         
          setFetchStatus(RequestStatus.Loading)
          const response =  await repository.getSongsPaging(currentPage, PAGE_SIZE)          
          setFetchStatus(RequestStatus.Success)         
          setData({count: response.count, data : response.data});;
        }
        catch(e : any){ setFetchStatus(RequestStatus.Error)}  
      }
      const getMoreSongsPaginated = async () =>  {
        try{
         
          const newPage = currentPage + 1;
          setCurrentPage(newPage)
          const response = await repository.getSongsPaging(newPage, PAGE_SIZE);
          setFetchStatus(RequestStatus.Success)
          const oldData = data.data
          const responseData = response.data
          const newData = oldData.concat(responseData)
          console.log("New data ", newData)
          setData({count: response.count, data :newData});
          }catch(e : any){ setFetchStatus(RequestStatus.Error)}     
      }
      const refreshSongsPaginated = async () =>  {
        try{
          setFetchStatus(RequestStatus.Loading)
          const newPage = 1;
          setCurrentPage(newPage)
          const response = await repository.getSongsPaging(newPage, PAGE_SIZE);
          setFetchStatus(RequestStatus.Success)
          setData({count: response.count, data : response.data});
          }catch(e : any){ setFetchStatus(RequestStatus.Error)}    
    }
      return {
          currentSongs : data.data as Track[],
          count: data.count,
          fetchStatus,
          currentPage,
          getSearchSongsPaginated,
          getSongsPaginated,
          setCurrentPage,
          getMoreSongsPaginated,
          refreshSongsPaginated,
          createSong,
          editSong
        };
}