import { title } from "process";
import HeaderSection from "../../Common/HeaderSection"
import MusicMenuItem from "../../Music/Components/MusicMenuItem";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CMSMenu, CMSMenuType } from "../../../StateManagement/CMSMenu";
import CMSMenuItem from "../Components/CMSMenuItem";


type CMSHeaderProps = {
   menus : CMSMenu[],
   buttonComp?: React.ReactNode,
   selectedType: CMSMenuType
}







const CMSHeader = ({menus, buttonComp, selectedType} : CMSHeaderProps) => {
    const initial : CMSMenu | undefined = menus.find(m => m.type == selectedType)
    const [selectedCMSMenu, setSelectedCMSMenu] = useState(initial);
    return (
        <div className="w-full">
            <div className="flex flex-col bg-fidarrgray-600 pb-4 w-full">
                <div className="pl-8">
                  <HeaderSection title="CMS" />
                  <div className="flex flex-row pt-12 ml-4 items-center justify-between">
                        <div className="flex flex-row gap-6">
                            { menus.map(m => <Link  to={m.route}><CMSMenuItem action={() => setSelectedCMSMenu(m)} title={m.title} isSelected={selectedCMSMenu == m} /></Link> )}
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

export default CMSHeader;