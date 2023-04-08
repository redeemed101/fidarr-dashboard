import MenuItem from "./MenuItem"
import LogoIcon from "../../../Assets/svgs/fiddarIcon.svg"
import File from "../../../Assets/svgs/file.svg"
import Activity from "../../../Assets/svgs/activity.svg"
import Music from "../../../Assets/svgs/headphones.svg"
import Copy from "../../../Assets/svgs/copy.svg"
import People from "../../../Assets/svgs/users.svg"
import Settings from "../../../Assets/svgs/settings.svg"

const MenuColumn = () =>{
    return (
        <>
          <div style={{height:"inherit"}} className="flex flex-col gap-4 items-center py-4 w-24 bg-fidarrgray-900">
             <div className="mb-12">
                <img src={LogoIcon} alt="Logo" />
             </div>
             <MenuItem title="Overview" isSelected imgSrc={Activity} />
             <MenuItem title="Music" imgSrc={Music} />
             <MenuItem title="CMS" imgSrc={Copy} />
             <MenuItem title="People" imgSrc={People} />
             <MenuItem title="Files" imgSrc={File} />
             <MenuItem title="Settimgs" imgSrc={Settings} />
             

          </div>
        </>
    )
}
export default MenuColumn