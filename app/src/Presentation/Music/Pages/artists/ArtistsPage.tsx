import MenuColumn from "../../../Dashboard/Components/MenuColumn"
import ArtistsTable from "../../Sections/ArtistsTable"
import MusicHeader from "../../Sections/MusicHeader"
import { ButtonWithIcon } from "../../../Common/buttons";
import PlusIcon from "../../../../Assets/svgs/PlusIcon.svg"
import { MusicMenu, MusicMenuType, menuItems } from "../../../../StateManagement/MusicMenu";
import { Link } from "react-router-dom";
import { artistRepository } from "../../../../main";
import {  useArtistModelController } from "../../hooks/useArtistModelController";
import { RequestStatus } from "../../hooks/common";
import { Artist, Track } from "../../../../Domain/Model/Music";
import { useEffect, useState } from "react";


const ArtistsPage = () => {
  const [artists, setArtists] = useState<Artist[]>([])
  const [selectedArtists, setSelectedArtists] = useState<Artist[]>([])
  const {currentArtists, 
    artistModified,
     artistDeleted, 
     deleteArtist, fetchStatus,currentPage, count,refreshArtistsPaginated, getMoreArtistsPaginated} = useArtistModelController(artistRepository)
  useEffect( () => {
        setArtists(currentArtists)
      }, [currentArtists]); 
  const selectArtist = (artist: Artist) => {
        console.log("bubbled " + artist.id)
        
        setSelectedArtists(prev => ([...prev, artist]))
  
      }
      const unSelectArtist = (artist: Artist) => {
        console.log("bubbled unselect "+ artist.id)
        setSelectedArtists(prev => ([...prev.filter(t => t.id != artist.id)]))
        
      } 
    return (
       
       
        <div style={{height:"inherit"}}  className="pb-4 w-full flex flex-row bg-black">
          <MenuColumn />
          <div className="flex gap-4 flex-col w-full">
         
             <MusicHeader selectedType={MusicMenuType.Artists} menus={menuItems} buttonComp={ <Link to="/music/artists/create"><ButtonWithIcon imageSrc={PlusIcon} title="Create Artist" /></Link> } />
             {fetchStatus == RequestStatus.Loading ? 
             <div className="mx-auto"><p className="text-white">Loading...</p></div> : 
             <ArtistsTable 
             selectedArtists={selectedArtists}
             selectArtist={selectArtist}
             unSelectArtist={unSelectArtist}
             deleteItem={(id:string) => {   
              console.log("beginning to delete")           
              deleteArtist(id, {},
                () => setArtists(prev => prev.filter(p => p.id != id))
              )
            }}
             refresh={refreshArtistsPaginated} 
             totalCount={count} currentPage={currentPage} loadMore={getMoreArtistsPaginated} rows={artists} />  }
             {fetchStatus == RequestStatus.Error ? <div className="mx-auto"><p className="text-red-600">Error fetching data</p></div> : ""}
          </div>   
       
      </div>
    )
}

export default ArtistsPage