import MenuColumn from "../../Dashboard/Components/MenuColumn"
import MusicHeader, { MusicMenu } from "../Sections/MusicHeader"
import { ButtonWithIcon } from "../../Common/buttons";
import PlusIcon from "../../../Assets/svgs/PlusIcon.svg"
import GenresTable from "../Sections/GenresTable";

const menuItems : MusicMenu [] = [
    {
        title : "Artists",
        
    },
    {
        title : "Tracks",
        
    },
    {
        title : "Albums",
        
    },
    {
        title : "Genres",
        isSelected: true
    },
    {
        title : "Playlists"
    }

]

const GenresPage = () => {
    return (
       
       
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
         
             <MusicHeader menus={menuItems}  buttonComp={ <ButtonWithIcon imageSrc={PlusIcon} title="Create Genre" /> } />
             <GenresTable />
          </div>   
       
      </div>
    )
}

export default GenresPage