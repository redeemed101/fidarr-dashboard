import Circle from "../../../Assets/svgs/CircleIcon.svg"
import DollarIcon from "../../../Assets/svgs/DollarIcon.svg"
import GiftIcon from "../../../Assets/svgs/GiftIcon.svg"
import ArtistIcon from "../../../Assets/svgs/ArtistsIcon.svg"
import AlbumIcon from "../../../Assets/svgs/AlbumsIcon.svg"
import MusicIcon from "../../../Assets/svgs/MusicIcon.svg"
import PlaylistIcon from "../../../Assets/svgs/PlaylistIcon.svg"

export const CreatorRevenueStatBoard = () => {
    return (
     
         <div style={{height:"inherit"}} className="bg-red-900 flex flex-col w-96 gap-4 px-4 py-4  rounded">
             <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col justify-between">
                    <p className="text-white font-bold">Creator Revenue</p>
                    <p className="text-white font-normal text-xs">1.5M Music Streams</p>
                </div>
                <div className="ml-4 inline-block relative ">
                        <select className="placeholder-white block opacity-40 appearance-none text-white text-xs bg-gray-400 font-bold w-full  px-2 pr-6 py-2 rounded-md shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option selected>Total</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0   right-0 flex items-center  text-gray-700">
                          <svg className="fill-gray-400 h-4 w-4 opacity-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                </div>
                
             </div>
             <div className="items-center flex flex-col relative">
                <img src={Circle} alt="circle" />
                <p className="text-white font-bold absolute inset-y-1/2 -mt-6">$16.5M</p>
             </div>
             <div className="flex flex-col gap-6">
                <div className="flex flex-row">
                    <img src={DollarIcon} alt="Dollar" />
                    <div className="flex flex-col pl-4">
                        <p className="text-white font-bold">600M</p>
                        <p className="text-gray-400 opacity-60 font-normal text-xs">1.5M Music Streams</p>
                    </div>
                    <div className="w-1 mx-4 bg-white"></div>
                    <div className="flex flex-col">
                        <p className="text-white font-bold">$12M</p>
                        <p className="text-gray-400 opacity-60 font-normal text-xs">Revenue</p>
                    </div>
                </div>
                <div className="flex flex-row">
                    <img src={GiftIcon} alt="Dollar" />
                    <div className="flex flex-col pl-4">
                        <p className="text-white font-bold">600M</p>
                        <p className="text-gray-400 opacity-60 font-normal text-xs">1.5M Music Streams</p>
                    </div>
                    <div className="w-1 mx-4 bg-white"></div>
                    <div className="flex flex-col">
                        <p className="text-white font-bold">$12M</p>
                        <p className="text-gray-400 opacity-60 font-normal text-xs">Revenue</p>
                    </div>
                </div>
             </div>
         </div>
       
    )
}


export const TrendsBoard = () => {
    return (
        <>
         <div style={{height:"inherit"}} className="bg-red-900 flex flex-col w-96 gap-4 px-4 py-4  rounded">
             <div className="flex flex-row justify-between items-center pb-6">
                <div className="flex flex-col justify-between">
                    <p className="text-white font-bold">Trends</p>
                </div>              
                
             </div>
            
             <div className="flex flex-col gap-6">
                <div className="flex flex-row gap-4 items-center">
                    <img src={ArtistIcon} alt="Artist" />
                    <div className="flex flex-col pl-4">
                        <p className="text-white font-bold">Top Artists</p>
                        <p className="text-gray-400 opacity-60 font-normal text-xs">Most Performing Artists</p>
                    </div>
                    <div className="flex flex-col">
                        <button className="bg-white rounded-md font-bold p-1">View</button>                       
                    </div>
                </div>
                <div className="flex flex-row gap-4 items-center">
                    <img src={AlbumIcon} alt="Artist" />
                    <div className="flex flex-col pl-4">
                        <p className="text-white font-bold">Top Albums</p>
                        <p className="text-gray-400 opacity-60 font-normal text-xs">Most Performing Albums</p>
                    </div>
                    <div className="flex flex-col">
                        <button className="bg-white rounded-md font-bold p-1">View</button>                       
                    </div>
                </div>
                <div className="flex flex-row gap-4 items-center">
                    <img src={MusicIcon} alt="Artist" />
                    <div className="flex flex-col pl-4">
                        <p className="text-white font-bold">Top Singles</p>
                        <p className="text-gray-400 opacity-60 font-normal text-xs">Most Performing Singles</p>
                    </div>
                    <div className="flex flex-col">
                        <button className="bg-white rounded-md font-bold p-1">View</button>                       
                    </div>
                </div>
                <div className="flex flex-row gap-4 items-center">
                    <img src={PlaylistIcon} alt="Artist" />
                    <div className="flex flex-col pl-4">
                        <p className="text-white font-bold">Top Playlists</p>
                        <p className="text-gray-400 opacity-60 font-normal text-xs">Most Performing Playlists</p>
                    </div>
                    <div className="flex flex-col">
                        <button className="bg-white rounded-md font-bold p-1">View</button>                       
                    </div>
                </div>
             </div>
         </div>
        </>
    )
}

export const GeoBoard = () => {
    return (
        <>
         <div style={{height:"inherit"}} className="bg-red-900 flex flex-col w-96 gap-4 px-4 py-4  rounded">
             <div className="flex flex-row justify-between items-center pb-6">
                <div className="flex flex-col justify-between">
                    <p className="text-white font-bold">Geo</p>
                 
                </div>
                <div className="ml-4 inline-block relative ">
                     <p className="text-white text-xs">Country</p>   
                </div>
                
             </div>
            
             <div className="flex flex-col gap-6">
                <div className="flex flex-col">
                    <p className="text-gray-200 font-normal text-xs">United States</p>
                    <div className="relative pt-1">
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-400 opacity-100">
                            <div style={{width : "40%"}} className="bg-gray-100 opacity-60 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center "></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-gray-200 font-normal text-xs">United Kingdom</p>
                    <div className="relative pt-1">
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-400 opacity-100">
                            <div style={{width : "20%"}} className="bg-gray-100 opacity-60 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center "></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-gray-200 font-normal text-xs">South Africa</p>
                    <div className="relative pt-1">
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-400 opacity-100">
                            <div style={{width : "10%"}} className="bg-gray-100 opacity-60 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center "></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-gray-200 font-normal text-xs">Nigeria</p>
                    <div className="relative pt-1">
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-400 opacity-100">
                            <div style={{width : "5%"}} className="bg-gray-100 opacity-60 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center "></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-gray-200 font-normal text-xs">Canada</p>
                    <div className="relative pt-1">
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-400 opacity-100">
                            <div style={{width : "4%"}} className="bg-gray-100 opacity-60 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center "></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-gray-200 font-normal text-xs">Others</p>
                    <div className="relative pt-1">
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-400 opacity-100">
                            <div style={{width : "21%"}} className="bg-gray-100 opacity-60 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center "></div>
                        </div>
                    </div>
                </div>
             </div>
         </div>
        </>
    )
}

