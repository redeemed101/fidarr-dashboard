import { injectable } from "inversify";
import { AuthenticationDataSource, CountryResponse, GeneralResponse, InviteUserRequest, PasswordChangeRequest, PasswordResetRequest, SignInRequest, SignInResponse, SignupRequest, SignupResponse, VerifyCodeRequest } from "./AuthenticationDataSource";
import { getAPI, postAPI } from "../../API/axios_instance";
import { USERS_URL } from "../../API/constant";


@injectable()
export class AuthenticationDataSourceImpl implements AuthenticationDataSource{
    async inviteUser(request: InviteUserRequest): Promise<GeneralResponse> {
      return await postAPI<GeneralResponse>(`${USERS_URL}User/invite`, request)   
    }
    async checkInviteCode(code: string): Promise<GeneralResponse> {
      return await postAPI<GeneralResponse>(`${USERS_URL}User/checkCode`, { code : code})   
    }
    async emailExists(email: string): Promise<GeneralResponse> {
      return await postAPI<GeneralResponse>(`${USERS_URL}User/checkEmail`, {email : email})   
    }
    async resetPassword(request: PasswordResetRequest): Promise<SignInResponse> {
      return await postAPI<SignInResponse>(`${USERS_URL}User/reset`, request)   
    }
    async verifyCode(request: VerifyCodeRequest): Promise<GeneralResponse> {
      return await postAPI<GeneralResponse>(`${USERS_URL}User/verifyCode`, request)   
    }
    async resendCode(username: string): Promise<GeneralResponse> {
      return await postAPI<GeneralResponse>(`${USERS_URL}User/resendCode`, {username : username})   
    }
    async forgotPassword(email: string): Promise<GeneralResponse> {
      return await postAPI<GeneralResponse>(`${USERS_URL}User/forgotPassword`, {email : email}) 
    }
    async changePassword(request: PasswordChangeRequest): Promise<GeneralResponse> {
      return await postAPI<GeneralResponse>(`${USERS_URL}User/changePassword`, request) 
    }
    logout(): Promise<void> {
      throw new Error("Method not implemented.");
    }
    async signUp(request: SignupRequest): Promise<SignupResponse> {
      return await postAPI<SignupResponse>(`${USERS_URL}User/signup`, request)   
    }
    async getCountries(): Promise<CountryResponse> {
      return await getAPI<CountryResponse>(`${USERS_URL}Country/countries`);
    }
    async signIn(request: SignInRequest): Promise<SignInResponse> {
      
      return await postAPI<SignInResponse>(`${USERS_URL}User/signin`, request)       
        
    }

}