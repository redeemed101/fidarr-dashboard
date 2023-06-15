import EditIcon from "../../../Assets/svgs/EditIcon.svg"
import DeleteIcon from "../../../Assets/svgs/DeleteIcon.svg"
import OnOffIcon from "../../../Assets/svgs/OnOffIcon.svg"
import { User } from "../../../Domain/Model/Auth/User"



type SubscribersTableProps = {
    rows : User[],
    currentPage: number,
    totalCount: number,
    selectedUsers : User[],
    loadMore : () => void,
    refresh : () => void
    selectUser : (user: User) => void,
    unSelectUser : (user: User) => void,
    deleteItem: (id: string) => void
}

const SubscribersTable = (props : SubscribersTableProps) => {
   return (
    <div className="flex flex-col w-full  px-12">
    <table className="table-auto text-white w-11/12">
    <thead className="text-left">
        <tr>
            <th className="pr-12">
                <div className="flex">
                        <input type="checkbox" className=" rounded-md shrink-0 mt-0.5 border-gray-200 text-red-900 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                        
                </div>
        
            </th>
            <th>Name</th>
            <th>Username</th>
            <th>Roles</th>
            <th>Date Joined</th>
            <th>Last Updated</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody >
        {
        props.rows.map( member => 
        <tr className="text-left">
       <td className="pr-12">
           <div className="flex">
                <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded-md text-red-900 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                 
            </div>
        </td>
            <td className="border-t-0 border-l-0 border-r-0 text-xs whitespace-nowrap py-4">
                <div className="flex flex-row gap-2 items-center">
                    <div>
                        <img className="rounded h-16 w-16" src={member.profilePicPath} />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-white text-bold text-sm">{member.name}</p>
                        <p className="text-fidarrgray-500 font-bold text-sm">{member.email}</p>
                    </div>
                </div>
            </td>
            <td ><p>{member.username}</p></td>
            <td ><p>{member.roles?.map(r => r,)}</p></td>
            <td ><p>{member.dateCreated}</p></td>                
            <td><p>{member.lastUpdated}</p></td>
            <td>
                <div className="flex flex-row gap-2">
                <div className="cursor-pointer">
                      <img src={OnOffIcon} />
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

export default SubscribersTable