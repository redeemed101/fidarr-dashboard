import EditIcon from "../../../Assets/svgs/EditIcon.svg"
import DeleteIcon from "../../../Assets/svgs/DeleteIcon.svg"
import SettingsIcon from "../../../Assets/svgs/TrackSettingsIcon.svg";
import { Artist } from "../../../Domain/Model/Music";
import InfiniteScroll from "react-infinite-scroll-component";
import { PAGE_SIZE } from "../../../Data/Utils/constants";
import { confirmAlert } from "react-confirm-alert";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Playlist } from "../../../Domain/Model/Music/Playlist";
import { setArtist } from "../../../StateManagement/redux/musicReduer";

export type ArtistCardProps = {
    imgSrc : string,
    name : string,
    genres? : string[],
}
export const ArtistCard = ({imgSrc,name, genres} : ArtistCardProps) => {
    return (
        <div className="w-auto h-auto">
        <div className="flex flex-row items-center gap-2">

            <img className="rounded-md w-16 h-16" src={imgSrc}/>
            <div className="flex flex-col">
                <p className="text-white font-bold">{name}</p>
                {genres && <p className="text-fidarrgray-500 font-xs">{genres.map(a => a,)}</p> }
            </div>
        </div>
        </div>
    )
}



type ArtistTableProps = {
    rows : Artist[],
    currentPage: number,
    totalCount: number,
    loadMore : () => void,
    refresh : () => void,
    selectedArtists : Artist[],
    selectArtist : (artist: Artist) => void,
    unSelectArtist : (artist: Artist) => void,
    deleteItem: (id: string) => void

}

const ArtistsTable = ({rows, currentPage, totalCount, selectedArtists, unSelectArtist, selectArtist, deleteItem, loadMore, refresh}: ArtistTableProps) => {
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
    const checkArtistSelected = (checked: boolean, artist: Artist) => {
      
          if(checked){
             
             selectArtist(artist)
          }
          else{
            unSelectArtist(artist)
          }
    }
    const selectAll = () => {
        rows.forEach(artist => {
            
            if(!selectedArtists.includes(artist)){
                console.log(artist)
                 selectArtist(artist)
            }
            
        })
    }
    const unSelectAll = () => {
        rows.forEach(artist => {
            if(selectedArtists.includes(artist))
                 unSelectArtist(artist)
            
        })
    }
    const deleteArtist = (id: string) => {
        console.log(id)
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className='bg-black rounded-lg flex flex-col px-8 py-2'>
                  <h1 className="text-white text-xl font-bold mx-auto">Confirm action</h1>
                  <p className="text-white">You want to delete this artist?</p>
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
         <div className="w-11/12  self-end">
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
                           <div className="flex">
                                            <input 
                                            type="checkbox" 
                                            checked={allSelected}
                                            onChange={(e) => checkSelectAll(e.target.checked)}
                                            className=" rounded-md shrink-0 mt-0.5 border-gray-200 text-red-900  focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                                            
                            </div>
                        </div>
                
                    </th>
                    <th>Names</th>
                    <th>Streams</th>
                    <th>Tracks</th>
                    <th>Albums</th>
                    <th>Last Updated</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody >
                {
                rows.map( artist => 
                <tr className="text-left">
               <td className="pr-12">
                           <div className="flex">
                                <input
                                 type="checkbox"
                                 checked={selectedArtists.includes(artist)}                                 
                                          onChange={(e) => checkArtistSelected(e.target.checked, artist)}
                                 className="shrink-0 mt-0.5 border-gray-200 rounded-md text-red-900 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                                
                            </div>
                </td>
                <td className="border-t-0 border-l-0 border-r-0 text-xs whitespace-nowrap py-4">
                    <div >
                       <ArtistCard name={artist.name} imgSrc={artist.imgSrc} genres={artist.genres} />
                    </div>
                </td>
                <td ><p>{artist.streams}</p></td>
                <td ><p>{artist.tracks}</p></td>
                <td ><p>{artist.albums}</p></td>
                <td><p>{artist.lastUpdated}</p></td>
                <td>
                <div className="flex flex-row gap-2">
                        <div className="cursor-pointer">
                          <img onClick={() => {
                                dispatch(setArtist(artist))
                                navigate(`/music/artists/${artist.id}`)
                            }} 
                             src={SettingsIcon} />
                        </div>
                        <div className="cursor-pointer">
                            <img onClick={() => {
                                dispatch(setArtist(artist))
                                navigate(`/music/artists/edit/${artist.id}`)
                            }} src={EditIcon} />
                        </div>
                        <div className="cursor-pointer">
                            <img src={DeleteIcon} onClick={() => {
                                    
                                 deleteArtist(artist.id)
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

export default ArtistsTable