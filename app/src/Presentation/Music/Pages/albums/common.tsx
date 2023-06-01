import { useState } from "react"
import { Genre } from "../../../../Domain/Model/Music/Genre"
import PrimaryFileInput from "../../../Common/fileInput"
import { PrimaryTextField } from "../../../Common/textfields"
import ListIcon from "../../../../Assets/svgs/ListIcon.svg"
import DeleteIcon from "../../../../Assets/svgs/DeleteIcon.svg"
import EditIcon from "../../../../Assets/svgs/EditIcon.svg"
import EditActiveIcon from "../../../../Assets/svgs/EditActiveIcon.svg"

export type MusicTabProps = {
    genres: Genre[]
    switchTab : () => void,
    handleSongEditing : (data: SongData) => void,
    handleDeleteSongItem : (id: number) => void,
    addSongItem : () => void ,
    songsData: SongData[],
    submitAlbum: () => void

}
export type SongData = {
    id: number,
    file? : File,
    name?: string,
    artist?: string,
    featuring?: string[]
    genres?: string[]
    isrcCode?: string

}
export type SongItemProps = { 
    id: number,
    editMode: boolean,
    selectedIndex: number,
    genres: Genre[],
    songData?: SongData,
    handleEditMode : (i:number) => void
    handleDoneEditing: (data : SongData) => void,
    handleDelete : (i: number) => void
}


export const enum TABS {
    Details,
    AddMusic
}
export type AlbumDetailsFormData = {
    name : string,
    description: string,
    releaseDate: string,
    artistId: string,
    genres?: string[],
    upcCode: string,
    isrcCode: string,
    cLine:string,
    pLine:string,
    artworkFile?: string,
   
}
export type AlbumDetails = {
    name : string,
    description: string,
    releaseDate: string,
    artistId: string,
    genres?: string[],
    upcCode: string,
    isrcCode: string,
    cLine:string,
    pLine:string,
    artworkFile?: File,
}
export type DetailsTabProps = {
    genres: Genre[]
    switchTab : () => void,
    handleAlbumDetails : (detail : AlbumDetails) => void,
    editAction? : (event : any ) => void
}

export const SongItem = ({songData,genres,handleDoneEditing, id,handleDelete, editMode,selectedIndex, handleEditMode}:SongItemProps) => {
    const [name, setName] = useState(songData?.name ?? "")
    const [artist, setArtist] = useState(songData?.artist??"")
    const [isrcCode, setIsrcCode] = useState(songData?.isrcCode ?? "")
    const [songFile, setSongFile] = useState<File | null>(null)
    const [songGenres, setSongGenres] = useState<string[]>(songData?.genres ?? [])
    const [featuringArtists, setFeaturingArtists] = useState([])
    const doneEditing = () =>{
         if(editMode && selectedIndex == id){
             console.log(songGenres)
              handleDoneEditing({
                  id: id,
                  file: songFile,
                  name: name,
                  artist: artist,
                  genres: songGenres,
                  isrcCode: isrcCode,
                  featuring: featuringArtists
              } as SongData)
         }
         handleEditMode(id)
    }
    const onDelete = () => {
        handleDelete(id)
    }
    const handleOnCheck = (genre : string) => {
        if(songGenres.includes(genre)){
           
            setSongGenres(prev => (prev.filter(g => g != genre)))
        }
        else{
            setSongGenres(prev => ([...prev,genre]));
        }
        
    }
    
    return (
        <div key={id} className="w-full flex flex-col items-center">
            <div className="flex flex-col w-full">
                <div className="flex flex-row items-center gap-2 w-full">
                    <div className="-mt-5 w-1/12">
                        <img  src={ListIcon} />
                    </div>
                    <div className=" flex flex-col w-10/12">
                        <PrimaryFileInput accept="audio/*" name={name}  onChanged={(e) => setSongFile(e.target.files != null ? e.target.files[0] : null)}  padX={4} padY={4} width="full" height="10" label={name} />
                        {/*<PrimaryTextField type="text" value={name} onChanged={setName} padX={2} padY={1} width="full" height="10" label={name} placeholder="" />*/}
                       
                    </div> 
                    <div className="-mt-5  justify-end  flex flex-row gap-1 w-1/12">
                        <img onClick={() => doneEditing()} className="cursor-pointer" src={editMode  && selectedIndex == id ? EditActiveIcon : EditIcon} />
                        <img className="cursor-pointer" onClick={() => onDelete()} src={DeleteIcon} />
                    </div>
                </div>
                <div className="w-10/12 mx-auto relative -mt-2">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-fidarrgray-900">
                                <div style={{width : "40%"}} className="bg-red-900 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center "></div>
                            </div>
                </div>
            </div>
           

        { editMode && selectedIndex == id ? <div className=" mt-8 w-10/12 grid grid-cols-2 gap-2">
        <PrimaryTextField type="text" value={name} onChanged={(e) => setName(e.target.value)} padX={6} padY={2} width="full" height="10" label="Track Title" placeholder="Track Title" />
        <PrimaryTextField type="text" value={artist} onChanged={(e) => setArtist(e.target.value)} padX={6} padY={2} width="full" height="10" label="Artist" placeholder="Artist" />
        <div className='flex flex-col gap-2 col-span-2'>
            <div>
                <p className='text-sm font-bold text-fidarrgray-900'>Genres</p>
            </div>
            <div className='flex flex-row gap-auto items-center'>
            {
            genres.map( (g,index) => <div className='flex flex-row items-center'>
                                                <input 
                                                type="checkbox"
                                                name={g.name}
                                                value={g.id}
                                                id={g.id}
                                                checked={songGenres.includes(g.id)}
                                                onChange={(e) => handleOnCheck(g.id)}
                                                className="text-fidarrgray-900 hover:bg-fidarrgray-600 cursor-pointer w-6 h-6 border-3 border-amber-500 focus:outline-none rounded" />
                                                <label htmlFor={g.name} className="text-white mx-4 ">{g.name}</label>
                                        </div>
                
            )
            }
            </div>
        </div>
        
        <PrimaryTextField type="text" value="" padX={6} padY={2} width="full" height="10" label="Featuring" placeholder="Featuring" />
        <div className="w-full">
          <PrimaryTextField type="text" value={isrcCode} onChanged={(e) => setIsrcCode(e.target.value)} padX={6} padY={2} width="full" height="10" label="ISRC Code" placeholder="ISRC Code" />
        </div>
        </div> : <></> }




    </div>
    )
}