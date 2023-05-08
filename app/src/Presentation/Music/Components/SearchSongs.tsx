import { useEffect, useState } from "react"
import { Track } from "../../../Domain/Model/Music/Track"
import { SearchTextField } from "../../Common/textfields"
import { SearchTracksTable } from "../Sections/TracksTable"
import { useSongModelController } from "../hooks/useSongModelController"
import { songRepository } from "../../../main"
import { RequestStatus } from "../hooks/common"


type SearchSongsProps = {
   selectedSongs: Track[],
   selectSong: (track: Track) => void
   unSelectSong: (track: Track) => void
}
const SearchSongs = (props: SearchSongsProps) => {
   const [searchText, setSearchText] = useState<string>("");
   const [debouncedText, setDebouncedText] = useState(searchText);
   const {currentSongs,getSearchSongsPaginated, fetchStatus,currentPage, count} = useSongModelController(songRepository)
   useEffect(() => {
        const timer = setTimeout(() => setSearchText(prev => debouncedText), 1000);
        return () => clearTimeout(timer);
   }, [debouncedText])
   useEffect( () => {
      if(searchText != "")
         getSearchSongsPaginated(searchText)
    }, [searchText]); 
   return (
    <div className="w-full flex flex-col gap-4">
        <SearchTextField value={debouncedText} 
                         loading={fetchStatus == RequestStatus.Loading}
                         onChanged={(e) => setDebouncedText(prev => e.target.value)} 
                         placeholder="Search Song to add" />
        <SearchTracksTable selectedSongs={props.selectedSongs}
                           selectSong={props.selectSong} unSelectSong={props.unSelectSong} rows={currentSongs}
                           currentPage={1} totalCount={5} loadMore={() => getSearchSongsPaginated(searchText, true)} refresh={()=> getSearchSongsPaginated(searchText)} />
   </div>
   )
}
export default SearchSongs