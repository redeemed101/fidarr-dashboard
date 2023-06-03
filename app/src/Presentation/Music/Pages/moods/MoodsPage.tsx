import { useEffect, useState } from "react";
import { Mood } from "../../../../Domain/Model/Music/Mood";
import { useMoodModelController } from "../../hooks/useMoodModelController";
import { moodRepository } from "../../../../main";
import MenuColumn from "../../../Dashboard/Components/MenuColumn";
import { MusicMenuType, menuItems } from "../../../../StateManagement/MusicMenu";
import { Link } from "react-router-dom";
import { ButtonWithIcon } from "../../../Common/buttons";
import PlusIcon from "../../../../Assets/svgs/PlusIcon.svg"
import MusicHeader from "../../Sections/MusicHeader";
import { RequestStatus } from "../../hooks/common";
import { MoodsTable } from "../../Sections/MoodsTable";

export const MoodsPage = () => {
    const [moods, setMoods] = useState<Mood[]>([])
  const [selectedMoods, setSelectedMoods] = useState<Mood[]>([])
  const {currentMoods, count, currentPage,fetchStatus, deleteMood, getMoodsPaginated, refreshMoodsPaginated} = useMoodModelController(moodRepository)
 
  useEffect( () => {
    getMoodsPaginated()
  }, []);  
  useEffect( () => {
    setMoods(currentMoods)
  }, [currentMoods]); 
  const selectMood = (mood: Mood) => {
    setSelectedMoods(prev => ([...prev, mood]))

  }
  const unSelectMood = (mood: Mood) => {
  
    setSelectedMoods(prev => ([...prev.filter(t => t.id != mood.id)]))
    
  } 
  return (
       
        
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row bg-black">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
         
             <MusicHeader selectedType={MusicMenuType.Moods} menus={menuItems}  buttonComp={ <Link to="/music/moods/create"><ButtonWithIcon imageSrc={PlusIcon} title="Create Mood" /></Link> } />
             {fetchStatus == RequestStatus.Loading ? <div className="mx-auto"><p className="text-white">Loading...</p></div> : 
             <MoodsTable 
             refresh={refreshMoodsPaginated} 
             deleteItem={(id:string) => {   
              console.log("beginning to delete")           
              deleteMood(id,
                () => setMoods(prev => prev.filter(p => p.id != id))
              )
            }}
             selectMood={selectMood}
             unSelectMood={unSelectMood}
             selectedMoods={selectedMoods}
             totalCount={count} 
             currentPage={currentPage} 
             loadMore={() => getMoodsPaginated(true)}
              rows={moods} />  }
             {fetchStatus == RequestStatus.Error ? <div className="mx-auto"><p className="text-red-600">Error fetching data</p></div> : ""}
           
          </div>   
       
      </div>
    )
}