import MenuColumn from "../../Dashboard/Components/MenuColumn"
import ArtistsTable from "../Sections/ArtistsTable"
import MusicHeader from "../Sections/MusicHeader"
import { ButtonWithIcon } from "../../Common/buttons";
import PlusIcon from "../../../Assets/svgs/PlusIcon.svg"
import { MusicMenu, MusicMenuType, menuItems } from "../../../StateManagement/MusicMenu";
import { Link } from "react-router-dom";
import { artistRepository } from "../../../main";
import { useArtistModelController } from "../hooks/useArtistModelController";


const ArtistsPage = () => {
  const {currentArtists, getMoreArtistsPaginated} = useArtistModelController(artistRepository)
   
    return (
       
       
        <div style={{height:"inherit"}}  className="pb-4 w-full flex flex-row bg-black">
          <MenuColumn />
          <div className="flex gap-4 flex-col w-full">
         
             <MusicHeader selectedType={MusicMenuType.Artists} menus={menuItems} buttonComp={ <Link to="/music/artists/create"><ButtonWithIcon imageSrc={PlusIcon} title="Create Artist" /></Link> } />
             <ArtistsTable rows={currentArtists} />
          </div>   
       
      </div>
    )
}

export default ArtistsPage