import EditIcon from "../../../Assets/svgs/EditIcon.svg"
import DeleteIcon from "../../../Assets/svgs/DeleteIcon.svg"
import SettingsIcon from "../../../Assets/svgs/TrackSettingsIcon.svg";



export type GenreCardProps = {
    imgSrc : string,
    name : string,
  
}
export const GenreCard = ({imgSrc,name} : GenreCardProps) => {
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

type GenreRow = {
    imgSrc : string,
    name : string,
    albums : string,
    tracks : string,
    artists: string,
    lastUpdated: string
}
const tracks : GenreRow [] = [
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        albums : "10",
        tracks : "120",
        artists: "10",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        albums : "10",
        tracks : "120",
        artists: "10",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        albums : "10",
        tracks : "120",
        artists: "10",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        albums : "10",
        tracks : "120",
        artists: "10",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        albums : "10",
        tracks : "120",
        artists: "10",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        albums : "10",
        tracks : "120",
        artists: "10",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        albums : "10",
        tracks : "120",
        artists: "10",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        albums : "10",
        tracks : "120",
        artists: "10",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        albums : "10",
        tracks : "120",
        artists: "10",
        lastUpdated : "March 24, 2023"

    },
    {
        imgSrc : "https://randomuser.me/api/portraits/women/81.jpg",
        name : "Eben",
        albums : "10",
        tracks : "120",
        artists: "10",
        lastUpdated : "March 24, 2023"

    }
]
type GenresTableProps = {
    rows? : GenreRow[],

}

const GenresTable = ({rows = tracks}: GenresTableProps) => {
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
                    <th>Genre List</th>
                    <th>Albums</th>
                    <th>Tracks</th>
                    <th>Artists</th>
                    <th>Last Updated</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody >
                {
                rows.map( genre => 
                <tr className="text-left">
                <td className="pr-12">
                   <div className="flex">
                        <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded-md text-red-900 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                         
                    </div>
                </td>
                <td className="border-t-0 border-l-0 border-r-0 text-xs whitespace-nowrap py-4">
                    <div >
                       <GenreCard name={genre.name} imgSrc={genre.imgSrc} />
                    </div>
                </td>
                <td ><p>{genre.albums}</p></td>
                <td ><p>{genre.tracks}</p></td>
                <td ><p>{genre.artists}</p></td>
                <td><p>{genre.lastUpdated}</p></td>
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

export default GenresTable