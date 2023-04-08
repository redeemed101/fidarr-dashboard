import MenuColumn from "../../Dashboard/Components/MenuColumn"
import MusicHeader, { MusicMenu } from "../Sections/MusicHeader"
import { ButtonWithIcon } from "../../Common/buttons";
import PlusIcon from "../../../Assets/svgs/PlusIcon.svg"
import PlaylistsTable from "../Sections/PlaylistsTable";

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
        title : "Genres"
    },
    {
        title : "Playlists",
        isSelected: true
    }

]

const PlaylistsPage = () => {
    return (
       
       
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
         
             <MusicHeader menus={menuItems}  buttonComp={ <ButtonWithIcon imageSrc={PlusIcon} title="Create Playlist" /> } />
             <PlaylistsTable />
          </div>   
       
      </div>
    )
}

export default PlaylistsPage