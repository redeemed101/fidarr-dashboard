import EditIcon from "../../../Assets/svgs/EditIcon.svg"
import DeleteIcon from "../../../Assets/svgs/DeleteIcon.svg"
import SettingsIcon from "../../../Assets/svgs/TrackSettingsIcon.svg";
import { Playlist } from "../../../Domain/Model/Music/Playlist";
import InfiniteScroll from "react-infinite-scroll-component";
import { PAGE_SIZE } from "../../../Data/Utils/constants";



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
    refresh : () => void

}

const PlaylistsTable = ({rows, currentPage, totalCount, loadMore, refresh}: GenresTableProps) => {
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
                <table className="table-auto text-white w-11/12 self-end">
                    <thead className="text-left">
                        <tr>
                            <th className="pr-12">
                                <div className="flex">
                                        <input type="checkbox" className=" rounded-md shrink-0 mt-0.5 border-gray-200 text-red-900 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                                        
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
                                <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded-md text-red-900 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                                
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
                                <img src={EditIcon} />
                                </div>
                                <div className="cursor-pointer">
                                <img src={DeleteIcon} />
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