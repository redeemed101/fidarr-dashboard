import EditIcon from "../../../Assets/svgs/EditIcon.svg"
import DeleteIcon from "../../../Assets/svgs/DeleteIcon.svg"
import SettingsIcon from "../../../Assets/svgs/TrackSettingsIcon.svg";



type ContentRow = {
  
    name : string,
    contentType: string,
    tag: string,
    autoUpdate: boolean,
    lastUpdated: string
}
const Content: ContentRow [] = [
    {
        
        name : "New Singles",
        contentType: "Tracks",
        tag: "#Rock",
        autoUpdate: true,
        lastUpdated : "March 24, 2023"

    },
    {
        
        name : "New Singles",
        contentType: "Tracks",
        tag: "#Rock",
        autoUpdate: true,
        lastUpdated : "March 24, 2023"

    },
    {
        
        name : "New Singles",
        contentType: "Tracks",
        tag: "#Rock",
        autoUpdate: true,
        lastUpdated : "March 24, 2023"

    },
    {
        
        name : "New Singles",
        contentType: "Tracks",
        tag: "#Rock",
        autoUpdate: true,
        lastUpdated : "March 24, 2023"

    },
    {
        
        name : "New Singles",
        contentType: "Tracks",
        tag: "#Rock",
        autoUpdate: true,
        lastUpdated : "March 24, 2023"

    },
    {
        
        name : "New Singles",
        contentType: "Tracks",
        tag: "#Rock",
        autoUpdate: true,
        lastUpdated : "March 24, 2023"

    },
    {
        
        name : "New Singles",
        contentType: "Tracks",
        tag: "#Rock",
        autoUpdate: true,
        lastUpdated : "March 24, 2023"

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
                <td><p>{content.contentType}</p></td>
                <td><p>{content.tag}</p></td>
                <td><p>{content.autoUpdate ? "Yes" : "No"}</p></td>
                <td><p>{content.lastUpdated}</p></td>
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

export default ContentTable