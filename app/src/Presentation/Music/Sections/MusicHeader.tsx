import { title } from "process";
import HeaderSection from "../../Common/HeaderSection"
import MusicMenuItem from "../Components/MusicMenuItem";
import { ButtonWithIcon } from "../../Common/buttons";
import PlusIcon from "../../../Assets/svgs/PlusIcon.svg"
import { Link } from "react-router-dom";
import { MusicMenu, MusicMenuType } from "../../../StateManagement/MusicMenu";
import { useState } from "react";


type MusicHeaderProps = {
   menus : MusicMenu[],
   buttonComp?: React.ReactNode,
   selectedType: MusicMenuType
}







const MusicHeader = ({menus, buttonComp, selectedType} : MusicHeaderProps) => {
    const initial : MusicMenu | undefined = menus.find(m => m.type == selectedType)
    const [selectedMusicMenu, setSelectedMusicMenu] = useState(initial);
    return (
        <div className="w-full">
            <div className="flex flex-col bg-fidarrgray-600 pb-4 w-full">
                <div className="pl-8">
                  <HeaderSection title="Music" />
                  <div className="flex flex-row pt-12 ml-4 items-center justify-between">
                        <div className="flex flex-row gap-6">
                            { menus.map(m => <Link  to={m.route}><MusicMenuItem action={() => setSelectedMusicMenu(m)} title={m.title} isSelected={selectedMusicMenu == m} /></Link> )}
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

export default MusicHeader;