import { id, injectable } from "inversify";
import { PeopleDataSource, SubscriptionsPaging, UpdateUserRequest, UsersPaging } from "./PeopleDataSource";
import { GeneralResponse } from "../Authentication/AuthenticationDataSource";
import { deleteAPI, postAPI } from "../../API/axios_instance";
import { graphQLUserClient } from "../../GraphQL/Client/client";
import { GetSubscriptionPagingDocument, GetSubscriptionPagingQueryResult, GetUsersPagingDocument, GetUsersPagingQueryResult } from "../../GraphQL/Generated/Users/graphql";

@injectable()
export class PeopleDataSourceImpl implements PeopleDataSource{
    async updateUser(request: UpdateUserRequest): Promise<GeneralResponse> {
        return await postAPI<GeneralResponse>(`Adminuser/update`,request)
    }
    async getSubscribersPaging(page: number, size: number): Promise<SubscriptionsPaging> {
        const result = await graphQLUserClient.query<GetSubscriptionPagingQueryResult>({
            query : GetSubscriptionPagingDocument,
            variables: {
                page: page,
                size: size,
            }
        })
        const data = result.data 
        const usersPaginated = data as unknown as SubscriptionsPaging 
      
        return  usersPaginated;
    }
    async getUsersPaging(page: number, size: number): Promise<UsersPaging> {
        const result = await graphQLUserClient.query<GetUsersPagingQueryResult>({
            query : GetUsersPagingDocument,
            variables: {
                page: page,
                size: size,
            }
        })
        const data = result.data 
        const usersPaginated = data as unknown as UsersPaging 
      
        return  usersPaginated;
    }
    async deleteUser(id: string): Promise<GeneralResponse> {
        return await deleteAPI<GeneralResponse>(`Adminuser/deleteUser/${id}`)
    }
}