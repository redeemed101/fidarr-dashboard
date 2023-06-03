import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import HeaderSection from "../../../Common/HeaderSection"
import { PrimaryButton, SecondaryButton } from "../../../Common/buttons"
import PrimaryFileInput from "../../../Common/fileInput"
import TextArea from "../../../Common/textarea"
import { PrimaryTextField } from "../../../Common/textfields"
import MenuColumn from "../../../Dashboard/Components/MenuColumn"
import { genreRepository } from '../../../../main';
import { useGenreModelController } from '../../hooks/useGenreModelController';
import { useEffect, useState } from 'react';
import { AxiosProgressEvent } from 'axios';
import { RequestStatus } from '../../hooks/common';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../StateManagement/redux/store';

type FormData = {
  name: string;
  picture: string
};
const schema = yup.object({
  name: yup.string().required(),
  picture: yup.string().required(),
}).required();
const EditGenrePage = () => {
 const genre = useSelector((state: RootState) => state.selectedGenre.Genre);
  const { editGenre, fetchStatus} = useGenreModelController(genreRepository)
  
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePath, setImagePath] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const { control, handleSubmit, formState: { errors }  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: genre?.name,      
      picture:genre?.imgSrc
    }
  });
  useEffect(() => {
      setImagePath(genre?.imgSrc!!)
  },[genre])
  const setImagePreview = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {files} = event.target
    console.log(files?.[0])
    if(files != null){
       setImagePath(_p => URL.createObjectURL(files[0]))
    }
   
  }
  const onSubmit = (data : FormData) => {
    console.log(data);
    if(imageFile != null)
      editGenre(genre?.id!!,{
        name: data.name,
        image: imageFile
      },(progressEvent : AxiosProgressEvent) => {
        const progress = progressEvent.total != null ? Math.round((100 * progressEvent.loaded) / progressEvent.total) : 0;
        setProgress(progress);
      })
  }
    return (
       
       <div className="min-h-screen bg-black">
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row ">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
            <div className="bg-fidarrgray-600 pl-8">
              <HeaderSection title="Music" />
            </div>
            <form className="flex flex-col mx-auto pt-12" onSubmit={handleSubmit(onSubmit)}>
            <div className='w-full'>
                <div className="flex flex-col">
                  <p className="text-white font-bold pb-4">Edit Genre</p>
                  {fetchStatus == RequestStatus.Failure ?? <div className="mx-auto"><p className="text-red-600">Genre not Edited </p></div>}
                  {imagePath != null ? <img className="rounded-md h-32 w-32" src={imagePath!} />
                   : <p className="rounded-md h-32 w-32 bg-fidarrgray-900 flex flex-row items-center text-white">
                     <span className='mx-auto'>Artist Photo</span></p> }
                </div>
                <div className="flex flex-col pl-4 pt-12">
                  <div className="flex flex-row gap-4 items-center">
                   <div className='flex flex-col'>
                    <p className="text-red-600">{errors.name?.message}</p>
                    <Controller
                                      name="name"
                                      control={control}
                                      render={({ field }) => <PrimaryTextField name={field.name} type="text" value={field.value} padX={6} padY={2} onChanged={field.onChange} width="full" height="10" label="Genre Name" placeholder="Genre Name" />}
                    />   
                   </div>

                   <div className="flex flex-col">
                      <p className="text-red-600">{errors.name?.message}</p>
                      <Controller
                            control={control}
                            name={"picture"}
                            rules={{ required: "Genre picture is required" }}
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
                                className='h-auto w-full bg-white text-black py-1 rounded mt-2'
                                />
                            );
                            }}
                        />
                     
                        {/*<div className="relative -mt-2">
                                <div className="overflow-hidden h-2 text-xs flex rounded bg-fidarrgray-900">
                                    <div style={{width : `${progress}%`}} aria-valuenow={progress} aria-valuemin={0}  aria-valuemax={100} className="bg-red-700 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center "></div>
                                </div>
                        </div>*/}
                   </div>
                   
                   
                  </div> 
                  
                  
                  <div className="mt-6 self-end w-1/4">
                  {fetchStatus == RequestStatus.Loading ? 
                               <div className='w-full bg-red-700 flex flex-col h-10 justify-center items-center rounded-md'><FontAwesomeIcon className='text-white spinner'  icon={faSpinner} /></div> 
                               : <PrimaryButton disabled={false} type="submit" title='Save' padY={2} padX={3} height="10" width="full" /> 
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

export default EditGenrePage