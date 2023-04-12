import EditIcon from "../../../Assets/svgs/EditIcon.svg"
import DeleteIcon from "../../../Assets/svgs/DeleteIcon.svg"
import SettingsIcon from "../../../Assets/svgs/TrackSettingsIcon.svg";



type ChannelsRow = {
  
    name : string,
    lastUpdated: string
}
const Channels: ChannelsRow [] = [
    {
        
        name : "Content Feed",
        lastUpdated : "March 24, 2023"

    },
    {
        
        name : "Slider",
        lastUpdated : "March 24, 2023"

    },
    {
        
        name : "Christian/Gospel",
        lastUpdated : "March 24, 2023"

    },
    {
        
        name : "Sleep",
        lastUpdated : "March 24, 2023"

    },
    {
        
        name : "Hiphop",
        lastUpdated : "March 24, 2023"

    },
     {
        
        name : "Chill",
        lastUpdated : "March 24, 2023"

    },
    {
        
        name : "Driving",
        lastUpdated : "March 24, 2023"

    }
   
]
type ChannelsTableProps = {
    rows? : ChannelsRow[],

}

const ChannelsTable = ({rows = Channels}: ChannelsTableProps) => {
    return (
        <div className="flex flex-col w-full">
            <table className="table-auto text-white w-11/12 self-end">
            <thead className="text-left">
                <tr>
                   
                    <th className="pb-8">Name</th>
                    <th>Last Updated</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody >
                {
                rows.map( location => 
                <tr className="text-left ">
               
                <td className="py-4"><p>{location.name}</p></td>
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

export default ChannelsTable