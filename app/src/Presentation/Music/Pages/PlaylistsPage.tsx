import MenuColumn from "../../Dashboard/Components/MenuColumn"
import MusicHeader from "../Sections/MusicHeader"
import { ButtonWithIcon } from "../../Common/buttons";
import PlusIcon from "../../../Assets/svgs/PlusIcon.svg"
import PlaylistsTable from "../Sections/PlaylistsTable";
import { MusicMenuType, menuItems } from "../../../StateManagement/MusicMenu";
import { Link } from "react-router-dom";
import { usePlaylistModelController } from "../hooks/usePlaylistModelController";
import { playlistRepository } from "../../../main";
import { useEffect } from "react";
import { RequestStatus } from "../hooks/common";



const PlaylistsPage = () => {
  const {currentPlaylists,
     count,
      getPlaylistsPaginated,
      refreshPlaylistsPaginated, fetchStatus, currentPage} = usePlaylistModelController(playlistRepository)
      useEffect( () => {
        getPlaylistsPaginated()
      }, []);  
    return (
       
       
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row bg-black">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
         
             <MusicHeader selectedType={MusicMenuType.Playlists} menus={menuItems}  buttonComp={ <Link to="/music/playlists/create"><ButtonWithIcon imageSrc={PlusIcon} title="Create Playlist" /></Link> } />
             {fetchStatus == RequestStatus.Loading ? <div className="mx-auto"><p className="text-white">Loading...</p></div> : 
             <PlaylistsTable refresh={refreshPlaylistsPaginated} totalCount={count} currentPage={currentPage} loadMore={() => getPlaylistsPaginated(true)} rows={currentPlaylists} /> }
          </div>   
       
      </div>
    )
}

export default PlaylistsPage