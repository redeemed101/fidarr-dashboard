import { useState } from "react";
import { userManager } from "../../../Data/DataSource/API/Authentication/user";
import { tokenManager } from "../../../Data/DataSource/API/token";
import { AuthenticationRepository } from "../../../Domain/Repository/Users/Authentication/AuthenticationRepository";
import { RequestStatus } from "../../Music/hooks/common";
import { AxiosError } from "axios";
import { setUser } from "../../../StateManagement/redux/userReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


export const useAuthenticationModelController = (repository : AuthenticationRepository) => {
   //const [error, setError] = useState<Error | null>(null)
   const [fetchStatus, setFetchStatus] = useState<RequestStatus>();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const signin = async(email: string, password: string) => {
       console.log("In here")
       try{
            setFetchStatus(RequestStatus.Loading)
            const response = await repository.signin(email, password)
            tokenManager.saveTokenObj(response.token ,response.refreshToken)
            userManager.saveUser(response.user)
            dispatch(setUser(response.user))
            setFetchStatus(RequestStatus.Success)
            console.log("navigate")
            navigate("/dashboard")
           
       }
       catch(err : any){
          
          console.log(err.message)
           setFetchStatus(RequestStatus.Error)
       }
   }
   return {
      signin,
      fetchStatus,
   }
}