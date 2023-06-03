import { useSelector } from "react-redux";
import { RootState } from "../../../../StateManagement/redux/store";
import HeaderSection from "../../../Common/HeaderSection";
import TextArea from "../../../Common/textarea";
import { PrimaryTextField } from "../../../Common/textfields";
import MenuColumn from "../../../Dashboard/Components/MenuColumn";

export const TrackPage = () => {
    const song = useSelector((state: RootState) => state.selectedSong.Song);
    return (
      <div className="h-auto bg-black">
      <div style={{height:"inherit"}}  className="pb-4 flex flex-row ">
        <MenuColumn />
        <div className="flex  gap-4 flex-col w-full">
          <div className="bg-fidarrgray-600 pl-8">
            <HeaderSection title="Music" />
          </div>
          <form className='mx-auto'>
          <div className="flex flex-row  mx-auto pt-12">
           
              <div className="flex flex-col h-auto w-40">
                <p className="text-white font-bold pb-4 ">Song</p>
                
                {song?.imgSrc != null ? <img className="rounded-md h-32 w-32" src={song.imgSrc} />
                 : <p className="rounded-md h-32 w-32 bg-fidarrgray-900 flex flex-row items-center text-white">
                   <span className='mx-auto'>Song Photo</span></p> }
               
              </div>
            
              <div className="flex flex-col pl-4 pt-12">
                <div className="flex flex-row gap-4">
                  <PrimaryTextField disabled type="text" value={song?.name!!} padX={6} padY={2}  width="full" height="10" label="Name" placeholder="Name" />
                 
                  <PrimaryTextField disabled type="text" value={song?.artistName!!} padX={6} padY={2} width="full" height="10" label="Artist" placeholder="Artist" />
                             
                 
                </div> 
               
                <div className='flex flex-col gap-2'>
                  <div>
                    <p className='text-sm font-bold text-fidarrgray-900'>Genres</p>
                  </div>
                  <div className='flex flex-row items-center'>
                    {
                    song?.genres.map( g =>   <div className='flex flex-row items-center'>
                                                        <input type="checkbox"
                                                        disabled
                                                        checked
                                                        className="disabled:bg-white text-fidarrgray-900 hover:bg-fidarrgray-600 cursor-pointer w-6 h-6 border-3 border-amber-500 focus:outline-none rounded" />
                                                        <label htmlFor={g.name} className="text-white mx-4 ">{g.name}</label>
                                                </div>
                  
                    )
                  }
                 </div>
                </div>

               

                <div>
                <TextArea name="bio" disabled value={song?.name!!} padX={6} padY={2}  width="full" height="10"  placeholder="Description" label="Description"  />
                      
                 
                </div>
              
              </div>
            
             
          </div>
          </form> 
        </div>   
     
    </div>
    </div>
    )
}