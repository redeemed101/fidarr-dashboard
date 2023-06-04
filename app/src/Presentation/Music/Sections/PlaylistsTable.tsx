import EditIcon from "../../../Assets/svgs/EditIcon.svg"
import DeleteIcon from "../../../Assets/svgs/DeleteIcon.svg"
import SettingsIcon from "../../../Assets/svgs/TrackSettingsIcon.svg";
import { Playlist } from "../../../Domain/Model/Music/Playlist";
import InfiniteScroll from "react-infinite-scroll-component";
import { PAGE_SIZE } from "../../../Data/Utils/constants";
import { useEffect, useState } from "react";
import { Track } from "../../../Domain/Model/Music/Track";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPlaylist } from "../../../StateManagement/redux/musicReduer";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css'; 



export type PlaylistCardProps = {
    imgSrc : string,
    name : string,
  
}
export const PlaylistCard = ({imgSrc,name} : PlaylistCardProps) => {
    return (
        <div className="w-16 h-auto">
        <div className="flex flex-row items-center gap-2">

            <img className="rounded-md" src={imgSrc}/>
            <div className="flex flex-col">
                <p className="text-white font-bold">{name}</p>               
            </div>
        </div>
        </div>
    )
}


type GenresTableProps = {
    rows: Playlist[],
    currentPage: number,
    totalCount: number,
    loadMore : () => void,
    refresh : () => void, 
    deleteItem: (id: string) =>  void,  
    selectedPlaylists: Playlist[],
    selectPlaylist: (playlist: Playlist) => void,
    unSelectPlaylist: (playlist: Playlist) => void

}

const PlaylistsTable = ({rows, currentPage, totalCount, selectedPlaylists,deleteItem, selectPlaylist, unSelectPlaylist , loadMore, refresh}: GenresTableProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [allSelected, setAllSelected] = useState<boolean>(false)
    const checkSelectAll = (checked: boolean) => {
        console.log("within")
        setAllSelected(checked)
        if(checked){
            
            selectAll()
        }
        else{
            
            unSelectAll()
        }
    }
    const checkPlaylistSelected = (checked: boolean, playlist: Playlist) => {
      
          if(checked){
             
             selectPlaylist(playlist)
          }
          else{
            unSelectPlaylist(playlist)
          }
    }
    const selectAll = () => {
        rows.forEach(playlist => {
            
            if(selectedPlaylists.find(p => p.id == playlist.id) == null){
                console.log(playlist)
                 selectPlaylist(playlist)
            }
            
        })
    }
    const unSelectAll = () => {
        rows.forEach(playlist => {
            if(selectedPlaylists.find(p => p.id == playlist.id) == null)
                 unSelectPlaylist(playlist)
            
        })
    }
    const deletePlaylist = (id: string) => {
        console.log(id)
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className='bg-black rounded-lg flex flex-col px-8 py-2'>
                  <h1 className="text-white text-xl font-bold mx-auto">Confirm action</h1>
                  <p className="text-white">You want to delete this  playlist?</p>
                  <div className="flex flex-row gap-2 justify-center mt-8">
                        <button className="bg-red-700 w-24 h-10 text-white font-bold rounded-lg" onClick={onClose}>No</button>
                        <button className="bg-white w-24 h-10 text-red-700 rounded-lg"
                            onClick={() => {
                            deleteItem(id)
                            onClose();
                            }}
                        >
                            Yes
                        </button>
                  </div>
                
                </div>
              );
            }
          });
       
      }
    return (
        <div className="flex flex-col w-full">
              <InfiniteScroll
                        dataLength={rows?.length}
                        next={() => loadMore()}
                        hasMore={totalCount/(currentPage * PAGE_SIZE) > 1}
                        loader={<h4 className="text-white text-bold mx-auto">Loading more items...</h4>}
                        refreshFunction={refresh}
                        pullDownToRefresh
                        pullDownToRefreshThreshold={50}
                        pullDownToRefreshContent={
                            <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                        }
                        releaseToRefreshContent={
                        <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                    } 
                >
                <table className="table-auto ml-24 text-white w-11/12 self-end">
                    <thead className="text-left">
                        <tr>
                            <th className="pr-12">
                                   <div className="flex">
                                            <input 
                                            type="checkbox" 
                                            checked={allSelected}
                                            onChange={(e) => checkSelectAll(e.target.checked)}
                                            className=" rounded-md shrink-0 mt-0.5 border-gray-200 text-red-900  focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                                            
                                    </div>
                            </th>
                            <th>Playlist</th>
                            <th>Owner</th>
                            <th>Public</th>
                            <th>Likes</th>
                            <th>Last Updated</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                        rows.map( playlist => 
                        <tr className="text-left">
                        <td className="pr-12">
                        <div className="flex">
                                <input
                                 type="checkbox"
                                 checked={selectedPlaylists.find(p => p.id == playlist.id) != null}                                 
                                          onChange={(e) => checkPlaylistSelected(e.target.checked, playlist)}
                                 className="shrink-0 mt-0.5 border-gray-200 rounded-md text-red-900 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                                
                            </div>
                        </td>
                        <td className="border-t-0 border-l-0 border-r-0 text-xs whitespace-nowrap py-4">
                            <div >
                            <PlaylistCard name={playlist.name} imgSrc={playlist.imgPath} />
                            </div>
                        </td>
                        <td ><p>{playlist.isFidarr ? "Fidarr" : "User"}</p></td>
                        <td ><p>{playlist.isFidarr ? "Yes" : "No"}</p></td>
                        <td ><p>{playlist.likes}</p></td>
                        <td><p>{playlist.lastUpdated}</p></td>
                        <td>
                            <div className="flex flex-row gap-2">
                                <div className="cursor-pointer">
                                <img src={SettingsIcon} />
                                </div>
                                <div className="cursor-pointer">
                                    <img onClick={() => {
                                            dispatch(setPlaylist(playlist))
                                            navigate(`/music/playlists/edit/${playlist.id}`)
                                        }} src={EditIcon} />
                                </div>
                                <div className="cursor-pointer">
                                    <img src={DeleteIcon} onClick={() => {
                                    
                                        deletePlaylist(playlist.id)
                                    }} />
                                </div>
                            </div>
                        
                        </td>
                        </tr>)
                    }
                    
                    </tbody>
                </table>
            </InfiniteScroll>
        </div>
    )
}

export default PlaylistsTable




type SearchPlaylistTableProps = {
    rows : Playlist[],
    currentPage: number,
    totalCount: number,
    loadMore : () => void,
    refresh : () => void
    selectedPlaylists: Playlist[],
    selectPlaylist: (playlist: Playlist) => void,
    unSelectPlaylist: (playlist: Playlist) => void,
    deleteItem?: (id: string) =>  void,
}

export const SearchPlaylistsTable = (props: SearchPlaylistTableProps) => {
    const [allSelected, setAllSelected] = useState<boolean>(false)
   
    const checkSelectAll = (checked: boolean) => {
        setAllSelected(checked)
        if(checked){
            
            selectAll()
        }
        else{
            
            unSelectAll()
        }
    }
   
    const checkPlaylistSelected = (checked: boolean, playlist: Playlist) => {
      
          if(checked){
             
             props.selectPlaylist(playlist)
          }
          else{
            props.unSelectPlaylist(playlist)
          }
    }
    const selectAll = () => {
        props.rows.forEach(playlist => {
            
            if(!props.selectedPlaylists.find(p => p.id == playlist.id)){
                
               props.selectPlaylist(playlist)
            }
            
        })
    }
    const unSelectAll = () => {
        props.rows.forEach(playlist => {
            if(props.selectedPlaylists.find(p => p.id == playlist.id))
                 props.unSelectPlaylist(playlist)
            
        })
    }
    return (
        <div className="flex flex-col w-full">
            <div className="w-full">
            <InfiniteScroll
                        dataLength={props.rows.length}
                        next={() => props.loadMore()}
                        hasMore={props.totalCount/(props.currentPage * PAGE_SIZE) > 1}
                        loader={<h4 className="text-white text-bold mx-auto">Loading more items...</h4>}
                        refreshFunction={props.refresh}
                        pullDownToRefresh
                        pullDownToRefreshThreshold={50}
                        pullDownToRefreshContent={
                            <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                        }
                        releaseToRefreshContent={
                        <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                    } 
                >
                        <table className="table-auto  text-white bg-fidarrgray-900 w-full">
                        <thead className="text-left bg-fidarrgray-600">
                            <tr>
                               <th className="pl-8">
                                    <div className="flex">
                                            <input 
                                            type="checkbox" 
                                            checked={allSelected}
                                            onChange={(e) => checkSelectAll(e.target.checked)}
                                            className=" rounded-md shrink-0 mt-0.5 border-gray-200 text-red-900  focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                                            
                                    </div>
                            
                                </th>
                                <th>Playlist</th>
                                                             
                            </tr>
                        </thead>
                        <tbody >
                            {
                            props.rows.map( (playlist,i) => 
                            <tr key={i} className="text-left even:bg-fidarrgray-100 ">
                            <td className="pl-8">
                            <div className="flex">
                                    <input type="checkbox" 
                                          checked={props.selectedPlaylists.find(p => p.id == playlist.id) != null}                                 
                                          onChange={(e) => checkPlaylistSelected(e.target.checked, playlist)}
                                          className="shrink-0 mt-0.5 border-gray-200 rounded-md text-red-900  focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"  />
                                    
                                </div>
                            </td>
                            <td className="border-t-0 border-l-0 border-r-0 text-xs whitespace-nowrap py-4">
                                <div >
                                <PlaylistCard name={playlist.name} imgSrc={playlist.imgPath} />
                                </div>
                            </td>
                           
                           
                            </tr>)
                        }
                        
                        </tbody>
                        </table>
                </InfiniteScroll>
            </div>
        </div>
    )
}