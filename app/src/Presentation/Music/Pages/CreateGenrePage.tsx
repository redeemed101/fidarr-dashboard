import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import HeaderSection from "../../Common/HeaderSection"
import { PrimaryButton, SecondaryButton } from "../../Common/buttons"
import PrimaryFileInput from "../../Common/fileInput"
import TextArea from "../../Common/textarea"
import { PrimaryTextField } from "../../Common/textfields"
import MenuColumn from "../../Dashboard/Components/MenuColumn"
import { genreRepository } from '../../../main';
import { useGenreModelController } from '../hooks/useGenreModelController';
import { useState } from 'react';
import { AxiosProgressEvent } from 'axios';
import { RequestStatus } from '../hooks/common';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type FormData = {
  name: string;
  picture: string
};
const schema = yup.object({
  name: yup.string().required(),
  picture: yup.string().required(),
}).required();
const CreateGenrePage = () => {
  const { createGenre, fetchStatus} = useGenreModelController(genreRepository)
  console.log(fetchStatus?.toString)
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const { control, handleSubmit, formState: { errors }  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',      
      picture:''
    }
  });
  const onSubmit = (data : FormData) => {
    console.log(data);
    if(imageFile != null)
      createGenre({
        name: data.name,
        image: imageFile
      },(progressEvent : AxiosProgressEvent) => {
        const progress = progressEvent.total != null ? Math.round((100 * progressEvent.loaded) / progressEvent.total) : 0;
        setProgress(progress);
      })
  }
    return (
       
       <div className="h-screen bg-black">
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row ">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
            <div className="bg-fidarrgray-600 pl-8">
              <HeaderSection title="Music" />
            </div>
            <form className="flex flex-col mx-auto pt-12" onSubmit={handleSubmit(onSubmit)}>
            <div className='w-full'>
                <div className="flex flex-col">
                  <p className="text-white font-bold pb-4">Create Genre</p>
                  {fetchStatus == RequestStatus.Failure ? <div className="mx-auto"><p className="text-red-600">Genre not created </p></div> : ""}
                </div>
                <div className="flex flex-col pl-4 pt-12">
                  <div className="flex flex-row gap-4">
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
                            name="picture"
                            control={control}
                            render={({ field }) => <PrimaryFileInput name={field.name} value={field.value} onChanged={field.onChange}  padX={6} padY={4} width="full" height="10" label="Upload Art" />}
                     />
                     
                      <div className="relative -mt-2">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-fidarrgray-900">
                                <div style={{width : `${progress}%`}} aria-valuenow={progress} aria-valuemin={0}  aria-valuemax={100} className="bg-red-700 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center "></div>
                            </div>
                       </div>
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

export default CreateGenrePage