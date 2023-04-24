import { User } from "../../../Model/Auth/User";

export class SignIn  {
    success! : boolean;
    token!: string;
    refreshToken!: string;
    user!: User;
}
export interface AuthenticationRepository{
    signin(email: string, password: string) : Promise<SignIn>
}