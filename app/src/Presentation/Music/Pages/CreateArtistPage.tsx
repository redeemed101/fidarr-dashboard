import HeaderSection from "../../Common/HeaderSection"
import { PrimaryButton, SecondaryButton } from "../../Common/buttons"
import TextArea from "../../Common/textarea"
import { PrimaryTextField } from "../../Common/textfields"
import MenuColumn from "../../Dashboard/Components/MenuColumn"


const CreateArtistPage = () => {
    return (
       
       <div className="h-screen">
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row ">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
            <div className="bg-fidarrgray-600 pl-8">
              <HeaderSection title="Music" />
            </div>
            <div className="flex flex-row items-center mx-auto ">
                <div className="flex flex-col">
                  <p className="text-white font-bold pb-4">Create Artist</p>
                  <img className="rounded-md" src="https://randomuser.me/api/portraits/women/81.jpg" />
                  <div className="pt-4 self-center">
                    <SecondaryButton title='Upload Picture' padY={2} padX={2} height="auto" width="3/4" />
                  </div>
                </div>
                <div className="flex flex-col pl-4 pt-48">
                  <div className="flex flex-row gap-4">
                   <PrimaryTextField type="text" value="" padX={6} padY={2} width="full" height="10" label="Name" placeholder="Name" />
                   <PrimaryTextField type="text" value="" padX={6} padY={2} width="full" height="10" label="Username" placeholder="Username" />
                  </div> 
                  <div className="flex flex-row gap-4">
                   <PrimaryTextField type="text" value="" padX={6} padY={2} width="full" height="10" label="Address" placeholder="Address" />
                   <PrimaryTextField type="text" value="" padX={6} padY={2} width="full" height="10" label="Website" placeholder="Website" />
                  </div>
                  <div>
                    <TextArea label="Bio" value=""  padX={6} padY={2} width="full" height="20" placeholder="Name"/>
                  </div>
                  <div className="self-end">
                     <PrimaryButton  title='Create' padY={2} padX={4} height="auto" width="3/4"/>
                  </div>
                </div>
               
            </div>
          </div>   
       
      </div>
      </div>
    )
}

export default CreateArtistPage