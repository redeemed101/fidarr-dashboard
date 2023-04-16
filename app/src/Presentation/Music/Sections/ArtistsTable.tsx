import EditIcon from "../../../Assets/svgs/EditIcon.svg"
import DeleteIcon from "../../../Assets/svgs/DeleteIcon.svg"
import SettingsIcon from "../../../Assets/svgs/TrackSettingsIcon.svg";
import { Artist } from "../../../Domain/Model/Music";

export type ArtistCardProps = {
    imgSrc : string,
    name : string,
    genres : string[],
}
export const ArtistCard = ({imgSrc,name, genres} : ArtistCardProps) => {
    return (
        <div className="w-auto h-auto">
        <div className="flex flex-row items-center gap-2">

            <img className="rounded-md w-16 h-16" src={imgSrc}/>
            <div className="flex flex-col">
                <p className="text-white font-bold">{name}</p>
                <p className="text-fidarrgray-500 font-xs">{genres.map(a => a,)}</p>
            </div>
        </div>
        </div>
    )
}



type ArtistTableProps = {
    rows : Artist[],

}

const ArtistsTable = ({rows}: ArtistTableProps) => {
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
                        <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded-md text-red-900 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                         
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

export default ArtistsTable