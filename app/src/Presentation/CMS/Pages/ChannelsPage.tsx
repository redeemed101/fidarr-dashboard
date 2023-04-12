import { Link } from "react-router-dom"
import { CMSMenuType, cmsMenuItems } from "../../../StateManagement/CMSMenu"
import MenuColumn from "../../Dashboard/Components/MenuColumn"
import CMSHeader from "../Sections/CMSHeader"
import { ButtonWithIcon } from "../../Common/buttons"
import PlusIcon from "../../../Assets/svgs/PlusIcon.svg"
import ChannelsTable from "../Sections/ChannelsTable"
import { BreakThings } from "../../Errors/Components/ErrorContainer"
import withErrorBoundary from "../../../HoCs/Errors/WithErrorBoundary"


const ChannelsPage = () => {
    return(
        <div style={{height:"inherit"}}  className="pb-4 w-full flex flex-row bg-black">
        {/*<BreakThings />*/}
        <MenuColumn />
        <div className="flex   gap-4 flex-col w-full">
       
           <CMSHeader selectedType={CMSMenuType.Channels} menus={cmsMenuItems} buttonComp={ <Link to="/cms/channels/create"><ButtonWithIcon imageSrc={PlusIcon} title="Add" /></Link> } />
           <ChannelsTable />
          
        </div>   
     
        </div>
    )
}

export default ChannelsPage