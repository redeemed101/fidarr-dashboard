import EditIcon from "../../../Assets/svgs/EditIcon.svg"
import DeleteIcon from "../../../Assets/svgs/DeleteIcon.svg"
import SettingsIcon from "../../../Assets/svgs/TrackSettingsIcon.svg";
import { Link } from "react-router-dom";

enum ContentType{
    Playlist = "Playlists",
    Artist = "Artists",
    Track = "Tracks",
    Album = "Albums"
}

type ContentRow = {
    id : string,
    name : string,
    tag: string,
    autoUpdate: boolean,
    lastUpdated: string,
    type: ContentType
}
const Content: ContentRow [] = [
    {
        id:"1234",
        name : "New Singles",
        tag: "#Rock",
        autoUpdate: true,
        lastUpdated : "March 24, 2023",
        type: ContentType.Track

    },
    {
        id:"1234",
        name : "New Albums",
        tag: "#Rock",
        autoUpdate: true,
        lastUpdated : "March 24, 2023",
        type: ContentType.Album

    },
    {
        id:"1234",
        name : "New Singles",
        tag: "#Rock",
        autoUpdate: true,
        lastUpdated : "March 24, 2023",
        type: ContentType.Track

    },
    {
        id:"1234",
        name : "Playlist",
        tag: "#Rock",
        autoUpdate: true,
        lastUpdated : "March 24, 2023",
        type: ContentType.Playlist

    },
    {
        id:"1234",
        name : "Popular Artists",
        tag: "#Rock",
        autoUpdate: true,
        lastUpdated : "March 24, 2023",
        type: ContentType.Artist

    },
   
   
]
type ContentTableProps = {
    rows? : ContentRow[],

}

const ContentTable = ({rows = Content}: ContentTableProps) => {
    return (
        <div className="flex flex-col w-full">
            <table className="table-auto text-white w-11/12 self-end">
            <thead className="text-left">
                <tr>
                   
                    <th className="pb-8">Name</th>
                    <th>Content Type</th>
                    <th>Tag</th>
                    <th>Auto Update</th>
                    <th>Last Updated</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody >
                {
               
                rows.map( content => 
                <tr className="text-left ">
               
                <td className="py-4"><p>{content.name}</p></td>
                <td><p>{content.type}</p></td>
                <td><p>{content.tag}</p></td>
                <td><p>{content.autoUpdate ? "Yes" : "No"}</p></td>
                <td><p>{content.lastUpdated}</p></td>
                <td>
                    <div className="flex flex-row gap-2">
                        
                        <div className="cursor-pointer">
                          <Link to= {(() => {
                                switch (content.type) {
                                case ContentType.Album:   return `/cms/content/albums/${content.id}`;
                                case ContentType.Artist:  return `/cms/content/artists/${content.id}`;
                                case ContentType.Playlist:   return `/cms/content/playlists/${content.id}`;
                                case ContentType.Track:   return `/cms/content/tracks/${content.id}`;
                                default:      return `/cms/content/tracks/${content.id}`;
                                }
                            })()}>
                            <img src={EditIcon} />
                          </Link>
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

export default ContentTable