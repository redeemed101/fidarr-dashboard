import MenuColumn from "../../Dashboard/Components/MenuColumn"
import ArtistsTable from "../Sections/ArtistsTable"
import MusicHeader from "../Sections/MusicHeader"
import { ButtonWithIcon } from "../../Common/buttons";
import PlusIcon from "../../../Assets/svgs/PlusIcon.svg"
import TracksTable from "../Sections/TracksTable";
import { MusicMenuType, menuItems } from "../../../StateManagement/MusicMenu";
import { Link } from "react-router-dom";
import { songRepository } from "../../../main";
import { useSongModelController } from "../hooks/useSongModelController";
import { RequestStatus } from "../hooks/common";
import { useEffect } from "react";




const TracksPage = () => {
   const {currentSongs,getSongsPaginated, fetchStatus,currentPage, count,refreshSongsPaginated, getMoreSongsPaginated} = useSongModelController(songRepository)
  
   useEffect( () => {
    getSongsPaginated()
    }, []);  
   return (
       
       
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row bg-black">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
         
             <MusicHeader selectedType={MusicMenuType.Tracks} menus={menuItems}  buttonComp={ <Link to="/music/tracks/create"><ButtonWithIcon imageSrc={PlusIcon} title="Upload Track" /></Link> } />
             {fetchStatus == RequestStatus.Loading ? <div className="mx-auto"><p className="text-white">Loading...</p></div> : 
             <TracksTable refresh={refreshSongsPaginated} totalCount={count} currentPage={currentPage} loadMore={getMoreSongsPaginated} rows={currentSongs}  /> }
             {fetchStatus == RequestStatus.Error ? <div className="mx-auto"><p className="text-red-600">Error fetching data</p></div> : ""}
          </div>   
       
      </div>
    )
}

export default TracksPage