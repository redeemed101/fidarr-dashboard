import EditIcon from "../../../Assets/svgs/EditIcon.svg"
import DeleteIcon from "../../../Assets/svgs/DeleteIcon.svg"
import SettingsIcon from "../../../Assets/svgs/TrackSettingsIcon.svg";



type LocationRow = {
  
    name : string,
    location : string,
    lastUpdated: string
}
const locations: LocationRow [] = [
    {
        
        name : "Content Feed",
        location : "Home Page",
        lastUpdated : "March 24, 2023"

    },
    {
        
        name : "Slider",
        location : "Music Home",
        lastUpdated : "March 24, 2023"

    },
    {
        
        name : "Genres",
        location : "Music Home",
        lastUpdated : "March 24, 2023"

    },
    {
        
        name : "Moods",
        location : "Music Home",
        lastUpdated : "March 24, 2023"

    },
    {
        
        name : "Charts",
        location : "Music Home",
        lastUpdated : "March 24, 2023"

    },
     {
        
        name : "Content Feed",
        location : "Music Home",
        lastUpdated : "March 24, 2023"

    },
    {
        
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

export default LocationsTable