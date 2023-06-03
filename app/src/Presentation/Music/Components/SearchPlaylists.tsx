import { useEffect, useState } from "react"
import { Track } from "../../../Domain/Model/Music/Track"
import { SearchTextField } from "../../Common/textfields"
import { SearchTracksTable } from "../Sections/TracksTable"
import { useSongModelController } from "../hooks/useSongModelController"
import { playlistRepository, songRepository } from "../../../main"
import { RequestStatus } from "../hooks/common"
import { Playlist } from "../../../Domain/Model/Music/Playlist"
import { usePlaylistModelController } from "../hooks/usePlaylistModelController"
import { SearchPlaylistsTable } from "../Sections/PlaylistsTable"


type SearchPlaylistsProps = {
   selectedPlaylists: Playlist[],
   selectPlaylist: (playlist: Playlist) => void
   unSelectPlaylist: (playlist: Playlist) => void
}
const SearchPlaylists = (props: SearchPlaylistsProps) => {
   const [searchText, setSearchText] = useState<string>("");
   const [debouncedText, setDebouncedText] = useState(searchText);
   const {currentPlaylists,searchPlaylistsPaginated,getPlaylistsPaginated, fetchStatus,currentPage, count} = usePlaylistModelController(playlistRepository)
   useEffect(() => {
        const timer = setTimeout(() => setSearchText(prev => debouncedText), 1000);
        return () => clearTimeout(timer);
   }, [debouncedText])
   useEffect( () => {
      getPlaylistsPaginated()
   },[])
   useEffect( () => {
      if(searchText != "")
         searchPlaylistsPaginated(searchText)
    }, [searchText]); 
   return (
    <div className="w-full flex flex-col gap-4">
        <SearchTextField value={debouncedText} 
                         loading={fetchStatus == RequestStatus.Loading}
                         onChanged={(e) => setDebouncedText(prev => e.target.value)} 
                         placeholder="Search Playlist to add" />
        <SearchPlaylistsTable selectedPlaylists={props.selectedPlaylists}
                           selectPlaylist={props.selectPlaylist} unSelectPlaylist={props.unSelectPlaylist}
                            rows={currentPlaylists}
                           currentPage={1} totalCount={5} 
                           loadMore={() => searchPlaylistsPaginated(searchText, true)} refresh={()=> searchPlaylistsPaginated(searchText)} />
   </div>
   )
}
export default SearchPlaylists