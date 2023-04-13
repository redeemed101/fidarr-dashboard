import { Link, useParams } from "react-router-dom"
import { CMSMenuType, cmsMenuItems } from "../../../StateManagement/CMSMenu"
import MenuColumn from "../../Dashboard/Components/MenuColumn"
import CMSHeader from "../Sections/CMSHeader"
import { ButtonWithIcon, PrimaryButton } from "../../Common/buttons"
import EditIcon from "../../../Assets/svgs/EditIcon.svg"
import DeleteIcon from "../../../Assets/svgs/DeleteIcon.svg"
import PrimarySelect, { PrimarySelectOption } from "../../Common/select"
import { PrimaryTextField, SearchTextField } from "../../Common/textfields"
import ListIcon from "../../../Assets/svgs/FilledListIcon.svg"
import Playlist1 from "../../../Assets/svgs/Playlist1.svg"


const contentOptions : PrimarySelectOption[] = [
    {
        label : "Home",
        value: "Home"
    }
]
const ContentPlaylistsPage = () => {
    const { id } = useParams();
   
   
    return(
        <div style={{height:"inherit"}}  className="pb-4 w-full flex flex-row bg-black">       
        <MenuColumn />
        <div className="flex   gap-4 flex-col w-full">
       
            <CMSHeader selectedType={CMSMenuType.Content} menus={cmsMenuItems}/>
            <div className="flex flex-col w-3/4 px-12 gap-4 mx-auto">
               
               <div className="flex flex-row items-center justify-between w-full">
                  <p className="font-bold text-white">Playlists</p>
                  <div className="flex flex-row gap-2 items-center">
                    
                    <PrimaryButton title='Save' padY={2} padX={6} height="10" width="100" />
                  </div>
               </div>

               <div className="flex flex-row items-start gap-2 w-full">
                  <PrimarySelect options={contentOptions} label="Content Type" width="1/4" padX={3} />
                  <PrimarySelect options={contentOptions} label="Genres" width="1/4" padX={3} />
                  <PrimarySelect options={contentOptions} label="Auto Update" width="1/4" padX={3} />
                  <div className="w-1/4">
                      <PrimaryTextField type="text" value="" padX={6} padY={2} width="full" height="12" label="Tag" placeholder="Tag" />
                  </div>
               </div>
               
               <div className="w-full">
                  <SearchTextField />
               </div>

               <div className="flex grid grid-cols-4 gap-4">
               {
                 [...Array(12)].map((x,i) => 
                   
                       <div className="flex flex-col relative py-2 rounded">
                             
                            <img className="rounded" src={Playlist1} />
                             
                             <div className="">
                                    <p className="font-bold text-white text-sm">Way Maker</p>
                                    <p className="text-fidarrgray-500 text-sm">Sinach</p>
                             </div> 
                             <div className="flex flex-row gap-1 pt-4 pr-4 absolute top-0 right-0">
                                <div className="cursor-pointer">
                                    <img src={DeleteIcon} />
                                </div>
                                <div className="cursor-pointer">
                                       <img src={ListIcon} />
                                </div>
                             </div> 
                      </div>
                    )
                }
                      
               </div>
               


            </div>
          
        </div>   
     
        </div>
    )
}

export default ContentPlaylistsPage