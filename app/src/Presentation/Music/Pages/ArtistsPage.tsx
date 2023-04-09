import MenuColumn from "../../Dashboard/Components/MenuColumn"
import ArtistsTable from "../Sections/ArtistsTable"
import MusicHeader from "../Sections/MusicHeader"
import { ButtonWithIcon } from "../../Common/buttons";
import PlusIcon from "../../../Assets/svgs/PlusIcon.svg"
import { MusicMenu, menuItems } from "../../../StateManagement/MusicMenu";
import { Link } from "react-router-dom";


const ArtistsPage = () => {
    return (
       
       
        <div style={{height:"inherit"}}  className="pb-4 w-full flex flex-row bg-black">
          <MenuColumn />
          <div className="flex   gap-4 flex-col w-full">
         
             <MusicHeader menus={menuItems} buttonComp={ <Link to="/music/artists/create"><ButtonWithIcon imageSrc={PlusIcon} title="Create Artist" /></Link> } />
             <ArtistsTable />
          </div>   
       
      </div>
    )
}

export default ArtistsPage