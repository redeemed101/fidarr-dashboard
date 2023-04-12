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
import Genre1 from "../../../Assets/svgs/Genre1.svg"
import { LegacyRef } from "react"

const contentOptions : PrimarySelectOption[] = [
    {
        label : "Home",
        value: "Home"
    }
]
const LocationGenresPage = () => {
    const { id } = useParams();
    const next = async (direction: ScrollDirection) => {}
    const ref = useInfiniteScroll<LegacyRef<HTMLDivElement>>({
        // Function to fetch more items
        next,
        
        columnCount: 100,      
        hasMore: { down: true },
      });
    return(
        <div style={{height:"inherit"}}  className="pb-4 w-full flex flex-row bg-black">       
        <MenuColumn />
        <div className="flex   gap-4 flex-col w-full">
       
            <CMSHeader selectedType={CMSMenuType.Locations} menus={cmsMenuItems}/>
            <div className="flex flex-col w-3/4 px-12 gap-4 mx-auto">
               
               <div className="flex flex-row items-center justify-between w-full">
                  <p className="font-bold text-white">Genre</p>
                  <div className="flex flex-row gap-2 items-center">
                    <p className="font-bold text-white text-sm">Location : Music Home</p>
                    <PrimaryButton title='Save' padY={2} padX={6} height="10" width="100" />
                  </div>
               </div>

               <div className="flex flex-row items-center gap-2 w-full">
                  <PrimarySelect options={contentOptions} label="Content Type" width="1/4" padX={3} />
                  <div className="w-3/4 mt-6">
                    <SearchTextField />
                  </div>
               </div>
               <div className="flex grid grid-cols-4 gap-4">
               {
                 [...Array(12)].map((x,i) => <div className="flex flex-col relative">
                      <img src={Genre1} />
                      <div className="flex flex-row gap-1 pt-2 pr-2 absolute top-0 right-0">
                                <div className="cursor-pointer">
                                    <img src={DeleteIcon} />
                                </div>
                                <div className="cursor-pointer">
                                       <img src={ListIcon} />
                                </div>
                        </div>
                        <p className="left-1/4 top-3/4 absolute font-bold text-white uppercase text-sm">Christian/Gospel</p>
                   </div>)
                }
                      
               </div>
               


            </div>
          
        </div>   
     
        </div>
    )
}

export default LocationGenresPage