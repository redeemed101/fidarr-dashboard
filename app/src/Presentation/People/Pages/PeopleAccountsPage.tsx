import { Link } from "react-router-dom"
import { PeopleMenuType, peopleMenuItems } from "../../../StateManagement/PeopleMenu"
import MenuColumn from "../../Dashboard/Components/MenuColumn"
import PeopleHeader from "../Sections/PeopleHeader"
import { ButtonWithIcon } from "../../Common/buttons"
import PlusIcon from "../../../Assets/svgs/PlusIcon.svg"
import AccountsTable from "../Sections/AccountsTable"
import { usePeopleModelController } from "../hooks/usePeopleModelController"
import { peopleRepository } from "../../../main"
import { User } from "../../../Domain/Model/Auth/User"
import { useEffect, useState } from "react"
import { RequestStatus } from "../../Music/hooks/common"

const PeopleAccountsPage = () => {
    const { getPeople,deleteUser, refreshPeople, currentPage, count, currentUsers, fetchStatus} = usePeopleModelController(peopleRepository)
    const [users, setUsers] = useState<User[]>([])
    const [selectedUsers, setSelectedUsers] = useState<User[]>([])
    useEffect(() => {
        getPeople()
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
       
           <PeopleHeader selectedType={PeopleMenuType.Accounts} menus={peopleMenuItems} buttonComp={ <Link to="/people/accounts/create"><ButtonWithIcon title="Add Member" imageSrc={PlusIcon} /></Link> } />
           {fetchStatus == RequestStatus.Loading ? <div className="mx-auto"><p className="text-white">Loading...</p></div> :
                   <AccountsTable 
                   refresh={refreshPeople} 
                   totalCount={count} 
                   selectUser={selectUser}
                   unSelectUser={unSelectUser}
                   selectedUsers={selectedUsers}
                   deleteItem={ (id:string) =>{
                     deleteUser(id, () => setUsers(prev => prev.filter(a => a.id != id)))
                   } }
                   currentPage={currentPage} 
                   loadMore={() => getPeople(true)} 
                   rows={users} />
              }
              {fetchStatus == RequestStatus.Error ? <div className="mx-auto"><p className="text-red-600">Error fetching data</p></div> : ""}
         
        </div>   
     
        </div>
    )
}

export default PeopleAccountsPage