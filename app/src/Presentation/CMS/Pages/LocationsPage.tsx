import { Link } from "react-router-dom"
import { CMSMenuType, cmsMenuItems } from "../../../StateManagement/CMSMenu"
import MenuColumn from "../../Dashboard/Components/MenuColumn"
import CMSHeader from "../Sections/CMSHeader"
import { ButtonWithIcon } from "../../Common/buttons"


const LocationsPage = () => {
    return(
        <div style={{height:"inherit"}}  className="pb-4 w-full flex flex-row bg-black h-screen">
        <MenuColumn />
        <div className="flex   gap-4 flex-col w-full">
       
           <CMSHeader selectedType={CMSMenuType.Locations} menus={cmsMenuItems} buttonComp={ <Link to="/music/artists/create"></Link> } />
           
        </div>   
     
        </div>
    )
}

export default LocationsPage