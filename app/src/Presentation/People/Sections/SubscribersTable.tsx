import EditIcon from "../../../Assets/svgs/EditIcon.svg"
import DeleteIcon from "../../../Assets/svgs/DeleteIcon.svg"
import SettingsIcon from "../../../Assets/svgs/TrackSettingsIcon.svg";
import OnOffIcon from "../../../Assets/svgs/OnOffIcon.svg"
import { User } from "../../../Domain/Model/Auth/User"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { confirmAlert } from "react-confirm-alert"
import InfiniteScroll from "react-infinite-scroll-component"
import { PAGE_SIZE } from "../../../Data/Utils/constants"



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
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [allSelected, setAllSelected] = useState<boolean>(false)
    const checkSelectAll = (checked: boolean) => {
        console.log("within")
        setAllSelected(checked)
        if(checked){
            
            selectAll()
        }
        else{
            
            unSelectAll()
        }
    }
    const checkUserSelected = (checked: boolean, user: User) => {
      
          if(checked){
             
             props.selectUser(user)
          }
          else{
            props.unSelectUser(user)
          }
    }
    const selectAll = () => {
        props.rows.forEach(user => {
            
            if(!props.selectedUsers.find(a => a.id == user.id)){
                
                 props.selectUser(user)
            }
            
        })
    }
    const unSelectAll = () => {
        props.rows.forEach(user => {
            if(props.selectedUsers.find(a => a.id == user.id))
                 props.unSelectUser(user)
            
        })
    }
    const deleteUser = (id: string) => {
        console.log(id)
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className='bg-black rounded-lg flex flex-col px-8 py-2'>
                  <h1 className="text-white text-xl font-bold mx-auto">Confirm action</h1>
                  <p className="text-white">You want to delete this user?</p>
                  <div className="flex flex-row gap-2 justify-center mt-8">
                        <button className="bg-red-700 w-24 h-10 text-white font-bold rounded-lg" onClick={onClose}>No</button>
                        <button className="bg-white w-24 h-10 text-red-700 rounded-lg"
                            onClick={() => {
                            props.deleteItem(id)
                            onClose();
                            }}
                        >
                            Yes
                        </button>
                  </div>
                
                </div>
              );
            }
          });
       
      }
   return (
    <div className="flex flex-col w-full  px-12">
         <InfiniteScroll
                dataLength={props.rows.length}
                next={() => props.loadMore()}
                hasMore={props.totalCount/(props.currentPage * PAGE_SIZE) > 1}
                loader={<h4 className="text-white text-bold mx-auto">Loading more items...</h4>}
                refreshFunction={props.refresh}
                pullDownToRefresh
                pullDownToRefreshThreshold={50}
                pullDownToRefreshContent={
                       <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                }
                releaseToRefreshContent={
                  <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
               } 
           >
    <table className="table-auto text-white w-11/12">
    <thead className="text-left">
        <tr>
            <th className="pr-12">
                <div className="flex">
                <div className="flex">
                            <input 
                                type="checkbox" 
                                checked={allSelected}
                                onChange={(e) => checkSelectAll(e.target.checked)}
                                className=" rounded-md shrink-0 mt-0.5 border-gray-200 text-red-900  focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                                            
                       </div>
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
        props.rows.map( user => 
        <tr className="text-left">
       <td className="pr-12">
           <div className="flex">
           <div className="flex">
                                <input
                                 type="checkbox"
                                 checked={props.selectedUsers.find(a => a.id == user.id) != null}                                 
                                          onChange={(e) => checkUserSelected(e.target.checked, user)}
                                 className="shrink-0 mt-0.5 border-gray-200 rounded-md text-red-900 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" />
                                
                      </div>
            </div>
        </td>
            <td className="border-t-0 border-l-0 border-r-0 text-xs whitespace-nowrap py-4">
                <div className="flex flex-row gap-2 items-center">
                    <div>
                        <img className="rounded h-16 w-16" src={user.profilePicPath} />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-white text-bold text-sm">{user.name}</p>
                        <p className="text-fidarrgray-500 font-bold text-sm">{user.email}</p>
                    </div>
                </div>
            </td>
            <td ><p>{user.username}</p></td>
            <td ><p>{user.roles?.map(r => r,)}</p></td>
            <td ><p>{user.dateCreated}</p></td>                
            <td><p>{user.lastUpdated}</p></td>
            <td>
                <div className="flex flex-row gap-2">
                <div className="cursor-pointer">
                          <img onClick={() => {
                                //dispatch(setUserSelected(user))
                                navigate(`/people/subscribers/${user.id}`)
                            }} 
                             src={SettingsIcon} />
                        </div>
                        <div className="cursor-pointer">
                            <img onClick={() => {
                               //dispatch(setUserSelected(user))
                               navigate(`/people/subscribers/${user.id}`)
                            }} src={EditIcon} />
                        </div>
                        <div className="cursor-pointer">
                            <img src={DeleteIcon} onClick={() => {
                                    
                                 deleteUser(user.id)
                            }} />
                        </div>
                </div>
              
            </td>
        </tr>)
       }
       
    </tbody>
    </table>
    </InfiniteScroll>
</div>
   )
}

export default SubscribersTable