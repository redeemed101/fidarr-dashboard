import { injectable } from "inversify";
import { AuthenticationDataSource, CountryResponse, GeneralResponse, InviteUserRequest, PasswordChangeRequest, PasswordResetRequest, SignInRequest, SignInResponse, SignupRequest, SignupResponse, VerifyCodeRequest } from "./AuthenticationDataSource";
import { Country } from "../../../../Domain/Model/Auth/Country";

@injectable()
export class AuthenticationDataSourceMock implements AuthenticationDataSource{
    inviteUser(request: InviteUserRequest): Promise<GeneralResponse> {
        return new Promise(resolve => setTimeout(() => resolve({
            message :"invite successfully resend",
            success: true
        }), 5000)) ;
    }
    checkInviteCode(code: string): Promise<GeneralResponse> {
        return new Promise(resolve => setTimeout(() => resolve({
            message :"code found",
            success: true
        }), 5000)) ;
    }
    emailExists(email: string): Promise<GeneralResponse> {
        return new Promise(resolve => setTimeout(() => resolve({
            message :"email not taken",
            success: false
        }), 5000)) ;
    }
    resetPassword(request: PasswordResetRequest): Promise<SignInResponse> {
        var res = new SignupResponse();
        res.refreshToken = "12344"
        res.token = "1234"
        res.success = true
        res.user = {
         email: request.username,
         lastUpdated: "2023-07-07",
         dateCreated:"2023-06-06",
         username: "lmsasajnr",
         name: "Lewis Msasa",
         profilePicPath: "https://picsum.photos/200",
         id: "1234"
        }
        
        return new Promise(resolve => setTimeout(() => resolve(res), 5000)) ;
    }
    verifyCode(request: VerifyCodeRequest): Promise<GeneralResponse> {
        return new Promise(resolve => setTimeout(() => resolve({
            message :"code successfully verified",
            success: true
        }), 5000)) ;
    }
    resendCode(username: string): Promise<GeneralResponse> {
        return new Promise(resolve => setTimeout(() => resolve({
            message :"code successfully resend",
            success: true
        }), 5000)) ;
    }
    forgotPassword(email: string): Promise<GeneralResponse> {
        return new Promise(resolve => setTimeout(() => resolve({
            message :"code successfully resend",
            success: true
        }), 5000)) ;
    }
    changePassword(request: PasswordChangeRequest): Promise<GeneralResponse> {
        return new Promise(resolve => setTimeout(() => resolve({
            message :"Password successfully changed",
            success: true
        }), 5000)) ;
    }
    logout(): Promise<void> {
        return Promise.resolve()
    }
    signUp(request: SignupRequest): Promise<SignupResponse> {
        var res = new SignupResponse();
        res.refreshToken = "12344"
        res.token = "1234"
        res.success = true
        res.user = {
         email: request.username,
         lastUpdated: "2023-07-07",
         dateCreated:"2023-06-06",
         username: "lmsasajnr",
         name: "Lewis Msasa",
         profilePicPath: "https://picsum.photos/200",
         id: "1234"
        }
        
        return new Promise(resolve => setTimeout(() => resolve(res), 5000)) ;
    }
    getCountries(): Promise<CountryResponse> {
        const countries: Country[] = [
            {
                name: "Malawi",
                id: 1,
                code: "MW"
            },
            {
                name: "Nigeria",
                id: 2,
                code: "NG"
            }
        ]
        const res = new CountryResponse();
        res.countries = countries
        return new Promise(resolve => setTimeout(() => resolve(res), 5000)) ;
    }
    async signIn(request: SignInRequest): Promise<SignInResponse> {
       var res = new SignInResponse();
       res.refreshToken = "12344"
       res.token = "1234"
       res.success = true
       res.user = {
        email: request.username,
        username: "lmsasajnr",
        name: "Lewis Msasa",
        lastUpdated: "2023-07-07",
        dateCreated:"2023-06-06",
        profilePicPath: "https://picsum.photos/200",
        id: "1234"
       }
       
       return new Promise(resolve => setTimeout(() => resolve(res), 5000)) ;
    }
}