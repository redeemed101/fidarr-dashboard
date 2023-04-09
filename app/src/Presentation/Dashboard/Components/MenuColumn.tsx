import MenuItem from "./MenuItem"
import LogoIcon from "../../../Assets/svgs/fiddarIcon.svg"
import File from "../../../Assets/svgs/file.svg"
import Activity from "../../../Assets/svgs/activity.svg"
import Music from "../../../Assets/svgs/headphones.svg"
import Copy from "../../../Assets/svgs/copy.svg"
import People from "../../../Assets/svgs/users.svg"
import Settings from "../../../Assets/svgs/settings.svg"
import { useContext } from "react"
import { MenuStateContextType, MenuStateProviderContext } from "../../../StateManagement/MenuStateProvider"



const MenuColumn = () =>{
    const {selectedMenu, setSelectedMenu,menus} = useContext(MenuStateProviderContext) as MenuStateContextType
    return (
        <>
          <div style={{height:"inherit"}} className="flex flex-col gap-4 items-center py-4 w-24 bg-fidarrgray-900">
             <div className="mb-12">
                <img src={LogoIcon} alt="Logo" />
             </div>
             {
                 menus.map(m => <MenuItem  onClick={() => setSelectedMenu(m.key)} key={m.key} route={m.route} title={m.title} isSelected={selectedMenu == m.key}  imgSrc={m.imgSrc} />)
             }
            
             

          </div>
        </>
    )
}
export default MenuColumn