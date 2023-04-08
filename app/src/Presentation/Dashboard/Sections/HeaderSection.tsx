import UserProfileRow from "../../Authentication/Components/UserProfileRow";
import NotificationItem from "../../Common/NotificationItem";
import { SearchTextField } from "../../Common/textfields";




const HeaderSection = () => {
    return (
        <div className="w-full">
           <div className="flex flex-row justify-between items-center">
               <div className="flex flex-row gap-4 items-center">
                 <p className="text-white font-bold text-2xl">Overview</p>
                 <div className="">
                   <SearchTextField />
                 </div>
                 <div className="h-12 w-12">
                    <NotificationItem hasNotification={true} />
                 </div>
               </div>
               <div>
                  <UserProfileRow/>
               </div>
           </div>
        </div>
    )
}

export default HeaderSection;