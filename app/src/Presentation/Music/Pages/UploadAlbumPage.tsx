import React, { useState } from "react"
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
import EditActiveIcon from "../../../Assets/svgs/EditActiveIcon.svg"
import FolderPlusIcon from "../../../Assets/svgs/FolderPlusIcon.svg"



const enum TABS {
    Details,
    AddMusic
}

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
type TabProps = {
    switchTab : () => void,
    editAction? : (event : any ) => void
}

const DetailsTab = ({switchTab, editAction} : TabProps) => {
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
                    <PrimaryButton onClick={switchTab}  title='Next Step' padY={2} padX={4} height="auto" width="full"/>
                </div>
            </div>
        
        </div>
    )
}


const AddMusicTab = ({switchTab} : TabProps) => {
    const [editMode, setEditMode] = useState(false);
    const [selectedIndex, setSelectedIndex] =  useState(0);
    const handleEditMode = (id : number) => {
          setSelectedIndex(id)
          console.log(id)
          setEditMode(!editMode)
      };
    return (
        <div className="flex flex-col w-full items-start  px-6">
            <div className="flex flex-row gap-2 ">
                <div className="flex flex-row gap-4 ">
                    <ButtonWithIcon imageSrc={PlusIcon} title="Upload Track" />
                    <ButtonWithIcon imageSrc={FolderPlusIcon} title="Add Existing" />
                    
                </div>
                <div></div>                
            </div>

            <div className="flex flex-col w-full pt-4">
              {
                  [...Array(10)].map( (x,i) => 
                    <div key={i} className="w-full flex flex-col items-center">
                        <div className="flex flex-row items-center gap-1 w-full">
                            <div className=" w-1/12">
                               <img  src={ListIcon} />
                            </div>
                            <div className=" pr-8  flex flex-col w-10/12">
                                <PrimaryTextField type="text" value="Imela - Nathaniel Bassey" padX={2} padY={1} width="full" height="10" label="Imela.mp3" placeholder="Imela.mp3" />
                                <div className="relative -mt-2">
                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-fidarrgray-900">
                                        <div style={{width : "40%"}} className="bg-red-900 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center "></div>
                                    </div>
                                </div>
                            </div> 
                            <div className=" ml-8 justify-end pt-2 flex flex-row gap-1 w-1/12">
                                <img onClick={() => handleEditMode(i)} className="cursor-pointer" src={editMode ? EditActiveIcon : EditIcon} />
                                <img className="cursor-pointer" src={DeleteIcon} />
                            </div>
                        </div>

                        { editMode && selectedIndex == i ? <div className=" mt-8 pr-10  -ml-10 w-10/12 grid grid-cols-2 gap-2">
                        <PrimaryTextField type="text" value="" padX={6} padY={2} width="full" height="10" label="Track Title" placeholder="Track Title" />
                        <PrimarySelect options={genreOptions} label="Genre" width="full" padX={0} />
                        <PrimaryTextField type="text" value="" padX={6} padY={2} width="full" height="10" label="Artist" placeholder="Artist" />
                        <PrimaryTextField type="text" value="" padX={6} padY={2} width="full" height="10" label="Featuring" placeholder="Featuring" />
                        <div className="w-full col-span-2">
                          <PrimaryTextField type="text" value="" padX={6} padY={2} width="full" height="10" label="ISRC Code" placeholder="ISRC Code" />
                        </div>
                        </div> : <></> }




                    </div>
                  )
              }
             

            </div>
            <div className="w-full pt-10 flex flex-row justify-between">
               <SecondaryButton onClick={switchTab}  title='Back' padY={2} padX={4} height="auto" width="1/6"/>
               <PrimaryButton onClick={switchTab}  title='Save' padY={2} padX={4} height="auto" width="1/6"/>
            </div>
        </div>
    )
}

const UploadAlbumPage = () => {
    const [activeTab, setActiveTab] = useState(TABS.Details);
    
    const handleDetailsTab = () => {
        
        setActiveTab(TABS.Details);
      };
      const handleAddMusicTab = () => {
        
        setActiveTab(TABS.AddMusic);
    };
    return (
       
       <div className="h-auto">
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row ">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
            <div className="bg-fidarrgray-600 pl-8">
              <HeaderSection title="Music" />
            </div>
            <div className="flex flex-row">
                <div className="w-1/5" />
                <div className="flex flex-col w-3/5  items-center pt-12 pb-12 gap-2">
                    <div className="flex flex-row pb-4 px-6 w-full">
                        <div className="flex flex-row items-baseline justify-between w-full">
                            <p className="text-white font-bold pt-4">Upload Album</p>

                            <div className="flex flex-row self-end gap-4">
                                <div className={ activeTab == TABS.Details ? " text-white flex flex-col " : " text-fidarrgray-900 flex flex-col "}>
                                    <div className="flex flex-row items-baseline gap-1">
                                        <p className="font-bold text-3xl sm:text-xl">1</p>
                                        <p className="text-xs font-bold">Enter Album Details</p>
                                    </div>
                                    <div className={ activeTab == TABS.Details ? " bg-white overflow-hidden h-1 w-64 md:hidden mb-4 text-xs flex rounded" : " bg-fidarrgray-900 overflow-hidden h-1 w-64 mb-4 text-xs flex rounded"}></div>
                                </div>
                                <div className={ activeTab == TABS.AddMusic ? " text-white flex flex-col " : "text-fidarrgray-900 flex flex-col "}>
                                    <div className="flex flex-row items-baseline gap-1">
                                        <p className="font-bold text-3xl sm:text-xl">2</p>
                                        <p className=" text-xs font-bold">Add Music</p>
                                    </div>
                                    <div className={ activeTab == TABS.AddMusic ? " bg-white overflow-hidden h-1 w-64 sm:32 md:32 mb-4 text-xs flex rounded" : " bg-fidarrgray-900 overflow-hidden h-1 w-64 mb-4 text-xs flex rounded" }></div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    {activeTab == TABS.Details ? <DetailsTab switchTab={handleAddMusicTab} /> : <AddMusicTab switchTab={handleDetailsTab} />}
                </div>
                <div className="w-1/5" />
            </div>
          </div>   
       
      </div>
      </div>
    )
}

export default UploadAlbumPage