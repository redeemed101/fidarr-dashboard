import { Primary } from "../../../stories/Button.stories"
import HeaderSection from "../../Common/HeaderSection"
import { PrimaryButton, SecondaryButton } from "../../Common/buttons"
import PrimaryDatePicker from "../../Common/datepicker"
import PrimaryFileInput from "../../Common/fileInput"
import PrimarySelect, { PrimarySelectOption } from "../../Common/select"
import TextArea from "../../Common/textarea"
import { PrimaryTextField } from "../../Common/textfields"
import MenuColumn from "../../Dashboard/Components/MenuColumn"


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

const UploadTrackPage = () => {
    return (
       
       <div className="h-auto bg-black">
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row ">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
            <div className="bg-fidarrgray-600 pl-8">
              <HeaderSection title="Music" />
            </div>
            <div className="flex flex-row  mx-auto pt-12 ">
                <div className="flex flex-col">
                  <p className="text-white font-bold pb-4">Upload Track</p>
                  <img className="rounded-md" src="https://randomuser.me/api/portraits/women/81.jpg" />
                  <div className="pt-4 w-full self-center">
                    <SecondaryButton title='Upload Art' padY={2} padX={2} height="auto" width="full" />
                  </div>
                </div>
                <div className="flex flex-col pl-4 pt-12">
                  <div className="container grid m-auto grid-cols-2 gap-4">
                   <PrimaryTextField type="text" value="" padX={6} padY={2} width="full" height="10" label="Track Title" placeholder="Track Title" />
                   <PrimarySelect options={genreOptions} label="Genre" width="full" padX={3} />
                   <PrimaryTextField type="text" value="" padX={6} padY={2} width="full" height="10" label="Artist" placeholder="Artist" />
                  
                   <PrimaryTextField type="text" value="" padX={6} padY={2} width="full" height="10" label="Featuring" placeholder="Featuring" />
                   <PrimaryTextField type="text" value="" padX={6} padY={2} width="full" height="10" label="UPC Code" placeholder="UPC Code" />
                   <PrimaryTextField type="text" value="" padX={6} padY={2} width="full" height="10" label="ISRC Code" placeholder="ISRC Code" />
                   <PrimaryTextField type="text" value="" padX={6} padY={2} width="full" height="10" label="(C) Line" placeholder="YYYY Copyright Holder" />
                   <PrimaryTextField type="text" value="" padX={6} padY={2} width="full" height="10" label="(P) Line" placeholder="YYYY Copyright Holder" />
                  
                   <div className="w-full flex flex-col gap-2">
                     <PrimaryFileInput padX={6} padY={4} width="full" height="10" label="Upload Track" />
                      <div className="relative pt-1">
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-fidarrgray-900">
                            <div style={{width : "40%"}} className="bg-red-700 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center "></div>
                        </div>
                      </div>
                   </div>
                   <PrimaryDatePicker value="" padX={6} padY={2} width="full" height="10" label="Release Date" />
                  </div>
                  <div>
                    <TextArea name="bio" label="Bio" value=""  padX={6} padY={2} width="full" height="20" placeholder="Name"/>
                  </div>
                  <div className="self-end">
                     <PrimaryButton  title='Save' padY={2} padX={4} height="auto" width="3/4"/>
                  </div>
                </div>
               
            </div>
          </div>   
       
      </div>
      </div>
    )
}

export default UploadTrackPage