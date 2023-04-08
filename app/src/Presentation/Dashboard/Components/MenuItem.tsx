
import File from "../../../Assets/svgs/file.svg"

interface MenuItemProps{
    title: string;
    imgSrc:string;
    isSelected?: boolean
}

const MenuItem = ({title,imgSrc, isSelected=false}: MenuItemProps) =>{
    return (
        <>
          <div className={`flex flex-col items-center py-2 ${ isSelected ? "bg-red-900" : "" } rounded-md h-16 w-16`}>
            <img src={imgSrc} className="h-8 w-8" alt="file" />
            <div>
               <p className="text-white text-sm">{title}</p>
            </div>
          </div>
        </>
    )
}

export default MenuItem