import MenuColumn from "../../Dashboard/Components/MenuColumn"
import { ButtonWithIcon } from "../../Common/buttons";
import PlusIcon from "../../../Assets/svgs/PlusIcon.svg"
import { Link } from "react-router-dom";
import SettingsHeader from "../Sections/SettingsHeader";
import { SettingsMenuType, settingsMenuItems } from "../../../StateManagement/SettingsMenu";



const TeamPage = () => {
    return (
       
       
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row bg-black">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
         
             <SettingsHeader selectedType={SettingsMenuType.Team} menus={settingsMenuItems}  buttonComp={ <Link to="/people/teams/create"><ButtonWithIcon imageSrc={PlusIcon} title="Add Member" /></Link> } />
           
          </div>   
       
      </div>
    )
}

export default TeamPage