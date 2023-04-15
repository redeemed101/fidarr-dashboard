import MenuColumn from "../../Dashboard/Components/MenuColumn"
import { ButtonWithIcon } from "../../Common/buttons";
import PlusIcon from "../../../Assets/svgs/PlusIcon.svg"
import { Link } from "react-router-dom";
import SettingsHeader from "../Sections/SettingsHeader";
import { SettingsMenuType, settingsMenuItems } from "../../../StateManagement/SettingsMenu";
import TeamTable from "../Sections/TeamTable";



const TeamPage = () => {
    return (
       
       
        <div  className="pb-4 flex flex-row bg-black h-screen">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
         
             <SettingsHeader selectedType={SettingsMenuType.Team} menus={settingsMenuItems}  buttonComp={ <Link to="/settings/team/create"><ButtonWithIcon imageSrc={PlusIcon} title="Add Member" /></Link> } />
             <TeamTable />
          </div>   
       
      </div>
    )
}

export default TeamPage