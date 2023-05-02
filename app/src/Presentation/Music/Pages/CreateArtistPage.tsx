import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import HeaderSection from "../../Common/HeaderSection"
import { PrimaryButton, SecondaryButton } from "../../Common/buttons"
import TextArea from "../../Common/textarea"
import { PrimaryTextField } from "../../Common/textfields"
import MenuColumn from "../../Dashboard/Components/MenuColumn"
import { useState } from 'react';
import { artistRepository } from '../../../main';
import { ArtistData, useArtistModelController } from '../hooks/useArtistModelController';

type FormData = {
  name: string;
  username: string;
  address: string;
  website: string;
  bio : string;
  picture: string
};
const schema = yup.object({
  email: yup.string().email().required(),
}).required();
const CreateArtistPage = () => {
    const [imagePath, setImagePath] = useState<string | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const { createArtist, fetchStatus} = useArtistModelController(artistRepository)
    const { control, handleSubmit, formState: { errors }  } = useForm<FormData>({
      resolver: yupResolver(schema),
      defaultValues: {
        name: '',
        username:'',
        address:'',
        website:'',
        bio:'',
        picture:''
      }
    });
    const setImagePreview = (event: React.ChangeEvent<HTMLInputElement>) => {
      const {files} = event.target
      console.log(files?.[0])
      if(files != null){
         setImagePath(URL.createObjectURL(files[0]))
      }
     
    }
    const onSubmit = (data : FormData) => {
      console.log(data);
      if(imageFile != null)
        createArtist(imageFile, {
          name: data.name,
          username: data.username,
          address: data.address,
          website: data.website,
          bio: data.bio,
        },() => {})
    }
    return (
       
       <div className="h-screen bg-black">
        <div style={{height:"inherit"}}  className="pb-4 flex flex-row ">
          <MenuColumn />
          <div className="flex  gap-4 flex-col w-full">
            <div className="bg-fidarrgray-600 pl-8">
              <HeaderSection title="Music" />
            </div>
            <form className='mx-auto' onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row  mx-auto pt-12">
             
                <div className="flex flex-col h-auto w-40">
                  <p className="text-white font-bold pb-4 ">Create Artist</p>
                  
                  {imagePath != null ? <img className="rounded-md h-32 w-32" src={imagePath!} />
                   : <p className="rounded-md h-32 w-32 bg-fidarrgray-900 flex flex-row items-center text-white">
                     <span className='mx-auto'>Artist Photo</span></p> }
                  <div className="pt-4 self-center px-4">
                  <Controller
                    control={control}
                    name={"picture"}
                    rules={{ required: "Recipe picture is required" }}
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
                    
                    {/*<input type="file" className="h-auto w-full" accept="image/*" onChange={setImagePreview} />*/}
                    {/*<SecondaryButton title='Upload Picture' padY={2} padX={2} height="auto" width="full" />*/}
                  </div>
                </div>
              
                <div className="flex flex-col pl-4 pt-12">
                  <div className="flex flex-row gap-4">
                  <Controller
                                    name="name"
                                    control={control}
                                    render={({ field }) => <PrimaryTextField name={field.name} type="text" value={field.value} padX={6} padY={2} onChanged={field.onChange} width="full" height="10" label="Name" placeholder="Name" />}
                   />
                    <Controller
                                    name="username"
                                    control={control}
                                    render={({ field }) => <PrimaryTextField name={field.name} type="text" value={field.value} padX={6} padY={2} onChanged={field.onChange} width="full" height="10" label="Username" placeholder="Username" />}
                   />            
                   
                  </div> 
                  <div className="flex flex-row gap-4">
                  <Controller
                                    name="username"
                                    control={control}
                                    render={({ field }) => <PrimaryTextField name={field.name} type="text" value={field.value} padX={6} padY={2} onChanged={field.onChange} width="full" height="10" label="Address" placeholder="Address"  />}
                   />      
                   <Controller
                                    name="website"
                                    control={control}
                                    render={({ field }) => <PrimaryTextField name={field.name} type="text" value={field.value} padX={6} padY={2} onChanged={field.onChange} width="full" height="10" label="Website" placeholder="Website"  />}
                   />      
                  
                  </div>
                  <div>
                  <Controller
                                    name="bio"
                                    control={control}
                                    render={({ field }) => <TextArea name={field.name} value={field.value} padX={6} padY={2} onChanged={field.onChange} width="full" height="10"  placeholder="Name" label="name"  />}
                   />      
                   
                  </div>
                  <div className="self-end">
                     <PrimaryButton  title='Create' padY={2} padX={4} height="auto" width="full"/>
                  </div>
                </div>
              
               
            </div>
            </form> 
          </div>   
       
      </div>
      </div>
    )
}

export default CreateArtistPage