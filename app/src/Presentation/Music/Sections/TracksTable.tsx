import EditIcon from "../../../Assets/svgs/EditIcon.svg"
import DeleteIcon from "../../../Assets/svgs/DeleteIcon.svg"
import SettingsIcon from "../../../Assets/svgs/TrackSettingsIcon.svg";
import { ArtistCard } from "./ArtistsTable"
import { Track } from "../../../Domain/Model/Music/Track";
import InfiniteScroll from "react-infinite-scroll-component";
import { PAGE_SIZE } from "../../../Data/Utils/constants";


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
    refresh : () => void

}

const TracksTable = ({rows,currentPage, totalCount, loadMore, refresh}: TracksTableProps) => {
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
                                            <input type="checkbox" className=" rounded-md shrink-0 mt-0.5 border-gray-200 text-red-900 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                                            
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
                                <SongCard artistName={track.artistName} name={track.name} imgSrc={track.imgSrc} genres={track.genres} />
                                </div>
                            </td>
                            <td ><p>{track.streams}</p></td>
                            <td ><p>{track.duration}</p></td>
                            <td ><p>{track.releaseDate}</p></td>
                            <td><p>{track.lastUpdated}</p></td>
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
        </div>
    )
}

export default TracksTable


export const MinimalTracksTable = ({rows,currentPage, totalCount, loadMore, refresh}: TracksTableProps) => {
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
                                            <input type="checkbox" className=" rounded-md shrink-0 mt-0.5 border-gray-200 text-red-900 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                                            
                                    </div>
                            
                                </th>
                                <th ></th>
                                <th>Duration</th>
                                <th>Genres</th>                                
                            </tr>
                        </thead>
                        <tbody >
                            {
                            rows.map( track => 
                            <tr className="text-left ">
                            <td className="pl-8">
                            <div className="flex">
                                    <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded-md text-red-900 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                                    
                                </div>
                            </td>
                            <td className="px-8 border-t-0 border-l-0 border-r-0 text-xs whitespace-nowrap py-2">
                                <div >
                                <SongCard artistName={track.artistName} name={track.name} imgSrc={track.imgSrc} genres={track.genres} />
                                </div>
                            </td>
                            <td ><p>{track.duration}</p></td>
                            <td ><p>{track.genres?.map(g => `${g} `)}</p></td>
                           
                            </tr>)
                        }
                        
                        </tbody>
                        </table>
                </InfiniteScroll>
            </div>
        </div>
    )
}