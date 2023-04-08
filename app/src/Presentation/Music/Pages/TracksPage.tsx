import MenuColumn from "../../Dashboard/Components/MenuColumn"
import ArtistsTable from "../Sections/ArtistsTable"
import MusicHeader, { MusicMenu } from "../Sections/MusicHeader"
import { ButtonWithIcon } from "../../Common/buttons";
import PlusIcon from "../../../Assets/svgs/PlusIcon.svg"
import TracksTable from "../Sections/TracksTable";

const menuItems : MusicMenu [] = [
    {
        title : "Artists",
        
    },
    {
        title : "Tracks",
        isSelected: true
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

const TracksPage = () => {
    return (
       
       
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
         
             <MusicHeader menus={menuItems}  buttonComp={ <ButtonWithIcon imageSrc={PlusIcon} title="Upload Track" /> } />
             <TracksTable />
          </div>   
       
      </div>
    )
}

export default TracksPage