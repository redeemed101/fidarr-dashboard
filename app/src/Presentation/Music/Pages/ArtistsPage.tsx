import MenuColumn from "../../Dashboard/Components/MenuColumn"
import ArtistsTable from "../Sections/ArtistsTable"
import MusicHeader from "../Sections/MusicHeader"
import { ButtonWithIcon } from "../../Common/buttons";
import PlusIcon from "../../../Assets/svgs/PlusIcon.svg"
import { MusicMenu, menuItems } from "../../../StateManagement/MusicMenu";


const ArtistsPage = () => {
    return (
       
       
        <div style={{height:"inherit"}}  className="pb-4 w-full flex flex-row bg-black">
          <MenuColumn />
          <div className="flex   gap-4 flex-col w-full">
         
             <MusicHeader menus={menuItems} buttonComp={ <ButtonWithIcon imageSrc={PlusIcon} title="Create Artist" /> } />
             <ArtistsTable />
          </div>   
       
      </div>
    )
}

export default ArtistsPage