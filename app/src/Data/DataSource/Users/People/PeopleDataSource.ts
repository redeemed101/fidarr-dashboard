import { User } from "../../GraphQL/Generated/Users/graphql";
import { GeneralResponse } from "../Authentication/AuthenticationDataSource";

export interface UserPage{
    count: number,
    users : User[]
}
export interface SubscriptionsPaging {
   
    subscriptionsPaging : UserPage
}
export interface UsersPaging {
   
    usersPaging : UserPage
}
export type UpdateUserRequest = {
    username : string,
    fullname: string,
    email : string,
    password : string,
    phoneNumber : string,
    countryId : number,
}

export interface PeopleDataSource{
    getSubscribersPaging(page: number, size:number) : Promise<SubscriptionsPaging>
    getUsersPaging(page: number, size:number) : Promise<UsersPaging>
    updateUser(request: UpdateUserRequest): Promise<GeneralResponse>
    deleteUser(id: string): Promise<GeneralResponse>
}