/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;

export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `DateTime` scalar type represents a date and time. `DateTime` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  DateTime: any;
};

export type Country = {
  __typename?: 'Country';
  /** Code of country */
  code: Scalars['String'];
  /** Country Id. */
  id: Scalars['Int'];
  /** Name of the Country */
  name: Scalars['String'];
};

export type Notification = {
  __typename?: 'Notification';
  /** Date */
  dateCreated: Scalars['DateTime'];
  /** Details */
  description: Scalars['String'];
  /** Notification Id. */
  iD: Scalars['Int'];
  /** Notified */
  notified: Scalars['String'];
  /** Notifier */
  notifier: Scalars['String'];
  /** Subject */
  subject: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  /** Category of the user */
  category: Scalars['String'];
  /** Country */
  country?: Maybe<Country>;
  /** DOB of the user */
  dOB: Scalars['String'];
  dateCreated: Scalars['DateTime'];
  /** Email of the user */
  email: Scalars['String'];
  /** Name of the user */
  fullName: Scalars['String'];
  /** Gender of the user */
  gender: Scalars['String'];
  /** User's Id. */
  id: Scalars['String'];
  /** Is User Account claimed */
  isClaimed: Scalars['Boolean'];
  lastUpdated: Scalars['DateTime'];
  /** Location of the user */
  location: Scalars['String'];
  /** Number of followers */
  numFollowers: Scalars['Int'];
  /** Number of following */
  numFollowing: Scalars['Int'];
  /** Phone number of the user */
  phoneNumber: Scalars['String'];
  /** Profile of the user */
  profile: Scalars['String'];
  /** profile of the user */
  profilePicPath: Scalars['String'];
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Username of the user */
  userName: Scalars['String'];
  /** Website of the user */
  website: Scalars['String'];
};

export type UserFollower = {
  __typename?: 'UserFollower';
  /** User follower Date. */
  dateCreated: Scalars['DateTime'];
  /** User followed by Id. */
  followedBy: Scalars['String'];
  /** User followeer Id. */
  iD: Scalars['Int'];
  /** User follower. */
  userId: Scalars['String'];
};

export type UserFollowing = {
  __typename?: 'UserFollowing';
  /** User following Date. */
  dateCreated: Scalars['DateTime'];
  /** User following Id. */
  following: Scalars['String'];
  /** User following Id. */
  iD: Scalars['Int'];
  /** User following. */
  userId: Scalars['String'];
};

export type UserPaging = {
  __typename?: 'UserPaging';
  /**  Count. */
  count: Scalars['Int'];
  /** Charts */
  users?: Maybe<Array<Maybe<User>>>;
};

export type UserQuery = {
  __typename?: 'UserQuery';
  country?: Maybe<Country>;
  followers?: Maybe<Array<Maybe<UserFollowing>>>;
  following?: Maybe<Array<Maybe<UserFollower>>>;
  fullFollowers?: Maybe<Array<Maybe<User>>>;
  fullFollowing?: Maybe<Array<Maybe<User>>>;
  notification_count?: Maybe<Scalars['Int']>;
  notifications?: Maybe<Array<Maybe<Notification>>>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  subscriptionsPaging?: Maybe<UserPaging>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
  usersPaginated?: Maybe<Array<Maybe<User>>>;
  usersPaging?: Maybe<UserPaging>;
};


export type UserQueryCountryArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type UserQueryFollowersArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type UserQueryFollowingArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type UserQueryFullFollowersArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type UserQueryFullFollowingArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type UserQueryNotification_CountArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type UserQueryNotificationsArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type UserQueryRolesArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type UserQuerySubscriptionsPagingArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type UserQueryUserArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type UserQueryUsersPaginatedArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type UserQueryUsersPagingArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};

export type GetSubscriptionPagingQueryVariables = Exact<{
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;


export type GetSubscriptionPagingQuery = { __typename?: 'UserQuery', subscriptionsPaging?: { __typename?: 'UserPaging', count: number, users?: Array<{ __typename?: 'User', userName: string, fullName: string, dOB: string, profilePicPath: string, profile: string, location: string, website: string, gender: string, email: string, phoneNumber: string, roles?: Array<string | null> | null, dateCreated: any, lastUpdated: any, country?: { __typename?: 'Country', id: number, name: string } | null } | null> | null } | null };

export type GetUsersPagingQueryVariables = Exact<{
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;


export type GetUsersPagingQuery = { __typename?: 'UserQuery', usersPaging?: { __typename?: 'UserPaging', count: number, users?: Array<{ __typename?: 'User', userName: string, fullName: string, dOB: string, profilePicPath: string, profile: string, location: string, website: string, gender: string, email: string, phoneNumber: string, roles?: Array<string | null> | null, dateCreated: any, lastUpdated: any, country?: { __typename?: 'Country', id: number, name: string } | null } | null> | null } | null };


export const GetSubscriptionPagingDocument = gql`
    query getSubscriptionPaging($page: Int!, $size: Int!) {
  subscriptionsPaging(page: $page, size: $size) {
    count
    users {
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
      country {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useGetSubscriptionPagingQuery__
 *
 * To run a query within a React component, call `useGetSubscriptionPagingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSubscriptionPagingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSubscriptionPagingQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetSubscriptionPagingQuery(baseOptions: Apollo.QueryHookOptions<GetSubscriptionPagingQuery, GetSubscriptionPagingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSubscriptionPagingQuery, GetSubscriptionPagingQueryVariables>(GetSubscriptionPagingDocument, options);
      }
export function useGetSubscriptionPagingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSubscriptionPagingQuery, GetSubscriptionPagingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSubscriptionPagingQuery, GetSubscriptionPagingQueryVariables>(GetSubscriptionPagingDocument, options);
        }
export type GetSubscriptionPagingQueryHookResult = ReturnType<typeof useGetSubscriptionPagingQuery>;
export type GetSubscriptionPagingLazyQueryHookResult = ReturnType<typeof useGetSubscriptionPagingLazyQuery>;
export type GetSubscriptionPagingQueryResult = Apollo.QueryResult<GetSubscriptionPagingQuery, GetSubscriptionPagingQueryVariables>;
export const GetUsersPagingDocument = gql`
    query getUsersPaging($page: Int!, $size: Int!) {
  usersPaging(page: $page, size: $size) {
    count
    users {
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
      country {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useGetUsersPagingQuery__
 *
 * To run a query within a React component, call `useGetUsersPagingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersPagingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersPagingQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetUsersPagingQuery(baseOptions: Apollo.QueryHookOptions<GetUsersPagingQuery, GetUsersPagingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersPagingQuery, GetUsersPagingQueryVariables>(GetUsersPagingDocument, options);
      }
export function useGetUsersPagingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersPagingQuery, GetUsersPagingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersPagingQuery, GetUsersPagingQueryVariables>(GetUsersPagingDocument, options);
        }
export type GetUsersPagingQueryHookResult = ReturnType<typeof useGetUsersPagingQuery>;
export type GetUsersPagingLazyQueryHookResult = ReturnType<typeof useGetUsersPagingLazyQuery>;
export type GetUsersPagingQueryResult = Apollo.QueryResult<GetUsersPagingQuery, GetUsersPagingQueryVariables>;