import { useSelector } from "react-redux";
import { RootState } from "../../../../StateManagement/redux/store";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { AxiosProgressEvent } from "axios";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { genreRepository, albumRepository } from "../../../../main";
import HeaderSection from "../../../Common/HeaderSection";
import { PrimaryButton, ButtonWithIcon, SecondaryButton } from "../../../Common/buttons";

import PrimaryDatePicker from "../../../Common/datepicker";
import PrimaryFileInput from "../../../Common/fileInput";
import { PrimaryTextField } from "../../../Common/textfields";
import MenuColumn from "../../../Dashboard/Components/MenuColumn";
import { useAlbumModelController } from "../../hooks/useAlbumModelController";
import { useGenreModelController } from "../../hooks/useGenreModelController";
import { DetailsTabProps, AlbumDetailsFormData, AlbumDetails, MusicTabProps, SongItem, TABS, SongData, AddMusicTab } from "./common";
import { Genre } from "../../../../Domain/Model/Music/Genre";
import { Artist, Track } from "../../../../Domain/Model/Music";
import FidarrModal from "../../../Common/modal";
import SearchArtists from "../../Components/SearchArtists";


const albumDetailSchema = yup.object({
    name: yup.string().required(),
    description: yup.string().required(),
    artworkFile: yup.string().required(),
    releaseDate: yup.string().required(),
    upcCode: yup.string(),
    isrcCode: yup.string(),
    cLine: yup.string(),
    pLine: yup.string(),
  }).required();

const DetailsTab = (props : DetailsTabProps) => {
    const album = useSelector((state: RootState) => state.selectedAlbum.Album);
    const [albumGenres, setAlbumGenres] = useState<Genre[]>([])
    const [imagePath, setImagePath] = useState<string | null>(null);
    const [artworkFile, setArtworkFile] = useState<File | null>(null);
    const [selectedArtists, setSelectedArtists] = useState<Artist[]>([])

    const [modalOpen, setModalOpen] = useState(false)

    const selectArtist = (artist: Artist) => {
       
      setSelectedArtists(prev => ([artist]))
  
    }
    const unSelectArtist = (artist: Artist) => {
     
      setSelectedArtists(prev => ([...prev.filter(t => t.id != artist.id)]))
      
    }

    const doneSelecting = () => {
      console.log(selectedArtists)
      setModalOpen(prev =>false)
     
    }
   
   useEffect(() => {
        setImagePath(album?.imgSrc!!)
        setAlbumGenres(album?.genres!!)
   },[album])
   const { control, handleSubmit, formState: { errors }  } = useForm<AlbumDetailsFormData>({
    resolver: yupResolver(albumDetailSchema),
    defaultValues: {
        name : album?.name,
        description: album?.description,
        releaseDate: album?.releaseDate,
        genres: album?.genres.map(g => g.id),
        artworkFile: album?.imgSrc,
        upcCode: "",
        isrcCode: "",
        cLine: "",
        pLine: "",
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
    if(selectedArtists.length > 0){
     props.handleAlbumDetails({
        name: data.name,
        description: data.description,
        releaseDate: data.releaseDate,
        artistId: selectedArtists[0].id,
        genres: albumGenres.map(g => g.id),
        upcCode: data.upcCode,
        isrcCode: data.isrcCode,
        cLine: data.pLine,
        pLine: data.cLine,
        artworkFile: artworkFile
     } as AlbumDetails)
     props.switchTab()
    }
  }
    return (
        <form className='mx-auto' onSubmit={handleSubmit(onSubmit)}>
           
            
        <div className="flex flex-row  mx-auto">

              <FidarrModal height={500} width={800} title="Sure" close={() => setModalOpen(false)} afterOpen={() =>{}} isOpen={modalOpen}>
                <div className="w-full flex flex-col gap-4">
                    <div className="w-1/4 self-end">
                      <PrimaryButton disabled={selectedArtists.length < 1} type="button" onClick={() => doneSelecting()} title='Done' padY={2} padX={3} height="10" width="full" />
                    </div>
                  <SearchArtists selectOne unSelectArtist={unSelectArtist} 
                  selectedArtists={selectedArtists} selectArtist={selectArtist} />
                
                </div>
              </FidarrModal>
            
            <div className="flex flex-col">    
            <p className="text-red-600">{errors.artworkFile?.message}</p>               
            {imagePath != null ? <img className="rounded-md h-40 w-40" src={imagePath!} />
                   : <p className="rounded-md h-40 w-40 bg-fidarrgray-900 flex flex-row items-center text-white">
                     <span className='mx-auto'>Album Photo</span></p> }
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
                </div>
                <div className="container grid m-auto grid-cols-2 gap-4">
                <Controller
                         name="name"
                         control={control}
                         render={({ field }) => <PrimaryTextField name={field.name} type="text" value={field.value} padX={6} padY={2} onChanged={field.onChange} width="full" height="10" label="Album Title" placeholder="Album Title" />}
                   /> 
                
               
                <PrimaryTextField  onClicked={() => setModalOpen(true)} name="artist" type="text" value={selectedArtists[0]?.name} padX={6} padY={2}  width="full" height="10" label="Artist" placeholder="Artist" />    

                <div className=' col-span-2 flex flex-col gap-2'>
                    <div>
                      <p className='text-sm font-bold text-fidarrgray-900'>Genres</p>
                    </div>
                    <div className='flex flex-row gap-auto items-center'>
                      {
                      props.genres.map( g => <Controller
                        name="genres"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) =>    <div className='flex flex-row items-center'>
                                                          <input type="checkbox"                                                         
                                                          name={field.name} 
                                                          onChange={ (e) => {
                                                               const genre = props.genres.find(g => g.id ==e.target.value)
                                                               if(genre != null && !albumGenres.includes(genre))
                                                                  setAlbumGenres(prev => [...prev,genre])
                                                          }}
                                                          value={g.id}
                                                          checked={albumGenres.find( ge => ge.id == g.id) != null}
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







const EditAlbumPage = () => {
    const album = useSelector((state: RootState) => state.selectedAlbum.Album);
    const {genres, getAllGenres} = useGenreModelController(genreRepository)
    
    const {editAlbum, fetchStatus, albumModified} = useAlbumModelController(albumRepository)
    const [activeTab, setActiveTab] = useState(TABS.Details);
    const [songsData, setSongsData] = useState<SongData[]>(album?.songs.map((s,i) => {
                return {
                    id: i,
                    name: s.name,
                    artist: s.artist.name,
                    featuring: [],
                    genres: s.genres,
                    isrcCode: s.isrcCode
                
                } as SongData
        }  
    ) as SongData[] )
    const [albumDetails, setAlbumDetails] = useState<AlbumDetails|null>(null);
    const [songCount,setSongCount] = useState(album?.songs.length ?? 0)
    useEffect( () => {
      getAllGenres()
     }, []);
    const addSongItem = () => {
       
        setSongsData([...songsData,{id: songCount}])
        setSongCount(songCount+1)
    }
    const addExistingSongItem = (song: Track) => {
      setSongsData([...songsData,{
        id: songCount,
        name: song.name,
        artist: song.artist.name,
        featuring: [],
        genres: song.genres,
        isrcCode: song.isrcCode,
        existing: true,
        existingSongId: song.id
    
    }])
    setSongCount(songCount+1)
  }

    const handleAlbumDetails = (data: AlbumDetails) => {
               setAlbumDetails(data)
    }
    const handleSongEditing = (data: SongData) => {
        
            var filtered = songsData.filter(s => s.id != data.id)
            
            setSongsData([...filtered, data])
       
      }
    const handleDeleteSongItem = (id: number) => {
            
            setSongsData(songsData.filter(i => i.id != id))
            setSongCount(songCount-1)
           
      }
   
    
    const handleDetailsTab = () => {
        console.log("going to details")
        setActiveTab(TABS.Details);
      };
      const handleAddMusicTab = () => {
        console.log("going to music")
        setActiveTab(TABS.AddMusic);
    };
    const submitAlbum = () => {
        editAlbum(album?.id!!,albumDetails?.artworkFile!,  songsData.filter(s => !s.existing).map(s => s.file!),{
          name: albumDetails?.name!,
          description: albumDetails?.description!,
          artistId : albumDetails?.artistId!,
          genres: albumDetails?.genres!,
          existingSongs: songsData.filter(s => s.existing).map(s => s.existingSongId!),
          songNames: songsData.filter(s => !s.existing).map(s => s.name!),
          songGenres: songsData.filter(s => !s.existing).map(s => s.genres!.map(g => g.id)),
          songArtists: songsData.filter(s => !s.existing).map(s => s.artist!),
          songsISRCCodes: songsData.filter(s => !s.existing).map(s => s.isrcCode!),
          songFiles: songsData.filter(s => !s.existing).map(s => s.file!),
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
                    {activeTab == TABS.Details ? <DetailsTab handleAlbumDetails={handleAlbumDetails} switchTab={handleAddMusicTab} genres={genres} /> 
                    : <AddMusicTab addExistingSongItem={addExistingSongItem} songsData={songsData} addSongItem={addSongItem} submitAlbum={submitAlbum} handleSongEditing={handleSongEditing} handleDeleteSongItem={handleDeleteSongItem} switchTab={handleDetailsTab} genres={genres} />}
                </div>
                <div className="w-1/5" />
            </div>
          </div>   
       
      </div>
      </div>
    )
}

export default EditAlbumPage