import MenuColumn from "../../../Dashboard/Components/MenuColumn"
import ArtistsTable from "../../Sections/ArtistsTable"
import MusicHeader from "../../Sections/MusicHeader"
import { ButtonWithIcon } from "../../../Common/buttons";
import PlusIcon from "../../../../Assets/svgs/PlusIcon.svg"
import TracksTable from "../../Sections/TracksTable";
import { MusicMenuType, menuItems } from "../../../../StateManagement/MusicMenu";
import AlbumsTable , {AlbumRow} from "../../Sections/AlbumsTable";
import { Link } from "react-router-dom";
import { useAlbumModelController } from "../../hooks/useAlbumModelController";
import { albumRepository } from "../../../../main";
import { RequestStatus } from "../../hooks/common";
import { useEffect, useState } from "react";
import { Album } from "../../../../Domain/Model/Music";



const AlbumsPage = () => {
    const [albums, setAlbums] = useState<Album[]>([])
    const [selectedAlbums, setSelectedAlbums] = useState<Album[]>([])
    const {currentAlbums,deleteAlbum, fetchStatus,currentPage, count,refreshAlbumsPaginated, getAlbumsPaginated} = useAlbumModelController(albumRepository)
    useEffect(() => {
        getAlbumsPaginated()
    },[])
    useEffect( () => {
      setAlbums(currentAlbums)
    }, [currentAlbums]); 
    const selectAlbum = (album: Album ) => {
      console.log("bubbled " + album.id)
      
      setSelectedAlbums(prev => ([...prev, album]))

    }
    const unSelectAlbum = (album: Album) => {
      console.log("bubbled unselect "+ album.id)
      setSelectedAlbums(prev => ([...prev.filter(t => t.id != album.id)]))
      
    } 
    return (
       
       
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row bg-black min-h-screen">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
           
             <MusicHeader  selectedType={MusicMenuType.Albums} menus={menuItems}  buttonComp={ <Link to="/music/albums/create"><ButtonWithIcon imageSrc={PlusIcon} title="Upload Album" /></Link> } />
             
              {fetchStatus == RequestStatus.Loading ? <div className="mx-auto"><p className="text-white">Loading...</p></div> :
                   <AlbumsTable 
                   refresh={refreshAlbumsPaginated} 
                   totalCount={count} 
                   selectAlbum={selectAlbum}
                   unSelectAlbum={unSelectAlbum}
                   selectedAlbums={selectedAlbums}
                   deleteItem={ (id:string) =>{
                     deleteAlbum(id,{}, () => setAlbums(prev => prev.filter(a => a.id != id)))
                   } }
                   currentPage={currentPage} 
                   loadMore={() => getAlbumsPaginated(true)} 
                   rows={albums} />
              }
              {fetchStatus == RequestStatus.Error ? <div className="mx-auto"><p className="text-red-600">Error fetching data</p></div> : ""}
          </div>   
       
      </div>
    )
}

export default AlbumsPage