import MenuColumn from "../../Dashboard/Components/MenuColumn"
import ArtistsTable from "../Sections/ArtistsTable"
import MusicHeader, { MusicMenu } from "../Sections/MusicHeader"
import { ButtonWithIcon } from "../../Common/buttons";
import PlusIcon from "../../../Assets/svgs/PlusIcon.svg"


const menuItems : MusicMenu [] = [
    {
        title : "Artists",
        isSelected: true
    },
    {
        title : "Tracks",
       
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

const ArtistsPage = () => {
    return (
       
       
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
         
             <MusicHeader menus={menuItems} buttonComp={ <ButtonWithIcon imageSrc={PlusIcon} title="Create Artist" /> } />
             <ArtistsTable />
          </div>   
       
      </div>
    )
}

export default ArtistsPage