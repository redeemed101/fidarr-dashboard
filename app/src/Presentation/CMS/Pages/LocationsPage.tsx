import { Link } from "react-router-dom"
import { CMSMenuType, cmsMenuItems } from "../../../StateManagement/CMSMenu"
import MenuColumn from "../../Dashboard/Components/MenuColumn"
import CMSHeader from "../Sections/CMSHeader"
import { ButtonWithIcon } from "../../Common/buttons"
import LocationsTable from "../Sections/LocationsTable"


const LocationsPage = () => {
    return(
        <div  className="pb-4 w-full flex flex-row bg-black h-screen">
        <MenuColumn />
        <div className="flex   gap-4 flex-col w-full">
       
           <CMSHeader selectedType={CMSMenuType.Locations} menus={cmsMenuItems}  />
           <LocationsTable />
        </div>   
     
        </div>
    )
}

export default LocationsPage