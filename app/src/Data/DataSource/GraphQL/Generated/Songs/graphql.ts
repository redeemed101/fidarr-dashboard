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
  /** The `DateTime` scalar type represents a date and time. `DateTime` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  DateTime: any;
};

export type Album = {
  __typename?: 'Album';
  /** Artwork. */
  artworkPath: Scalars['String'];
  /** Date Created */
  dateCreated: Scalars['DateTime'];
  /** Description */
  description: Scalars['String'];
  /** Genres */
  genres?: Maybe<Array<Maybe<Genre>>>;
  /**  Id. */
  id: Scalars['String'];
  /** Last Updated */
  lastUpdated: Scalars['DateTime'];
  /** Likes */
  likes?: Maybe<Array<Maybe<AlbumLike>>>;
  /** Name. */
  name: Scalars['String'];
  /** Path. */
  path: Scalars['String'];
  /** Release Date */
  releaseDate: Scalars['DateTime'];
  /** Songs */
  songs?: Maybe<Array<Maybe<Song>>>;
  /** Streams */
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
  /** Albums */
  albums?: Maybe<Array<Maybe<Album>>>;
  /**  Bio. */
  bio: Scalars['String'];
  /** Date Created. */
  dateCreated: Scalars['DateTime'];
  /** Genres */
  genres?: Maybe<Array<Maybe<Genre>>>;
  /**  Id. */
  id: Scalars['String'];
  /**  Artist Image. */
  imagePath: Scalars['String'];
  /**  Is the account claimed */
  isProfileClaimed: Scalars['Boolean'];
  /** Last Updated. */
  lastUpdated: Scalars['DateTime'];
  /** Likes */
  likes?: Maybe<Array<Maybe<AlbumLike>>>;
  /** Name. */
  name: Scalars['String'];
  /** Songs */
  songs?: Maybe<Array<Maybe<Song>>>;
  /**  Artist User Id. */
  userId: Scalars['String'];
  /**  Website. */
  website: Scalars['String'];
};

export type Genre = {
  __typename?: 'Genre';
  /** Albums */
  albums?: Maybe<Array<Maybe<Album>>>;
  /** Artists */
  artists?: Maybe<Array<Maybe<Artist>>>;
  /** Date Created. */
  dateCreated: Scalars['DateTime'];
  /**  Id. */
  id: Scalars['String'];
  /** Image Url. */
  imageUrl: Scalars['String'];
  /** Last Updated. */
  lastUpdated: Scalars['DateTime'];
  /** Name. */
  name: Scalars['String'];
  /** Songs */
  songs?: Maybe<Array<Maybe<Song>>>;
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
  /** Last Updated */
  lastUpdated: Scalars['DateTime'];
  likes?: Maybe<Array<Maybe<SongLike>>>;
  /** Name. */
  name: Scalars['String'];
  /** path */
  path: Scalars['String'];
  /** Preview Path */
  previewPath: Scalars['String'];
  /** Release Date */
  releaseDate: Scalars['DateTime'];
  streams?: Maybe<Array<Maybe<SongStream>>>;
};

export type SongLike = {
  __typename?: 'SongLike';
  /**  Id. */
  userId: Scalars['String'];
};

export type SongPaging = {
  __typename?: 'SongPaging';
  /**  Count. */
  count: Scalars['Int'];
  songs?: Maybe<Array<Maybe<Song>>>;
};

export type SongQuery = {
  __typename?: 'SongQuery';
  searchSongsPaging?: Maybe<SongPaging>;
  songsPaginated?: Maybe<Array<Maybe<Song>>>;
  songsPaging?: Maybe<SongPaging>;
};


export type SongQuerySearchSongsPagingArgs = {
  page?: InputMaybe<Scalars['Int']>;
  searchWord?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type SongQuerySongsPaginatedArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type SongQuerySongsPagingArgs = {
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

export type GetSearchSongsPagingQueryVariables = Exact<{
  page: Scalars['Int'];
  size: Scalars['Int'];
  searchWord: Scalars['String'];
}>;


export type GetSearchSongsPagingQuery = { __typename?: 'SongQuery', searchSongsPaging?: { __typename?: 'SongPaging', count: number, songs?: Array<{ __typename?: 'Song', id: string, name: string, path: string, artworkPath: string, artist?: { __typename?: 'Artist', name: string, id: string } | null, likes?: Array<{ __typename?: 'SongLike', userId: string } | null> | null, streams?: Array<{ __typename?: 'SongStream', id: string } | null> | null, featurungArtists?: Array<{ __typename?: 'Artist', id: string, name: string, imagePath: string } | null> | null, genres?: Array<{ __typename?: 'Genre', id: string, name: string } | null> | null } | null> | null } | null };

export type GetSongPagingQueryVariables = Exact<{
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;


export type GetSongPagingQuery = { __typename?: 'SongQuery', songsPaging?: { __typename?: 'SongPaging', count: number, songs?: Array<{ __typename?: 'Song', id: string, name: string, path: string, artworkPath: string, artist?: { __typename?: 'Artist', name: string, id: string } | null, likes?: Array<{ __typename?: 'SongLike', userId: string } | null> | null, streams?: Array<{ __typename?: 'SongStream', id: string } | null> | null, featurungArtists?: Array<{ __typename?: 'Artist', id: string, name: string, imagePath: string } | null> | null, genres?: Array<{ __typename?: 'Genre', id: string, name: string } | null> | null } | null> | null } | null };


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
export const GetSearchSongsPagingDocument = gql`
    query getSearchSongsPaging($page: Int!, $size: Int!, $searchWord: String!) {
  searchSongsPaging(page: $page, size: $size, searchWord: $searchWord) {
    count
    songs {
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
}
    `;

/**
 * __useGetSearchSongsPagingQuery__
 *
 * To run a query within a React component, call `useGetSearchSongsPagingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSearchSongsPagingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSearchSongsPagingQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *      searchWord: // value for 'searchWord'
 *   },
 * });
 */
export function useGetSearchSongsPagingQuery(baseOptions: Apollo.QueryHookOptions<GetSearchSongsPagingQuery, GetSearchSongsPagingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSearchSongsPagingQuery, GetSearchSongsPagingQueryVariables>(GetSearchSongsPagingDocument, options);
      }
export function useGetSearchSongsPagingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSearchSongsPagingQuery, GetSearchSongsPagingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSearchSongsPagingQuery, GetSearchSongsPagingQueryVariables>(GetSearchSongsPagingDocument, options);
        }
export type GetSearchSongsPagingQueryHookResult = ReturnType<typeof useGetSearchSongsPagingQuery>;
export type GetSearchSongsPagingLazyQueryHookResult = ReturnType<typeof useGetSearchSongsPagingLazyQuery>;
export type GetSearchSongsPagingQueryResult = Apollo.QueryResult<GetSearchSongsPagingQuery, GetSearchSongsPagingQueryVariables>;
export const GetSongPagingDocument = gql`
    query getSongPaging($page: Int!, $size: Int!) {
  songsPaging(page: $page, size: $size) {
    count
    songs {
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
}
    `;

/**
 * __useGetSongPagingQuery__
 *
 * To run a query within a React component, call `useGetSongPagingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSongPagingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSongPagingQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetSongPagingQuery(baseOptions: Apollo.QueryHookOptions<GetSongPagingQuery, GetSongPagingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSongPagingQuery, GetSongPagingQueryVariables>(GetSongPagingDocument, options);
      }
export function useGetSongPagingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSongPagingQuery, GetSongPagingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSongPagingQuery, GetSongPagingQueryVariables>(GetSongPagingDocument, options);
        }
export type GetSongPagingQueryHookResult = ReturnType<typeof useGetSongPagingQuery>;
export type GetSongPagingLazyQueryHookResult = ReturnType<typeof useGetSongPagingLazyQuery>;
export type GetSongPagingQueryResult = Apollo.QueryResult<GetSongPagingQuery, GetSongPagingQueryVariables>;