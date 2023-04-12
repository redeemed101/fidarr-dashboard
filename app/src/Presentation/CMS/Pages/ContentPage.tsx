import { Link } from "react-router-dom"
import { CMSMenuType, cmsMenuItems } from "../../../StateManagement/CMSMenu"
import MenuColumn from "../../Dashboard/Components/MenuColumn"
import CMSHeader from "../Sections/CMSHeader"
import { ButtonWithIcon } from "../../Common/buttons"
import PlusIcon from "../../../Assets/svgs/PlusIcon.svg"
import ContentTable from "../Sections/ContentTable"


const ContentPage = () => {
    return(
        <div style={{height:"inherit"}}  className="pb-4 w-full flex flex-row bg-black h-screen">
        <MenuColumn />
        <div className="flex   gap-4 flex-col w-full">
       
           <CMSHeader selectedType={CMSMenuType.Content} menus={cmsMenuItems} buttonComp={ <Link to="/cms/content/create"><ButtonWithIcon imageSrc={PlusIcon} title="Add" /></Link> } />
           <ContentTable />
        </div>   
     
        </div>
    )
}

export default ContentPage