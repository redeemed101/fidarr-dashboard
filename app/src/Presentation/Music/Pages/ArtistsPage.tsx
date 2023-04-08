import MenuColumn from "../../Dashboard/Components/MenuColumn"
import ArtistsTable from "../Sections/ArtistsTable"
import MusicHeader from "../Sections/MusicHeader"


const ArtistsPage = () => {
    return (
       
       
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
         
             <MusicHeader />
             <ArtistsTable />
          </div>   
       
      </div>
    )
}

export default ArtistsPage