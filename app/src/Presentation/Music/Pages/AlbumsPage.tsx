import MenuColumn from "../../Dashboard/Components/MenuColumn"
import ArtistsTable from "../Sections/ArtistsTable"
import MusicHeader from "../Sections/MusicHeader"
import { ButtonWithIcon } from "../../Common/buttons";
import PlusIcon from "../../../Assets/svgs/PlusIcon.svg"
import TracksTable from "../Sections/TracksTable";
import { menuItems } from "../../../StateManagement/MusicMenu";
import AlbumsTable from "../Sections/AlbumsTable";



const AlbumsPage = () => {
    return (
       
       
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row bg-black">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
         
             <MusicHeader menus={menuItems}  buttonComp={ <ButtonWithIcon imageSrc={PlusIcon} title="Upload Album" /> } />
             <AlbumsTable />
          </div>   
       
      </div>
    )
}

export default AlbumsPage