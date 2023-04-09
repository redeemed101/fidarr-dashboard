import { title } from "process";
import HeaderSection from "../../Common/HeaderSection"
import MusicMenuItem from "../Components/MusicMenuItem";
import { ButtonWithIcon } from "../../Common/buttons";
import PlusIcon from "../../../Assets/svgs/PlusIcon.svg"
import { Link } from "react-router-dom";
import { MusicMenu } from "../../../StateManagement/MusicMenu";


type MusicHeaderProps = {
   menus : MusicMenu[],
   buttonComp?: React.ReactNode;
}






const MusicHeader = ({menus, buttonComp} : MusicHeaderProps) => {
    return (
        <div className="w-full">
            <div className="flex flex-col bg-fidarrgray-600 pb-4 w-full">
                <div className="pl-8">
                  <HeaderSection title="Music" />
                  <div className="flex flex-row pt-12 ml-4 items-center justify-between">
                        <div className="flex flex-row gap-6">
                            { menus.map(m => <Link  to={m.route}><MusicMenuItem action={m.action} title={m.title} isSelected={m.isSelected} /></Link> )}
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