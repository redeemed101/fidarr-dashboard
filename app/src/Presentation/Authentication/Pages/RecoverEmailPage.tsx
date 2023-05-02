import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import FidarrLogo from "../../../Assets/svgs/FidarrLogo.svg";
import EyeOff from "../../../Assets/svgs/eye-off.svg";
import { PrimaryButton } from '../../Common/buttons';
import { GrayedTextField, PasswordToggleField } from '../../Common/textfields';
import { authenticationRepository } from '../../../main';
import { usePasswordModelController } from '../Hooks/useAuthenticationModelController';
import { RequestStatus } from '../../Music/hooks/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

type FormData = {
    email: string;
  };
  const schema = yup.object({
    email: yup.string().email().required(),
  }).required();
const RecoverEmailPage = () => {
    const {forgotPassword, fetchStatus, successful} = usePasswordModelController(authenticationRepository);
    const { control, handleSubmit, formState: { errors }  } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
          email: '',
        }
      });
    const onSubmit = (data : FormData) => {
        console.log(data);
        forgotPassword(data.email)
    }
    return (
        <div className="items-center  flex flex-col mx-auto bg-black h-screen">
            <div className='pt-32 w-3/5 items-center  mx-auto flex flex-col'>
                <div >
                   <img src={FidarrLogo} alt="Fidarr Logo" />
                </div>
                <div className='my-6 flex flex-col items-center'>
                    <h6 className="text-white font-bold">Recover Password</h6>
                    <p className="text-white font-xs w-3/5 text-center pt-2">Will send a password recovery code to your registered email address</p>
                    {fetchStatus == RequestStatus.Error ? <p className='text-red-600'>Error Recovering password</p> : ""}
                    {successful ? <p className='text-white text-bold'>Check your mailbox for the reset code</p> : ""}
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className=" w-full items-center flex flex-row">
                    <div className="w-1/3"></div>
                    <div className='w-1/3 flex flex-col gap-4'>
                          <div className="w-full flex flex-col">
                               <p className="text-red-600">{errors.email?.message}</p>
                                <Controller
                                    name="email"
                                    control={control}
                                    render={({ field }) => <GrayedTextField  name={field.name} type="text" value={field.value} onChanged={field.onChange} padX={6} padY={2} width="full" height="10" label="Email Address" placeholder="Email Address" />}
                                />
                                
                            </div>
                        
                            {fetchStatus == RequestStatus.Loading ? 
                               <div className='w-full bg-red-700 flex flex-col h-10 justify-center items-center rounded-md'><FontAwesomeIcon className='text-white spinner'  icon={faSpinner} /></div> 
                               : <PrimaryButton disabled={false} type="submit" title='Send Code' padY={2} padX={3} height="10" width="full" /> 
                            }                   
                       
                    </div>
                    <div className="w-1/3 bg-red-900"></div>
                    
                </div>
                </form>
                <div className='pt-32'>
                    <p className='text-white'>{new Date().getFullYear() + " Fidarr, Inc"}</p>
                </div>
            </div>
        </div>
    )
}

export default RecoverEmailPage