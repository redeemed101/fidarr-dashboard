import UserProfileRow from "../Authentication/Components/UserProfileRow";
import NotificationItem from "./NotificationItem";
import { SearchTextField } from "./textfields";


type HeaderSectionProps = {
   title? : string,
}

const HeaderSection = ({title}: HeaderSectionProps) => {
    return (
        <div className="w-full">
           <div className="flex flex-row justify-between items-center pt-4">
               <div className="flex flex-row gap-4 items-center">
                 <p className="text-white font-bold text-2xl">{title}</p>
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