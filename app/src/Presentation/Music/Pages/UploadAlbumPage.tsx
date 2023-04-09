import { Primary } from "../../../stories/Button.stories"
import HeaderSection from "../../Common/HeaderSection"
import { ButtonWithIcon, PrimaryButton, SecondaryButton } from "../../Common/buttons"
import PrimaryDatePicker from "../../Common/datepicker"
import PrimarySelect, { PrimarySelectOption } from "../../Common/select"
import { PrimaryTextField } from "../../Common/textfields"
import MenuColumn from "../../Dashboard/Components/MenuColumn"
import ListIcon from "../../../Assets/svgs/ListIcon.svg"
import DeleteIcon from "../../../Assets/svgs/DeleteIcon.svg"
import EditIcon from "../../../Assets/svgs/EditIcon.svg"
import PlusIcon from "../../../Assets/svgs/PlusIcon.svg"
import FolderPlusIcon from "../../../Assets/svgs/FolderPlusIcon.svg"


const genreOptions: PrimarySelectOption[] = [
  {
     label : "Contemporary",
     value : "contemporary"
  },
  {
    label : "Afro Beats",
    value : "afro-beats"
 }
]

const DetailsTab = () => {
    return (
        <div className="flex flex-row  mx-auto ">
            <div className="flex flex-col">                   
                <img className="rounded-md" src="https://randomuser.me/api/portraits/women/81.jpg" />
                <div className="pt-4 w-full self-center">
                    <SecondaryButton title='Upload Art' padY={2} padX={2} height="auto" width="full" />
                </div>
            </div>
            <div className="flex flex-col pl-4 pt-12">
                <div className="container grid m-auto grid-cols-2 gap-4">
                <PrimaryTextField type="text" value="" padX={6} padY={2} width="full" height="10" label="Album Title" placeholder="Album Title" />
                <PrimarySelect options={genreOptions} label="Genre" width="full" padX={3} />
                <PrimaryTextField type="text" value="" padX={6} padY={2} width="full" height="10" label="Artist" placeholder="Artist" />
                <PrimaryTextField type="text" value="" padX={6} padY={2} width="full" height="10" label="UPC Code" placeholder="UPC Code" />
                <PrimaryTextField type="text" value="" padX={6} padY={2} width="full" height="10" label="(C) Line" placeholder="YYYY Copyright Holder" />
                <PrimaryTextField type="text" value="" padX={6} padY={2} width="full" height="10" label="(P) Line" placeholder="YYYY Copyright Holder" />
                <div></div>
                <div className="w-full">
                <PrimaryDatePicker value="" padX={6} padY={2} width="full" height="10" label="Release Date" />
                </div>                    
                </div>
                
                <div className="self-end">
                    <PrimaryButton  title='Next Step' padY={2} padX={4} height="auto" width="full"/>
                </div>
            </div>
        
        </div>
    )
}

const AddMusicTab = () => {
    return (
        <div className="flex flex-col mx-auto items-start">
            <div className="flex flex-row gap-96">
                <div className="flex flex-row gap-4 -ml-2">
                    <ButtonWithIcon imageSrc={PlusIcon} title="Upload Track" />
                    <ButtonWithIcon imageSrc={FolderPlusIcon} title="Add Existing" />
                   
                </div>
                <div></div>                
            </div>
           
        </div>
    )
}

const UploadAlbumPage = () => {
    return (
       
       <div className="h-auto">
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row ">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
            <div className="bg-fidarrgray-600 pl-8">
              <HeaderSection title="Music" />
            </div>
            <div className="flex flex-col w-auto items-center pt-12 pb-12 gap-2">
                <div className="flex flex-row pb-4 px-6">
                    <div className="flex flex-row gap-x-20 items-baseline">
                        <p className="text-white font-bold ml-6 pt-4">Upload Album</p>

                        <div className="flex flex-row self-end gap-4">
                          <div className="text-white  flex flex-col">
                            <div className="flex flex-row items-baseline gap-1">
                                <p className="font-bold text-3xl">1</p>
                                <p className="text-xs font-bold">Enter Album Details</p>
                            </div>
                            <div className="overflow-hidden h-1 w-64 mb-4 text-xs flex rounded bg-white"></div>
                          </div>
                          <div className="text-fidarrgray-900 flex flex-col">
                            <div className="flex flex-row items-baseline gap-1">
                                <p className="font-bold text-3xl">2</p>
                                <p className=" text-xs font-bold">Add Music</p>
                            </div>
                            <div className="overflow-hidden h-1 w-64 mb-4 text-xs flex rounded bg-fidarrgray-900"></div>
                          </div>
                         
                        </div>
                    </div>
                </div>
                {AddMusicTab()}
            </div>
          </div>   
       
      </div>
      </div>
    )
}

export default UploadAlbumPage