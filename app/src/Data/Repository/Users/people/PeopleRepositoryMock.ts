import { injectable } from "inversify";
import { PeopleRepository } from "../../../../Domain/Repository/Users/people/PeopleRepository";
import { UserPage } from "../../../../Domain/Model/Auth/User";
import { GeneralResponse } from "../../../DataSource/Users/Authentication/AuthenticationDataSource";
import { RolesResponse, UpdateUserRequest } from "../../../DataSource/Users/People/PeopleDataSource";

@injectable()
export class PeopleRepositoryMock implements PeopleRepository{
    getRoles(): Promise<RolesResponse> {
        const res = {
            roles: [ 
                     {
                        id: "4d5251b5-eb1a-4477-9c90-997547d146a3",
                        name: "Admin",                  
                     },
                     {
                        id: "4d5251b5-eb1a-4477-9c90-997547d146a3",
                        name: "ContentManager",                  
                     }
            ]
                
            
        }
        return new Promise(resolve => setTimeout(() => resolve(res), 5000)) ;
    }
    getSubscribersPaging(page: number, size: number): Promise<UserPage> {
        const res = {
            data : [...Array(10)].map((a,i) =>{
                  return  {
                        email: `user${i}@gmail.com`,
                        lastUpdated: "2023-07-07",
                        dateCreated:"2023-06-06",
                        username: "lmsasajnr",
                        name: `user-${i}`,
                        profilePicPath: "https://picsum.photos/200",
                        id: `${i}`
                       
                  }
              }),
            count: 10
            }
        return new Promise(resolve => setTimeout(() => resolve(res), 5000)) ;
     
    }
    getUsersPaging(page: number, size: number): Promise<UserPage> {
        const res = {
            data : [...Array(10)].map((a,i) =>{
                  return  {
                        email: `user${i}@gmail.com`,
                        lastUpdated: "2023-07-07",
                        dateCreated:"2023-06-06",
                        username: "lmsasajnr",
                        name: `user-${i}`,
                        profilePicPath: "https://picsum.photos/200",
                        id: `${i}`
                       
                  }
              }),
            count: 10
            }
        return new Promise(resolve => setTimeout(() => resolve(res), 5000)) ;
    }
    async updateUser(request: UpdateUserRequest): Promise<GeneralResponse> {
        return new Promise(resolve => setTimeout(() => resolve({
            message :"User updated",
            success: true
        }), 5000)) ;
    }
    async deleteUser(id: string): Promise<GeneralResponse> {
        return new Promise(resolve => setTimeout(() => resolve({
            message :"User deleted",
            success: true
        }), 5000)) ;
    }
}