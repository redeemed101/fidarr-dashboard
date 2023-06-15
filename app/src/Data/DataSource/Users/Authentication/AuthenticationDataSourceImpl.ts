import { injectable } from "inversify";
import { AuthenticationDataSource, CountryResponse, GeneralResponse, InviteUserRequest, PasswordChangeRequest, PasswordResetRequest, SignInRequest, SignInResponse, SignupRequest, SignupResponse, VerifyCodeRequest } from "./AuthenticationDataSource";
import { getAPI, postAPI } from "../../API/axios_instance";


@injectable()
export class AuthenticationDataSourceImpl implements AuthenticationDataSource{
    inviteUser(request: InviteUserRequest): Promise<GeneralResponse> {
      throw new Error("Method not implemented.");
    }
    checkInviteCode(code: string): Promise<GeneralResponse> {
      throw new Error("Method not implemented.");
    }
    emailExists(email: string): Promise<GeneralResponse> {
      throw new Error("Method not implemented.");
    }
    resetPassword(request: PasswordResetRequest): Promise<SignInResponse> {
      throw new Error("Method not implemented.");
    }
    verifyCode(request: VerifyCodeRequest): Promise<GeneralResponse> {
      throw new Error("Method not implemented.");
    }
    resendCode(username: string): Promise<GeneralResponse> {
      throw new Error("Method not implemented.");
    }
    forgotPassword(email: string): Promise<GeneralResponse> {
      throw new Error("Method not implemented.");
    }
    changePassword(request: PasswordChangeRequest): Promise<GeneralResponse> {
      throw new Error("Method not implemented.");
    }
    logout(): Promise<void> {
      throw new Error("Method not implemented.");
    }
    async signUp(request: SignupRequest): Promise<SignupResponse> {
      return await postAPI<SignupResponse>("User/signup", request)   
    }
    async getCountries(): Promise<CountryResponse> {
      return await getAPI<CountryResponse>("Country/countries");
    }
    async signIn(request: SignInRequest): Promise<SignInResponse> {
      
      return await postAPI<SignInResponse>("User/signin", request)       
        
    }

}