import { useCallback, useEffect, useState } from "react";
import { AlbumRepository } from "../../../Domain/Repository/Music/AlbumRepository";
import { Artist } from "../../../Domain/Model/Music";
import { ArtistRepository } from "../../../Domain/Repository/Music/ArtistRepository";
import { PagedData, RequestStatus, useGetData } from "./common";
import { PAGE_SIZE } from "../../../Data/Utils/constants";
import { EditArtist } from "../../../Data/DataSource/Music/Artists/ArtistDataSource";

export type ArtistData = {
  name: string,
  username:string,
  email: string,
  address:string,
  phoneNumber:string,
  website:string,
  bio:string,
  countryId: number,
  genres: string[]
}
export const useArtistModelController = (repository : ArtistRepository) => {
 
    const [artistModified,setArtistModified] = useState(false);
    const [artistDeleted,setArtistDeleted] = useState(false);
    const [currentPage, setCurrentPage] = useState(1); 
    const [fetchStatus, setFetchStatus] = useState<RequestStatus>(RequestStatus.Success);
    const [data, setData] = useState<PagedData>({count: 0, data: []});
    const deleteArtist = async (artistId: string, onUploadProgress: any,finish : () => void) => {
      try{
        var result = await repository.deleteArtist(artistId);
        if(result){
           setFetchStatus(RequestStatus.Success)
           setArtistDeleted(true)
           console.log("In delete")
           finish()
        }
        else
           setFetchStatus(RequestStatus.Error)
     }
     catch(e : any){ setFetchStatus(RequestStatus.Error)} 
    }
    const editArtist = async (artistPhoto: File, artistData : ArtistData, onUploadProgress: any) =>  {
     
      try{
         var result = await repository.editArtist({
           name : artistData.name,
           bio: artistData.bio,
           address: artistData.address,
           artistPhoto: artistPhoto,
           website: artistData.website,          
           genres: artistData.genres
         } as EditArtist);
         if(result){
            setFetchStatus(RequestStatus.Success)
            setArtistModified(true)
           
         }
         else
            setFetchStatus(RequestStatus.Error)
      }
      catch(e : any){ setFetchStatus(RequestStatus.Error)}  
     }  

    const createArtist = async (artistPhoto: File, artistData : ArtistData, onUploadProgress: any) =>  {
     
      try{
         var result = await repository.createArtist({
           name : artistData.name,
           bio: artistData.bio,
           address: artistData.address,
           artistPhoto: artistPhoto,
           website: artistData.website,
           user: {
            username : artistData.username,
            fullname: artistData.name,
            profile: artistData.bio,
            email: artistData.email,
            phoneNumber: artistData.address,
            countryId: artistData.countryId
           },
           genres: artistData.genres
         });
         if(result){
            setFetchStatus(RequestStatus.Success)
            setArtistModified(true)
         }
         else
            setFetchStatus(RequestStatus.Error)
      }
      catch(e : any){ setFetchStatus(RequestStatus.Error)}  
     }   
    
     const searchArtistsPaginated = async (searchText: string,more: boolean = false) =>  {
      try{
         
        if(more){
            const newPage = currentPage + 1;
            setCurrentPage(newPage)
            const response = await repository.searchGetArtistsPaging(searchText,newPage, PAGE_SIZE);
            setFetchStatus(RequestStatus.Success)
            const oldData = data.data
            const responseData = response.data
            const newData = oldData.concat(responseData)
            console.log("New data ", newData)
            setData({count: response.count, data :newData});
        }
        else{
          setFetchStatus(RequestStatus.Loading)
          const response = await repository.searchGetArtistsPaging(searchText,currentPage, PAGE_SIZE);         
          setFetchStatus(RequestStatus.Success)         
          setData({count: response.count, data : response.data});
        }
      }
      catch(e : any){ setFetchStatus(RequestStatus.Error)} 
    }
    const getArtistsPaginated = async (more: boolean = false) =>  {
      try{
         
        if(more){
            const newPage = currentPage + 1;
            setCurrentPage(newPage)
            const response = await repository.getArtistsPaging(newPage, PAGE_SIZE);
            setFetchStatus(RequestStatus.Success)
            const oldData = data.data
            const responseData = response.data
            const newData = oldData.concat(responseData)
            console.log("New data ", newData)
            setData({count: response.count, data :newData});
        }
        else{
          setFetchStatus(RequestStatus.Loading)
          const response = await repository.getArtistsPaging(currentPage, PAGE_SIZE);         
          setFetchStatus(RequestStatus.Success)         
          setData({count: response.count, data : response.data});
        }
    }
    catch(e : any){ setFetchStatus(RequestStatus.Error)} 
       
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
        artistModified,
        artistDeleted,
        setCurrentPage,
        getArtistsPaginated,
        searchArtistsPaginated,
        refreshArtistsPaginated,
        createArtist,
        editArtist,
        deleteArtist
      };
}

