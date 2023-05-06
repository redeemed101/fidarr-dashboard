import { useState } from "react";
import { userManager } from "../../../Data/DataSource/API/Authentication/user";
import { tokenManager } from "../../../Data/DataSource/API/token";
import { AuthenticationRepository } from "../../../Domain/Repository/Users/Authentication/AuthenticationRepository";
import { RequestStatus } from "../../Music/hooks/common";
import { setRecoverEmail, setUser } from "../../../StateManagement/redux/userReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Country } from "../../../Domain/Model/Auth/Country";

export const useCodeModelController = (repository : AuthenticationRepository) => {
   //const [error, setError] = useState<Error | null>(null)
   const [fetchStatus, setFetchStatus] = useState<RequestStatus>();
   const [successful, setSuccess] = useState<boolean>(true)
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const resendCode = async (email: string) => {
      try{
         setFetchStatus(RequestStatus.Loading)
         const response = await repository.resendCode(email)
         setSuccess(response.success)
      }
      catch(err : any){
         
         console.log(err.message)
          setFetchStatus(RequestStatus.Error)
      }
   }
   const verifyCode = async (email : string, code: string) => {
      try{
         setFetchStatus(RequestStatus.Loading)
         const response = await repository.verifyCode({
           username: email,
            code: code
         })
         setSuccess(response.success)
      }
      catch(err : any){
         
         console.log(err.message)
          setFetchStatus(RequestStatus.Error)
      }
   }
   return {
      verifyCode,
      resendCode,
      successful,
      fetchStatus
   }
}

export const usePasswordModelController = (repository : AuthenticationRepository) => {
   //const [error, setError] = useState<Error | null>(null)
   const [fetchStatus, setFetchStatus] = useState<RequestStatus>();
   const [successful, setSuccess] = useState<boolean>(true)
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const resetPassword = async (email : string, password: string, code: string) => {
      try{
         setFetchStatus(RequestStatus.Loading)
         const response = await repository.resetPassword({
            username : email,
            code: code,
            password: password
         })
         setSuccess(response.success)
      }
      catch(err : any){
         
         console.log(err.message)
          setFetchStatus(RequestStatus.Error)
      }
   }

   const changePassword = async (email : string, oldPassword: string, newPassword: string) => {
      try{
         setFetchStatus(RequestStatus.Loading)
         const response = await repository.changePassword({
            username : email,
            newPassword: newPassword,
            oldPassword: oldPassword
         })
         setSuccess(response.success)
      }
      catch(err : any){
         
         console.log(err.message)
          setFetchStatus(RequestStatus.Error)
      }
   }
   const forgotPassword = async (email : string) => {
      try{
         setFetchStatus(RequestStatus.Loading)
         const response = await repository.forgotPassword(email)
         setSuccess(response.success)
         dispatch(setRecoverEmail(email))
         //go to enter code
      }
      catch(err : any){
         
         console.log(err.message)
          setFetchStatus(RequestStatus.Error)
      }


   }
   return {
     forgotPassword,
     changePassword,
     resetPassword,
     successful,
     fetchStatus
   }

}

export const useAuthenticationModelController = (repository : AuthenticationRepository) => {
   //const [error, setError] = useState<Error | null>(null)
   const [fetchStatus, setFetchStatus] = useState<RequestStatus>();
   const [countries, setCountries] = useState<Country[]>([])
   const [emailExists, setEmailExists] = useState<boolean>(true)
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const logout = async () => {
      try{
         setFetchStatus(RequestStatus.Loading)
         await repository.logout()
        
      }
      catch(err : any){
         
         console.log(err.message)
          setFetchStatus(RequestStatus.Error)
      }
   }
   const emailCheck = async (email: string) => {
      try{
         setFetchStatus(RequestStatus.Loading)
         const response = await repository.emailExists(email)
         setEmailExists(response.success)
      }
      catch(err : any){
         
         console.log(err.message)
          setFetchStatus(RequestStatus.Error)
      }
   }
   const getCountries = async () => {
      try{
         setFetchStatus(RequestStatus.Loading)
         const response = await repository.getCountries()
         setCountries(response)
      }
      catch(err : any){
         
         console.log(err.message)
          setFetchStatus(RequestStatus.Error)
      }
   }
   const signup = async(username: string, fullname: string, email : string, password : string, phoneNumber: string, countryId: number) => {
      
      try{
           setFetchStatus(RequestStatus.Loading)
           const response = await repository.signUp({
            username : username,
            fullname: fullname,
            email : email,
            password : password,
            phoneNumber : phoneNumber,
            countryId : countryId,
           })
           tokenManager.saveTokenObj(response.token ,response.refreshToken)
           userManager.saveUser(response.user)
           dispatch(setUser(response.user))
           setFetchStatus(RequestStatus.Success)
           navigate("/dashboard")
          
      }
      catch(err : any){
         
         console.log(err.message)
          setFetchStatus(RequestStatus.Error)
      }
  }
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
      signup,
      getCountries,
      logout,
      emailCheck,
      countries,
      emailExists,
      fetchStatus,
   }
}