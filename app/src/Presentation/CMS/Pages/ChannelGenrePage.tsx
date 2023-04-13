import { Link, useParams } from "react-router-dom"
import { CMSMenuType, cmsMenuItems } from "../../../StateManagement/CMSMenu"
import MenuColumn from "../../Dashboard/Components/MenuColumn"
import CMSHeader from "../Sections/CMSHeader"
import { ButtonWithIcon, PrimaryButton } from "../../Common/buttons"
import EditIcon from "../../../Assets/svgs/EditIcon.svg"
import DeleteIcon from "../../../Assets/svgs/DeleteIcon.svg"
import PrimarySelect, { PrimarySelectOption } from "../../Common/select"
import { SearchTextField } from "../../Common/textfields"
import useInfiniteScroll, { ScrollDirection } from "react-easy-infinite-scroll-hook"
import ListIcon from "../../../Assets/svgs/FilledListIcon.svg"
import { LegacyRef } from "react"

const contentOptions : PrimarySelectOption[] = [
    {
        label : "Home",
        value: "Home"
    }
]
const ChannelGenrePage = () => {
    const { id } = useParams();
  
    return(
        <div style={{height:"inherit"}}  className="pb-4 w-full flex flex-row bg-black">       
        <MenuColumn />
        <div className="flex   gap-4 flex-col w-full">
       
            <CMSHeader selectedType={CMSMenuType.Channels} menus={cmsMenuItems}/>
            <div className="flex flex-col w-3/4 px-12 gap-4 mx-auto">
               
               <div className="flex flex-row items-center justify-between w-full">
                  <p className="font-bold text-white">Rock</p>
                  <div className="flex flex-row gap-2 items-center">
                    <PrimaryButton title='Save' padY={2} padX={6} height="10" width="100" />
                  </div>
               </div>

               <div className="flex flex-row items-center gap-2 w-full">
                  <PrimarySelect options={contentOptions} label="Content Type" width="1/4" padX={3} />
                  <div className="w-3/4 mt-6">
                    <SearchTextField />
                  </div>
               </div>
               <div className="flex flex-col gap-2">

                        <div className="flex flex-col  bg-red-900 gap-2 rounded">
                            <div className="flex flex-col px-4 gap-2">
                                <div>
                                    <p className="font-bold text-white text-sm">New Singles</p>
                                    <p className="text-fidarrgray-300 text-sm">Content</p>
                                </div>
                                <div className="flex flex-row gap-2 items-baseline">
                                     
                                        {
                                            [...Array(6)].map((x,i) => 
                                                            <div className="flex flex-col  py-2 rounded">
                                                                <div>
                                                                    <img className="rounded" src="https://randomuser.me/api/portraits/women/81.jpg" />
                                                                </div>
                                                                <div className="">
                                                                    <p className="font-bold text-white text-sm">Way Maker</p>
                                                                    <p className="text-fidarrgray-300 text-sm">Sinach</p>
                                                                </div>  
                                                            </div>
                                                        )
                                            
                                        }

                                        <div className="flex flex-row gap-1 items-baseline">
                                            <div className="cursor-pointer">
                                                <img src={EditIcon} />
                                            </div>
                                            <div className="cursor-pointer">
                                                <img src={ListIcon} />
                                            </div>
                                        </div>
                                    
                                </div>

                            </div>
                        </div>

                        <div className="flex flex-col  bg-red-900 gap-2 rounded">
                            <div className="flex flex-col px-4 gap-2">
                                <div>
                                    <p className="font-bold text-white text-sm">New Albums</p>
                                    <p className="text-fidarrgray-300 text-sm">Content</p>
                                </div>
                                <div className="flex flex-row gap-2 items-baseline">
                                
                                        {
                                            [...Array(6)].map((x,i) => 
                                                            <div className="flex flex-col py-2 rounded">
                                                                <div>
                                                                    <img className="rounded" src="https://randomuser.me/api/portraits/women/81.jpg" />
                                                                </div>
                                                                <div className="">
                                                                    <p className="font-bold text-white text-sm">Way Maker</p>
                                                                    <p className="text-fidarrgray-300 text-sm">Sinach</p>
                                                                </div>  
                                                            </div>
                                                        )
                                            
                                        }

                                        <div className="flex flex-row gap-1">
                                            <div className="cursor-pointer">
                                                <img src={EditIcon} />
                                            </div>
                                            <div className="cursor-pointer">
                                                <img src={ListIcon} />
                                            </div>
                                        </div>
                                    
                                </div>

                            </div>
                        </div>
               </div>
               


            </div>
          
        </div>   
     
        </div>
    )
}

export default ChannelGenrePage