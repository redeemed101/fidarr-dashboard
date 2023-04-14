import HeaderSection from "../../Common/HeaderSection"
import MenuColumn from "../../Dashboard/Components/MenuColumn"



const FilesPage = () => {
    return(
        <div style={{height:"inherit"}}  className="pb-4 w-full flex flex-row bg-black">       
             <MenuColumn />
            <div className="flex   gap-4 flex-col w-full">
                        <div className="w-full">
                            <div className="flex flex-col bg-fidarrgray-600 pb-4 w-full">
                                <div className="pl-8">
                                <HeaderSection title="Files" />                           
                                </div>                           
                            
                            </div>
                       </div>
      
            </div>
        </div>
    )
}

export default FilesPage