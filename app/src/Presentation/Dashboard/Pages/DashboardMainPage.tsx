import MenuColumn from "../Components/MenuColumn"
import DashboardHeaderSection from "../Sections/HeaderSection"
import StatBoardSection from "../Sections/StatBoardSection"
import { StatsCardRow } from "../Sections/StatsCardRow"



const DashboardMainPage = () => {
    return (
        
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row gap-8 bg-black min-h-screen">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
              <DashboardHeaderSection />  
              <StatsCardRow /> 
              <StatBoardSection />
              {/*<StatsCardRow /> */} 
          </div>   
       </div>
     
    )
}

export default DashboardMainPage