import MenuColumn from "../../Dashboard/Components/MenuColumn"
import { ButtonWithIcon, PrimaryButton } from "../../Common/buttons";
import PlusIcon from "../../../Assets/svgs/PlusIcon.svg"
import { Link } from "react-router-dom";
import SettingsHeader from "../Sections/SettingsHeader";
import { SettingsMenuType, settingsMenuItems } from "../../../StateManagement/SettingsMenu";
import { PasswordToggleField, PrimaryTextField } from "../../Common/textfields";
import { useSelector } from "react-redux";
import { RootState } from "../../../StateManagement/redux/store";



const ProfilePage = () => {
  const user = useSelector((state: RootState) => state.user.user);
    return (
       
       
        <div className="pb-4 flex flex-row bg-black h-screen">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
         
             <SettingsHeader selectedType={SettingsMenuType.Profile} menus={settingsMenuItems} />
             <div className="flex flex-col gap-2 w-1/3 mx-12">
                <div className="flex flex-row gap-2">
                  <PrimaryTextField type="text" value={user?.name!} padX={6} padY={2} width="full" height="10" label="Name" placeholder="Name" />
                  <PrimaryTextField type="text" value={user?.email!} padX={6} padY={2} width="full" height="10" label="Email" placeholder="Email" />
                </div>
                <div className="flex flex-row gap-2">
                  <PrimaryTextField type="password" value="" padX={6} padY={2} width="full" height="10" label="Password" placeholder="Password" />
                  <PrimaryTextField type="password" value="" padX={6} padY={2} width="full" height="10" label="Confirm Password" placeholder="Confirm Password" />
                </div>
                
                <div className="mt-6 self-end">
                   <PrimaryButton padX={6} padY={2} width="full" height="10" title="Update" />
                </div>
                
             </div>
          </div>   
       
      </div>
    )
}

export default ProfilePage