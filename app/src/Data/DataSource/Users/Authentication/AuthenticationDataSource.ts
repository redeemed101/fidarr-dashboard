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


export interface AuthenticationDataSource{
    signIn(request : SignInRequest) : Promise<SignInResponse>
}