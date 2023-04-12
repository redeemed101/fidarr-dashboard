import EditIcon from "../../../Assets/svgs/EditIcon.svg"
import DeleteIcon from "../../../Assets/svgs/DeleteIcon.svg"
import SettingsIcon from "../../../Assets/svgs/TrackSettingsIcon.svg";
import { Link } from "react-router-dom";


enum ChannelType{
    Playlist,
    Genre
}
type ChannelsRow = {
    id: string,
    name : string,
    lastUpdated: string,
    type : ChannelType
}
const Channels: ChannelsRow [] = [
    {
        id: "1234",
        name : "Rock",
        lastUpdated : "March 24, 2023",
        type: ChannelType.Genre

    },
    {
        id: "12345",
        name : "Christian/Gospel",
        lastUpdated : "March 24, 2023",
        type: ChannelType.Genre

    },
    {
        id: "123456",
        name : "Sleep",
        lastUpdated : "March 24, 2023",
        type: ChannelType.Playlist

    },
    {
        id: "123467",
        name : "HipHop",
        lastUpdated : "March 24, 2023",
        type: ChannelType.Genre

    },
    {
        id: "12345678",
        name : "Hiphop",
        lastUpdated : "March 24, 2023",
        type: ChannelType.Genre

    },
     {
        id: "1234333",
        name : "Chill",
        lastUpdated : "March 24, 2023",
        type: ChannelType.Playlist

    },
    {
        id: "1234222",
        name : "Driving",
        lastUpdated : "March 24, 2023",
        type: ChannelType.Playlist

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
                rows.map( channel => 
                <tr className="text-left ">
               
                <td className="py-4"><p>{channel.name}</p></td>
                <td><p>{channel.lastUpdated}</p></td>
                <td>
                    <div className="flex flex-row gap-2">
                        
                        <div className="cursor-pointer">
                          <Link to={channel.type == ChannelType.Genre ? `/cms/channels/genres/${channel.id}` : `/cms/channels/playlists/${channel.id}`}><img src={EditIcon} /></Link>
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