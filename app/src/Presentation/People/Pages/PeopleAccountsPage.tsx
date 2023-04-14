import { Link } from "react-router-dom"
import { PeopleMenuType, peopleMenuItems } from "../../../StateManagement/PeopleMenu"
import MenuColumn from "../../Dashboard/Components/MenuColumn"
import PeopleHeader from "../Sections/PeopleHeader"
import { ButtonWithIcon } from "../../Common/buttons"
import PlusIcon from "../../../Assets/svgs/PlusIcon.svg"

const PeopleAccountsPage = () => {
    return(
        <div  className="pb-4 w-full flex flex-row bg-black h-screen">
        <MenuColumn />
        <div className="flex   gap-4 flex-col w-full">
       
           <PeopleHeader selectedType={PeopleMenuType.Accounts} menus={peopleMenuItems} buttonComp={ <Link to="/people/accounts/create"><ButtonWithIcon title="Add Member" imageSrc={PlusIcon} /></Link> } />
           
        </div>   
     
        </div>
    )
}

export default PeopleAccountsPage