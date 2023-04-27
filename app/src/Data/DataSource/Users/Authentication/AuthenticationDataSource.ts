import { Country } from "../../../../Domain/Model/Auth/Country";
import { User } from "../../../../Domain/Model/Auth/User"
import IEntity from "../../API/ientity";

export type SignInRequest = {
    username : string,
    password:string,
}
export class SignInResponse implements IEntity {
    success! : boolean;
    token!: string;
    refreshToken!: string;
    user!: User;
}

export type SignupRequest = {
    username : string,
    fullname: string,
    email : string,
    password : string,
    phoneNumber : string,
    countryId : number,
}
export class SignupResponse implements IEntity {
    success! : boolean;
    token!: string;
    refreshToken!: string;
    user!: User;
}
export class CountryResponse implements IEntity{
    countries! : Country[];   

}
export type VerifyCodeRequest = {
    username : string;
    code: string;
}
export class GeneralResponse implements IEntity{
    success! : boolean;
    message! : string;
}

export type PasswordChangeRequest = {
    username : string;
    newPassword: string;
    oldPassword: string;
}
export type PasswordResetRequest = {
    username : string;
    password: string;
    code: string;
}


export interface AuthenticationDataSource{
    signIn(request : SignInRequest) : Promise<SignInResponse>
    signUp(request: SignupRequest): Promise<SignupResponse>
    getCountries() : Promise<CountryResponse>
    verifyCode(request : VerifyCodeRequest) : Promise<GeneralResponse>
    resendCode(username: string) : Promise<GeneralResponse>    
    emailExists(email: string) : Promise<GeneralResponse>
    resetPassword(request: PasswordResetRequest) : Promise<SignInResponse>
    changePassword(request: PasswordChangeRequest) : Promise<GeneralResponse>
    forgotPassword(email: string) : Promise<GeneralResponse>
    logout() : Promise<void>
}