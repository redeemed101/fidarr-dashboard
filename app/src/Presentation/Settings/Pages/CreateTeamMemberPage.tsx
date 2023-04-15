import { SettingsMenuType, settingsMenuItems } from "../../../StateManagement/SettingsMenu"
import { PrimaryButton, SecondaryButton } from "../../Common/buttons"
import PrimarySelect from "../../Common/select"
import { PrimaryTextField } from "../../Common/textfields"
import MenuColumn from "../../Dashboard/Components/MenuColumn"
import SettingsHeader from "../Sections/SettingsHeader"

const CreateTeamMemberPage = () => {
    return (
        <div className="pb-4 flex flex-row bg-black h-screen">
        <MenuColumn />
        <div className="flex  gap-4 flex-col w-full">
       
           <SettingsHeader selectedType={SettingsMenuType.Team} menus={settingsMenuItems} />
           <div className="flex flex-col gap-2 w-1/3 mx-24">
              <div className="flex flex-col gap-1">
                <p className="text-white text-bold text-xl">Invite New Members</p>
                <p className="text-white">Enter the email address of the member you'd like to invite and choose the role they should have</p>
              </div>
              
              <div className="flex flex-row gap-2">

                <div className="w-3/4">
                    <PrimaryTextField type="email" value="" padX={6} padY={2} width="full" height="12" label="Email" placeholder="Email" />
                </div>
                <div className="w-1/4">
                    <PrimarySelect options={[  {
                                        label : "Home",
                                        value: "Home"
                                    }
                    ]} label="Role" width="full" padX={3} />
                
                </div>
              </div>
              <div className="mt-2 self-end flex flex-row gap-2">
                 <SecondaryButton title='Cancel' padY={2} padX={4} height="auto" width="1/2" />
                 <PrimaryButton padX={6} padY={2} width="1/2" height="10" title="Create" />                
              </div>
              
           </div>
        </div>   
     
    </div>
  )
    
}

export default CreateTeamMemberPage