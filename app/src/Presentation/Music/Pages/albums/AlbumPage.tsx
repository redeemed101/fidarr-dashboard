import { useSelector } from "react-redux";
import { RootState } from "../../../../StateManagement/redux/store";
import HeaderSection from "../../../Common/HeaderSection";
import TextArea from "../../../Common/textarea";
import { PrimaryTextField } from "../../../Common/textfields";
import MenuColumn from "../../../Dashboard/Components/MenuColumn";

export const AlbumPage = () => {
    const album = useSelector((state: RootState) => state.selectedAlbum.Album);
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
                <p className="text-white font-bold pb-4 ">Album</p>
                
                {album?.imgSrc != null ? <img className="rounded-md h-32 w-32" src={album.imgSrc} />
                 : <p className="rounded-md h-32 w-32 bg-fidarrgray-900 flex flex-row items-center text-white">
                   <span className='mx-auto'>Album Photo</span></p> }
               
              </div>
            
              <div className="flex flex-col pl-4 pt-12">
                <div className="flex flex-row gap-4">
                  <PrimaryTextField disabled type="text" value={album?.name!!} padX={6} padY={2}  width="full" height="10" label="Name" placeholder="Name" />
                 
                  <PrimaryTextField disabled type="text" value={album?.artist.name!!} padX={6} padY={2} width="full" height="10" label="Artist" placeholder="Artist" />
                             
                 
                </div> 
               
                <div className='flex flex-col gap-2'>
                  <div>
                    <p className='text-sm font-bold text-fidarrgray-900'>Genres</p>
                  </div>
                  <div className='flex flex-row items-center'>
                    {
                    album?.genres.map( g =>   <div className='flex flex-row items-center'>
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

                <div className='flex flex-col w-full gap-2'>
                  <div>
                    <p className='text-sm font-bold text-fidarrgray-900'>Songs</p>
                  </div>
                  <div className='flex flex-col w-full items-center'>
                    {
                    album?.songs.map( s =>    
                        <div className="w-full">
                            <PrimaryTextField disabled type="text" value={`${s.name!!} - ${s.artist.name}`} padX={6} padY={2} width="full" height="10" label="" placeholder="" />
                        </div>                  
                  
                    )
                  }
                 </div>
                </div>

                <div>
                <TextArea name="bio" disabled value={album?.description!!} padX={6} padY={2}  width="full" height="10"  placeholder="Description" label="Description"  />
                      
                 
                </div>
              
              </div>
            
             
          </div>
          </form> 
        </div>   
     
    </div>
    </div>
    )
}