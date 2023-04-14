
import { Link } from "react-router-dom";
import FidarrLogo from "../../../Assets/svgs/FidarrLogo.svg";
import { PrimaryButton } from '../../Common/buttons';
import { GrayedTextField, PasswordToggleField } from '../../Common/textfields';

const LoginPage = () => {
    return (
        <div className="items-center  flex flex-col mx-auto bg-black h-screen">
            <div className='pt-32 w-3/5 items-center mx-auto flex flex-col'>
                <div >
                   <img src={FidarrLogo} alt="Fidarr Logo" />
                </div>  
                <div className='my-6'>
                    <h6 className="text-white font-bold">Welcome Back</h6>
                </div>
                <div className=" w-full items-center flex flex-row">
                    <div className="w-1/3"></div>
                    <div className='w-1/3'>
                        <GrayedTextField type="text" value="" padX={6} padY={2} width="full" height="10" label="Name" placeholder="Name" />
                        <div className='w-full flex flex-row items-center'>
                          <PasswordToggleField type="password" value="" show={true} padX={6} padY={2} width="full" height="10" placeholder="Password" />
                          
                        </div>
                        <div className='py-4 container flex items-center flex-col'>
                            <a href="#" className="text-red-900 underline">Forgot Password?</a>
                        </div>
                        <Link to="/dashboard"><PrimaryButton title='Login' padY={2} padX={3} height="10" width="full" /></Link>
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

export default LoginPage