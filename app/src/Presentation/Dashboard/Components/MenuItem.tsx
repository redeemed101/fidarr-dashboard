
import { Link } from "react-router-dom";
import File from "../../../Assets/svgs/file.svg"

export interface MenuItemProps{
    title: string;
    key : string;
    imgSrc:string;
    isSelected?: boolean;
    route: string;
    onClick: (key : string) => void
}

const MenuItem = ({title,imgSrc,route, key, isSelected=false, onClick}: MenuItemProps) =>{
    return (
        <Link to={route}>
          <div onClick={() => onClick(key)} className={`flex flex-col items-center py-2 ${ isSelected ? "bg-red-900" : "" } rounded-md h-16 w-16`}>
            <img src={imgSrc} className="h-8 w-8" alt="file" />
            <div>
               <p className="text-white text-sm">{title}</p>
            </div>
          </div>
        </Link>
    )
}

export default MenuItem