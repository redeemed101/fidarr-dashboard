import React, { useEffect, useState } from "react"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm, Controller, Control, FieldValues } from "react-hook-form";
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
import { albumRepository, genreRepository } from "../../../main"
import { useAlbumModelController } from "../hooks/useAlbumModelController"
import { useGenreModelController } from "../hooks/useGenreModelController"
import { Genre } from "../../../Domain/Model/Music/Genre";
import PrimaryFileInput from "../../Common/fileInput";
import { number } from "prop-types";
import { AxiosProgressEvent } from "axios";



const enum TABS {
    Details,
    AddMusic
}
type AlbumDetailsFormData = {
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
type AlbumDetails = {
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
const albumDetailSchema = yup.object({
    name: yup.string().required(),
    description: yup.string().required(),
    artistId: yup.string().required(),
    artworkFile: yup.string().required(),
    releaseDate: yup.string().required()
  }).required();
  const songDetailsSchema = yup.object({
   
  }).required();
const DetailsTab = ({switchTab,genres, editAction, handleAlbumDetails} : DetailsTabProps) => {
   
    const [imagePath, setImagePath] = useState<string | null>(null);
    const [artworkFile, setArtworkFile] = useState<File | null>(null);
   
   
   const { control, handleSubmit, formState: { errors }  } = useForm<AlbumDetailsFormData>({
    resolver: yupResolver(albumDetailSchema),
    defaultValues: {
        name : "",
        description: "",
        releaseDate: "",
        artistId: "",
        genres: [],
        artworkFile: "",
    }
  });
   const setImagePreview = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {files} = event.target
    console.log(files?.[0])
    if(files != null){
       setImagePath(URL.createObjectURL(files[0]))
       setArtworkFile(files[0])
    }
   
  }
  const onSubmit = (data : AlbumDetailsFormData) => {
     console.log("submit")
     handleAlbumDetails({
        name: data.name,
        description: data.description,
        releaseDate: data.releaseDate,
        artistId: data.artistId,
        genres: data.genres,
        upcCode: data.upcCode,
        isrcCode: data.isrcCode,
        cLine: data.pLine,
        pLine: data.cLine,
        artworkFile: artworkFile
     } as AlbumDetails)
     switchTab()
  }
    return (
        <form className='mx-auto' onSubmit={handleSubmit(onSubmit)}>
           
            
        <div className="flex flex-row  mx-auto">
            
            <div className="flex flex-col">    
            <p className="text-red-600">{errors.artworkFile?.message}</p>               
            {imagePath != null ? <img className="rounded-md h-40 w-40" src={imagePath!} />
                   : <p className="rounded-md h-40 w-40 bg-fidarrgray-900 flex flex-row items-center text-white">
                     <span className='mx-auto'>Artist Photo</span></p> }
                     <div className="w-full pt-4 self-center px-4">
                    <Controller
                      control={control}
                      name={"artworkFile"}
                      rules={{ required: "Artwork is required" }}
                      render={({ field: { value, onChange, ...field } }) => {
                        return (
                          <input
                            {...field}
                            onChange={(event) => {
                              setImagePreview(event);
                            }}
                            type="file"
                            id="picture"
                            accept="image/*"
                            className='h-auto w-full'
                          />
                        );
                      }}
                    />
                  </div>
            </div>
            <div className="flex flex-col pl-4 pt-12">
                <div>
                    <p className="text-red-600">{errors.name?.message}</p>
                    <p className="text-red-600">{errors.description?.message}</p>
                    <p className="text-red-600">{errors.releaseDate?.message}</p>
                    <p className="text-red-600">{errors.artistId?.message}</p>
                </div>
                <div className="container grid m-auto grid-cols-2 gap-4">
                <Controller
                                    name="name"
                                    control={control}
                                    render={({ field }) => <PrimaryTextField name={field.name} type="text" value={field.value} padX={6} padY={2} onChanged={field.onChange} width="full" height="10" label="Album Title" placeholder="Album Title" />}
                   /> 
                
               
                <Controller
                                    name="artistId"
                                    control={control}
                                    render={({ field }) => <PrimaryTextField name={field.name} type="text" value={field.value} padX={6} padY={2} onChanged={field.onChange} width="full" height="10" label="Artist" placeholder="Artist" />}
                   />     

                <div className=' col-span-2 flex flex-col gap-2'>
                    <div>
                      <p className='text-sm font-bold text-fidarrgray-900'>Genres</p>
                    </div>
                    <div className='flex flex-row gap-auto items-center'>
                      {
                      genres.map( g => <Controller
                        name="genres"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) =>    <div className='flex flex-row items-center'>
                                                          <input type="checkbox"                                                         
                                                          name={field.name} value={g.id}
                                                          className="text-fidarrgray-900 hover:bg-fidarrgray-600 cursor-pointer w-6 h-6 border-3 border-amber-500 focus:outline-none rounded" />
                                                          <label htmlFor={field.name} className="text-white mx-4 ">{g.name}</label>
                                                  </div>
                        }
                      />)
                    }
                   </div>
                  </div>

                  <Controller
                                    name="upcCode"
                                    control={control}
                                    render={({ field }) => <PrimaryTextField name={field.name} type="text" value={field.value} padX={6} padY={2} onChanged={field.onChange} width="full" height="10" label="UPC Code" placeholder="UPC Code" />}
                   />   
                    <Controller
                                    name="isrcCode"
                                    control={control}
                                    render={({ field }) => <PrimaryTextField name={field.name} type="text" value={field.value} padX={6} padY={2} onChanged={field.onChange} width="full" height="10" label="ISRC Code" placeholder="ISRC Code" />}
                   />   
                   <Controller
                                    name="cLine"
                                    control={control}
                                    render={({ field }) => <PrimaryTextField name={field.name} type="text" value={field.value} padX={6} padY={2} onChanged={field.onChange} width="full" height="10" label="(C) Line" placeholder="YYYY Copyright Holder" />}
                   />   
               
               <Controller
                                    name="releaseDate"
                                    control={control}
                                    render={({ field }) => <PrimaryDatePicker name={field.name} onChanged={field.onChange}   value={field.value} padX={6} padY={2} width="full" height="10" label="Release Date" />}
                />                 
                </div>
                
                <div className="self-end">
                    <PrimaryButton type="submit"  title='Next Step' padY={2} padX={4} height="auto" width="full"/>
                </div>
            </div>
        
        </div>
        </form>
    )
}
type SongData = {
    id: number,
    file? : File,
    name?: string,
    artist?: string,
    featuring?: string[]
    genres?: string[]
    isrcCode?: string

}
type SongItemProps = { 
    id: number,
    editMode: boolean,
    selectedIndex: number,
    genres: Genre[],
    handleEditMode : (i:number) => void
    handleDoneEditing: (data : SongData) => void,
    handleDelete : (i: number) => void
}
const SongItem = ({genres,handleDoneEditing, id,handleDelete, editMode,selectedIndex, handleEditMode}:SongItemProps) => {
    const [name, setName] = useState("")
    const [artist, setArtist] = useState("")
    const [isrcCode, setIsrcCode] = useState("")
    const [songFile, setSongFile] = useState<File | null>(null)
    const [songGenres, setSongGenres] = useState<string[]>([])
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
           
            setSongGenres(songGenres.filter(g => g != genre))
        }
        else{
            setSongGenres([...songGenres,genre]);
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
type DetailsTabProps = {
    genres: Genre[]
    switchTab : () => void,
    handleAlbumDetails : (detail : AlbumDetails) => void,
    editAction? : (event : any ) => void
}
type MusicTabProps = {
    genres: Genre[]
    switchTab : () => void,
    handleSongEditing : (data: SongData) => void,
    handleDeleteSongItem : (id: number) => void,
    addSongItem : () => void ,
    songsData: SongData[]

}
const AddMusicTab = ({songsData,genres,switchTab,handleDeleteSongItem,handleSongEditing,addSongItem } : MusicTabProps) => {
    const [editMode, setEditMode] = useState(false);
    const [selectedIndex, setSelectedIndex] =  useState(0);
    const handleEditMode = (id : number) => {
          setSelectedIndex(id)
          setEditMode(!editMode)
      };
    
   
    return (
        <div className="flex flex-col w-full items-start  px-6">
            <div className="flex flex-row gap-2 ">
                <div className="flex flex-row gap-4 ">
                    <ButtonWithIcon onClicked={addSongItem} imageSrc={PlusIcon} title="Upload Track" />
                    <ButtonWithIcon imageSrc={FolderPlusIcon} title="Add Existing" />
                    
                </div>
                <div></div>                
            </div>

            <div className="flex flex-col w-full pt-4">
              {
                  songsData.map( (x,i) => 
                    <SongItem handleDoneEditing={handleSongEditing} genres={genres} handleEditMode={handleEditMode} handleDelete={handleDeleteSongItem} id={x.id} selectedIndex={selectedIndex} editMode={editMode} />
                  )
              }
             

            </div>
            <div className="w-full pt-10 flex flex-row justify-between">
               <SecondaryButton onClick={switchTab}  title='Back' padY={2} padX={4} height="auto" width="1/6"/>
               <PrimaryButton disabled={songsData.length < 1} onClick={switchTab}  title='Save' padY={2} padX={4} height="auto" width="1/6"/>
            </div>
        </div>
    )
}

const UploadAlbumPage = () => {
    const {genres, getAllGenres} = useGenreModelController(genreRepository)
    const {createAlbum, fetchStatus} = useAlbumModelController(albumRepository)
    const [activeTab, setActiveTab] = useState(TABS.Details);
    const [songsData, setSongsData] = useState<SongData[]>([])
    const [albumDetails, setAlbumDetails] = useState<AlbumDetails|null>(null);
    const [songCount,setSongCount] = useState(0)
    const addSongItem = () => {
       
        setSongsData([...songsData,{id: songCount}])
        setSongCount(songCount+1)
    }

    const handleAlbumDetails = (data: AlbumDetails) => {
               setAlbumDetails(data)
    }
    const handleSongEditing = (data: SongData) => {
            console.log(data)
            var filtered = songsData.filter(s => s.id != data.id)
            console.log(filtered)
            setSongsData([...filtered, data])
            console.log(songsData)
      }
    const handleDeleteSongItem = (id: number) => {
            
            setSongsData(songsData.filter(i => i.id != id))
           
      }
    useEffect( () => {
        getAllGenres()
   }, []);
    
    const handleDetailsTab = () => {
        console.log("going to details")
        setActiveTab(TABS.Details);
      };
      const handleAddMusicTab = () => {
        console.log("going to music")
        setActiveTab(TABS.AddMusic);
    };
    const submitAlbum = () => {
        createAlbum(albumDetails?.artworkFile!, songsData.map(s => s.file!),{
            name: albumDetails?.name!,
            description: albumDetails?.description!,
            artistId : albumDetails?.artistId!,
            genres: albumDetails?.genres!,
            songNames: songsData.map(s => s.name!),
            songGenres: songsData.map(s => s.genres!),
            songArtists: songsData.map(s => s.artist!),
            songsISRCCodes: songsData.map(s => s.isrcCode!),
            songFiles: songsData.map(s => s.file!),
            songDescriptions: [],
            releaseDate: new Date(albumDetails?.releaseDate!),
        } , (progressEvent : AxiosProgressEvent)  => {

        })
    }
    return (
       
       <div className="h-auto bg-black">
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row min-h-screen">
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
                    {activeTab == TABS.Details ? <DetailsTab handleAlbumDetails={handleAlbumDetails} switchTab={handleAddMusicTab} genres={genres} /> : <AddMusicTab songsData={songsData} addSongItem={addSongItem} handleSongEditing={handleSongEditing} handleDeleteSongItem={handleDeleteSongItem} switchTab={handleDetailsTab} genres={genres} />}
                </div>
                <div className="w-1/5" />
            </div>
          </div>   
       
      </div>
      </div>
    )
}

export default UploadAlbumPage