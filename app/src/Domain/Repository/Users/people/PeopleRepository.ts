import { GeneralResponse } from "../../../../Data/DataSource/Users/Authentication/AuthenticationDataSource"
import { RolesResponse, UpdateUserRequest } from "../../../../Data/DataSource/Users/People/PeopleDataSource"
import { UserPage } from "../../../Model/Auth/User"

export interface PeopleRepository{
    getSubscribersPaging(page: number, size:number) : Promise<UserPage>
    getUsersPaging(page: number, size:number) : Promise<UserPage>
    updateUser(request: UpdateUserRequest): Promise<GeneralResponse>
    deleteUser(id: string): Promise<GeneralResponse>
    getRoles():Promise<RolesResponse>
}