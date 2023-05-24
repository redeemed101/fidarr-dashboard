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
  /** Artist */
  artist?: Maybe<Artist>;
  /** Artwork. */
  artworkPath: Scalars['String'];
  /** Date Created */
  dateCreated: Scalars['DateTime'];
  /** Description */
  description: Scalars['String'];
  /** ForYou */
  forYou: Scalars['Boolean'];
  /** Genres */
  genres?: Maybe<Array<Maybe<Genre>>>;
  /**  Id. */
  id: Scalars['String'];
  /** Trending */
  isTrending: Scalars['Boolean'];
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
  /** Top Album */
  topAlbum: Scalars['Boolean'];
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
  /** Artist */
  artist?: Maybe<Artist>;
  /** artiwork path */
  artworkPath: Scalars['String'];
  /** description */
  description: Scalars['String'];
  /** FeaturingArtists */
  featuringArtists?: Maybe<Array<Maybe<Artist>>>;
  /** ForYou */
  forYou: Scalars['Boolean'];
  /** Genres */
  genres?: Maybe<Array<Maybe<Genre>>>;
  /** Song Id. */
  id: Scalars['String'];
  /** Trending */
  isTrending: Scalars['Boolean'];
  /** Last Updated */
  lastUpdated: Scalars['DateTime'];
  /** Likes. */
  likes?: Maybe<Array<Maybe<SongLike>>>;
  /** Name. */
  name: Scalars['String'];
  /** path */
  path: Scalars['String'];
  /** Preview Path */
  previewPath: Scalars['String'];
  /** Release Date */
  releaseDate: Scalars['DateTime'];
  /** Streams */
  streams?: Maybe<Array<Maybe<SongStream>>>;
  /** Top Song */
  topSong: Scalars['Boolean'];
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
  /**  Songs. */
  songs?: Maybe<Array<Maybe<Song>>>;
};

export type SongQuery = {
  __typename?: 'SongQuery';
  forYouSongsPaging?: Maybe<SongPaging>;
  searchSongsPaging?: Maybe<SongPaging>;
  songsPaginated?: Maybe<Array<Maybe<Song>>>;
  songsPaging?: Maybe<SongPaging>;
  topSongsPaging?: Maybe<SongPaging>;
  trendingSongsPaging?: Maybe<SongPaging>;
};


export type SongQueryForYouSongsPagingArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
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


export type SongQueryTopSongsPagingArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type SongQueryTrendingSongsPagingArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};

export type SongStream = {
  __typename?: 'SongStream';
  /**  Id. */
  id: Scalars['String'];
};

export type GetSearchSongsPagingQueryVariables = Exact<{
  page: Scalars['Int'];
  size: Scalars['Int'];
  searchWord: Scalars['String'];
}>;


export type GetSearchSongsPagingQuery = { __typename?: 'SongQuery', searchSongsPaging?: { __typename?: 'SongPaging', count: number, songs?: Array<{ __typename?: 'Song', id: string, name: string, path: string, artworkPath: string, isTrending: boolean, forYou: boolean, topSong: boolean, artist?: { __typename?: 'Artist', name: string, id: string } | null, likes?: Array<{ __typename?: 'SongLike', userId: string } | null> | null, streams?: Array<{ __typename?: 'SongStream', id: string } | null> | null, featuringArtists?: Array<{ __typename?: 'Artist', id: string, name: string, imagePath: string } | null> | null, genres?: Array<{ __typename?: 'Genre', id: string, name: string } | null> | null } | null> | null } | null };

export type GetSongPagingQueryVariables = Exact<{
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;


export type GetSongPagingQuery = { __typename?: 'SongQuery', songsPaging?: { __typename?: 'SongPaging', count: number, songs?: Array<{ __typename?: 'Song', id: string, name: string, path: string, artworkPath: string, isTrending: boolean, forYou: boolean, topSong: boolean, artist?: { __typename?: 'Artist', name: string, id: string } | null, likes?: Array<{ __typename?: 'SongLike', userId: string } | null> | null, streams?: Array<{ __typename?: 'SongStream', id: string } | null> | null, featuringArtists?: Array<{ __typename?: 'Artist', id: string, name: string, imagePath: string } | null> | null, genres?: Array<{ __typename?: 'Genre', id: string, name: string } | null> | null } | null> | null } | null };

export type GetTrendingSongPagingQueryVariables = Exact<{
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;


export type GetTrendingSongPagingQuery = { __typename?: 'SongQuery', trendingSongsPaging?: { __typename?: 'SongPaging', count: number, songs?: Array<{ __typename?: 'Song', id: string, name: string, path: string, artworkPath: string, isTrending: boolean, forYou: boolean, topSong: boolean, artist?: { __typename?: 'Artist', name: string, id: string } | null, likes?: Array<{ __typename?: 'SongLike', userId: string } | null> | null, streams?: Array<{ __typename?: 'SongStream', id: string } | null> | null, featuringArtists?: Array<{ __typename?: 'Artist', id: string, name: string, imagePath: string } | null> | null, genres?: Array<{ __typename?: 'Genre', id: string, name: string } | null> | null } | null> | null } | null };

export type GetForYouSongPagingQueryVariables = Exact<{
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;


export type GetForYouSongPagingQuery = { __typename?: 'SongQuery', forYouSongsPaging?: { __typename?: 'SongPaging', count: number, songs?: Array<{ __typename?: 'Song', id: string, name: string, path: string, artworkPath: string, isTrending: boolean, forYou: boolean, topSong: boolean, artist?: { __typename?: 'Artist', name: string, id: string } | null, likes?: Array<{ __typename?: 'SongLike', userId: string } | null> | null, streams?: Array<{ __typename?: 'SongStream', id: string } | null> | null, featuringArtists?: Array<{ __typename?: 'Artist', id: string, name: string, imagePath: string } | null> | null, genres?: Array<{ __typename?: 'Genre', id: string, name: string } | null> | null } | null> | null } | null };

export type GetTopSongPagingQueryVariables = Exact<{
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;


export type GetTopSongPagingQuery = { __typename?: 'SongQuery', topSongsPaging?: { __typename?: 'SongPaging', count: number, songs?: Array<{ __typename?: 'Song', id: string, name: string, path: string, artworkPath: string, isTrending: boolean, forYou: boolean, topSong: boolean, artist?: { __typename?: 'Artist', name: string, id: string } | null, likes?: Array<{ __typename?: 'SongLike', userId: string } | null> | null, streams?: Array<{ __typename?: 'SongStream', id: string } | null> | null, featuringArtists?: Array<{ __typename?: 'Artist', id: string, name: string, imagePath: string } | null> | null, genres?: Array<{ __typename?: 'Genre', id: string, name: string } | null> | null } | null> | null } | null };


export const GetSearchSongsPagingDocument = gql`
    query getSearchSongsPaging($page: Int!, $size: Int!, $searchWord: String!) {
  searchSongsPaging(page: $page, size: $size, searchWord: $searchWord) {
    count
    songs {
      id
      name
      path
      artworkPath
      isTrending
      forYou
      topSong
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
      featuringArtists {
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
      isTrending
      forYou
      topSong
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
      featuringArtists {
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
export const GetTrendingSongPagingDocument = gql`
    query getTrendingSongPaging($page: Int!, $size: Int!) {
  trendingSongsPaging(page: $page, size: $size) {
    count
    songs {
      id
      name
      path
      artworkPath
      isTrending
      forYou
      topSong
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
      featuringArtists {
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
 * __useGetTrendingSongPagingQuery__
 *
 * To run a query within a React component, call `useGetTrendingSongPagingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrendingSongPagingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrendingSongPagingQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetTrendingSongPagingQuery(baseOptions: Apollo.QueryHookOptions<GetTrendingSongPagingQuery, GetTrendingSongPagingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTrendingSongPagingQuery, GetTrendingSongPagingQueryVariables>(GetTrendingSongPagingDocument, options);
      }
export function useGetTrendingSongPagingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTrendingSongPagingQuery, GetTrendingSongPagingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTrendingSongPagingQuery, GetTrendingSongPagingQueryVariables>(GetTrendingSongPagingDocument, options);
        }
export type GetTrendingSongPagingQueryHookResult = ReturnType<typeof useGetTrendingSongPagingQuery>;
export type GetTrendingSongPagingLazyQueryHookResult = ReturnType<typeof useGetTrendingSongPagingLazyQuery>;
export type GetTrendingSongPagingQueryResult = Apollo.QueryResult<GetTrendingSongPagingQuery, GetTrendingSongPagingQueryVariables>;
export const GetForYouSongPagingDocument = gql`
    query getForYouSongPaging($page: Int!, $size: Int!) {
  forYouSongsPaging(page: $page, size: $size) {
    count
    songs {
      id
      name
      path
      artworkPath
      isTrending
      forYou
      topSong
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
      featuringArtists {
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
 * __useGetForYouSongPagingQuery__
 *
 * To run a query within a React component, call `useGetForYouSongPagingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetForYouSongPagingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetForYouSongPagingQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetForYouSongPagingQuery(baseOptions: Apollo.QueryHookOptions<GetForYouSongPagingQuery, GetForYouSongPagingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetForYouSongPagingQuery, GetForYouSongPagingQueryVariables>(GetForYouSongPagingDocument, options);
      }
export function useGetForYouSongPagingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetForYouSongPagingQuery, GetForYouSongPagingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetForYouSongPagingQuery, GetForYouSongPagingQueryVariables>(GetForYouSongPagingDocument, options);
        }
export type GetForYouSongPagingQueryHookResult = ReturnType<typeof useGetForYouSongPagingQuery>;
export type GetForYouSongPagingLazyQueryHookResult = ReturnType<typeof useGetForYouSongPagingLazyQuery>;
export type GetForYouSongPagingQueryResult = Apollo.QueryResult<GetForYouSongPagingQuery, GetForYouSongPagingQueryVariables>;
export const GetTopSongPagingDocument = gql`
    query getTopSongPaging($page: Int!, $size: Int!) {
  topSongsPaging(page: $page, size: $size) {
    count
    songs {
      id
      name
      path
      artworkPath
      isTrending
      forYou
      topSong
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
      featuringArtists {
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
 * __useGetTopSongPagingQuery__
 *
 * To run a query within a React component, call `useGetTopSongPagingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTopSongPagingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTopSongPagingQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetTopSongPagingQuery(baseOptions: Apollo.QueryHookOptions<GetTopSongPagingQuery, GetTopSongPagingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTopSongPagingQuery, GetTopSongPagingQueryVariables>(GetTopSongPagingDocument, options);
      }
export function useGetTopSongPagingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTopSongPagingQuery, GetTopSongPagingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTopSongPagingQuery, GetTopSongPagingQueryVariables>(GetTopSongPagingDocument, options);
        }
export type GetTopSongPagingQueryHookResult = ReturnType<typeof useGetTopSongPagingQuery>;
export type GetTopSongPagingLazyQueryHookResult = ReturnType<typeof useGetTopSongPagingLazyQuery>;
export type GetTopSongPagingQueryResult = Apollo.QueryResult<GetTopSongPagingQuery, GetTopSongPagingQueryVariables>;