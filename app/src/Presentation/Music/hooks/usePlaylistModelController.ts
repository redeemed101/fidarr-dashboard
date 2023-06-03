import { useState } from "react";
import { PlaylistRepository } from "../../../Domain/Repository/Music/PlaylistRepository";
import { RequestStatus, PagedData } from "./common";
import { Playlist } from "../../../Domain/Model/Music/Playlist";
import { PAGE_SIZE } from "../../../Data/Utils/constants";

export const usePlaylistModelController = (repository : PlaylistRepository) => {
    const [currentPage, setCurrentPage] = useState(1); 
    const [fetchStatus, setFetchStatus] = useState<RequestStatus>(RequestStatus.Success);
    const [playlistModified,setPlaylistModified] = useState(false);
    const [data, setData] = useState<PagedData>({count: 0, data: []});
    const createPlaylist = async (artworkFile: File, name: string, songIds: string[]) => {
        try{
          const result = await repository.createPlaylist(
            {
                name: name,
                SongIds: songIds,
                artworkFile: artworkFile,
            }
          )
          if(result){
            setFetchStatus(RequestStatus.Success)
            setPlaylistModified(true)
          }
          else{
           setFetchStatus(RequestStatus.Error)
          }
        }
        catch(e : any){ setFetchStatus(RequestStatus.Error)} 
    }
    const editPlaylist = async (artworkFile: File, playlistId: string, name: string, songIds: string[]) => {
        try{
          const result = await repository.editPlaylist(
            playlistId,
            {
                name: name,
                SongIds: songIds,
                artworkFile: artworkFile,
            }
          )
          if(result){
            setFetchStatus(RequestStatus.Success)
            setPlaylistModified(true)
          }
          else
           setFetchStatus(RequestStatus.Error)
        }
        catch(e : any){ setFetchStatus(RequestStatus.Error)} 
    }
    const deletePlaylist = async (playlistId: string,finish: () => void) => {
        try{
          const result = await repository.deletePlaylist(playlistId);
          if(result){
             setFetchStatus(RequestStatus.Success)
             finish()
             setPlaylistModified(true)
          }
          else
          setFetchStatus(RequestStatus.Error)
         }
         catch(e : any){ setFetchStatus(RequestStatus.Error)}  
      }
      const getPlaylistsPaginated = async (getMore: boolean = false) =>{
        try{
         
            if(getMore){
                const newPage = currentPage + 1;
                setCurrentPage(newPage)
                const response = await repository.getAllPlaylistsPaging(newPage, PAGE_SIZE);
                setFetchStatus(RequestStatus.Success)
                const oldData = data.data
                const responseData = response.data
                const newData = oldData.concat(responseData)
                console.log("New data ", newData)
                setData({count: response.count, data :newData});
            }
            else{
              setFetchStatus(RequestStatus.Loading)
              const response =  await repository.getAllPlaylistsPaging(currentPage, PAGE_SIZE)          
              setFetchStatus(RequestStatus.Success)         
              setData({count: response.count, data : response.data});
            }
        }
        catch(e : any){ setFetchStatus(RequestStatus.Error)}  
      }
     
      const refreshPlaylistsPaginated = async () =>  {
        try{
          setFetchStatus(RequestStatus.Loading)
          const newPage = 1;
          setCurrentPage(newPage)
          const response = await repository.getAllPlaylistsPaging(newPage, PAGE_SIZE);
          setFetchStatus(RequestStatus.Success)
          setData({count: response.count, data : response.data});
          }catch(e : any){ setFetchStatus(RequestStatus.Error)}    
      }
      const searchPlaylistsPaginated = async (searchText:string,getMore: boolean = false) =>{
        try{
         
            if(getMore){
                const newPage = currentPage + 1;
                setCurrentPage(newPage)
                const response = await repository.searchPlaylistsPaging(searchText,newPage, PAGE_SIZE);
                setFetchStatus(RequestStatus.Success)
                const oldData = data.data
                const responseData = response.data
                const newData = oldData.concat(responseData)
                console.log("New data ", newData)
                setData({count: response.count, data :newData});
            }
            else{
              setFetchStatus(RequestStatus.Loading)
              const response =  await repository.searchPlaylistsPaging(searchText,currentPage, PAGE_SIZE)          
              setFetchStatus(RequestStatus.Success)         
              setData({count: response.count, data : response.data});
            }
        }
        catch(e : any){ setFetchStatus(RequestStatus.Error)}  
      }
      const getPlaylistsbyGenrePaginated = async (genreId:string,getMore: boolean = false) =>{
        try{
         
            if(getMore){
                const newPage = currentPage + 1;
                setCurrentPage(newPage)
                const response = await repository.getPlaylistsbyGenrePaging(genreId,newPage, PAGE_SIZE);
                setFetchStatus(RequestStatus.Success)
                const oldData = data.data
                const responseData = response.data
                const newData = oldData.concat(responseData)
                console.log("New data ", newData)
                setData({count: response.count, data :newData});
            }
            else{
              setFetchStatus(RequestStatus.Loading)
              const response =  await repository.getPlaylistsbyGenrePaging(genreId,currentPage, PAGE_SIZE)          
              setFetchStatus(RequestStatus.Success)         
              setData({count: response.count, data : response.data});
            }
        }
        catch(e : any){ setFetchStatus(RequestStatus.Error)}  
      }
     
      const refreshPlaylistsbyGenrePaginated = async (genreId: string) =>  {
        try{
          setFetchStatus(RequestStatus.Loading)
          const newPage = 1;
          setCurrentPage(newPage)
          const response = await repository.getPlaylistsbyGenrePaging(genreId,newPage, PAGE_SIZE);
          setFetchStatus(RequestStatus.Success)
          setData({count: response.count, data : response.data});
          }catch(e : any){ setFetchStatus(RequestStatus.Error)}    
      }
      return {
        currentPlaylists : data.data as Playlist[],
        count: data.count,
        fetchStatus,
        currentPage,
        playlistModified,
        createPlaylist,
        editPlaylist,
        deletePlaylist,
        setCurrentPage,
        getPlaylistsPaginated,
        searchPlaylistsPaginated,
        refreshPlaylistsPaginated,
        getPlaylistsbyGenrePaginated,
        refreshPlaylistsbyGenrePaginated
      };
}
