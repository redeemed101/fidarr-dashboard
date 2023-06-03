import MenuColumn from "../../../Dashboard/Components/MenuColumn"
import MusicHeader from "../../Sections/MusicHeader"
import { ButtonWithIcon } from "../../../Common/buttons";
import PlusIcon from "../../../../Assets/svgs/PlusIcon.svg"
import GenresTable from "../../Sections/GenresTable";
import { MusicMenuType, menuItems } from "../../../../StateManagement/MusicMenu";
import { Link } from "react-router-dom";
import { useGenreModelController } from "../../hooks/useGenreModelController";
import { genreRepository } from "../../../../main";
import { RequestStatus } from "../../hooks/common";
import { useEffect, useState } from "react";
import { Genre } from "../../../../Domain/Model/Music/Genre";


const GenresPage = () => {
  const [genres, setGenres] = useState<Genre[]>([])
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([])
  const {currentGenres, fetchStatus,currentPage, count,deleteGenre, getGenresPaginated,refreshGenresPaginated, getMoreGenresPaginated} = useGenreModelController(genreRepository)
 
  useEffect( () => {
    getGenresPaginated()
  }, []);  
  useEffect( () => {
    setGenres(currentGenres)
  }, [currentGenres]); 
  const selectGenre = (genre: Genre) => {
    setSelectedGenres(prev => ([...prev, genre]))

  }
  const unSelectGenre = (genre: Genre) => {
    console.log("bubbled unselect "+ genre.id)
    setSelectedGenres(prev => ([...prev.filter(t => t.id != genre.id)]))
    
  } 
  return (
       
        
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row bg-black">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
         
             <MusicHeader selectedType={MusicMenuType.Genres} menus={menuItems}  buttonComp={ <Link to="/music/genres/create"><ButtonWithIcon imageSrc={PlusIcon} title="Create Genre" /></Link> } />
             {fetchStatus == RequestStatus.Loading ? <div className="mx-auto"><p className="text-white">Loading...</p></div> : 
             <GenresTable 
             refresh={refreshGenresPaginated} 
             deleteItem={(id:string) => {   
              console.log("beginning to delete")           
              deleteGenre(id,
                () => setGenres(prev => prev.filter(p => p.id != id))
              )
            }}
             selectGenre={selectGenre}
             unSelectGenre={unSelectGenre}
             selectedGenres={selectedGenres}
             totalCount={count} 
             currentPage={currentPage} 
             loadMore={getMoreGenresPaginated} rows={currentGenres} />  }
             {fetchStatus == RequestStatus.Error ? <div className="mx-auto"><p className="text-red-600">Error fetching data</p></div> : ""}
           
          </div>   
       
      </div>
    )
}

export default GenresPage