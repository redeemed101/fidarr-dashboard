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

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `DateTime` scalar type represents a date and time. `DateTime` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  DateTime: any;
};

export type Album = {
  __typename?: 'Album';
  artist?: Maybe<Artist>;
  /** Artwork. */
  artworkPath: Scalars['String'];
  /** Date Created */
  dateCreated: Scalars['DateTime'];
  /** Description */
  description: Scalars['String'];
  genres?: Maybe<Array<Maybe<Genre>>>;
  /**  Id. */
  id: Scalars['String'];
  /** Last Updated */
  lastUpdated: Scalars['DateTime'];
  likes?: Maybe<Array<Maybe<AlbumLike>>>;
  /** Name. */
  name: Scalars['String'];
  /** Path. */
  path: Scalars['String'];
  /** Release Date */
  releaseDate: Scalars['DateTime'];
  songs?: Maybe<Array<Maybe<Song>>>;
  streams?: Maybe<Array<Maybe<AlbumStream>>>;
};

export type AlbumLike = {
  __typename?: 'AlbumLike';
  /**  Id. */
  userId: Scalars['String'];
};

export type AlbumQuery = {
  __typename?: 'AlbumQuery';
  album?: Maybe<Album>;
  albums?: Maybe<Array<Maybe<Album>>>;
  albumsPaginated?: Maybe<Array<Maybe<Album>>>;
  trendingAlbumsPaginated?: Maybe<Array<Maybe<Album>>>;
};


export type AlbumQueryAlbumArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type AlbumQueryAlbumsPaginatedArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type AlbumQueryTrendingAlbumsPaginatedArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
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

export type GetAlbumsPaginatedQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
}>;


export type GetAlbumsPaginatedQuery = { __typename?: 'AlbumQuery', albumsPaginated?: Array<{ __typename?: 'Album', id: string, name: string, artworkPath: string, path: string, lastUpdated: any, dateCreated: any, releaseDate: any, streams?: Array<{ __typename?: 'AlbumStream', id: string } | null> | null, likes?: Array<{ __typename?: 'AlbumLike', userId: string } | null> | null, artist?: { __typename?: 'Artist', id: string, name: string } | null, genres?: Array<{ __typename?: 'Genre', name: string } | null> | null, songs?: Array<{ __typename?: 'Song', id: string, name: string, path: string, artworkPath: string, artist?: { __typename?: 'Artist', name: string, imagePath: string, id: string } | null, likes?: Array<{ __typename?: 'SongLike', userId: string } | null> | null, streams?: Array<{ __typename?: 'SongStream', id: string } | null> | null, featurungArtists?: Array<{ __typename?: 'Artist', id: string, name: string, imagePath: string } | null> | null, genres?: Array<{ __typename?: 'Genre', id: string, name: string } | null> | null } | null> | null } | null> | null };


export const GetAlbumsPaginatedDocument = gql`
    query getAlbumsPaginated($page: Int, $size: Int) {
  albumsPaginated(page: $page, size: $size) {
    id
    name
    artworkPath
    path
    lastUpdated
    dateCreated
    releaseDate
    streams {
      id
    }
    likes {
      userId
    }
    artist {
      id
      name
    }
    genres {
      name
    }
    songs {
      id
      name
      path
      artworkPath
      artist {
        name
        imagePath
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
}
    `;

/**
 * __useGetAlbumsPaginatedQuery__
 *
 * To run a query within a React component, call `useGetAlbumsPaginatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAlbumsPaginatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAlbumsPaginatedQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetAlbumsPaginatedQuery(baseOptions?: Apollo.QueryHookOptions<GetAlbumsPaginatedQuery, GetAlbumsPaginatedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAlbumsPaginatedQuery, GetAlbumsPaginatedQueryVariables>(GetAlbumsPaginatedDocument, options);
      }
export function useGetAlbumsPaginatedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAlbumsPaginatedQuery, GetAlbumsPaginatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAlbumsPaginatedQuery, GetAlbumsPaginatedQueryVariables>(GetAlbumsPaginatedDocument, options);
        }
export type GetAlbumsPaginatedQueryHookResult = ReturnType<typeof useGetAlbumsPaginatedQuery>;
export type GetAlbumsPaginatedLazyQueryHookResult = ReturnType<typeof useGetAlbumsPaginatedLazyQuery>;
export type GetAlbumsPaginatedQueryResult = Apollo.QueryResult<GetAlbumsPaginatedQuery, GetAlbumsPaginatedQueryVariables>;