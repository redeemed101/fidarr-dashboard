import React, { useEffect } from 'react';
import FidarrLogo from "../../../Assets/svgs/FidarrLogo.svg";
import { PrimaryButton } from '../../Common/buttons';
import { PrimaryTextField } from '../../Common/textfields';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuthenticationModelController } from '../Hooks/useAuthenticationModelController';
import { authenticationRepository } from '../../../main';
import { RequestStatus } from '../../Music/hooks/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const code = searchParams.get('inviteCode');
    if( code == null){
        navigate("/")
    }
    const {checkInvitationCode,processing,successful, fetchStatus} = useAuthenticationModelController(authenticationRepository)
    useEffect(() => {
        if(code != null)
            checkInvitationCode(code)
    },[code])
    
    return (
        <div className="items-center  flex flex-col mx-auto bg-black h-screen">
            <div className='py-20 w-3/5 items-center mx-auto flex flex-col'>
                <div >
                   <img src={FidarrLogo} alt="Fidarr Logo" />
                </div>
                <div className='my-6'>
                    <h6 className="text-white font-bold">New Profile Onboarding</h6>
                    { processing ?? <p className='font-bold text-red-600'>Checking code...</p>}
                </div>
                <div className=" w-full items-center flex flex-row">
                    <div className="w-1/3"></div>
                    <div className='w-1/3'>
                        <PrimaryTextField type="text" value="" padX={6} padY={2} width="full" height="10" label="Name" placeholder="Name" />
                        <PrimaryTextField type="password" value="" padX={6} padY={2} width="full" height="10" label="New Password" placeholder="Password" />
                        <PrimaryTextField type="password" value="" padX={6} padY={2} width="full" height="10" label="Confirm Password" placeholder="Confirm Password" />
                        <div className='py-4'></div>
                        {fetchStatus == RequestStatus.Loading ? 
                               <div className='w-full bg-red-700 flex flex-col h-10 justify-center items-center rounded-md'><FontAwesomeIcon className='text-white spinner'  icon={faSpinner} /></div> 
                               : <PrimaryButton disabled={successful ? false : true} title='Finish Onboarding' padY={2} padX={3} height="10" width="full" />
                        }
                    </div>
                    <div className="w-1/3 bg-red-900"></div>
                    
                </div>
                <div className='py-12'>
                    <p className='text-white'>{new Date().getFullYear() + " Fidarr, Inc"}</p>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage