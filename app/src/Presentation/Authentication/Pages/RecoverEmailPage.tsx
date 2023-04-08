import React from 'react';
import FidarrLogo from "../../../Assets/svgs/FidarrLogo.svg";
import EyeOff from "../../../Assets/svgs/eye-off.svg";
import { PrimaryButton } from '../../Common/buttons';
import { GrayedTextField, PasswordToggleField } from '../../Common/textfields';


const RecoverEmailPage = () => {
    return (
        <div className="items-center  flex flex-col mx-auto bg-black h-screen">
            <div className='pt-32 w-3/5 items-center  mx-auto flex flex-col'>
                <div >
                   <img src={FidarrLogo} alt="Fidarr Logo" />
                </div>
                <div className='my-6 flex flex-col items-center'>
                    <h6 className="text-white font-bold">Recover Password</h6>
                    <p className="text-white font-xs w-3/5 text-center pt-2">Will send a password recovery code to your registered email address</p>
                </div>
                <div className=" w-full items-center flex flex-row">
                    <div className="w-1/3"></div>
                    <div className='w-1/3 flex flex-col gap-4'>
                        <GrayedTextField type="text" value="" padX={6} padY={2} width="full" height="10" label="Email Address" placeholder="Enter Email Address" />
                                                
                        <PrimaryButton title='Send Code' padY={2} padX={3} height="10" width="full" />
                    </div>
                    <div className="w-1/3 bg-red-900"></div>
                    
                </div>
                <div className='pt-32'>
                    <p className='text-white'>{new Date().getFullYear() + " Fidarr, Inc"}</p>
                </div>
            </div>
        </div>
    )
}

export default RecoverEmailPage