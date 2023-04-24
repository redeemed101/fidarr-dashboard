import { injectable } from "inversify";
import { AuthenticationDataSource, SignInRequest, SignInResponse } from "./AuthenticationDataSource";
import { postAPI } from "../../API/axios_instance";


@injectable()
export class AuthenticationDataSourceImpl implements AuthenticationDataSource{
    async signIn(request: SignInRequest): Promise<SignInResponse> {
      
      return await postAPI<SignInResponse>("User/signin", request)       
        
    }

}