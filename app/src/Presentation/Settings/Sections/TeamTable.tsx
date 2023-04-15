import EditIcon from "../../../Assets/svgs/EditIcon.svg"
import DeleteIcon from "../../../Assets/svgs/DeleteIcon.svg"

type TeamRow = {
    id : string,
    email : string,
    name : string,
    roles: string[],
    dateJoined: string,
    lastUpdated: string,
    lastLogin: string
}

const teamMembers : TeamRow[] =  [
    {
        id: "1234",
        name : "Enyo Sam",
        email : "enyo@fidarr.com",
        roles : ["Administrator"],
        dateJoined: "March 24, 2023",
        lastUpdated: "March 24, 2023",
        lastLogin: "Yesterday"

    },
    {
        id: "1234",
        name : "Williams",
        email : "williams@fidarr.com",
        roles : ["Content Manager"],
        dateJoined: "March 24, 2023",
        lastUpdated: "March 24, 2023",
        lastLogin: "Yesterday"

    },
    {
        id: "1234",
        name : "Lewis Msasa",
        email : "lewis@fidarr.com",
        roles : ["Administrator"],
        dateJoined: "March 24, 2023",
        lastUpdated: "March 24, 2023",
        lastLogin: "Yesterday"

    }
]

type TeamTableProps = {
    rows? : TeamRow[]
}


const TeamTable = ({rows = teamMembers}: TeamTableProps) => {
    return (
        <div className="flex flex-col w-full  px-20">
        <table className="table-auto text-white w-11/12 self-start">
        <thead className="text-left">
            <tr>
              
                <th>Member</th>
                <th>Last Login</th>
                <th>Roles</th>
                <th>Date Joined</th>
                <th>Last Updated</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody >
            {
            rows.map( member => 
            <tr className="text-left">
           
            <td className="border-t-0 border-l-0 border-r-0 text-xs whitespace-nowrap py-4">
                <div className="flex flex-col">
                    <p className="text-white text-bold text-sm">{member.name}</p>
                    <p className="text-fidarrgray-500 text-sm">{member.email}</p>
                </div>
            </td>
            <td ><p>{member.lastLogin}</p></td>
            <td ><p>{member.roles.map(r => r,)}</p></td>
            <td ><p>{member.dateJoined}</p></td>                
            <td><p>{member.lastUpdated}</p></td>
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

export default TeamTable