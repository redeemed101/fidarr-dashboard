import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Chart } from "../../../../Domain/Model/Music/Chart";
import PlusIcon from "../../../../Assets/svgs/PlusIcon.svg"
import { MusicMenuType, menuItems } from "../../../../StateManagement/MusicMenu";
import { ButtonWithIcon } from "../../../Common/buttons";
import MenuColumn from "../../../Dashboard/Components/MenuColumn";
import { ChartsTable } from "../../Sections/ChartsTable";
import MusicHeader from "../../Sections/MusicHeader";
import { RequestStatus } from "../../hooks/common";
import { useChartModelController } from "../../hooks/useChartModelController";
import { chartRepository } from "../../../../main";


const ChartsPage = () => {
  const [selectedCharts, setSelectedCharts] = useState<Chart[]>([])
  const [Charts, setCharts] = useState<Chart[]>([])
  const {currentCharts,
      count,
      getDailyChartsPaginated,
      refreshDailyChartsPaginated,
      deleteChart,
       fetchStatus, currentPage} = useChartModelController(chartRepository)
      useEffect( () => {
        getDailyChartsPaginated()
      }, []);  
      useEffect( () => {
        setCharts(currentCharts)
      }, [currentCharts]);  
      useEffect(() => {
        console.log(selectedCharts)
      }, [selectedCharts]);
      const selectChart = (Chart: Chart) => {
        console.log("bubbled " + Chart.id)
        
        setSelectedCharts(prev => ([...prev, Chart]))
  
      }
      const unSelectChart = (Chart: Chart) => {
        console.log("bubbled unselect "+ Chart.id)
        setSelectedCharts(prev => ([...prev.filter(t => t.id != Chart.id)]))
        
      }
    return (
       
       
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row bg-black">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
         
             <MusicHeader selectedType={MusicMenuType.Charts} menus={menuItems}  buttonComp={ <Link to="/music/Charts/create"><ButtonWithIcon imageSrc={PlusIcon} title="Create Chart" /></Link> } />
             {fetchStatus == RequestStatus.Loading ? <div className="mx-auto"><p className="text-white">Loading...</p></div> : 
             <ChartsTable 
                refresh={refreshDailyChartsPaginated} 
                totalCount={count} 
                deleteItem={(id:string) => {
                  
                  deleteChart(id, ()=>setCharts(prev => prev.filter(p => p.id != id))) 
                }}
                currentPage={currentPage} 
                selectChart={selectChart}
                unSelectChart={unSelectChart}
                selectedCharts={selectedCharts}
                loadMore={() => getDailyChartsPaginated(true)} rows={Charts}
                 /> }
          </div>   
       
      </div>
    )
}

export default ChartsPage