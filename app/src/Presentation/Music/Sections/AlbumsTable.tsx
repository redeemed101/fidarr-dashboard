import EditIcon from "../../../Assets/svgs/EditIcon.svg"
import DeleteIcon from "../../../Assets/svgs/DeleteIcon.svg"
import SettingsIcon from "../../../Assets/svgs/TrackSettingsIcon.svg";
import { ArtistCard } from "./ArtistsTable"


export type AlbumRow = {
    imgSrc : string,
    name : string,
    artist: string,
    streams : string,
    tracks : string,
    releaseDate: string,
    lastUpdated: string
}
const tracks : AlbumRow [] = [
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Victory",
        artist : "Eben",
        streams : "12M",
        tracks: "10",
        releaseDate : "March 24, 2023",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        artist : "Eben",
        streams : "12M",
        tracks: "10",
        releaseDate : "March 24, 2023",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        artist : "Eben",
        streams : "12M",
        tracks: "10",
        releaseDate : "March 24, 2023",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        artist : "Eben",
        streams : "12M",
        tracks: "10",
        releaseDate : "March 24, 2023",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        artist : "Eben",
        streams : "12M",
        tracks: "10",
        releaseDate : "March 24, 2023",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        artist : "Eben",
        streams : "12M",
        tracks: "10",
        releaseDate : "March 24, 2023",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        artist : "Eben",
        streams : "12M",
        tracks: "10",
        releaseDate : "March 24, 2023",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        artist : "Eben",
        streams : "12M",
        tracks: "10",
        releaseDate : "March 24, 2023",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        artist : "Eben",
        streams : "12M",
        tracks: "10",
        releaseDate : "March 24, 2023",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        artist : "Eben",
        streams : "12M",
        tracks: "10",
        releaseDate : "March 24, 2023",
        lastUpdated : "March 24, 2023"

    }

]
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
    rows? : AlbumRow[],
    
}

const AlbumsTable = ({rows = tracks}: AlbumsTableProps) => {

    return (
        <div className="flex flex-col w-full">
            <table className="table-auto text-white w-11/12 self-end">
            <thead className="text-left">
                <tr>
                    <th className="pr-12">
                        <div className="flex">
                                <input type="checkbox" className=" rounded-md shrink-0 mt-0.5 border-gray-200 text-red-900 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                                
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
                rows.map( track => 
                <tr className="text-left">
                <td className="pr-12">
                   <div className="flex">
                        <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded-md text-red-900 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                         
                    </div>
                </td>
                <td className="border-t-0 border-l-0 border-r-0 text-xs whitespace-nowrap py-4">
                    <div >
                       <AlbumCard name={track.name} imgSrc={track.imgSrc} artist={track.artist} />
                    </div>
                </td>
                <td ><p>{track.streams}</p></td>
                <td ><p>{track.releaseDate}</p></td>
                <td ><p>{track.tracks}</p></td>                
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
        </div>
    )
}

export default AlbumsTable