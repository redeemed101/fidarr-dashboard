import { useState } from "react"
import { Genre } from "../../../../Domain/Model/Music/Genre"
import PrimaryFileInput from "../../../Common/fileInput"
import { PrimaryTextField } from "../../../Common/textfields"
import ListIcon from "../../../../Assets/svgs/ListIcon.svg"
import DeleteIcon from "../../../../Assets/svgs/DeleteIcon.svg"
import EditIcon from "../../../../Assets/svgs/EditIcon.svg"
import PlusIcon from "../../../../Assets/svgs/PlusIcon.svg"
import FolderPlusIcon from "../../../../Assets/svgs/FolderPlusIcon.svg"
import EditActiveIcon from "../../../../Assets/svgs/EditActiveIcon.svg"
import { ButtonWithIcon, SecondaryButton, PrimaryButton } from "../../../Common/buttons"
import { Track } from "../../../../Domain/Model/Music"
import FidarrModal from "../../../Common/modal"
import SearchSongs from "../../Components/SearchSongs"

export type MusicTabProps = {
    genres: Genre[]
    switchTab : () => void,
    handleSongEditing : (data: SongData) => void,
    handleDeleteSongItem : (id: number) => void,
    addSongItem : () => void ,
    addExistingSongItem : (song: Track) => void ,
    songsData: SongData[],
    submitAlbum: () => void

}
export type SongData = {
    id: number,
    file? : File,
    name?: string,
    artist?: string,
    featuring?: string[]
    genres?: Genre[]
    isrcCode?: string
    existing?: boolean,
    existingSongId?:string

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
    const [songGenres, setSongGenres] = useState<Genre[]>(songData?.genres ?? [])
    const [featuringArtists, setFeaturingArtists] = useState([])
    const doneEditing = () =>{
         if(editMode && selectedIndex == id){
             console.log(songData)
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
    const handleOnCheck = (genre : Genre) => {
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
                        {songData?.existing 
                            ? <PrimaryTextField type="text" disabled value={name}  padX={2} padY={1} width="full" height="10" label="" placeholder="" />
                            : <PrimaryFileInput accept="audio/*" name={name}  onChanged={(e) => setSongFile(e.target.files != null ? e.target.files[0] : null)}  padX={4} padY={4} width="full" height="10" label="" />
                        }
                        {/*<PrimaryTextField type="text" value={name} onChanged={setName} padX={2} padY={1} width="full" height="10" label={name} placeholder="" />*/}
                       
                    </div> 
                    <div className="-mt-5  justify-end  flex flex-row gap-1 w-1/12">
                        <img onClick={() => doneEditing()} className="cursor-pointer" src={editMode  && selectedIndex == id ? EditActiveIcon : EditIcon} />
                        <img className="cursor-pointer" onClick={() => onDelete()} src={DeleteIcon} />
                    </div>
                </div>
                <div className="w-10/12 mx-auto relative -mt-2">
                            {/*<div className="overflow-hidden h-2 text-xs flex rounded bg-fidarrgray-900">
                                <div style={{width : "40%"}} className="bg-red-900 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center "></div>
                           </div>*/}
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
                                                checked={songGenres.find( ge => ge.id == g.id) != null}
                                                onChange={(e) => handleOnCheck(g)}
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



export const AddMusicTab = ({songsData,genres,switchTab,handleDeleteSongItem,handleSongEditing,addSongItem, addExistingSongItem, submitAlbum } : MusicTabProps) => {
    const [editMode, setEditMode] = useState(false);
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedSongs, setSelectedSongs] = useState<Track[]>([])
    const [selectedIndex, setSelectedIndex] =  useState(0);
    const selectSong = (track: Track) => {
        console.log("bubbled " + track.id)
        addExistingSongItem(track)
        setSelectedSongs(prev => ([...prev, track]))
  
      }
      const unSelectSong = (track: Track) => {
        console.log("bubbled unselect "+ track.id)
        setSelectedSongs(prev => ([...prev.filter(t => t.id != track.id)]))
        var s = songsData.find( sd => sd.existingSongId == track.id)
        if(s != null){
            handleDeleteSongItem(s.id)
        }
        
      }
      const doneSelecting = () => {
            console.log(selectedSongs)
           // addExistingSongItem()
            setModalOpen(prev =>false)
           
      }
    const handleEditMode = (id : number) => {
          const mode = selectedIndex != id ? editMode : !editMode
          setEditMode(editMode => mode)
          setSelectedIndex(id)
          
      };
    
   
    return (
        <div className="flex flex-col w-full items-start  px-6">
             <FidarrModal height={500} width={800} title="Sure" close={() => setModalOpen(false)} afterOpen={() =>{}} isOpen={modalOpen}>
                <div className="w-full flex flex-col gap-4">
                    <SearchSongs unSelectSong={unSelectSong} selectedSongs={selectedSongs} selectSong={selectSong} />
                    <div className="w-1/4 self-end">
                    <PrimaryButton disabled={selectedSongs.length < 1} type="button" onClick={() => doneSelecting()} title='Done' padY={2} padX={3} height="10" width="full" />
                    </div>
                </div>
            </FidarrModal>
            <div className="flex flex-row gap-2 ">
                <div className="flex flex-row gap-4 ">
                    <ButtonWithIcon onClicked={addSongItem} imageSrc={PlusIcon} title="Upload Track" />
                    <ButtonWithIcon imageSrc={FolderPlusIcon} onClicked={() => setModalOpen(true)} title="Add Existing" />
                    
                </div>
                <div></div>                
            </div>

            <div className="flex flex-col w-full pt-4">
              {
                  songsData.map( (x,i) => 
                    <SongItem handleDoneEditing={handleSongEditing} songData={x} genres={genres} handleEditMode={handleEditMode} handleDelete={handleDeleteSongItem} id={x.id} selectedIndex={selectedIndex} editMode={editMode} />
                  )
              }
             

            </div>
            <div className="w-full pt-10 flex flex-row justify-between">
               <SecondaryButton onClick={switchTab}  title='Back' padY={2} padX={4} height="auto" width="1/6"/>
               <PrimaryButton disabled={songsData.length < 1} onClick={submitAlbum}  title='Save' padY={2} padX={4} height="auto" width="1/6"/>
            </div>
        </div>
    )
}