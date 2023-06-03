import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useEffect, useState } from "react";
import FidarrModal from "../../../Common/modal";
import SearchPlaylists from "../../Components/SearchPlaylists";
import { Playlist } from "../../../../Domain/Model/Music/Playlist";
import { usePlaylistModelController } from "../../hooks/usePlaylistModelController";
import { moodRepository, playlistRepository } from "../../../../main";
import FolderPlusIcon from "../../../../Assets/svgs/FolderPlusIcon.svg"
import ListIcon from "../../../../Assets/svgs/ListIcon.svg"
import DeleteIcon from "../../../../Assets/svgs/DeleteIcon.svg"
import { ButtonWithIcon, PrimaryButton } from "../../../Common/buttons";
import MenuColumn from "../../../Dashboard/Components/MenuColumn";
import HeaderSection from "../../../Common/HeaderSection";
import { useMoodModelController } from "../../hooks/useMoodModelController";
import { Controller, useForm } from 'react-hook-form';
import { RequestStatus } from '../../hooks/common';
import { PrimaryTextField } from '../../../Common/textfields';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


type FormData = {
    name: string
    picture: string
  };
  const schema = yup.object({
    name: yup.string().required(),
    songs: yup.array().length(1),
    picture: yup.string().required(),
  }).required();
export const CreateMoodPage = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedPlaylists, setSelectedPlaylists] = useState<Playlist[]>([])
    const [imagePath, setImagePath] = useState<string | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const {fetchStatus, createMood, moodModified} = useMoodModelController(moodRepository)
    const { control, handleSubmit, reset, formState: { errors }  } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
          name: '',
          picture:''
        }
      });
      useEffect(() => {
           if(moodModified){
               reset()
           }
      },[moodModified])
    useEffect(() => {
        console.log(selectedPlaylists)
      }, [selectedPlaylists]);
      const selectPlaylist = (playlist: Playlist) => {
       
        setSelectedPlaylists(prev => ([...prev, playlist]))
  
      }
      const unSelectPlaylist = (playlist: Playlist) => {
       
        setSelectedPlaylists(prev => ([...prev.filter(t => t.id != playlist.id)]))
        
      }
      const doneSelecting = () => {
            console.log(selectedPlaylists)
            setModalOpen(prev =>false)
           
      }
      const setImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {files} = event.target
        console.log(files?.[0])
        if(files != null){
           setImagePath(_p => URL.createObjectURL(files[0]))
           setImageFile(files[0])
        }
       
      }
      const onSubmit = (data : FormData) => {
        console.log(data);
        if(imageFile != null){
         createMood( {
            name: data.name,
            artwork: imageFile,
            playlists: selectedPlaylists.map(s => s.id)
          })
  
        }
      }
    return (
        <div className="min-h-screen bg-black w-full">
        <FidarrModal height={500} width={800} title="Sure" close={() => setModalOpen(false)} afterOpen={() =>{}} isOpen={modalOpen}>
          <div className="w-full flex flex-col gap-4">
             <SearchPlaylists unSelectPlaylist={unSelectPlaylist} 
             selectedPlaylists={selectedPlaylists} selectPlaylist={selectPlaylist} />
             <div className="w-1/4 self-end">
              <PrimaryButton disabled={selectedPlaylists.length < 1} type="button" onClick={() => doneSelecting()} title='Done' padY={2} padX={3} height="10" width="full" />
             </div>
           </div>
        </FidarrModal>
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row ">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
            <div className="bg-fidarrgray-600 pl-8">
              <HeaderSection title="Music" />
            </div>
            <form className='mx-auto' onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col mx-auto pt-12">
                  <div className="flex flex-col">
                    <p className="text-white font-bold pb-4">Create Mood</p>
                    {fetchStatus == RequestStatus.Error ? <p className='text-red-600'>Error creating playlist</p> : ""}
                    {moodModified ?? <p className='text-blue-600'>Mood successfully added</p> }
                  </div>
                  <div className="flex flex-col pl-4 pt-12">
                    <div className="flex flex-row gap-4 items-center ">
                    <div className="flex flex-col">
                    <Controller
                        name="name"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) =>  <PrimaryTextField type="text" value={field.value} name={field.name}
                        onChanged={field.onChange}
                        padX={6} padY={4} width="full" height="10" label="Name" placeholder="Name" />}
                      />
                      
                    </div>
                    <div className="flex flex-col">
                     <div><p className='text-fidarrgray-900 text-sm text-sm font-bold mb-2'>Upload Art</p></div>
                    <Controller
                          control={control}
                          name={"picture"}
                          rules={{ required: "Artist picture is required" }}
                          render={({ field: { value, onChange, ...field } }) => {
                            return (
                              <input
                                {...field}
                                onChange={(event) => {
                                  setImage(event);
                                }}
                                type="file"
                                id="picture"
                                accept="image/*"
                                className='h-10 w-full text-white'
                              />
                            );
                          }}
                        />
                        <div className="relative ">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-fidarrgray-900">
                                <div style={{width : "40%"}} className="bg-red-900 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center "></div>
                              </div>
                        </div>
                    </div>
                    </div> 

                    <div className="flex flex-col mt-4">
                      <div className="">
                        <ButtonWithIcon onClicked={() => setModalOpen(true)} title="Add Playlists" imageSrc={FolderPlusIcon} />
                      </div>
                      <div className="flex flex-col w-full gap-2 mt-6">
                          
                        {

                             selectedPlaylists.map((playlist,i) => 
                              <div key={i} className="flex flex-row items-center gap-1 w-full">
                                  <div className=" w-1/12">
                                  <img  src={ListIcon} />
                                  </div>
                                  <div className=" pr-8  flex flex-col w-10/12">
                                      <div className="px-2 bg-white rounded h-10 w-full">
                                        <p className=" text-black">{playlist.name}</p>
                                      </div>
                                      {/*<PrimaryTextField type="text" value={song.name} padX={2} padY={1} width="full" height="10" label="" placeholder="Imela.mp3" />
                                      <div className="relative -mt-2">
                                          <div className="overflow-hidden h-2 text-xs flex rounded bg-fidarrgray-900">
                                              <div style={{width : "40%"}} className="bg-red-900 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center "></div>
                                          </div>
                                      </div>*/}
                                  </div> 
                                  <div className="   flex flex-row gap-1 w-1/12">
                                      
                                      <img className="cursor-pointer" onClick={() => unSelectPlaylist(playlist)} src={DeleteIcon} />
                                  </div>
                              </div>
                              
                            )
                          
                          }
                      </div>
                    </div>
                    
                    
                    <div className="mt-6 self-end">
                    {fetchStatus == RequestStatus.Loading ? 
                               <div className='w-full bg-red-700 flex flex-col h-10 justify-center items-center rounded-md'><FontAwesomeIcon className='text-white spinner'  icon={faSpinner} /></div> :
                      <PrimaryButton type="submit" disabled={selectedPlaylists.length < 1}  title='Save' padY={2} padX={4} height="auto" width="full"/> }
                    </div>
                  </div>
                
              </div>
            </form>
          </div>   
       
      </div>
      </div>
    )
}