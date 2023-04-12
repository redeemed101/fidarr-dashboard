import EditIcon from "../../../Assets/svgs/EditIcon.svg"
import DeleteIcon from "../../../Assets/svgs/DeleteIcon.svg"
import SettingsIcon from "../../../Assets/svgs/TrackSettingsIcon.svg";
import { Link } from "react-router-dom";



type LocationRow = {
    id: string,
    name : string,
    location : string,
    lastUpdated: string
}
const locations: LocationRow [] = [
    {
        id: "1234",
        name : "Content Feed",
        location : "Home Page",
        lastUpdated : "March 24, 2023"

    },
    {
        id: "12345",
        name : "Slider",
        location : "Music Home",
        lastUpdated : "March 24, 2023"

    },
    {
        id: "123456",
        name : "Genres",
        location : "Music Home",
        lastUpdated : "March 24, 2023"

    },
    {
        id: "1234567",
        name : "Moods",
        location : "Music Home",
        lastUpdated : "March 24, 2023"

    },
    {
        id: "12345678",
        name : "Charts",
        location : "Music Home",
        lastUpdated : "March 24, 2023"

    },
     {
        id: "123456789",
        name : "Content Feed",
        location : "Music Home",
        lastUpdated : "March 24, 2023"

    },
    {
        id: "1234567890",
        name : "Playlists",
        location : "Music Home",
        lastUpdated : "March 24, 2023"

    }
   
]
type LocationsTableProps = {
    rows? : LocationRow[],

}

const LocationsTable = ({rows = locations}: LocationsTableProps) => {
    return (
        <div className="flex flex-col w-full">
            <table className="table-auto text-white w-11/12 self-end">
            <thead className="text-left">
                <tr>
                   
                    <th className="pb-8">Name</th>
                    <th>Location</th>
                    <th>Last Updated</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody >
                {
                rows.map( location => 
                <tr className="text-left ">
               
                <td className="py-4"><p>{location.name}</p></td>
                <td ><p>{location.location}</p></td>
                <td><p>{location.lastUpdated}</p></td>
                <td>
                    <div className="flex flex-row gap-2">
                        
                        <div className="cursor-pointer">
                          <Link to={`/cms/locations/${location.id}`}><img src={EditIcon} /></Link>
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

export default LocationsTable