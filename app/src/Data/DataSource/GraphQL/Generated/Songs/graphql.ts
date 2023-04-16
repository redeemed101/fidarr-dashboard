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
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Artist = {
  __typename?: 'Artist';
  genres?: Maybe<Array<Maybe<Genre>>>;
  /**  Id. */
  id: Scalars['String'];
  /**  Artist Image. */
  imagePath: Scalars['String'];
  /**  Is the account claimed */
  isProfileClaimed: Scalars['Boolean'];
  /** Name. */
  name: Scalars['String'];
  /**  Artist User Id. */
  userId: Scalars['String'];
};

export type Genre = {
  __typename?: 'Genre';
  /**  Id. */
  id: Scalars['String'];
  /** Name. */
  name: Scalars['String'];
};

export type Song = {
  __typename?: 'Song';
  artist?: Maybe<Artist>;
  /** artiwork path */
  artworkPath: Scalars['String'];
  /** description */
  description: Scalars['String'];
  featurungArtists?: Maybe<Array<Maybe<Artist>>>;
  genres?: Maybe<Array<Maybe<Genre>>>;
  /** Song Id. */
  id: Scalars['String'];
  likes?: Maybe<Array<Maybe<SongLike>>>;
  /** Name. */
  name: Scalars['String'];
  /** path */
  path: Scalars['String'];
  /** Preview Path */
  previewPath: Scalars['String'];
  streams?: Maybe<Array<Maybe<SongStream>>>;
};

export type SongLike = {
  __typename?: 'SongLike';
  /**  Id. */
  userId: Scalars['String'];
};

export type SongQuery = {
  __typename?: 'SongQuery';
  songsPaginated?: Maybe<Array<Maybe<Song>>>;
};


export type SongQuerySongsPaginatedArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};

export type SongStream = {
  __typename?: 'SongStream';
  /**  Id. */
  id: Scalars['String'];
};

export type GetSongPaginatedQueryVariables = Exact<{
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;


export type GetSongPaginatedQuery = { __typename?: 'SongQuery', songsPaginated?: Array<{ __typename?: 'Song', id: string, name: string, path: string, artworkPath: string, artist?: { __typename?: 'Artist', name: string, id: string } | null, likes?: Array<{ __typename?: 'SongLike', userId: string } | null> | null, streams?: Array<{ __typename?: 'SongStream', id: string } | null> | null, featurungArtists?: Array<{ __typename?: 'Artist', id: string, name: string, imagePath: string } | null> | null, genres?: Array<{ __typename?: 'Genre', id: string, name: string } | null> | null } | null> | null };


export const GetSongPaginatedDocument = gql`
    query getSongPaginated($page: Int!, $size: Int!) {
  songsPaginated(page: $page, size: $size) {
    id
    name
    path
    artworkPath
    artist {
      name
      id
    }
    likes {
      userId
    }
    streams {
      id
    }
    featurungArtists {
      id
      name
      imagePath
    }
    genres {
      id
      name
    }
  }
}
    `;

/**
 * __useGetSongPaginatedQuery__
 *
 * To run a query within a React component, call `useGetSongPaginatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSongPaginatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSongPaginatedQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetSongPaginatedQuery(baseOptions: Apollo.QueryHookOptions<GetSongPaginatedQuery, GetSongPaginatedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSongPaginatedQuery, GetSongPaginatedQueryVariables>(GetSongPaginatedDocument, options);
      }
export function useGetSongPaginatedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSongPaginatedQuery, GetSongPaginatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSongPaginatedQuery, GetSongPaginatedQueryVariables>(GetSongPaginatedDocument, options);
        }
export type GetSongPaginatedQueryHookResult = ReturnType<typeof useGetSongPaginatedQuery>;
export type GetSongPaginatedLazyQueryHookResult = ReturnType<typeof useGetSongPaginatedLazyQuery>;
export type GetSongPaginatedQueryResult = Apollo.QueryResult<GetSongPaginatedQuery, GetSongPaginatedQueryVariables>;