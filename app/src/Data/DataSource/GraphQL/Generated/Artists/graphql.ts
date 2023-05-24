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

export type ArtistPaging = {
  __typename?: 'ArtistPaging';
  /** Artists */
  artists?: Maybe<Array<Maybe<Artist>>>;
  /**  Count. */
  count: Scalars['Int'];
};

export type ArtistQuery = {
  __typename?: 'ArtistQuery';
  artist?: Maybe<Artist>;
  artists?: Maybe<Array<Maybe<Artist>>>;
  artistsPaginated?: Maybe<Array<Maybe<Artist>>>;
  artistsPaging?: Maybe<ArtistPaging>;
  searchArtistsPaginated?: Maybe<Array<Maybe<Artist>>>;
  searchArtistsPaging?: Maybe<ArtistPaging>;
  trendingArtistsPaginated?: Maybe<Array<Maybe<Artist>>>;
  trendingArtistsPaging?: Maybe<ArtistPaging>;
};


export type ArtistQueryArtistArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type ArtistQueryArtistsPaginatedArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type ArtistQueryArtistsPagingArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type ArtistQuerySearchArtistsPaginatedArgs = {
  page?: InputMaybe<Scalars['Int']>;
  searchWord?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type ArtistQuerySearchArtistsPagingArgs = {
  page?: InputMaybe<Scalars['Int']>;
  searchWord?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type ArtistQueryTrendingArtistsPaginatedArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type ArtistQueryTrendingArtistsPagingArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
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

export type SongStream = {
  __typename?: 'SongStream';
  /**  Id. */
  id: Scalars['String'];
};

export type GetSearchArtistsPagingQueryVariables = Exact<{
  page: Scalars['Int'];
  size: Scalars['Int'];
  searchWord: Scalars['String'];
}>;


export type GetSearchArtistsPagingQuery = { __typename?: 'ArtistQuery', searchArtistsPaging?: { __typename?: 'ArtistPaging', count: number, artists?: Array<{ __typename?: 'Artist', id: string, name: string, imagePath: string, isProfileClaimed: boolean, lastUpdated: any, dateCreated: any, genres?: Array<{ __typename?: 'Genre', id: string, name: string } | null> | null, songs?: Array<{ __typename?: 'Song', id: string, name: string, path: string, artworkPath: string, streams?: Array<{ __typename?: 'SongStream', id: string } | null> | null } | null> | null, albums?: Array<{ __typename?: 'Album', id: string, name: string, artworkPath: string, lastUpdated: any, releaseDate: any, dateCreated: any, streams?: Array<{ __typename?: 'AlbumStream', id: string } | null> | null } | null> | null } | null> | null } | null };

export type GetTrendingArtistsPagingQueryVariables = Exact<{
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;


export type GetTrendingArtistsPagingQuery = { __typename?: 'ArtistQuery', trendingArtistsPaging?: { __typename?: 'ArtistPaging', count: number, artists?: Array<{ __typename?: 'Artist', id: string, name: string, imagePath: string, isProfileClaimed: boolean, lastUpdated: any, dateCreated: any, genres?: Array<{ __typename?: 'Genre', id: string, name: string } | null> | null, songs?: Array<{ __typename?: 'Song', id: string, name: string, path: string, artworkPath: string, streams?: Array<{ __typename?: 'SongStream', id: string } | null> | null } | null> | null, albums?: Array<{ __typename?: 'Album', id: string, name: string, artworkPath: string, lastUpdated: any, releaseDate: any, dateCreated: any, streams?: Array<{ __typename?: 'AlbumStream', id: string } | null> | null } | null> | null } | null> | null } | null };

export type GetArtistsPagingQueryVariables = Exact<{
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;


export type GetArtistsPagingQuery = { __typename?: 'ArtistQuery', artistsPaging?: { __typename?: 'ArtistPaging', count: number, artists?: Array<{ __typename?: 'Artist', id: string, name: string, imagePath: string, isProfileClaimed: boolean, lastUpdated: any, dateCreated: any, genres?: Array<{ __typename?: 'Genre', id: string, name: string } | null> | null, songs?: Array<{ __typename?: 'Song', id: string, name: string, path: string, artworkPath: string, streams?: Array<{ __typename?: 'SongStream', id: string } | null> | null } | null> | null, albums?: Array<{ __typename?: 'Album', id: string, name: string, artworkPath: string, lastUpdated: any, releaseDate: any, dateCreated: any, streams?: Array<{ __typename?: 'AlbumStream', id: string } | null> | null } | null> | null } | null> | null } | null };


export const GetSearchArtistsPagingDocument = gql`
    query getSearchArtistsPaging($page: Int!, $size: Int!, $searchWord: String!) {
  searchArtistsPaging(page: $page, size: $size, searchWord: $searchWord) {
    count
    artists {
      id
      name
      imagePath
      isProfileClaimed
      lastUpdated
      dateCreated
      genres {
        id
        name
      }
      songs {
        id
        name
        path
        artworkPath
        streams {
          id
        }
      }
      albums {
        id
        name
        streams {
          id
        }
        artworkPath
        lastUpdated
        releaseDate
        dateCreated
      }
    }
  }
}
    `;

/**
 * __useGetSearchArtistsPagingQuery__
 *
 * To run a query within a React component, call `useGetSearchArtistsPagingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSearchArtistsPagingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSearchArtistsPagingQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *      searchWord: // value for 'searchWord'
 *   },
 * });
 */
export function useGetSearchArtistsPagingQuery(baseOptions: Apollo.QueryHookOptions<GetSearchArtistsPagingQuery, GetSearchArtistsPagingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSearchArtistsPagingQuery, GetSearchArtistsPagingQueryVariables>(GetSearchArtistsPagingDocument, options);
      }
export function useGetSearchArtistsPagingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSearchArtistsPagingQuery, GetSearchArtistsPagingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSearchArtistsPagingQuery, GetSearchArtistsPagingQueryVariables>(GetSearchArtistsPagingDocument, options);
        }
export type GetSearchArtistsPagingQueryHookResult = ReturnType<typeof useGetSearchArtistsPagingQuery>;
export type GetSearchArtistsPagingLazyQueryHookResult = ReturnType<typeof useGetSearchArtistsPagingLazyQuery>;
export type GetSearchArtistsPagingQueryResult = Apollo.QueryResult<GetSearchArtistsPagingQuery, GetSearchArtistsPagingQueryVariables>;
export const GetTrendingArtistsPagingDocument = gql`
    query getTrendingArtistsPaging($page: Int!, $size: Int!) {
  trendingArtistsPaging(page: $page, size: $size) {
    count
    artists {
      id
      name
      imagePath
      isProfileClaimed
      lastUpdated
      dateCreated
      genres {
        id
        name
      }
      songs {
        id
        name
        path
        artworkPath
        streams {
          id
        }
      }
      albums {
        id
        name
        streams {
          id
        }
        artworkPath
        lastUpdated
        releaseDate
        dateCreated
      }
    }
  }
}
    `;

/**
 * __useGetTrendingArtistsPagingQuery__
 *
 * To run a query within a React component, call `useGetTrendingArtistsPagingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrendingArtistsPagingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrendingArtistsPagingQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetTrendingArtistsPagingQuery(baseOptions: Apollo.QueryHookOptions<GetTrendingArtistsPagingQuery, GetTrendingArtistsPagingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTrendingArtistsPagingQuery, GetTrendingArtistsPagingQueryVariables>(GetTrendingArtistsPagingDocument, options);
      }
export function useGetTrendingArtistsPagingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTrendingArtistsPagingQuery, GetTrendingArtistsPagingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTrendingArtistsPagingQuery, GetTrendingArtistsPagingQueryVariables>(GetTrendingArtistsPagingDocument, options);
        }
export type GetTrendingArtistsPagingQueryHookResult = ReturnType<typeof useGetTrendingArtistsPagingQuery>;
export type GetTrendingArtistsPagingLazyQueryHookResult = ReturnType<typeof useGetTrendingArtistsPagingLazyQuery>;
export type GetTrendingArtistsPagingQueryResult = Apollo.QueryResult<GetTrendingArtistsPagingQuery, GetTrendingArtistsPagingQueryVariables>;
export const GetArtistsPagingDocument = gql`
    query getArtistsPaging($page: Int!, $size: Int!) {
  artistsPaging(page: $page, size: $size) {
    count
    artists {
      id
      name
      imagePath
      isProfileClaimed
      lastUpdated
      dateCreated
      genres {
        id
        name
      }
      songs {
        id
        name
        path
        artworkPath
        streams {
          id
        }
      }
      albums {
        id
        name
        streams {
          id
        }
        artworkPath
        lastUpdated
        releaseDate
        dateCreated
      }
    }
  }
}
    `;

/**
 * __useGetArtistsPagingQuery__
 *
 * To run a query within a React component, call `useGetArtistsPagingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArtistsPagingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArtistsPagingQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetArtistsPagingQuery(baseOptions: Apollo.QueryHookOptions<GetArtistsPagingQuery, GetArtistsPagingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArtistsPagingQuery, GetArtistsPagingQueryVariables>(GetArtistsPagingDocument, options);
      }
export function useGetArtistsPagingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArtistsPagingQuery, GetArtistsPagingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArtistsPagingQuery, GetArtistsPagingQueryVariables>(GetArtistsPagingDocument, options);
        }
export type GetArtistsPagingQueryHookResult = ReturnType<typeof useGetArtistsPagingQuery>;
export type GetArtistsPagingLazyQueryHookResult = ReturnType<typeof useGetArtistsPagingLazyQuery>;
export type GetArtistsPagingQueryResult = Apollo.QueryResult<GetArtistsPagingQuery, GetArtistsPagingQueryVariables>;