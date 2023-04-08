import MenuColumn from "../Components/MenuColumn"
import HeaderSection from "../Sections/HeaderSection"
import StatBoardSection from "../Sections/StatBoardSection"
import { StatsCardRow } from "../Sections/StatsCardRow"



const DashboardMainPage = () => {
    return (
        <div className="h-auto bg-black">
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row gap-8">
          <MenuColumn />
          <div className="flex  gap-4 flex-col">
              <HeaderSection />  
              <StatsCardRow /> 
              <StatBoardSection />
              
          </div>   
       </div>
      </div>
    )
}

export default DashboardMainPage