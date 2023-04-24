


type AvatarProps = {
    imgSrc?: string
}

const UserCircularAvatar = ({imgSrc}: AvatarProps) => {
    return (
        <>
         <div className="relative w-16 h-16">
            <img className="rounded-full border-2 border-gray-100 shadow-sm" src={imgSrc} alt="user image" />
            {/*<div className="absolute top-0 right-0 h-4 w-4 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>*/}
        </div>
        </>
    )
}

export default UserCircularAvatar