
type MenuItemProps = {
    title : string,
    isSelected? : boolean,
    action? : () => void
}
const MusicMenuItem = ({title,isSelected, action}: MenuItemProps) => {
    return (
        <div onClick={action} className={`flex flex-col hover:bg-fidarrgray-100 items-center py-2 ${ isSelected ? "bg-red-900" : "" } rounded-md w-32`}>
     
                <div>
                    <a href="#" className="text-white font-bold">{title}</a>
                </div>
      </div>
    )
}

export default MusicMenuItem