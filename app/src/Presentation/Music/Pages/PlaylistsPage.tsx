import MenuColumn from "../../Dashboard/Components/MenuColumn"
import MusicHeader from "../Sections/MusicHeader"
import { ButtonWithIcon } from "../../Common/buttons";
import PlusIcon from "../../../Assets/svgs/PlusIcon.svg"
import PlaylistsTable from "../Sections/PlaylistsTable";
import { menuItems } from "../../../StateManagement/MusicMenu";



const PlaylistsPage = () => {
    return (
       
       
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row bg-black">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
         
             <MusicHeader menus={menuItems}  buttonComp={ <ButtonWithIcon imageSrc={PlusIcon} title="Create Playlist" /> } />
             <PlaylistsTable />
          </div>   
       
      </div>
    )
}

export default PlaylistsPage