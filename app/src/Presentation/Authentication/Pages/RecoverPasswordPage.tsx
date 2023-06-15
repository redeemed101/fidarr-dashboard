
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import FidarrLogo from "../../../Assets/svgs/FidarrLogo.svg";
import { PrimaryButton } from '../../Common/buttons';
import { GrayedTextField, PasswordToggleField } from '../../Common/textfields';
import { authenticationRepository } from '../../../main';
import { usePasswordModelController } from '../Hooks/useAuthenticationModelController';
import { RequestStatus } from '../../Music/hooks/common';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../StateManagement/redux/store';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type FormData = {
    code: string;
    password: string;
    confirmPassword: string;
  };
  const schema = yup.object({
    code: yup.string().required(),
    password: yup.string()
    .min(4, "Password length should be at least 4 characters")
    .max(12, "Password cannot exceed more than 12 characters")
    .required(),
    confimPassword: yup.string()
    .min(4, "Password length should be at least 4 characters")
    .max(12, "Password cannot exceed more than 12 characters")
    .oneOf([yup.ref("password")], "Passwords do not match").required(),
  }).required();
const RecoverPasswordPage = () => {
    const email = useSelector((state: RootState) => state.recoverEmail.email);
    const {resetPassword, fetchStatus, successful} = usePasswordModelController(authenticationRepository);
    const [showPassword, toggleShowPassword] = useState<boolean>(false);
    const { control, handleSubmit, formState: { errors }  } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
          code: '',
          password: "",
          confirmPassword:""
        }
      });
    const onSubmit = (data : FormData) => {
        console.log(data);
        if(email != null)
           resetPassword(email,data.password, data.code)
    }
    return (
        <div className="items-center  flex flex-col mx-auto bg-black h-screen">
            <div className='pt-32 w-3/5 items-center mx-auto flex flex-col'>
                <div >
                   <img src={FidarrLogo} alt="Fidarr Logo" />
                </div>
                <div className='my-6 flex flex-col items-center'>
                    <h6 className="text-white font-bold">Recover Password</h6>
                    <p className="text-white font-xs w-3/5 text-center pt-2">Input the six digit code sent to your registered email address to change your password.</p>
                    {fetchStatus == RequestStatus.Error ? <p className='text-red-600'>Error Recovering password</p> : ""}
                    {successful ? <p className='text-white text-bold'>Check your mailbox for the reset code</p> : ""}
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <div className=" w-full items-center flex flex-row">
                        <div className="w-1/3"></div>
                        <div className='w-1/3'>
                            <div className="flex flex-col">
                            <a href="#" className="text-red-900 font-xs font-bold self-end">Resend Code</a>
                            <Controller
                                        name="code"
                                        control={control}
                                        render={({ field }) => <GrayedTextField  name={field.name} type="text" value={field.value} onChanged={field.onChange} padX={6} padY={2} width="full" height="10" label="Recovery Code" placeholder="Enter Recovery Code" />}
                            />
                            
                            </div>
                            <div className='w-full flex flex-col items-center gap-4'>
                            <Controller
                                        name="password"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field }) =>  <PasswordToggleField value={field.value} name={field.name} onChanged={field.onChange} toggleShow={() => toggleShowPassword(!showPassword)}  type="password" show={showPassword} padX={6} padY={2} width="full" height="10" placeholder="New Password" />  }
                            />
                            <Controller
                                        name="confirmPassword"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field }) =>  <PasswordToggleField value={field.value} name={field.name} onChanged={field.onChange} toggleShow={() => toggleShowPassword(!showPassword)}  type="password" show={showPassword} padX={6} padY={2} width="full" height="10" placeholder="Confirm New Password" />  }
                            />
                             {fetchStatus == RequestStatus.Loading ? 
                               <div className='w-full bg-red-700 flex flex-col h-10 justify-center items-center rounded-md'><FontAwesomeIcon className='text-white spinner'  icon={faSpinner} /></div> 
                               : <PrimaryButton title='Change Password' padY={2} padX={3} height="10" width="full" />
                             }
                            </div>
                        
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

export default RecoverPasswordPage