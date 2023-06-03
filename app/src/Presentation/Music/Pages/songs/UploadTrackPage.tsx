import { useEffect, useState } from "react"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { genreRepository, songRepository } from "../../../../main"
import { Primary } from "../../../../stories/Button.stories"
import HeaderSection from "../../../Common/HeaderSection"
import { PrimaryButton, SecondaryButton } from "../../../Common/buttons"
import PrimaryDatePicker from "../../../Common/datepicker"
import PrimaryFileInput from "../../../Common/fileInput"
import PrimarySelect, { PrimarySelectOption } from "../../../Common/select"
import TextArea from "../../../Common/textarea"
import { PrimaryTextField } from "../../../Common/textfields"
import MenuColumn from "../../../Dashboard/Components/MenuColumn"
import { useGenreModelController } from "../../hooks/useGenreModelController"
import { useSongModelController } from "../../hooks/useSongModelController";
import { AxiosProgressEvent } from "axios";
import { RequestStatus } from "../../hooks/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Genre } from "../../../../Domain/Model/Music/Genre";
import FidarrModal from "../../../Common/modal";
import SearchArtists from "../../Components/SearchArtists";
import { Artist } from "../../../../Domain/Model/Music";


type FormData = {
  name : string,
  description: string,
  upcCode: string,
  isrcCode: string,
  cLine:string,
  pLine:string,
  featuringArtists?: string[],
  genres?: string[],
  albumId?: string,
  previewFile?: string
  artworkFile?: string,
  songFile : string,
  releaseDate: string
};
const schema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  artistId: yup.string().required(),
  albumId: yup.string().required(),
  previewFile: yup.string().required(),
  artworkFile: yup.string().required(),
  songFile: yup.string().required(),
  releaseData: yup.string().required()
}).required();

const UploadTrackPage = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedArtists, setSelectedArtists] = useState<Artist[]>([])
  const {genres, getAllGenres} = useGenreModelController(genreRepository)
  const [songGenres, setSongGenres] = useState<Genre[]>([])
  const [imagePath, setImagePath] = useState<string | null>(null);
  const [artworkFile, setArtworkFile] = useState<File | null>(null);
  const [songFile, setSongFile] = useState<File | null>(null);
  const [previewFile, setPreviewFile] = useState<File | null>(null);
  const {fetchStatus, createSong} = useSongModelController(songRepository)
  const [progress, setProgress] = useState(0);
  useEffect( () => {
       getAllGenres()
  }, []);
  const { control, handleSubmit, formState: { errors }  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name : "",
      description: "",
      featuringArtists: [],
      genres: [],
      albumId: "",
      previewFile: "",
      artworkFile: "",
      songFile : "",
      upcCode: "",
      isrcCode:"",
      cLine: "",
      pLine:""
    }
  });
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
  const setImagePreview = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {files} = event.target
    console.log(files?.[0])
    if(files != null){
       setImagePath(URL.createObjectURL(files[0]))
       setArtworkFile(_prev => files[0])
    }
   
  }
  const onSubmit = (data : FormData) => {
    console.log(data);
    if(songFile != null && selectedArtists.length > 0){
        createSong(songFile, {
          name: data.name,
          description: data.description,
          artistId: selectedArtists[0].id,
          featuringArtists : data.featuringArtists,
          genres : data.genres,
          albumId : data.albumId,
        },(progressEvent : AxiosProgressEvent) => {
          const progress = progressEvent.total != null ? Math.round((100 * progressEvent.loaded) / progressEvent.total) : 0;
          setProgress(prev => progress);
        }, artworkFile)
     }
    }
    return (
       
       <div className="h-auto bg-black">
        <FidarrModal height={500} width={800} title="Sure" close={() => setModalOpen(false)} afterOpen={() =>{}} isOpen={modalOpen}>
          <div className="w-full flex flex-col gap-4">
               <div className="w-1/4 self-end">
                <PrimaryButton disabled={selectedArtists.length < 1} type="button" onClick={() => doneSelecting()} title='Done' padY={2} padX={3} height="10" width="full" />
               </div>
             <SearchArtists selectOne unSelectArtist={unSelectArtist} 
             selectedArtists={selectedArtists} selectArtist={selectArtist} />
           
           </div>
        </FidarrModal>
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row ">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
            <div className="bg-fidarrgray-600 pl-8">
              <HeaderSection title="Music" />
            </div>
            <form className='mx-auto' onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row  mx-auto pt-12 ">
                <div className="flex flex-col h-auto w-40">
                  <p className="text-white font-bold pb-4">Upload Track</p>
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
                  <div className="container grid m-auto grid-cols-2 gap-4">
                  <Controller
                                    name="name"
                                    control={control}
                                    render={({ field }) => <PrimaryTextField name={field.name} type="text" value={field.value} padX={6} padY={2} onChanged={field.onChange} width="full" height="10" label="Track Title" placeholder="Track Title" />}
                   />   
                  
                   {/*<PrimarySelect  options={genres.map(g => {
                    return {label : g.name, value: g.id} as PrimarySelectOption }) } label="Genre" width="full" padX={3} />*/}
                    
                   <PrimaryTextField  onClicked={() => setModalOpen(true)} name="artist" type="text" value={selectedArtists[0]?.name} padX={6} padY={2}  width="full" height="10" label="Artist" placeholder="Artist" />
                        
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
                                                          name={field.name} 
                                                          onChange={ (e) => {
                                                            const genre = genres.find(g => g.id ==e.target.value)
                                                            if(genre != null && !songGenres.includes(genre))
                                                               setSongGenres(prev => [...prev,genre])
                                                            }}
                                                          value={g.id}
                                                          checked={songGenres.find( ge => ge.id == g.id) != null}
                                                          className="text-fidarrgray-900 hover:bg-fidarrgray-600 cursor-pointer w-6 h-6 border-3 border-amber-500 focus:outline-none rounded" />
                                                          <label htmlFor={field.name} className="text-white mx-4 ">{g.name}</label>
                                                  </div>
                        }
                      />)
                    }
                   </div>
                  </div>
                  
                   <PrimaryTextField type="text" value="" padX={6} padY={2} width="full" height="10" label="Featuring" placeholder="Featuring" />
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
                                    name="pLine"
                                    control={control}
                                    render={({ field }) => <PrimaryTextField name={field.name} type="text" value={field.value} padX={6} padY={2} onChanged={field.onChange} width="full" height="10" label="(P) Line" placeholder="YYYY Copyright Holder" />}
                   />   
                    <Controller
                                    name="releaseDate"
                                    control={control}
                                    render={({ field }) => <PrimaryDatePicker name={field.name} onChanged={field.onChange}   value={field.value} padX={6} padY={2} width="full" height="10" label="Release Date" />}
                     />
                  
                   <div className="w-full flex flex-col gap-2">
                   <Controller
                                    name="songFile"
                                    control={control}
                                    render={({ field }) => <PrimaryFileInput name={field.name} value={field.value} onChanged={field.onChange}  padX={6} padY={4} width="full" height="10" label="Upload Track" />}
                     />
                     
                      {/*<div className="relative pt-1">
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-fidarrgray-900">
                            <div style={{width : `${progress}%`}} aria-valuenow={progress} aria-valuemin={0}  aria-valuemax={100} className="bg-red-700 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center "></div>
                        </div>
                         </div>*/}
                   </div>
                  
                   
                  </div>
                  <div>
                  <Controller
                                    name="description"
                                    control={control}
                                    render={({ field }) => <TextArea name={field.name} onChanged={field.onChange}   value={field.value} padX={6} label="Bio" padY={2} width="full" height="20" placeholder="" />}
                     />
                    
                  </div>
                  <div className="self-end">
                     {fetchStatus == RequestStatus.Loading ? 
                               <div className='w-full bg-red-700 flex flex-col h-10 justify-center items-center rounded-md'><FontAwesomeIcon className='text-white spinner'  icon={faSpinner} /></div> 
                               : <PrimaryButton disabled={false} type="submit" title='Save' padY={2} padX={4} height="10" width="full" /> 
                      }                     
                  </div>
                </div>
               
            </div>
            </form>
          </div>   
       
      </div>
      </div>
    )
}

export default UploadTrackPage