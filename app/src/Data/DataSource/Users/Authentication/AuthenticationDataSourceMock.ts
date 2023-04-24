import { injectable } from "inversify";
import { AuthenticationDataSource, SignInRequest, SignInResponse } from "./AuthenticationDataSource";

@injectable()
export class AuthenticationDataSourceMock implements AuthenticationDataSource{
    async signIn(request: SignInRequest): Promise<SignInResponse> {
       var res = new SignInResponse();
       res.refreshToken = "12344"
       res.token = "1234"
       res.success = true
       res.user = {
        email: request.username,
        username: "lmsasajnr",
        name: "Lewis Msasa",
        profilePicPath: "https://picsum.photos/200",
        id: "1234"
       }
       
       return new Promise(resolve => setTimeout(() => resolve(res), 5000)) ;
    }
}