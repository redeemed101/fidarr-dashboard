import MenuColumn from "../../Dashboard/Components/MenuColumn"
import MusicHeader from "../Sections/MusicHeader"
import { ButtonWithIcon } from "../../Common/buttons";
import PlusIcon from "../../../Assets/svgs/PlusIcon.svg"
import PlaylistsTable from "../Sections/PlaylistsTable";
import { MusicMenuType, menuItems } from "../../../StateManagement/MusicMenu";
import { Link } from "react-router-dom";
import { usePlaylistModelController } from "../hooks/usePlaylistModelController";
import { playlistRepository } from "../../../main";
import { useEffect, useState } from "react";
import { RequestStatus } from "../hooks/common";
import { Playlist } from "../../../Domain/Model/Music/Playlist";



const PlaylistsPage = () => {
  const [selectedPlaylists, setSelectedPlaylists] = useState<Playlist[]>([])
  const [playlists, setPlaylists] = useState<Playlist[]>([])
  const {currentPlaylists,
      count,
      getPlaylistsPaginated,
      refreshPlaylistsPaginated,
      deletePlaylist,
       fetchStatus, currentPage} = usePlaylistModelController(playlistRepository)
      useEffect( () => {
        getPlaylistsPaginated()
      }, []);  
      useEffect( () => {
        setPlaylists(currentPlaylists)
      }, [currentPlaylists]);  
      useEffect(() => {
        console.log(selectedPlaylists)
      }, [selectedPlaylists]);
      const selectPlaylist = (playlist: Playlist) => {
        console.log("bubbled " + playlist.id)
        
        setSelectedPlaylists(prev => ([...prev, playlist]))
  
      }
      const unSelectPlaylist = (playlist: Playlist) => {
        console.log("bubbled unselect "+ playlist.id)
        setSelectedPlaylists(prev => ([...prev.filter(t => t.id != playlist.id)]))
        
      }
    return (
       
       
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row bg-black">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
         
             <MusicHeader selectedType={MusicMenuType.Playlists} menus={menuItems}  buttonComp={ <Link to="/music/playlists/create"><ButtonWithIcon imageSrc={PlusIcon} title="Create Playlist" /></Link> } />
             {fetchStatus == RequestStatus.Loading ? <div className="mx-auto"><p className="text-white">Loading...</p></div> : 
             <PlaylistsTable 
                refresh={refreshPlaylistsPaginated} 
                totalCount={count} 
                deleteItem={(id:string) => {
                  setPlaylists(prev => prev.filter(p => p.id != id))
                  deletePlaylist(id) 
                }}
                currentPage={currentPage} 
                selectPlaylist={selectPlaylist}
                unSelectPlaylist={unSelectPlaylist}
                selectedPlaylists={selectedPlaylists}
                loadMore={() => getPlaylistsPaginated(true)} rows={playlists}
                 /> }
          </div>   
       
      </div>
    )
}

export default PlaylistsPage