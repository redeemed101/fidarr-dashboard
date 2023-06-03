import EditIcon from "../../../Assets/svgs/EditIcon.svg"
import DeleteIcon from "../../../Assets/svgs/DeleteIcon.svg"
import SettingsIcon from "../../../Assets/svgs/TrackSettingsIcon.svg";
import { ArtistCard } from "./ArtistsTable"
import { Track } from "../../../Domain/Model/Music/Track";
import InfiniteScroll from "react-infinite-scroll-component";
import { PAGE_SIZE } from "../../../Data/Utils/constants";
import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { setPlaylist, setSong } from "../../../StateManagement/redux/musicReduer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


export type SongCardProps = {
    imgSrc : string,
    artistName: string,
    name : string,
    genres? : string[],
}
export const SongCard = ({imgSrc, artistName,name, genres} : SongCardProps) => {
    return (
        <div className="w-auto h-auto">
        <div className="flex flex-row items-center gap-2">

            <img className="rounded-md w-16 h-16" src={imgSrc}/>
            <div className="flex flex-col">
                <p className="text-white font-bold">{name}</p>
                <p className="text-fidarrgray-500 font-xs">by {artistName}</p> 
            </div>
        </div>
        </div>
    )
}

type TracksTableProps = {
    rows : Track[],
    currentPage: number,
    totalCount: number,
    loadMore : () => void,
    refresh : () => void,
    selectedSongs: Track[],
    selectSong: (track: Track) => void,
    unSelectSong: (track: Track) => void,
    deleteItem: (id: string) =>  void,
    
}

const TracksTable = ({rows,currentPage, totalCount, deleteItem, selectSong, unSelectSong, selectedSongs, loadMore, refresh}: TracksTableProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
   
    const checkSongSelected = (checked: boolean, song: Track) => {
      
          if(checked){
             
             selectSong(song)
          }
          else{
            unSelectSong(song)
          }
    }
    const selectAll = () => {
        rows.forEach(song => {
            
            if(!selectedSongs.includes(song)){
                console.log(song)
                 selectSong(song)
            }
            
        })
    }
    const unSelectAll = () => {
        rows.forEach(song => {
            if(selectedSongs.includes(song))
                 unSelectSong(song)
            
        })
    }
    const deleteSong = (id: string) => {
        console.log(id)
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className='bg-black rounded-lg flex flex-col px-8 py-2'>
                  <h1 className="text-white text-xl font-bold mx-auto">Confirm action</h1>
                  <p className="text-white">You want to delete this  Song?</p>
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
            <div className="w-11/12 self-end">
            <InfiniteScroll
                        dataLength={rows.length}
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
                        <table className="table-auto text-white w-full">
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
                                <th>Track List</th>
                                <th>Streams</th>
                                <th>Duration</th>
                                <th>Release Date</th>
                                <th>Last Updated</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                            rows.map( track => 
                            <tr className="text-left">
                            <td className="pr-12">
                            <div className="flex">
                                    <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded-md text-red-900 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                                    
                                </div>
                            </td>
                            <td className="border-t-0 border-l-0 border-r-0 text-xs whitespace-nowrap py-4">
                                <div >
                                <SongCard artistName={track.artistName} name={track.name} imgSrc={track.imgSrc} genres={track.genres.map(g => g.name)} />
                                </div>
                            </td>
                            <td ><p>{track.streams}</p></td>
                            <td ><p>{track.duration}</p></td>
                            <td ><p>{track.releaseDate}</p></td>
                            <td><p>{track.lastUpdated}</p></td>
                            <td>
                                <div className="flex flex-row gap-2">
                                    <div className="cursor-pointer">
                                    <img onClick={() => {
                                        dispatch(setSong(track))
                                        navigate(`/music/tracks/${track.id}`)
                                       }} 
                                    src={SettingsIcon} />
                                    </div>
                                    <div className="cursor-pointer">
                                    <img onClick={() => {
                                            dispatch(setSong(track))
                                            navigate(`/music/tracks/edit/${track.id}`)
                                        }} src={EditIcon} />
                                </div>
                                <div className="cursor-pointer">
                                    <img src={DeleteIcon} onClick={() => {
                                    
                                        deleteSong(track.id)
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
        </div>
    )
}

export default TracksTable

type SearchTracksTableProps = {
    rows : Track[],
    currentPage: number,
    totalCount: number,
    loadMore : () => void,
    refresh : () => void
    selectedSongs: Track[],
    selectSong: (track: Track) => void,
    unSelectSong: (track: Track) => void,
    deleteItem?: (id: string) =>  void,
}

export const SearchTracksTable = ({rows,currentPage,unSelectSong,selectSong, selectedSongs, totalCount, loadMore, refresh}: SearchTracksTableProps) => {
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
   
    const checkSongSelected = (checked: boolean, song: Track) => {
      
          if(checked){
             
             selectSong(song)
          }
          else{
            unSelectSong(song)
          }
    }
    const selectAll = () => {
        rows.forEach(song => {
            
            if(!selectedSongs.includes(song)){
                console.log(song)
                 selectSong(song)
            }
            
        })
    }
    const unSelectAll = () => {
        rows.forEach(song => {
            if(selectedSongs.includes(song))
                 unSelectSong(song)
            
        })
    }
    return (
        <div className="flex flex-col w-full">
            <div className="w-full">
            <InfiniteScroll
                        dataLength={rows.length}
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
                                <th ></th>
                                <th>Duration</th>
                                <th>Genres</th>                                
                            </tr>
                        </thead>
                        <tbody >
                            {
                            rows.map( (track,i) => 
                            <tr key={i} className="text-left even:bg-fidarrgray-100 ">
                            <td className="pl-8">
                            <div className="flex">
                                    <input type="checkbox" 
                                          checked={selectedSongs.includes(track)}                                 
                                          onChange={(e) => checkSongSelected(e.target.checked, track)}
                                          className="shrink-0 mt-0.5 border-gray-200 rounded-md text-red-900  focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"  />
                                    
                                </div>
                            </td>
                            <td className="px-8 border-t-0 border-l-0 border-r-0 text-xs whitespace-nowrap py-2">
                                <div >
                                <SongCard artistName={track.artistName} name={track.name} imgSrc={track.imgSrc} genres={track.genres.map(g => g.name)} />
                                </div>
                            </td>
                            <td ><p>{track.duration}</p></td>
                            <td ><p>{track.genres?.map(g => `${g.name} `)}</p></td>
                           
                            </tr>)
                        }
                        
                        </tbody>
                        </table>
                </InfiniteScroll>
            </div>
        </div>
    )
}