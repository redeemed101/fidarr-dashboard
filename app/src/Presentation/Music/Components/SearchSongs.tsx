import { Track } from "../../../Domain/Model/Music/Track"
import { SearchTextField } from "../../Common/textfields"
import { MinimalTracksTable } from "../Sections/TracksTable"

const tracks : Track[] = [
    {
      imgSrc: "https://picsum.photos/200",
      name: "song",
      artistName: "JJ",
      genres: ["Hip", "Hop"],
      streams: "1M",
      duration: "1:34",
      releaseDate: "24 March, 20023",
      lastUpdated: "24 March, 20023"
    },
    {
      imgSrc: "https://picsum.photos/200",
      name: "song",
      artistName: "JJ",
      genres: ["Hip", "Hop"],
      streams: "1M",
      duration: "1:34",
      releaseDate: "24 March, 20023",
      lastUpdated: "24 March, 20023"
    }
  ] 
type SearchSongsProps = {

}
const SearchSongs = (props: SearchSongsProps) => {
   return (
    <div className="w-full flex flex-col gap-4">
        <SearchTextField value="" placeholder="Search Song to add" />
        <MinimalTracksTable rows={tracks} currentPage={1} totalCount={5} loadMore={() => {}} refresh={()=> {}} />
   </div>
   )
}
export default SearchSongs