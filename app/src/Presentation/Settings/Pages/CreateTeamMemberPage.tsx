import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { SettingsMenuType, settingsMenuItems } from "../../../StateManagement/SettingsMenu"
import { peopleRepository } from "../../../main"
import { PrimaryButton, SecondaryButton } from "../../Common/buttons"
import PrimarySelect from "../../Common/select"
import { PrimaryTextField } from "../../Common/textfields"
import MenuColumn from "../../Dashboard/Components/MenuColumn"
import { usePeopleModelController } from "../../People/hooks/usePeopleModelController"
import SettingsHeader from "../Sections/SettingsHeader"
import { Controller, useForm } from 'react-hook-form';
import { RequestStatus } from '../../Music/hooks/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';


type FormData = {
  email: string;
  role: string;
};
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const schema = yup.object({
  email: yup.string().email().required(),
  role: yup.string().required(),
}).required();
const CreateTeamMemberPage = () => {
        const { control, handleSubmit, formState: { errors }  } = useForm<FormData>({
          resolver: yupResolver(schema),
          defaultValues: {
            email: '',
            role:""
          }
        });
      const onSubmit = (data : FormData) => {
          console.log(data);
          
      }
    const {fetchStatus, roles,getRoles } = usePeopleModelController(peopleRepository)
    useEffect(()=>{
      getRoles()
    },[])
    return (
        <div className="pb-4 flex flex-row bg-black h-screen">
        <MenuColumn />
        <div className="flex  gap-4 flex-col w-full">
       
           <SettingsHeader selectedType={SettingsMenuType.Team} menus={settingsMenuItems} />
           <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="flex flex-col gap-2 w-1/3 mx-24">
                <div className="flex flex-col gap-1">
                  <p className="text-white text-bold text-xl">Invite New Members</p>
                  <p className="text-white">Enter the email address of the member you'd like to invite and choose the role they should have</p>
                </div>
                <p className="text-red-600">{errors.email?.message}</p>
                <p className="text-red-600">{errors.role?.message}</p>
                <div className="flex flex-row gap-2">
                  <div className="w-3/4 flex flex-col">
                               
                                <Controller
                                    name="email"
                                    control={control}
                                    rules={{ required: true, pattern: emailPattern }}
                                    render={({ field }) => <PrimaryTextField  name={field.name} type="text" value={field.value} onChanged={field.onChange} padX={6} padY={2} width="full" height="12" label="Email Address" placeholder="Email Address" />}
                                />
                                
                  </div>
                
                  <div className="w-1/4">
                  
                  <Controller
                                    name="role"
                                    control={control}
                                    rules={{ required: true, pattern: emailPattern }}
                                    render={({ field }) =>
                                    <PrimarySelect value={field.value} onChanged={field.onChange} options={roles.map((r) => {
                                          return {
                                            label : r.name,
                                             value: r.name
                                          }
                                      }
                                    )} label="Role" width="full" padX={3} />
                      }
                    />
                  </div>
                </div>
                <div className="mt-2 self-end flex flex-row gap-2">
                  <SecondaryButton title='Cancel' padY={2} padX={4} height="auto" width="1/2" />                 
                  {fetchStatus == RequestStatus.Loading ? 
                               <div className='w-1/2 bg-red-700 flex flex-col h-10 py-2 px-4 justify-center items-center rounded-md'><FontAwesomeIcon className='text-white spinner'  icon={faSpinner} /></div> 
                               : <PrimaryButton disabled={false} type="submit" title='Invite' padY={2} padX={4} height="10" width="1/2" /> 
                     }             
                </div>
                
            </div>
           </form>
        </div>   
     
    </div>
  )
    
}

export default CreateTeamMemberPage