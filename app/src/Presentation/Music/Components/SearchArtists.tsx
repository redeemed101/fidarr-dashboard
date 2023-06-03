import { useEffect, useState } from "react"
import { Track } from "../../../Domain/Model/Music/Track"
import { SearchTextField } from "../../Common/textfields"
import { SearchTracksTable } from "../Sections/TracksTable"
import { useSongModelController } from "../hooks/useSongModelController"
import { RequestStatus } from "../hooks/common"
import { Artist } from "../../../Domain/Model/Music"
import { artistRepository } from "../../../main"
import { useArtistModelController } from "../hooks/useArtistModelController"
import { SearchArtistsTable } from "../Sections/ArtistsTable"


type SearchArtistsProps = {
   selectedArtists: Artist[],
   selectArtist: (artist: Artist) => void
   unSelectArtist: (artist: Artist) => void
}
const SearchArtists = (props: SearchArtistsProps) => {
   const [searchText, setSearchText] = useState<string>("");
   const [debouncedText, setDebouncedText] = useState(searchText);
   const {currentArtists,searchArtistsPaginated,getArtistsPaginated, fetchStatus,currentPage, count} = useArtistModelController(artistRepository)
   useEffect(() => {
        const timer = setTimeout(() => setSearchText(prev => debouncedText), 1000);
        return () => clearTimeout(timer);
   }, [debouncedText])
   useEffect( () => {
      getArtistsPaginated()
   },[])
   useEffect( () => {
      if(searchText != "")
         searchArtistsPaginated(searchText)
    }, [searchText]); 
   return (
    <div className="w-full flex flex-col gap-4">
        <SearchTextField value={debouncedText} 
                         loading={fetchStatus == RequestStatus.Loading}
                         onChanged={(e) => setDebouncedText(prev => e.target.value)} 
                         placeholder="Search Song to add" />
        <SearchArtistsTable selectedArtists={props.selectedArtists}
                           selectArtist={props.selectArtist} unSelectArtist={props.unSelectArtist}
                            rows={currentArtists}
                           currentPage={1} totalCount={5} 
                           loadMore={() => searchArtistsPaginated(searchText, true)} refresh={()=> searchArtistsPaginated(searchText)} />
   </div>
   )
}
export default SearchArtists