import { Link } from "react-router-dom"
import { PeopleMenuType, peopleMenuItems } from "../../../StateManagement/PeopleMenu"
import MenuColumn from "../../Dashboard/Components/MenuColumn"
import PeopleHeader from "../Sections/PeopleHeader"
import { ButtonWithIcon } from "../../Common/buttons"
import PlusIcon from "../../../Assets/svgs/PlusIcon.svg"
import SubscribersTable from "../Sections/SubscribersTable"
import { usePeopleModelController } from "../hooks/usePeopleModelController"
import { peopleRepository } from "../../../main"
import { useEffect, useState } from "react"
import { User } from "../../../Domain/Model/Auth/User"
import { RequestStatus } from "../../Music/hooks/common"

const PeopleSubscribersPage = () => {
    const { getSubscribers,deleteUser, refreshSubscribers, currentPage, count, currentUsers, fetchStatus} = usePeopleModelController(peopleRepository)
    const [users, setUsers] = useState<User[]>([])
    const [selectedUsers, setSelectedUsers] = useState<User[]>([])
    useEffect(() => {
        getSubscribers()
    },[])
    useEffect( () => {
      setUsers(currentUsers)
    }, [currentUsers]); 
    const selectUser = (user: User ) => {
       setSelectedUsers(prev => ([...prev, user]))

    }
    const unSelectUser = (user: User) => {
      setSelectedUsers(prev => ([...prev.filter(t => t.id != user.id)]))
      
    } 
    return(
        <div  className="pb-4 w-full flex flex-row bg-black h-screen">
        <MenuColumn />
        <div className="flex   gap-4 flex-col w-full">
       
           <PeopleHeader selectedType={PeopleMenuType.Subscribers} menus={peopleMenuItems}  />
           {fetchStatus == RequestStatus.Loading ? <div className="mx-auto"><p className="text-white">Loading...</p></div> :
                   <SubscribersTable
                   refresh={refreshSubscribers} 
                   totalCount={count} 
                   selectUser={selectUser}
                   unSelectUser={unSelectUser}
                   selectedUsers={selectedUsers}
                   deleteItem={ (id:string) =>{
                     deleteUser(id, () => setUsers(prev => prev.filter(a => a.id != id)))
                   } }
                   currentPage={currentPage} 
                   loadMore={() => getSubscribers(true)} 
                   rows={users} />
              }
              {fetchStatus == RequestStatus.Error ? <div className="mx-auto"><p className="text-red-600">Error fetching data</p></div> : ""}
           
        </div>   
     
        </div>
    )
}

export default PeopleSubscribersPage