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

export type Album = {
  __typename?: 'Album';
  artist?: Maybe<Artist>;
  /** Artwork. */
  artworkPath: Scalars['String'];
  /** Description */
  description: Scalars['String'];
  genres?: Maybe<Array<Maybe<Genre>>>;
  /**  Id. */
  id: Scalars['String'];
  likes?: Maybe<Array<Maybe<AlbumLike>>>;
  /** Name. */
  name: Scalars['String'];
  /** Path. */
  path: Scalars['String'];
  songs?: Maybe<Array<Maybe<Song>>>;
  streams?: Maybe<Array<Maybe<AlbumStream>>>;
};

export type AlbumLike = {
  __typename?: 'AlbumLike';
  /**  Id. */
  userId: Scalars['String'];
};

export type AlbumStream = {
  __typename?: 'AlbumStream';
  /**  Id. */
  id: Scalars['String'];
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

export type ArtistLike = {
  __typename?: 'ArtistLike';
  /**  Id. */
  userId: Scalars['String'];
};

export type ArtistQuery = {
  __typename?: 'ArtistQuery';
  albums?: Maybe<Array<Maybe<Album>>>;
  albumsPaginated?: Maybe<Array<Maybe<Song>>>;
  artist?: Maybe<Artist>;
  artists?: Maybe<Array<Maybe<Artist>>>;
  artistsPaginated?: Maybe<Array<Maybe<Artist>>>;
  likes?: Maybe<Array<Maybe<ArtistLike>>>;
  searchArtistsPaginated?: Maybe<Array<Maybe<Artist>>>;
  songs?: Maybe<Array<Maybe<Song>>>;
  songsPaginated?: Maybe<Array<Maybe<Song>>>;
  trendingArtistsPaginated?: Maybe<Array<Maybe<Artist>>>;
};


export type ArtistQueryAlbumsPaginatedArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type ArtistQueryArtistArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type ArtistQueryArtistsPaginatedArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type ArtistQuerySearchArtistsPaginatedArgs = {
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type ArtistQuerySongsPaginatedArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type ArtistQueryTrendingArtistsPaginatedArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
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

export type SongStream = {
  __typename?: 'SongStream';
  /**  Id. */
  id: Scalars['String'];
};

export type GetArtistsPaginatedQueryVariables = Exact<{
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;


export type GetArtistsPaginatedQuery = { __typename?: 'ArtistQuery', artistsPaginated?: Array<{ __typename?: 'Artist', id: string, name: string, userId: string, imagePath: string, isProfileClaimed: boolean } | null> | null };


export const GetArtistsPaginatedDocument = gql`
    query getArtistsPaginated($page: Int!, $size: Int!) {
  artistsPaginated(page: $page, size: $size) {
    id
    name
    userId
    imagePath
    isProfileClaimed
  }
}
    `;

/**
 * __useGetArtistsPaginatedQuery__
 *
 * To run a query within a React component, call `useGetArtistsPaginatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArtistsPaginatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArtistsPaginatedQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetArtistsPaginatedQuery(baseOptions: Apollo.QueryHookOptions<GetArtistsPaginatedQuery, GetArtistsPaginatedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArtistsPaginatedQuery, GetArtistsPaginatedQueryVariables>(GetArtistsPaginatedDocument, options);
      }
export function useGetArtistsPaginatedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArtistsPaginatedQuery, GetArtistsPaginatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArtistsPaginatedQuery, GetArtistsPaginatedQueryVariables>(GetArtistsPaginatedDocument, options);
        }
export type GetArtistsPaginatedQueryHookResult = ReturnType<typeof useGetArtistsPaginatedQuery>;
export type GetArtistsPaginatedLazyQueryHookResult = ReturnType<typeof useGetArtistsPaginatedLazyQuery>;
export type GetArtistsPaginatedQueryResult = Apollo.QueryResult<GetArtistsPaginatedQuery, GetArtistsPaginatedQueryVariables>;