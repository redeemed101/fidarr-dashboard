import MenuColumn from "../../Dashboard/Components/MenuColumn"
import MusicHeader from "../Sections/MusicHeader"
import { ButtonWithIcon } from "../../Common/buttons";
import PlusIcon from "../../../Assets/svgs/PlusIcon.svg"
import GenresTable from "../Sections/GenresTable";
import { MusicMenuType, menuItems } from "../../../StateManagement/MusicMenu";
import { Link } from "react-router-dom";
import { useGenreModelController } from "../hooks/useGenreModelController";
import { genreRepository } from "../../../main";
import { RequestStatus } from "../hooks/common";
import { useEffect } from "react";

const GenresPage = () => {
  const {currentGenres, fetchStatus,currentPage, count, getGenresPaginated,refreshGenresPaginated, getMoreGenresPaginated} = useGenreModelController(genreRepository)
 
  useEffect( () => {
    getGenresPaginated()
  }, []);  
  return (
       
        
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row bg-black">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
         
             <MusicHeader selectedType={MusicMenuType.Genres} menus={menuItems}  buttonComp={ <Link to="/music/genres/create"><ButtonWithIcon imageSrc={PlusIcon} title="Create Genre" /></Link> } />
             {fetchStatus == RequestStatus.Loading ? <div className="mx-auto"><p className="text-white">Loading...</p></div> : 
             <GenresTable refresh={refreshGenresPaginated} totalCount={count} currentPage={currentPage} loadMore={getMoreGenresPaginated} rows={currentGenres} />  }
             {fetchStatus == RequestStatus.Error ? <div className="mx-auto"><p className="text-red-600">Error fetching data</p></div> : ""}
           
          </div>   
       
      </div>
    )
}

export default GenresPage