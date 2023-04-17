import MenuColumn from "../../Dashboard/Components/MenuColumn"
import ArtistsTable from "../Sections/ArtistsTable"
import MusicHeader from "../Sections/MusicHeader"
import { ButtonWithIcon } from "../../Common/buttons";
import PlusIcon from "../../../Assets/svgs/PlusIcon.svg"
import TracksTable from "../Sections/TracksTable";
import { MusicMenuType, menuItems } from "../../../StateManagement/MusicMenu";
import AlbumsTable , {AlbumRow} from "../Sections/AlbumsTable";
import { Link } from "react-router-dom";
import { useAlbumModelController } from "../hooks/useAlbumModelController";
import { albumRepository } from "../../../main";
import { RequestStatus } from "../hooks/common";



const AlbumsPage = () => {
    const {currentAlbums,fetchStatus, getMoreAlbumsPaginated} = useAlbumModelController(albumRepository)
   
    return (
       
       
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row bg-black min-h-screen">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
           
             <MusicHeader  selectedType={MusicMenuType.Albums} menus={menuItems}  buttonComp={ <Link to="/music/albums/create"><ButtonWithIcon imageSrc={PlusIcon} title="Upload Album" /></Link> } />
             
              {fetchStatus == RequestStatus.Loading ? <div className="mx-auto"><p className="text-white">Loading...</p></div> :
                   <AlbumsTable rows={currentAlbums.map( (a) =>
                    {
                      return {
                        imgSrc : a.imgSrc,
                        name : a.name,
                        artist : a.artist,
                        streams : a.streams,
                        tracks: `${a.tracks}`,
                        releaseDate : a.releaseDate,
                        lastUpdated : a.lastUpdated
                    }
              
                  }
                 )} />
              }
              {fetchStatus == RequestStatus.Error ? <div className="mx-auto"><p className="text-red-600">Error fetching data</p></div> : ""}
          </div>   
       
      </div>
    )
}

export default AlbumsPage