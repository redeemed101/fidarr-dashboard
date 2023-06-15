import { gql } from '@apollo/client';

export const SUBSCRIBERS_QUERY = gql`
query getSubscriptionPaging($page:Int!,$size:Int!){
    subscriptionsPaging(page:$page,size:$size){
        count
        users{
            userName
            fullName
            dOB
            profilePicPath
            profile
            location
            website
            gender
            email
            phoneNumber
            roles
            dateCreated
            lastUpdated
            country{
                id
                name
            }
        }
    }
}`

export const USERS_QUERY = gql`
query getUsersPaging($page:Int!,$size:Int!){
    usersPaging(page:$page,size:$size){
        count
        users{
            userName
            fullName
            dOB
            profilePicPath
            profile
            location
            website
            gender
            email
            phoneNumber
            roles
            dateCreated
            lastUpdated
            country{
                id
                name
            }
        }
    }
}`