import HeaderSection from "../../Common/HeaderSection"
import { ButtonWithIcon, PrimaryButton, SecondaryButton } from "../../Common/buttons"
import PrimaryFileInput from "../../Common/fileInput"
import TextArea from "../../Common/textarea"
import { PrimaryTextField } from "../../Common/textfields"
import MenuColumn from "../../Dashboard/Components/MenuColumn"
import FolderPlusIcon from "../../../Assets/svgs/FolderPlusIcon.svg"
import ListIcon from "../../../Assets/svgs/ListIcon.svg"
import DeleteIcon from "../../../Assets/svgs/DeleteIcon.svg"


const CreatePaylistPage = () => {
    return (
       
       <div className="h-auto bg-black">
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row ">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
            <div className="bg-fidarrgray-600 pl-8">
              <HeaderSection title="Music" />
            </div>
            <div className="flex flex-col mx-auto pt-12">
                <div className="flex flex-col">
                  <p className="text-white font-bold pb-4">Create Playlist</p>
                 
                </div>
                <div className="flex flex-col pl-4 pt-12">
                  <div className="flex flex-row gap-4">
                   <PrimaryTextField type="text" value="" padX={6} padY={2} width="full" height="10" label="Name" placeholder="Name" />
                   <div className="flex flex-col">
                      <PrimaryFileInput padX={6} padY={4} width="full" height="10" label="Upload Art" />
                      <div className="relative -mt-2">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-fidarrgray-900">
                               <div style={{width : "40%"}} className="bg-red-900 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center "></div>
                            </div>
                       </div>
                   </div>
                  </div> 

                  <div className="flex flex-col mt-4">
                    <div className="">
                       <ButtonWithIcon title="Add Songs" imageSrc={FolderPlusIcon} />
                     </div>
                     <div className="flex flex-col w-full gap-2 mt-6">
                        
                       {

                         [...Array(5)].map((x,i) => 
                             <div key={i} className="flex flex-row items-center gap-1 w-full">
                                <div className=" w-1/12">
                                <img  src={ListIcon} />
                                </div>
                                <div className=" pr-8  flex flex-col w-10/12">
                                    <PrimaryTextField type="text" value="Imela - Nathaniel Bassey" padX={2} padY={1} width="full" height="10" label="" placeholder="Imela.mp3" />
                                    <div className="relative -mt-2">
                                        <div className="overflow-hidden h-2 text-xs flex rounded bg-fidarrgray-900">
                                            <div style={{width : "40%"}} className="bg-red-900 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center "></div>
                                        </div>
                                    </div>
                                </div> 
                                <div className="   flex flex-row gap-1 w-1/12">
                                    
                                    <img className="cursor-pointer" src={DeleteIcon} />
                                </div>
                            </div>
                            
                          )
                        
                        }
                     </div>
                  </div>
                  
                  
                  <div className="mt-6 self-end">
                     <PrimaryButton  title='Save' padY={2} padX={4} height="auto" width="full"/>
                  </div>
                </div>
               
            </div>
          </div>   
       
      </div>
      </div>
    )
}

export default CreatePaylistPage