import { PasswordChangeRequest, PasswordResetRequest, SignupRequest, VerifyCodeRequest } from "../../../../Data/DataSource/Users/Authentication/AuthenticationDataSource";
import { Country } from "../../../Model/Auth/Country";
import { User } from "../../../Model/Auth/User";

export class SignIn  {
    success! : boolean;
    token!: string;
    refreshToken!: string;
    user!: User;
}
export class Signup {
    success! : boolean;
    token!: string;
    refreshToken!: string;
    user!: User;
}
export class Feedback{
    success! : boolean;
    message! : string;
}
export interface AuthenticationRepository{
    signin(email: string, password: string) : Promise<SignIn>
    signUp(request: SignupRequest): Promise<Signup>
    getCountries() : Promise<Country[]>
    verifyCode(request : VerifyCodeRequest) : Promise<Feedback>
    resendCode(username: string) : Promise<Feedback>
    forgotPassword(email: string) : Promise<Feedback>
    emailExists(email: string) : Promise<Feedback>
    resetPassword(request: PasswordResetRequest) : Promise<SignIn>
    changePassword(request: PasswordChangeRequest) : Promise<Feedback>
    logout() : Promise<void>
}