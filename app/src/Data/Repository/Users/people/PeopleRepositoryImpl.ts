import { inject, injectable } from "inversify";
import { PeopleRepository } from "../../../../Domain/Repository/Users/people/PeopleRepository";
import { UserPage } from "../../../../Domain/Model/Auth/User";
import { GeneralResponse } from "../../../DataSource/Users/Authentication/AuthenticationDataSource";
import { PeopleDataSource, UpdateUserRequest } from "../../../DataSource/Users/People/PeopleDataSource";
import { TYPES } from "../../../../DI/types";
import { BASE_URL } from "../../../DataSource/API/constant";
import moment from "moment";

@injectable()
export class PeopleRepositoryImpl implements PeopleRepository{
    private _dataSource : PeopleDataSource;
  
    public constructor(
        @inject(TYPES.PeopleDataSource) dataSource : PeopleDataSource
    ){
        this._dataSource = dataSource
    }
    async getSubscribersPaging(page: number, size: number): Promise<UserPage> {
        const userResponse = await this._dataSource.getSubscribersPaging(page,size)
        const users = userResponse.subscriptionsPaging.users.map((u,i) => {
         return {
             email: u.email,
             username: u.userName,
             name: u.fullName,
             profilePicPath: `${BASE_URL}${u.profilePicPath}`,
             dateCreated: moment(Date.parse(u.dateCreated)).format('MMMM DD, YYYY'),
             lastUpdated: moment(Date.parse(u.lastUpdated)).format('MMMM DD, YYYY'),
             roles: u.roles?.map(r => r!),
             id: u.id
         } 
        })
        return {
         count : userResponse.subscriptionsPaging.count,
         data : users
        }
    }
    async getUsersPaging(page: number, size: number): Promise<UserPage> {
       const userResponse = await this._dataSource.getUsersPaging(page,size)
       const users = userResponse.usersPaging.users.map((u,i) => {
        return {
            email: u.email,
            username: u.userName,
            name: u.fullName,
            profilePicPath: `${BASE_URL}${u.profilePicPath}`,
            dateCreated: moment(Date.parse(u.dateCreated)).format('MMMM DD, YYYY'),
            lastUpdated: moment(Date.parse(u.lastUpdated)).format('MMMM DD, YYYY'),
            roles: u.roles?.map(r => r!),
            id: u.id
        } 
       })
       return {
        count : userResponse.usersPaging.count,
        data : users
       }
    }
    async updateUser(request: UpdateUserRequest): Promise<GeneralResponse> {
        return await this._dataSource.updateUser(request)
    }
    async deleteUser(id: string): Promise<GeneralResponse> {
        return await this._dataSource.deleteUser(id)
    }
}