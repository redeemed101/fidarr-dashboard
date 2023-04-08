import { title } from "process";
import HeaderSection from "../../Common/HeaderSection"
import MusicMenuItem from "../Components/MusicMenuItem";
import { ButtonWithIcon } from "../../Common/buttons";
import PlusIcon from "../../../Assets/svgs/PlusIcon.svg"


type MusicHeaderProps = {
   menus? : MusicMenu[]
}

export type MusicMenu = {
     title : string,
     isSelected?:boolean,
     action? : () => void
}

const menuItems : MusicMenu [] = [
    {
        title : "Artists",
        isSelected: true
    },
    {
        title : "Tracks"
    },
    {
        title : "Albums"
    },
    {
        title : "Genres"
    },
    {
        title : "Playlists"
    }

]

const MusicHeader = ({menus = menuItems} : MusicHeaderProps) => {
    return (
        <div className="w-full bg-white">
            <div className="flex flex-col bg-fidarrgray-600 pb-4 w-full">
                <div className="pl-8">
                  <HeaderSection title="Music" />
                  <div className="flex flex-row pt-12 ml-4 items-center justify-between">
                        <div className="flex flex-row gap-6">
                            { menus.map(m => <MusicMenuItem title={m.title} isSelected={m.isSelected} /> )}
                        </div>
                        <div className="mr-4">
                        <ButtonWithIcon imageSrc={PlusIcon} title="Create Artist" /> 
                        </div>
                   </div>
            
                </div>
            
               
            </div>
        </div>
      
    )
}

export default MusicHeader;