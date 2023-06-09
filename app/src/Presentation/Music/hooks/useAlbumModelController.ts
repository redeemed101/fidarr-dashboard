import { useEffect, useState } from "react";
import { AlbumRepository } from "../../../Domain/Repository/Music/AlbumRepository";
import { Album } from "../../../Domain/Model/Music";
import { PagedData, RequestStatus, useGetData } from "./common";
import { PAGE_SIZE } from "../../../Data/Utils/constants";
import { CreateAlbumRequest, EditAlbumRequest } from "../../../Data/DataSource/Music/Albums/AlbumDataSource";

type AlbumData = {
  name: string,
  description: string,
  artistId : string,
  genres: string[],
  songNames: string[],
  existingSongs:string[],
  songDescriptions: string[],
  songGenres: string[][],
  songArtists: string[],
  songsISRCCodes: string[],
  songFiles: File[]
  releaseDate: Date,
}
export const useAlbumModelController = (repository : AlbumRepository) => {

    const [albumModified, setAlbumModified] = useState(false);
    const [currentPage, setCurrentPage] = useState(1); 
    const [fetchStatus, setFetchStatus] = useState<RequestStatus>(RequestStatus.Success);
    const [data, setData] = useState<PagedData>({count: 0, data: []});
    const deleteAlbum = async (albumId: string,onUploadProgress: any, finish: () => void) => {
      try{
        var result = await repository.deleteAlbum(albumId, onUploadProgress);
        if(result){
           setFetchStatus(RequestStatus.Success)
           finish()
           setAlbumModified(true)
        }
        else
        setFetchStatus(RequestStatus.Error)
       }
       catch(e : any){ setFetchStatus(RequestStatus.Error)}  
    }
    const editAlbum = async (albumId: String,artwork: File, songFiles: File[], albumData : AlbumData, onUploadProgress: any) =>  {
     
      try{
         var result = await repository.editAlbum({
          name: albumData.name,
          albumId: albumId,
          description: albumData.description,
          artistId : albumData.artistId,
          genres: albumData.genres,
          songNames: albumData.songNames,
          songDescriptions: albumData.songDescriptions,
          artworkFile: artwork,
          songFiles : songFiles,
          releaseDate: albumData.releaseDate
         } as EditAlbumRequest, onUploadProgress);
         if(result)
            setFetchStatus(RequestStatus.Success)
         else
         setFetchStatus(RequestStatus.Error)
      }
      catch(e : any){ setFetchStatus(RequestStatus.Error)}  
     }  
     
    const createAlbum = async (artwork: File, songFiles: File[], albumData : AlbumData, onUploadProgress: any) =>  {
     
      try{
         var result = await repository.createAlbum({
          name: albumData.name,
          description: albumData.description,
          artistId : albumData.artistId,
          genres: albumData.genres,
          existingSongs: albumData.existingSongs,
          songNames: albumData.songNames,
          songDescriptions: albumData.songDescriptions,
          artworkFile: artwork,
          songFiles : songFiles,
          releaseDate: albumData.releaseDate
         } as CreateAlbumRequest, onUploadProgress);
         if(result)
            setFetchStatus(RequestStatus.Success)
         else
         setFetchStatus(RequestStatus.Error)
      }
      catch(e : any){ setFetchStatus(RequestStatus.Error)}  
     }  
      
    const getAlbumsPaginated = async (more: boolean = true) =>  {
      try{
            if(more){
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
            }
            else{
              setFetchStatus(RequestStatus.Loading)
              const response = await repository.getAlbumsPaging(currentPage, PAGE_SIZE);         
              setFetchStatus(RequestStatus.Success)         
              setData({count: response.count, data : response.data});
            }
        }
        catch(e : any){ setFetchStatus(RequestStatus.Error)}        
    }
    const refreshAlbumsPaginated = async () =>  {
      try{
        setFetchStatus(RequestStatus.Loading)
        const newPage = 1;
        setCurrentPage(newPage)
        const response = await repository.getAlbumsPaging(newPage, PAGE_SIZE);
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
        albumModified,
        createAlbum,
        editAlbum,
        deleteAlbum,
        setCurrentPage,
        getAlbumsPaginated,
        refreshAlbumsPaginated
      };
}

