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
  /** Name. */
  name: Scalars['String'];
  /** Songs */
  songs?: Maybe<Array<Maybe<Song>>>;
  /**  Artist User Id. */
  userId: Scalars['String'];
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

export type GenrePaging = {
  __typename?: 'GenrePaging';
  /**  Count. */
  count: Scalars['Int'];
  /** Genres */
  genres?: Maybe<Array<Maybe<Genre>>>;
};

export type GenreQuery = {
  __typename?: 'GenreQuery';
  albums?: Maybe<Array<Maybe<Album>>>;
  albumsPaginated?: Maybe<Array<Maybe<Album>>>;
  artists?: Maybe<Array<Maybe<Artist>>>;
  artistsPaginated?: Maybe<Array<Maybe<Artist>>>;
  genre?: Maybe<Genre>;
  genres?: Maybe<Array<Maybe<Genre>>>;
  genresPaging?: Maybe<GenrePaging>;
  playlistsPaginated?: Maybe<Array<Maybe<Playlist>>>;
  songs?: Maybe<Array<Maybe<Song>>>;
  songsPaginated?: Maybe<Array<Maybe<Song>>>;
};


export type GenreQueryAlbumsPaginatedArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type GenreQueryArtistsPaginatedArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type GenreQueryGenreArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type GenreQueryGenresPagingArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type GenreQueryPlaylistsPaginatedArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type GenreQuerySongsPaginatedArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
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

export type GetGenresQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGenresQuery = { __typename?: 'GenreQuery', genres?: Array<{ __typename?: 'Genre', id: string, name: string, imageUrl: string, lastUpdated: any, dateCreated: any, songs?: Array<{ __typename?: 'Song', id: string, name: string } | null> | null, artists?: Array<{ __typename?: 'Artist', id: string, name: string } | null> | null, albums?: Array<{ __typename?: 'Album', id: string, name: string } | null> | null } | null> | null };

export type GetGenresPagingQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
}>;


export type GetGenresPagingQuery = { __typename?: 'GenreQuery', genresPaging?: { __typename?: 'GenrePaging', count: number, genres?: Array<{ __typename?: 'Genre', id: string, name: string, imageUrl: string, lastUpdated: any, dateCreated: any, songs?: Array<{ __typename?: 'Song', id: string, name: string } | null> | null, artists?: Array<{ __typename?: 'Artist', id: string, name: string } | null> | null, albums?: Array<{ __typename?: 'Album', id: string, name: string } | null> | null } | null> | null } | null };

export type GetGenreAlbumsPaginatedQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
}>;


export type GetGenreAlbumsPaginatedQuery = { __typename?: 'GenreQuery', genre?: { __typename?: 'Genre', id: string, name: string, imageUrl: string, lastUpdated: any, dateCreated: any } | null, albumsPaginated?: Array<{ __typename?: 'Album', id: string, name: string, artworkPath: string, path: string, likes?: Array<{ __typename?: 'AlbumLike', userId: string } | null> | null, songs?: Array<{ __typename?: 'Song', id: string, name: string, path: string, artworkPath: string, artist?: { __typename?: 'Artist', name: string, id: string } | null, likes?: Array<{ __typename?: 'SongLike', userId: string } | null> | null, streams?: Array<{ __typename?: 'SongStream', id: string } | null> | null, featurungArtists?: Array<{ __typename?: 'Artist', id: string, name: string } | null> | null, genres?: Array<{ __typename?: 'Genre', id: string, name: string } | null> | null } | null> | null } | null> | null };

export type GetGenreArtistsPaginatedQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
}>;


export type GetGenreArtistsPaginatedQuery = { __typename?: 'GenreQuery', genre?: { __typename?: 'Genre', id: string, name: string, imageUrl: string, lastUpdated: any, dateCreated: any } | null, artistsPaginated?: Array<{ __typename?: 'Artist', id: string, name: string, userId: string, imagePath: string, isProfileClaimed: boolean } | null> | null };

export type GetGenreSongsPaginatedQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
}>;


export type GetGenreSongsPaginatedQuery = { __typename?: 'GenreQuery', genre?: { __typename?: 'Genre', id: string, name: string, imageUrl: string, lastUpdated: any, dateCreated: any } | null, songsPaginated?: Array<{ __typename?: 'Song', id: string, name: string, path: string, artworkPath: string, likes?: Array<{ __typename?: 'SongLike', userId: string } | null> | null, artist?: { __typename?: 'Artist', id: string, name: string } | null } | null> | null };


export const GetGenresDocument = gql`
    query getGenres {
  genres {
    id
    name
    imageUrl
    lastUpdated
    dateCreated
    songs {
      id
      name
    }
    artists {
      id
      name
    }
    albums {
      id
      name
    }
  }
}
    `;

/**
 * __useGetGenresQuery__
 *
 * To run a query within a React component, call `useGetGenresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGenresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGenresQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGenresQuery(baseOptions?: Apollo.QueryHookOptions<GetGenresQuery, GetGenresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGenresQuery, GetGenresQueryVariables>(GetGenresDocument, options);
      }
export function useGetGenresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGenresQuery, GetGenresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGenresQuery, GetGenresQueryVariables>(GetGenresDocument, options);
        }
export type GetGenresQueryHookResult = ReturnType<typeof useGetGenresQuery>;
export type GetGenresLazyQueryHookResult = ReturnType<typeof useGetGenresLazyQuery>;
export type GetGenresQueryResult = Apollo.QueryResult<GetGenresQuery, GetGenresQueryVariables>;
export const GetGenresPagingDocument = gql`
    query getGenresPaging($page: Int, $size: Int) {
  genresPaging(page: $page, size: $size) {
    count
    genres {
      id
      name
      imageUrl
      lastUpdated
      dateCreated
      songs {
        id
        name
      }
      artists {
        id
        name
      }
      albums {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useGetGenresPagingQuery__
 *
 * To run a query within a React component, call `useGetGenresPagingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGenresPagingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGenresPagingQuery({
 *   variables: {
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetGenresPagingQuery(baseOptions?: Apollo.QueryHookOptions<GetGenresPagingQuery, GetGenresPagingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGenresPagingQuery, GetGenresPagingQueryVariables>(GetGenresPagingDocument, options);
      }
export function useGetGenresPagingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGenresPagingQuery, GetGenresPagingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGenresPagingQuery, GetGenresPagingQueryVariables>(GetGenresPagingDocument, options);
        }
export type GetGenresPagingQueryHookResult = ReturnType<typeof useGetGenresPagingQuery>;
export type GetGenresPagingLazyQueryHookResult = ReturnType<typeof useGetGenresPagingLazyQuery>;
export type GetGenresPagingQueryResult = Apollo.QueryResult<GetGenresPagingQuery, GetGenresPagingQueryVariables>;
export const GetGenreAlbumsPaginatedDocument = gql`
    query getGenreAlbumsPaginated($id: String, $page: Int, $size: Int) {
  genre(id: $id) {
    id
    name
    imageUrl
    lastUpdated
    dateCreated
  }
  albumsPaginated(page: $page, size: $size) {
    id
    name
    artworkPath
    path
    likes {
      userId
    }
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
 * __useGetGenreAlbumsPaginatedQuery__
 *
 * To run a query within a React component, call `useGetGenreAlbumsPaginatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGenreAlbumsPaginatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGenreAlbumsPaginatedQuery({
 *   variables: {
 *      id: // value for 'id'
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetGenreAlbumsPaginatedQuery(baseOptions?: Apollo.QueryHookOptions<GetGenreAlbumsPaginatedQuery, GetGenreAlbumsPaginatedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGenreAlbumsPaginatedQuery, GetGenreAlbumsPaginatedQueryVariables>(GetGenreAlbumsPaginatedDocument, options);
      }
export function useGetGenreAlbumsPaginatedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGenreAlbumsPaginatedQuery, GetGenreAlbumsPaginatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGenreAlbumsPaginatedQuery, GetGenreAlbumsPaginatedQueryVariables>(GetGenreAlbumsPaginatedDocument, options);
        }
export type GetGenreAlbumsPaginatedQueryHookResult = ReturnType<typeof useGetGenreAlbumsPaginatedQuery>;
export type GetGenreAlbumsPaginatedLazyQueryHookResult = ReturnType<typeof useGetGenreAlbumsPaginatedLazyQuery>;
export type GetGenreAlbumsPaginatedQueryResult = Apollo.QueryResult<GetGenreAlbumsPaginatedQuery, GetGenreAlbumsPaginatedQueryVariables>;
export const GetGenreArtistsPaginatedDocument = gql`
    query getGenreArtistsPaginated($id: String, $page: Int, $size: Int) {
  genre(id: $id) {
    id
    name
    imageUrl
    lastUpdated
    dateCreated
  }
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
 * __useGetGenreArtistsPaginatedQuery__
 *
 * To run a query within a React component, call `useGetGenreArtistsPaginatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGenreArtistsPaginatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGenreArtistsPaginatedQuery({
 *   variables: {
 *      id: // value for 'id'
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetGenreArtistsPaginatedQuery(baseOptions?: Apollo.QueryHookOptions<GetGenreArtistsPaginatedQuery, GetGenreArtistsPaginatedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGenreArtistsPaginatedQuery, GetGenreArtistsPaginatedQueryVariables>(GetGenreArtistsPaginatedDocument, options);
      }
export function useGetGenreArtistsPaginatedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGenreArtistsPaginatedQuery, GetGenreArtistsPaginatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGenreArtistsPaginatedQuery, GetGenreArtistsPaginatedQueryVariables>(GetGenreArtistsPaginatedDocument, options);
        }
export type GetGenreArtistsPaginatedQueryHookResult = ReturnType<typeof useGetGenreArtistsPaginatedQuery>;
export type GetGenreArtistsPaginatedLazyQueryHookResult = ReturnType<typeof useGetGenreArtistsPaginatedLazyQuery>;
export type GetGenreArtistsPaginatedQueryResult = Apollo.QueryResult<GetGenreArtistsPaginatedQuery, GetGenreArtistsPaginatedQueryVariables>;
export const GetGenreSongsPaginatedDocument = gql`
    query getGenreSongsPaginated($id: String, $page: Int, $size: Int) {
  genre(id: $id) {
    id
    name
    imageUrl
    lastUpdated
    dateCreated
  }
  songsPaginated(page: $page, size: $size) {
    id
    name
    path
    likes {
      userId
    }
    artworkPath
    artist {
      id
      name
    }
  }
}
    `;

/**
 * __useGetGenreSongsPaginatedQuery__
 *
 * To run a query within a React component, call `useGetGenreSongsPaginatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGenreSongsPaginatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGenreSongsPaginatedQuery({
 *   variables: {
 *      id: // value for 'id'
 *      page: // value for 'page'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetGenreSongsPaginatedQuery(baseOptions?: Apollo.QueryHookOptions<GetGenreSongsPaginatedQuery, GetGenreSongsPaginatedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGenreSongsPaginatedQuery, GetGenreSongsPaginatedQueryVariables>(GetGenreSongsPaginatedDocument, options);
      }
export function useGetGenreSongsPaginatedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGenreSongsPaginatedQuery, GetGenreSongsPaginatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGenreSongsPaginatedQuery, GetGenreSongsPaginatedQueryVariables>(GetGenreSongsPaginatedDocument, options);
        }
export type GetGenreSongsPaginatedQueryHookResult = ReturnType<typeof useGetGenreSongsPaginatedQuery>;
export type GetGenreSongsPaginatedLazyQueryHookResult = ReturnType<typeof useGetGenreSongsPaginatedLazyQuery>;
export type GetGenreSongsPaginatedQueryResult = Apollo.QueryResult<GetGenreSongsPaginatedQuery, GetGenreSongsPaginatedQueryVariables>;