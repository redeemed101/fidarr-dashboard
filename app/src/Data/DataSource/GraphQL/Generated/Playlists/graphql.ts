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

export type Chart = {
  __typename?: 'Chart';
  /**  Id. */
  id: Scalars['String'];
  /** Image. */
  imagePath: Scalars['String'];
  /** Name. */
  name: Scalars['String'];
  positions?: Maybe<Array<Maybe<ChartPosition>>>;
};

export type ChartPaging = {
  __typename?: 'ChartPaging';
  /** Charts */
  charts?: Maybe<Array<Maybe<Chart>>>;
  /**  Count. */
  count: Scalars['Int'];
};

export type ChartPosition = {
  __typename?: 'ChartPosition';
  /**  Id. */
  id: Scalars['String'];
  /** Position */
  position: Scalars['Int'];
  song?: Maybe<Song>;
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

export type Mood = {
  __typename?: 'Mood';
  /**  Id. */
  id: Scalars['String'];
  /** Image. */
  imagePath: Scalars['String'];
  /** Name. */
  name: Scalars['String'];
  playlists?: Maybe<Array<Maybe<Playlist>>>;
};

export type MoodPaging = {
  __typename?: 'MoodPaging';
  /**  Count. */
  count: Scalars['Int'];
  /** Moods */
  moods?: Maybe<Array<Maybe<Mood>>>;
};

export type Playlist = {
  __typename?: 'Playlist';
  /**  Id. */
  id: Scalars['String'];
  /** Image. */
  imagePath: Scalars['String'];
  likes?: Maybe<Array<Maybe<PlaylistLike>>>;
  /** Name. */
  name: Scalars['String'];
  songs?: Maybe<Array<Maybe<Song>>>;
  /** Streams. */
  streams: Scalars['Int'];
  /** Creator Id. */
  userId: Scalars['String'];
};

export type PlaylistLike = {
  __typename?: 'PlaylistLike';
  /**  Id. */
  userId: Scalars['String'];
};

export type PlaylistPaging = {
  __typename?: 'PlaylistPaging';
  /**  Count. */
  count: Scalars['Int'];
  /** Playlists */
  playlists?: Maybe<Array<Maybe<Playlist>>>;
};

export type PlaylistQuery = {
  __typename?: 'PlaylistQuery';
  dailyChartPaging?: Maybe<Array<Maybe<ChartPaging>>>;
  fidarrPlaylistsPaging?: Maybe<Array<Maybe<PlaylistPaging>>>;
  fidarrPlaylistsPagingByGenre?: Maybe<Array<Maybe<PlaylistPaging>>>;
  moodsPaging?: Maybe<Array<Maybe<MoodPaging>>>;
  weeklyChartPaging?: Maybe<Array<Maybe<ChartPaging>>>;
};


export type PlaylistQueryDailyChartPagingArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type PlaylistQueryFidarrPlaylistsPagingArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type PlaylistQueryFidarrPlaylistsPagingByGenreArgs = {
  genreId?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type PlaylistQueryMoodsPagingArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type PlaylistQueryWeeklyChartPagingArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
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

export type GetWeeklyChartPagingQueryVariables = Exact<{
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;


export type GetWeeklyChartPagingQuery = { __typename?: 'PlaylistQuery', weeklyChartPaging?: Array<{ __typename?: 'ChartPaging', count: number, charts?: Array<{ __typename?: 'Chart', name: string, id: string, imagePath: string, positions?: Array<{ __typename?: 'ChartPosition', position: number, song?: { __typename?: 'Song', id: string, path: string, previewPath: string, artworkPath: string, lastUpdated: any, releaseDate: any, description: string, artist?: { __typename?: 'Artist', id: string, name: string } | null, genres?: Array<{ __typename?: 'Genre', name: string, id: string } | null> | null } | null } | null> | null } | null> | null } | null> | null };

export type GetDailyChartPagingQueryVariables = Exact<{
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;


export type GetDailyChartPagingQuery = { __typename?: 'PlaylistQuery', dailyChartPaging?: Array<{ __typename?: 'ChartPaging', count: number, charts?: Array<{ __typename?: 'Chart', name: string, id: string, imagePath: string, positions?: Array<{ __typename?: 'ChartPosition', position: number, song?: { __typename?: 'Song', id: string, path: string, previewPath: string, artworkPath: string, lastUpdated: any, releaseDate: any, description: string, artist?: { __typename?: 'Artist', id: string, name: string } | null, genres?: Array<{ __typename?: 'Genre', name: string, id: string } | null> | null } | null } | null> | null } | null> | null } | null> | null };

export type GetMoodsQueryVariables = Exact<{
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;


export type GetMoodsQuery = { __typename?: 'PlaylistQuery', moodsPaging?: Array<{ __typename?: 'MoodPaging', count: number, moods?: Array<{ __typename?: 'Mood', name: string, id: string, imagePath: string } | null> | null } | null> | null };

export type GetFidarrPlaylistsPagingByGenreQueryVariables = Exact<{
  page: Scalars['Int'];
  size: Scalars['Int'];
  genreId: Scalars['String'];
}>;


export type GetFidarrPlaylistsPagingByGenreQuery = { __typename?: 'PlaylistQuery', fidarrPlaylistsPagingByGenre?: Array<{ __typename?: 'PlaylistPaging', count: number, playlists?: Array<{ __typename?: 'Playlist', name: string, id: string, imagePath: string, streams: number, songs?: Array<{ __typename?: 'Song', id: string, path: string, previewPath: string, artworkPath: string, lastUpdated: any, releaseDate: any, description: string, artist?: { __typename?: 'Artist', id: string, name: string } | null, genres?: Array<{ __typename?: 'Genre', name: string, id: string } | null> | null } | null> | null } | null> | null } | null> | null };

export type GetFidarrPlaylistsPagingQueryVariables = Exact<{
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;


export type GetFidarrPlaylistsPagingQuery = { __typename?: 'PlaylistQuery', fidarrPlaylistsPaging?: Array<{ __typename?: 'PlaylistPaging', count: number, playlists?: Array<{ __typename?: 'Playlist', name: string, id: string, imagePath: string, streams: number, songs?: Array<{ __typename?: 'Song', id: string, path: string, previewPath: string, artworkPath: string, lastUpdated: any, releaseDate: any, description: string, artist?: { __typename?: 'Artist', id: string, name: string } | null, genres?: Array<{ __typename?: 'Genre', name: string, id: string } | null> | null } | null> | null } | null> | null } | null> | null };


export const GetWeeklyChartPagingDocument = gql`
    query getWeeklyChartPaging($page: Int!, $size: Int!) {
  weeklyChartPaging(page: $page, size: $size) {
    count
    charts {
      name
      id
      imagePath
      positions {
        position
        song {
          id
          path
          previewPath
          artworkPath
          lastUpdated
          releaseDate
          artist {
            id
            name
          }
          genres {
            name
            id
          }
          description
        }
      }
    }
  }
}
    `;

/**
 * __useGetWeeklyChartPagingQuery__
 *
 * To run a query within a React component, call `useGetWeeklyChartPagingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWeeklyChartPagingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWeeklyChartPagingQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetWeeklyChartPagingQuery(baseOptions: Apollo.QueryHookOptions<GetWeeklyChartPagingQuery, GetWeeklyChartPagingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWeeklyChartPagingQuery, GetWeeklyChartPagingQueryVariables>(GetWeeklyChartPagingDocument, options);
      }
export function useGetWeeklyChartPagingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWeeklyChartPagingQuery, GetWeeklyChartPagingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWeeklyChartPagingQuery, GetWeeklyChartPagingQueryVariables>(GetWeeklyChartPagingDocument, options);
        }
export type GetWeeklyChartPagingQueryHookResult = ReturnType<typeof useGetWeeklyChartPagingQuery>;
export type GetWeeklyChartPagingLazyQueryHookResult = ReturnType<typeof useGetWeeklyChartPagingLazyQuery>;
export type GetWeeklyChartPagingQueryResult = Apollo.QueryResult<GetWeeklyChartPagingQuery, GetWeeklyChartPagingQueryVariables>;
export const GetDailyChartPagingDocument = gql`
    query getDailyChartPaging($page: Int!, $size: Int!) {
  dailyChartPaging(page: $page, size: $size) {
    count
    charts {
      name
      id
      imagePath
      positions {
        position
        song {
          id
          path
          previewPath
          artworkPath
          lastUpdated
          releaseDate
          artist {
            id
            name
          }
          genres {
            name
            id
          }
          description
        }
      }
    }
  }
}
    `;

/**
 * __useGetDailyChartPagingQuery__
 *
 * To run a query within a React component, call `useGetDailyChartPagingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDailyChartPagingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDailyChartPagingQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetDailyChartPagingQuery(baseOptions: Apollo.QueryHookOptions<GetDailyChartPagingQuery, GetDailyChartPagingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDailyChartPagingQuery, GetDailyChartPagingQueryVariables>(GetDailyChartPagingDocument, options);
      }
export function useGetDailyChartPagingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDailyChartPagingQuery, GetDailyChartPagingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDailyChartPagingQuery, GetDailyChartPagingQueryVariables>(GetDailyChartPagingDocument, options);
        }
export type GetDailyChartPagingQueryHookResult = ReturnType<typeof useGetDailyChartPagingQuery>;
export type GetDailyChartPagingLazyQueryHookResult = ReturnType<typeof useGetDailyChartPagingLazyQuery>;
export type GetDailyChartPagingQueryResult = Apollo.QueryResult<GetDailyChartPagingQuery, GetDailyChartPagingQueryVariables>;
export const GetMoodsDocument = gql`
    query getMoods($page: Int!, $size: Int!) {
  moodsPaging(page: $page, size: $size) {
    count
    moods {
      name
      id
      imagePath
    }
  }
}
    `;

/**
 * __useGetMoodsQuery__
 *
 * To run a query within a React component, call `useGetMoodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMoodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMoodsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetMoodsQuery(baseOptions: Apollo.QueryHookOptions<GetMoodsQuery, GetMoodsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMoodsQuery, GetMoodsQueryVariables>(GetMoodsDocument, options);
      }
export function useGetMoodsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMoodsQuery, GetMoodsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMoodsQuery, GetMoodsQueryVariables>(GetMoodsDocument, options);
        }
export type GetMoodsQueryHookResult = ReturnType<typeof useGetMoodsQuery>;
export type GetMoodsLazyQueryHookResult = ReturnType<typeof useGetMoodsLazyQuery>;
export type GetMoodsQueryResult = Apollo.QueryResult<GetMoodsQuery, GetMoodsQueryVariables>;
export const GetFidarrPlaylistsPagingByGenreDocument = gql`
    query getFidarrPlaylistsPagingByGenre($page: Int!, $size: Int!, $genreId: String!) {
  fidarrPlaylistsPagingByGenre(page: $page, size: $size, genreId: $genreId) {
    count
    playlists {
      name
      id
      imagePath
      streams
      songs {
        id
        path
        previewPath
        artworkPath
        lastUpdated
        releaseDate
        artist {
          id
          name
        }
        genres {
          name
          id
        }
        description
      }
    }
  }
}
    `;

/**
 * __useGetFidarrPlaylistsPagingByGenreQuery__
 *
 * To run a query within a React component, call `useGetFidarrPlaylistsPagingByGenreQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFidarrPlaylistsPagingByGenreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFidarrPlaylistsPagingByGenreQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *      genreId: // value for 'genreId'
 *   },
 * });
 */
export function useGetFidarrPlaylistsPagingByGenreQuery(baseOptions: Apollo.QueryHookOptions<GetFidarrPlaylistsPagingByGenreQuery, GetFidarrPlaylistsPagingByGenreQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFidarrPlaylistsPagingByGenreQuery, GetFidarrPlaylistsPagingByGenreQueryVariables>(GetFidarrPlaylistsPagingByGenreDocument, options);
      }
export function useGetFidarrPlaylistsPagingByGenreLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFidarrPlaylistsPagingByGenreQuery, GetFidarrPlaylistsPagingByGenreQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFidarrPlaylistsPagingByGenreQuery, GetFidarrPlaylistsPagingByGenreQueryVariables>(GetFidarrPlaylistsPagingByGenreDocument, options);
        }
export type GetFidarrPlaylistsPagingByGenreQueryHookResult = ReturnType<typeof useGetFidarrPlaylistsPagingByGenreQuery>;
export type GetFidarrPlaylistsPagingByGenreLazyQueryHookResult = ReturnType<typeof useGetFidarrPlaylistsPagingByGenreLazyQuery>;
export type GetFidarrPlaylistsPagingByGenreQueryResult = Apollo.QueryResult<GetFidarrPlaylistsPagingByGenreQuery, GetFidarrPlaylistsPagingByGenreQueryVariables>;
export const GetFidarrPlaylistsPagingDocument = gql`
    query getFidarrPlaylistsPaging($page: Int!, $size: Int!) {
  fidarrPlaylistsPaging(page: $page, size: $size) {
    count
    playlists {
      name
      id
      imagePath
      streams
      songs {
        id
        path
        previewPath
        artworkPath
        lastUpdated
        releaseDate
        artist {
          id
          name
        }
        genres {
          name
          id
        }
        description
      }
    }
  }
}
    `;

/**
 * __useGetFidarrPlaylistsPagingQuery__
 *
 * To run a query within a React component, call `useGetFidarrPlaylistsPagingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFidarrPlaylistsPagingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFidarrPlaylistsPagingQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetFidarrPlaylistsPagingQuery(baseOptions: Apollo.QueryHookOptions<GetFidarrPlaylistsPagingQuery, GetFidarrPlaylistsPagingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFidarrPlaylistsPagingQuery, GetFidarrPlaylistsPagingQueryVariables>(GetFidarrPlaylistsPagingDocument, options);
      }
export function useGetFidarrPlaylistsPagingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFidarrPlaylistsPagingQuery, GetFidarrPlaylistsPagingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFidarrPlaylistsPagingQuery, GetFidarrPlaylistsPagingQueryVariables>(GetFidarrPlaylistsPagingDocument, options);
        }
export type GetFidarrPlaylistsPagingQueryHookResult = ReturnType<typeof useGetFidarrPlaylistsPagingQuery>;
export type GetFidarrPlaylistsPagingLazyQueryHookResult = ReturnType<typeof useGetFidarrPlaylistsPagingLazyQuery>;
export type GetFidarrPlaylistsPagingQueryResult = Apollo.QueryResult<GetFidarrPlaylistsPagingQuery, GetFidarrPlaylistsPagingQueryVariables>;