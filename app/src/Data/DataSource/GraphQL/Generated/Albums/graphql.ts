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

export type AlbumPaging = {
  __typename?: 'AlbumPaging';
  /** Albums */
  albums?: Maybe<Array<Maybe<Album>>>;
  /**  Count. */
  count: Scalars['Int'];
};

export type AlbumQuery = {
  __typename?: 'AlbumQuery';
  album?: Maybe<Album>;
  albums?: Maybe<Array<Maybe<Album>>>;
  albumsPaginated?: Maybe<Array<Maybe<Album>>>;
  albumsPaging?: Maybe<AlbumPaging>;
  forYouAlbumsPaging?: Maybe<AlbumPaging>;
  searchAlbumsPaginated?: Maybe<Array<Maybe<Album>>>;
  searchAlbumsPaging?: Maybe<AlbumPaging>;
  topAlbumsPaging?: Maybe<AlbumPaging>;
  trendingAlbumsPaginated?: Maybe<Array<Maybe<Album>>>;
  trendingAlbumsPaging?: Maybe<AlbumPaging>;
};


export type AlbumQueryAlbumArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type AlbumQueryAlbumsPaginatedArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type AlbumQueryAlbumsPagingArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type AlbumQueryForYouAlbumsPagingArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type AlbumQuerySearchAlbumsPaginatedArgs = {
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type AlbumQuerySearchAlbumsPagingArgs = {
  page?: InputMaybe<Scalars['Int']>;
  searchWord?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type AlbumQueryTopAlbumsPagingArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type AlbumQueryTrendingAlbumsPaginatedArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type AlbumQueryTrendingAlbumsPagingArgs = {
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

export type SongStream = {
  __typename?: 'SongStream';
  /**  Id. */
  id: Scalars['String'];
};

export type GetSearchingAlbumsPagingQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  searchWord: Scalars['String'];
}>;


export type GetSearchingAlbumsPagingQuery = { __typename?: 'AlbumQuery', searchAlbumsPaging?: { __typename?: 'AlbumPaging', count: number, albums?: Array<{ __typename?: 'Album', id: string, name: string, artworkPath: string, path: string, lastUpdated: any, dateCreated: any, releaseDate: any, isTrending: boolean, forYou: boolean, topAlbum: boolean, streams?: Array<{ __typename?: 'AlbumStream', id: string } | null> | null, likes?: Array<{ __typename?: 'AlbumLike', userId: string } | null> | null, artist?: { __typename?: 'Artist', id: string, name: string } | null, genres?: Array<{ __typename?: 'Genre', name: string } | null> | null, songs?: Array<{ __typename?: 'Song', id: string, name: string, path: string, artworkPath: string, artist?: { __typename?: 'Artist', name: string, imagePath: string, id: string } | null, likes?: Array<{ __typename?: 'SongLike', userId: string } | null> | null, streams?: Array<{ __typename?: 'SongStream', id: string } | null> | null, featuringArtists?: Array<{ __typename?: 'Artist', id: string, name: string, imagePath: string } | null> | null, genres?: Array<{ __typename?: 'Genre', id: string, name: string } | null> | null } | null> | null } | null> | null } | null };

export type GetAlbumPagingQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
}>;


export type GetAlbumPagingQuery = { __typename?: 'AlbumQuery', albumsPaging?: { __typename?: 'AlbumPaging', count: number, albums?: Array<{ __typename?: 'Album', id: string, name: string, artworkPath: string, isTrending: boolean, forYou: boolean, topAlbum: boolean, path: string, lastUpdated: any, dateCreated: any, releaseDate: any, streams?: Array<{ __typename?: 'AlbumStream', id: string } | null> | null, likes?: Array<{ __typename?: 'AlbumLike', userId: string } | null> | null, artist?: { __typename?: 'Artist', id: string, name: string } | null, genres?: Array<{ __typename?: 'Genre', name: string } | null> | null, songs?: Array<{ __typename?: 'Song', id: string, name: string, path: string, artworkPath: string, artist?: { __typename?: 'Artist', name: string, imagePath: string, id: string } | null, likes?: Array<{ __typename?: 'SongLike', userId: string } | null> | null, streams?: Array<{ __typename?: 'SongStream', id: string } | null> | null, featuringArtists?: Array<{ __typename?: 'Artist', id: string, name: string, imagePath: string } | null> | null, genres?: Array<{ __typename?: 'Genre', id: string, name: string } | null> | null } | null> | null } | null> | null } | null };

export type GetTrendingAlbumPagingQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
}>;


export type GetTrendingAlbumPagingQuery = { __typename?: 'AlbumQuery', trendingAlbumsPaging?: { __typename?: 'AlbumPaging', count: number, albums?: Array<{ __typename?: 'Album', id: string, name: string, artworkPath: string, isTrending: boolean, forYou: boolean, topAlbum: boolean, path: string, lastUpdated: any, dateCreated: any, releaseDate: any, streams?: Array<{ __typename?: 'AlbumStream', id: string } | null> | null, likes?: Array<{ __typename?: 'AlbumLike', userId: string } | null> | null, artist?: { __typename?: 'Artist', id: string, name: string } | null, genres?: Array<{ __typename?: 'Genre', name: string } | null> | null, songs?: Array<{ __typename?: 'Song', id: string, name: string, path: string, artworkPath: string, artist?: { __typename?: 'Artist', name: string, imagePath: string, id: string } | null, likes?: Array<{ __typename?: 'SongLike', userId: string } | null> | null, streams?: Array<{ __typename?: 'SongStream', id: string } | null> | null, featuringArtists?: Array<{ __typename?: 'Artist', id: string, name: string, imagePath: string } | null> | null, genres?: Array<{ __typename?: 'Genre', id: string, name: string } | null> | null } | null> | null } | null> | null } | null };

export type GetForYouAlbumPagingQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
}>;


export type GetForYouAlbumPagingQuery = { __typename?: 'AlbumQuery', forYouAlbumsPaging?: { __typename?: 'AlbumPaging', count: number, albums?: Array<{ __typename?: 'Album', id: string, name: string, artworkPath: string, isTrending: boolean, forYou: boolean, topAlbum: boolean, path: string, lastUpdated: any, dateCreated: any, releaseDate: any, streams?: Array<{ __typename?: 'AlbumStream', id: string } | null> | null, likes?: Array<{ __typename?: 'AlbumLike', userId: string } | null> | null, artist?: { __typename?: 'Artist', id: string, name: string } | null, genres?: Array<{ __typename?: 'Genre', name: string } | null> | null, songs?: Array<{ __typename?: 'Song', id: string, name: string, path: string, artworkPath: string, artist?: { __typename?: 'Artist', name: string, imagePath: string, id: string } | null, likes?: Array<{ __typename?: 'SongLike', userId: string } | null> | null, streams?: Array<{ __typename?: 'SongStream', id: string } | null> | null, featuringArtists?: Array<{ __typename?: 'Artist', id: string, name: string, imagePath: string } | null> | null, genres?: Array<{ __typename?: 'Genre', id: string, name: string } | null> | null } | null> | null } | null> | null } | null };

export type GetTopAlbumPagingQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
}>;


export type GetTopAlbumPagingQuery = { __typename?: 'AlbumQuery', topAlbumsPaging?: { __typename?: 'AlbumPaging', count: number, albums?: Array<{ __typename?: 'Album', id: string, name: string, artworkPath: string, isTrending: boolean, forYou: boolean, topAlbum: boolean, path: string, lastUpdated: any, dateCreated: any, releaseDate: any, streams?: Array<{ __typename?: 'AlbumStream', id: string } | null> | null, likes?: Array<{ __typename?: 'AlbumLike', userId: string } | null> | null, artist?: { __typename?: 'Artist', id: string, name: string } | null, genres?: Array<{ __typename?: 'Genre', name: string } | null> | null, songs?: Array<{ __typename?: 'Song', id: string, name: string, path: string, artworkPath: string, artist?: { __typename?: 'Artist', name: string, imagePath: string, id: string } | null, likes?: Array<{ __typename?: 'SongLike', userId: string } | null> | null, streams?: Array<{ __typename?: 'SongStream', id: string } | null> | null, featuringArtists?: Array<{ __typename?: 'Artist', id: string, name: string, imagePath: string } | null> | null, genres?: Array<{ __typename?: 'Genre', id: string, name: string } | null> | null } | null> | null } | null> | null } | null };


export const GetSearchingAlbumsPagingDocument = gql`
    query getSearchingAlbumsPaging($page: Int, $size: Int, $searchWord: String!) {
  searchAlbumsPaging(page: $page, size: $size, searchWord: $searchWord) {
    count
    albums {
      id
      name
      artworkPath
      path
      lastUpdated
      dateCreated
      releaseDate
      isTrending
      forYou
      topAlbum
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
}
    `;

/**
 * __useGetSearchingAlbumsPagingQuery__
 *
 * To run a query within a React component, call `useGetSearchingAlbumsPagingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSearchingAlbumsPagingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSearchingAlbumsPagingQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *      searchWord: // value for 'searchWord'
 *   },
 * });
 */
export function useGetSearchingAlbumsPagingQuery(baseOptions: Apollo.QueryHookOptions<GetSearchingAlbumsPagingQuery, GetSearchingAlbumsPagingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSearchingAlbumsPagingQuery, GetSearchingAlbumsPagingQueryVariables>(GetSearchingAlbumsPagingDocument, options);
      }
export function useGetSearchingAlbumsPagingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSearchingAlbumsPagingQuery, GetSearchingAlbumsPagingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSearchingAlbumsPagingQuery, GetSearchingAlbumsPagingQueryVariables>(GetSearchingAlbumsPagingDocument, options);
        }
export type GetSearchingAlbumsPagingQueryHookResult = ReturnType<typeof useGetSearchingAlbumsPagingQuery>;
export type GetSearchingAlbumsPagingLazyQueryHookResult = ReturnType<typeof useGetSearchingAlbumsPagingLazyQuery>;
export type GetSearchingAlbumsPagingQueryResult = Apollo.QueryResult<GetSearchingAlbumsPagingQuery, GetSearchingAlbumsPagingQueryVariables>;
export const GetAlbumPagingDocument = gql`
    query getAlbumPaging($page: Int, $size: Int) {
  albumsPaging(page: $page, size: $size) {
    count
    albums {
      id
      name
      artworkPath
      isTrending
      forYou
      topAlbum
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
}
    `;

/**
 * __useGetAlbumPagingQuery__
 *
 * To run a query within a React component, call `useGetAlbumPagingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAlbumPagingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAlbumPagingQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetAlbumPagingQuery(baseOptions?: Apollo.QueryHookOptions<GetAlbumPagingQuery, GetAlbumPagingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAlbumPagingQuery, GetAlbumPagingQueryVariables>(GetAlbumPagingDocument, options);
      }
export function useGetAlbumPagingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAlbumPagingQuery, GetAlbumPagingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAlbumPagingQuery, GetAlbumPagingQueryVariables>(GetAlbumPagingDocument, options);
        }
export type GetAlbumPagingQueryHookResult = ReturnType<typeof useGetAlbumPagingQuery>;
export type GetAlbumPagingLazyQueryHookResult = ReturnType<typeof useGetAlbumPagingLazyQuery>;
export type GetAlbumPagingQueryResult = Apollo.QueryResult<GetAlbumPagingQuery, GetAlbumPagingQueryVariables>;
export const GetTrendingAlbumPagingDocument = gql`
    query getTrendingAlbumPaging($page: Int, $size: Int) {
  trendingAlbumsPaging(page: $page, size: $size) {
    count
    albums {
      id
      name
      artworkPath
      isTrending
      forYou
      topAlbum
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
}
    `;

/**
 * __useGetTrendingAlbumPagingQuery__
 *
 * To run a query within a React component, call `useGetTrendingAlbumPagingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrendingAlbumPagingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrendingAlbumPagingQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetTrendingAlbumPagingQuery(baseOptions?: Apollo.QueryHookOptions<GetTrendingAlbumPagingQuery, GetTrendingAlbumPagingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTrendingAlbumPagingQuery, GetTrendingAlbumPagingQueryVariables>(GetTrendingAlbumPagingDocument, options);
      }
export function useGetTrendingAlbumPagingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTrendingAlbumPagingQuery, GetTrendingAlbumPagingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTrendingAlbumPagingQuery, GetTrendingAlbumPagingQueryVariables>(GetTrendingAlbumPagingDocument, options);
        }
export type GetTrendingAlbumPagingQueryHookResult = ReturnType<typeof useGetTrendingAlbumPagingQuery>;
export type GetTrendingAlbumPagingLazyQueryHookResult = ReturnType<typeof useGetTrendingAlbumPagingLazyQuery>;
export type GetTrendingAlbumPagingQueryResult = Apollo.QueryResult<GetTrendingAlbumPagingQuery, GetTrendingAlbumPagingQueryVariables>;
export const GetForYouAlbumPagingDocument = gql`
    query getForYouAlbumPaging($page: Int, $size: Int) {
  forYouAlbumsPaging(page: $page, size: $size) {
    count
    albums {
      id
      name
      artworkPath
      isTrending
      forYou
      topAlbum
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
}
    `;

/**
 * __useGetForYouAlbumPagingQuery__
 *
 * To run a query within a React component, call `useGetForYouAlbumPagingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetForYouAlbumPagingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetForYouAlbumPagingQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetForYouAlbumPagingQuery(baseOptions?: Apollo.QueryHookOptions<GetForYouAlbumPagingQuery, GetForYouAlbumPagingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetForYouAlbumPagingQuery, GetForYouAlbumPagingQueryVariables>(GetForYouAlbumPagingDocument, options);
      }
export function useGetForYouAlbumPagingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetForYouAlbumPagingQuery, GetForYouAlbumPagingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetForYouAlbumPagingQuery, GetForYouAlbumPagingQueryVariables>(GetForYouAlbumPagingDocument, options);
        }
export type GetForYouAlbumPagingQueryHookResult = ReturnType<typeof useGetForYouAlbumPagingQuery>;
export type GetForYouAlbumPagingLazyQueryHookResult = ReturnType<typeof useGetForYouAlbumPagingLazyQuery>;
export type GetForYouAlbumPagingQueryResult = Apollo.QueryResult<GetForYouAlbumPagingQuery, GetForYouAlbumPagingQueryVariables>;
export const GetTopAlbumPagingDocument = gql`
    query getTopAlbumPaging($page: Int, $size: Int) {
  topAlbumsPaging(page: $page, size: $size) {
    count
    albums {
      id
      name
      artworkPath
      isTrending
      forYou
      topAlbum
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
}
    `;

/**
 * __useGetTopAlbumPagingQuery__
 *
 * To run a query within a React component, call `useGetTopAlbumPagingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTopAlbumPagingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTopAlbumPagingQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetTopAlbumPagingQuery(baseOptions?: Apollo.QueryHookOptions<GetTopAlbumPagingQuery, GetTopAlbumPagingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTopAlbumPagingQuery, GetTopAlbumPagingQueryVariables>(GetTopAlbumPagingDocument, options);
      }
export function useGetTopAlbumPagingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTopAlbumPagingQuery, GetTopAlbumPagingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTopAlbumPagingQuery, GetTopAlbumPagingQueryVariables>(GetTopAlbumPagingDocument, options);
        }
export type GetTopAlbumPagingQueryHookResult = ReturnType<typeof useGetTopAlbumPagingQuery>;
export type GetTopAlbumPagingLazyQueryHookResult = ReturnType<typeof useGetTopAlbumPagingLazyQuery>;
export type GetTopAlbumPagingQueryResult = Apollo.QueryResult<GetTopAlbumPagingQuery, GetTopAlbumPagingQueryVariables>;