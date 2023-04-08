import EditIcon from "../../../Assets/svgs/EditIcon.svg"
import DeleteIcon from "../../../Assets/svgs/DeleteIcon.svg"
import SettingsIcon from "../../../Assets/svgs/TrackSettingsIcon.svg";
import { ArtistCard } from "./ArtistsTable"


type TrackRow = {
    imgSrc : string,
    name : string,
    genre : string,
    streams : string,
    duration : string,
    releaseDate: string,
    lastUpdated: string
}
const tracks : TrackRow [] = [
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        genre : "Gospel",
        streams : "12M",
        duration : "1:20",
        releaseDate : "March 24, 2023",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        genre : "Gospel",
        streams : "12M",
        duration : "1:20",
        releaseDate : "March 24, 2023",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        genre : "Gospel",
        streams : "12M",
        duration : "1:20",
        releaseDate : "March 24, 2023",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        genre : "Gospel",
        streams : "12M",
        duration : "1:20",
        releaseDate : "March 24, 2023",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        genre : "Gospel",
        streams : "12M",
        duration : "1:20",
        releaseDate : "March 24, 2023",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        genre : "Gospel",
        streams : "12M",
        duration : "1:20",
        releaseDate : "March 24, 2023",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        genre : "Gospel",
        streams : "12M",
        duration : "1:20",
        releaseDate : "March 24, 2023",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        genre : "Gospel",
        streams : "12M",
        duration : "1:20",
        releaseDate : "March 24, 2023",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        genre : "Gospel",
        streams : "12M",
        duration : "1:20",
        releaseDate : "March 24, 2023",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        genre : "Gospel",
        streams : "12M",
        duration : "1:20",
        releaseDate : "March 24, 2023",
        lastUpdated : "March 24, 2023"

    }
]
type AlbumsTableProps = {
    rows? : TrackRow[],

}

const AlbumsTable = ({rows = tracks}: AlbumsTableProps) => {
    return (
        <div className="w-full ml-4">
            <table className="table-auto text-white w-full">
            <thead className="text-left">
                <tr>
                    <th className="pr-12">
                        <div className="flex">
                                <input type="checkbox" className=" rounded-md shrink-0 mt-0.5 border-gray-200 text-red-900 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                                
                        </div>
                
                    </th>
                    <th>Track</th>
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
                       <ArtistCard name={track.name} imgSrc={track.imgSrc} genre={track.genre} />
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
        </div>
    )
}

export default AlbumsTable