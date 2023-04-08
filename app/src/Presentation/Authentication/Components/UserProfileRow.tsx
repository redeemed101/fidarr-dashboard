import UserCircularAvatar from "./UserCircularAvatar";




const UserProfileRow = () => {
    return (
        <>
          <div className="flex flex-row items-center pb-2 gap-2">
             <p className="text-white font-bold">Enyo</p>
             <UserCircularAvatar/>
             <div className="">
                        
                    <div className="pointer-events-none flex items-center  text-gray-700">
                        <svg className="fill-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
          </div>
        </>
    )
}

export default UserProfileRow;