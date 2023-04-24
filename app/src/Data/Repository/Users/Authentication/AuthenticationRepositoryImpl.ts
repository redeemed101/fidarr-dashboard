import { inject, injectable } from "inversify";
import { AuthenticationRepository, SignIn } from "../../../../Domain/Repository/Users/Authentication/AuthenticationRepository";
import { AuthenticationDataSource } from "../../../DataSource/Users/Authentication/AuthenticationDataSource";
import { TYPES } from "../../../../DI/types";

@injectable()
export class AuthenticationRepositoryImpl implements AuthenticationRepository{
    private _dataSource : AuthenticationDataSource;
  
    public constructor(
        @inject(TYPES.AuthenticationDataSource) dataSource : AuthenticationDataSource
    ){
        this._dataSource = dataSource
    }
    async signin(email: string, password: string): Promise<SignIn> {
       var response =  await this._dataSource.signIn({username : email, password: password});
       return response as SignIn
    }
}