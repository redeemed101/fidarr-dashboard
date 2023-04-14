import { title } from "process";
import HeaderSection from "../../Common/HeaderSection"
import { ButtonWithIcon } from "../../Common/buttons";
import PlusIcon from "../../../Assets/svgs/PlusIcon.svg"
import { Link } from "react-router-dom";
import { useState } from "react";
import { SettingsMenu, SettingsMenuType } from "../../../StateManagement/SettingsMenu";
import SettingsMenuItem from "../Components/SettingsMenuItem";


type SettingsHeaderProps = {
   menus : SettingsMenu[],
   buttonComp?: React.ReactNode,
   selectedType: SettingsMenuType
}







const SettingsHeader = ({menus, buttonComp, selectedType} : SettingsHeaderProps) => {
    const initial : SettingsMenu | undefined = menus.find(m => m.type == selectedType)
    const [selectedSettingsMenu, setSelectedSettingsMenu] = useState(initial);
    return (
        <div className="w-full">
            <div className="flex flex-col bg-fidarrgray-600 pb-4 w-full">
                <div className="pl-8">
                  <HeaderSection title="Settings" />
                  <div className="flex flex-row pt-12 ml-4 items-center justify-between">
                        <div className="flex flex-row gap-6">
                            { menus.map(m => <Link  to={m.route}><SettingsMenuItem action={() => setSelectedSettingsMenu(m)} title={m.title} isSelected={selectedSettingsMenu == m} /></Link> )}
                        </div>
                        <div className="mr-4">
                          {buttonComp}
                        </div>
                   </div>
            
                </div>
            
               
            </div>
        </div>
      
    )
}

export default SettingsHeader;