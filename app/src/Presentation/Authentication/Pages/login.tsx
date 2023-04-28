

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import FidarrLogo from "../../../Assets/svgs/FidarrLogo.svg";
import { PrimaryButton } from '../../Common/buttons';
import { GrayedTextField, PasswordToggleField } from '../../Common/textfields';
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useAuthenticationModelController } from '../Hooks/useAuthenticationModelController';
import { authenticationRepository } from '../../../main';
import { RequestStatus } from '../../Music/hooks/common';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


type FormData = {
    email: string;
    password: string;
  };
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  }).required();
const LoginPage = () => {

    const {signin, fetchStatus} = useAuthenticationModelController(authenticationRepository)
   
    const [showPassword, toggleShowPassword] = useState<boolean>(false);
    const { control, handleSubmit, formState: { errors }  } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
          email: '',
          password:""
        }
      });
    const onSubmit = (data : FormData) => {
        console.log(data);
        signin(data.email, data.password)
    }
   
    return (
        <div className="items-center  flex flex-col mx-auto bg-black h-screen">
            <div className='pt-32 w-3/5 items-center mx-auto flex flex-col'>
                <div >
                   <img src={FidarrLogo} alt="Fidarr Logo" />
                </div>  
                <div className='my-6 flex flex-col'>
                    <h6 className="text-white font-bold">Welcome Back</h6>
                    {fetchStatus == RequestStatus.Error ? <p className='text-red-600'>Error Logging in</p> : ""}
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <div className=" w-full items-center flex flex-row">
                        <div className="w-1/3"></div>
                        <div className='w-1/3'>
                            <div className="w-full flex flex-col">
                               <p className="text-red-600">{errors.email?.message}</p>
                                <Controller
                                    name="email"
                                    control={control}
                                    rules={{ required: true, pattern: emailPattern }}
                                    render={({ field }) => <GrayedTextField  name={field.name} type="text" value={field.value} onChanged={field.onChange} padX={6} padY={2} width="full" height="10" label="Email Address" placeholder="Email Address" />}
                                />
                                
                            </div>
                            <div className='w-full flex flex-col items-center'>
                                <p className="text-red-600">{errors.password?.message}</p>
                                <Controller
                                    name="password"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) =>  <PasswordToggleField value={field.value} name={field.name} onChanged={field.onChange} toggleShow={() => toggleShowPassword(!showPassword)}  type="password" show={showPassword} padX={6} padY={2} width="full" height="10" placeholder="Password" />  }
                                />
                                
                                                       
                            </div>
                            <div className='py-4 container flex items-center flex-col'>
                                <Link to="/recover"><a href="#" className="text-red-900 underline">Forgot Password?</a></Link>
                            </div>
                            {fetchStatus == RequestStatus.Loading ? 
                               <div className='w-full bg-red-700 flex flex-col h-10 justify-center items-center rounded-md'><FontAwesomeIcon className='text-white spinner'  icon={faSpinner} /></div> 
                               : <PrimaryButton disabled={false} type="submit" title='Login' padY={2} padX={3} height="10" width="full" /> 
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

export default LoginPage