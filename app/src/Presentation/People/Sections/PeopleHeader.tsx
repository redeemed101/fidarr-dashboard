import { title } from "process";
import HeaderSection from "../../Common/HeaderSection"
import { Link } from "react-router-dom";
import { useState } from "react";
import { PeopleMenu, PeopleMenuType } from "../../../StateManagement/PeopleMenu";
import PeopleMenuItem from "../Components/PeopleMenuItem";

type PeopleHeaderProps = {
   menus : PeopleMenu[],
   buttonComp?: React.ReactNode,
   selectedType: PeopleMenuType
}







const PeopleHeader = ({menus, buttonComp, selectedType} : PeopleHeaderProps) => {
    const initial : PeopleMenu | undefined = menus.find(m => m.type == selectedType)
    const [selectedPeopleMenu, setSelectedPeopleMenu] = useState(initial);
    return (
        <div className="w-full">
            <div className="flex flex-col bg-fidarrgray-600 pb-4 w-full">
                <div className="pl-8">
                  <HeaderSection title="People" />
                  <div className="flex flex-row pt-12 ml-4 items-center justify-between">
                        <div className="flex flex-row gap-6">
                            { menus.map(m => <Link  to={m.route}><PeopleMenuItem action={() => setSelectedPeopleMenu(m)} title={m.title} isSelected={selectedPeopleMenu == m} /></Link> )}
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

export default PeopleHeader;