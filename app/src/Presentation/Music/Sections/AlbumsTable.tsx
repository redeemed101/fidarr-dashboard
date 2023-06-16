import EditIcon from "../../../Assets/svgs/EditIcon.svg"
import DeleteIcon from "../../../Assets/svgs/DeleteIcon.svg"
import SettingsIcon from "../../../Assets/svgs/TrackSettingsIcon.svg";
import { ArtistCard } from "./ArtistsTable"
import InfiniteScroll from "react-infinite-scroll-component";
import { PAGE_SIZE } from "../../../Data/Utils/constants";
import { Album } from "../../../Domain/Model/Music";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { setAlbum } from "../../../StateManagement/redux/musicReduer";


export type AlbumRow = {
    imgSrc : string,
    name : string,
    artist: string,
    streams : string,
    tracks : string,
    releaseDate: string,
    lastUpdated: string
}

type AlbumCardProps = {
    imgSrc : string,
    name: string,
    artist: string
}
export const AlbumCard = ({imgSrc,name, artist} : AlbumCardProps) => {
    return (
        <div className="w-auto h-auto">
        <div className="flex flex-row items-center gap-2">

            <img className="rounded-md w-16 h-16" src={imgSrc}/>
            <div className="flex flex-col w-auto">
                <p className="text-white font-bold">{name}</p>
                <p className="text-fidarrgray-500 font-xs">by {artist}</p>
            </div>
        </div>
        </div>
    )
}


type AlbumsTableProps = {
    rows : Album[],
    currentPage: number,
    totalCount: number,
    selectedAlbums : Album[],
    loadMore : () => void,
    refresh : () => void
    selectAlbum : (artist: Album) => void,
    unSelectAlbum : (artist: Album) => void,
    deleteItem: (id: string) => void
    
}

const AlbumsTable = (props: AlbumsTableProps) => {
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
    const checkAlbumSelected = (checked: boolean, album: Album) => {
      
          if(checked){
             
             props.selectAlbum(album)
          }
          else{
            props.unSelectAlbum(album)
          }
    }
    const selectAll = () => {
        props.rows.forEach(album => {
            
            if(!props.selectedAlbums.find(a => a.id == album.id)){
                console.log(album)
                 props.selectAlbum(album)
            }
            
        })
    }
    const unSelectAll = () => {
        props.rows.forEach(album => {
            if(props.selectedAlbums.find(a => a.id == album.id))
                 props.unSelectAlbum(album)
            
        })
    }
    const deleteAlbum = (id: string) => {
        console.log(id)
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className='bg-black rounded-lg flex flex-col px-8 py-2'>
                  <h1 className="text-white text-xl font-bold mx-auto">Confirm action</h1>
                  <p className="text-white">You want to delete this album?</p>
                  <div className="flex flex-row gap-2 justify-center mt-8">
                        <button className="bg-red-700 w-24 h-10 text-white font-bold rounded-lg" onClick={onClose}>No</button>
                        <button className="bg-white w-24 h-10 text-red-700 rounded-lg"
                            onClick={() => {
                            props.deleteItem(id)
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
                    <th>Album List</th>
                    <th>Streams</th>
                    <th>Release Date</th>
                    <th>Tracks</th>
                    <th>Last Updated</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody >
                {
                props.rows.map( album => 
                <tr className="text-left">
                <td className="pr-12">
                       <div className="flex">
                                <input
                                 type="checkbox"
                                 checked={props.selectedAlbums.find(a => a.id == album.id) != null}                                 
                                          onChange={(e) => checkAlbumSelected(e.target.checked, album)}
                                 className="shrink-0 mt-0.5 border-gray-200 rounded-md text-red-900 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                                
                      </div>
                </td>
                <td className="border-t-0 border-l-0 border-r-0 text-xs whitespace-nowrap py-4">
                    <div >
                       <AlbumCard name={album.name} imgSrc={album.imgSrc} artist={album.artist.name} />
                    </div>
                </td>
                <td ><p>{album.streams}</p></td>
                <td ><p>{album.releaseDate}</p></td>
                <td ><p>{album.tracks}</p></td>                
                <td><p>{album.lastUpdated}</p></td>
                <td>
                    <div className="flex flex-row gap-2">
                        <div className="cursor-pointer">
                          <img onClick={() => {
                                dispatch(setAlbum(album))
                                navigate(`/music/albums/${album.id}`)
                            }} 
                             src={SettingsIcon} />
                        </div>
                        <div className="cursor-pointer">
                            <img onClick={() => {
                                dispatch(setAlbum(album))
                                navigate(`/music/albums/edit/${album.id}`)
                            }} src={EditIcon} />
                        </div>
                        <div className="cursor-pointer">
                            <img src={DeleteIcon} onClick={() => {
                                    
                                 deleteAlbum(album.id)
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

export default AlbumsTable