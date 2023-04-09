import HeaderSection from "../../Common/HeaderSection"
import { PrimaryButton, SecondaryButton } from "../../Common/buttons"
import PrimaryFileInput from "../../Common/fileInput"
import TextArea from "../../Common/textarea"
import { PrimaryTextField } from "../../Common/textfields"
import MenuColumn from "../../Dashboard/Components/MenuColumn"


const CreateGenrePage = () => {
    return (
       
       <div className="h-screen">
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row ">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
            <div className="bg-fidarrgray-600 pl-8">
              <HeaderSection title="Music" />
            </div>
            <div className="flex flex-col mx-auto pt-12">
                <div className="flex flex-col">
                  <p className="text-white font-bold pb-4">Create Genre</p>
                 
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

export default CreateGenrePage