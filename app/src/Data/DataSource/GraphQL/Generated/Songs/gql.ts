/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query getSearchSongsPaging($page:Int!,$size:Int!,$searchWord:String!){\nsearchSongsPaging(page:$page,size:$size,searchWord:$searchWord){\n    count\n    songs{\n    id\n    name\n    path\n    artworkPath\n    isTrending\n    releaseDate\n    lastUpdated\n    forYou\n    topSong\n    duration\n    artist{\n        name\n        id                \n    }\n    likes{\n        userId\n    }\n    streams{\n        id\n    }\n    featuringArtists{\n        id\n        name\n        imagePath\n    }\n    genres{\n        id\n        name\n    }\n}\n}\n}\n": types.GetSearchSongsPagingDocument,
    "query getSongPaging($page:Int!,$size:Int!){\n    songsPaging(page:$page,size:$size){\n        count\n        songs{\n        id\n        name\n        path\n        artworkPath\n        isTrending\n        releaseDate\n        lastUpdated\n        forYou\n        topSong\n        duration\n        artist{\n            name\n            id                \n        }\n        likes{\n            userId\n        }\n        streams{\n            id\n        }\n        featuringArtists{\n            id\n            name\n            imagePath\n        }\n        genres{\n            id\n            name\n        }\n  }\n }\n} \n\n": types.GetSongPagingDocument,
    "query getTrendingSongPaging($page:Int!,$size:Int!){\n    trendingSongsPaging(page:$page,size:$size){\n        count\n        songs{\n        id\n        name\n        path\n        artworkPath\n        isTrending\n        forYou\n        topSong\n        releaseDate\n        lastUpdated\n        duration\n        artist{\n            name\n            id                \n        }\n        likes{\n            userId\n        }\n        streams{\n            id\n        }\n        featuringArtists{\n            id\n            name\n            imagePath\n        }\n        genres{\n            id\n            name\n        }\n  }\n }\n} \n\n": types.GetTrendingSongPagingDocument,
    "query getForYouSongPaging($page:Int!,$size:Int!){\n    forYouSongsPaging(page:$page,size:$size){\n        count\n        songs{\n        id\n        name\n        path\n        artworkPath\n        isTrending\n        forYou\n        topSong\n        releaseDate\n        lastUpdated\n        duration\n        artist{\n            name\n            id                \n        }\n        likes{\n            userId\n        }\n        streams{\n            id\n        }\n        featuringArtists{\n            id\n            name\n            imagePath\n        }\n        genres{\n            id\n            name\n        }\n  }\n }\n} \n\n": types.GetForYouSongPagingDocument,
    "query getTopSongPaging($page:Int!,$size:Int!){\n    topSongsPaging(page:$page,size:$size){\n        count\n        songs{\n        id\n        name\n        path\n        artworkPath\n        isTrending\n        forYou\n        topSong\n        releaseDate\n        lastUpdated\n        duration\n        artist{\n            name\n            id                \n        }\n        likes{\n            userId\n        }\n        streams{\n            id\n        }\n        featuringArtists{\n            id\n            name\n            imagePath\n        }\n        genres{\n            id\n            name\n        }\n  }\n }\n} \n\n": types.GetTopSongPagingDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getSearchSongsPaging($page:Int!,$size:Int!,$searchWord:String!){\nsearchSongsPaging(page:$page,size:$size,searchWord:$searchWord){\n    count\n    songs{\n    id\n    name\n    path\n    artworkPath\n    isTrending\n    releaseDate\n    lastUpdated\n    forYou\n    topSong\n    duration\n    artist{\n        name\n        id                \n    }\n    likes{\n        userId\n    }\n    streams{\n        id\n    }\n    featuringArtists{\n        id\n        name\n        imagePath\n    }\n    genres{\n        id\n        name\n    }\n}\n}\n}\n"): (typeof documents)["query getSearchSongsPaging($page:Int!,$size:Int!,$searchWord:String!){\nsearchSongsPaging(page:$page,size:$size,searchWord:$searchWord){\n    count\n    songs{\n    id\n    name\n    path\n    artworkPath\n    isTrending\n    releaseDate\n    lastUpdated\n    forYou\n    topSong\n    duration\n    artist{\n        name\n        id                \n    }\n    likes{\n        userId\n    }\n    streams{\n        id\n    }\n    featuringArtists{\n        id\n        name\n        imagePath\n    }\n    genres{\n        id\n        name\n    }\n}\n}\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getSongPaging($page:Int!,$size:Int!){\n    songsPaging(page:$page,size:$size){\n        count\n        songs{\n        id\n        name\n        path\n        artworkPath\n        isTrending\n        releaseDate\n        lastUpdated\n        forYou\n        topSong\n        duration\n        artist{\n            name\n            id                \n        }\n        likes{\n            userId\n        }\n        streams{\n            id\n        }\n        featuringArtists{\n            id\n            name\n            imagePath\n        }\n        genres{\n            id\n            name\n        }\n  }\n }\n} \n\n"): (typeof documents)["query getSongPaging($page:Int!,$size:Int!){\n    songsPaging(page:$page,size:$size){\n        count\n        songs{\n        id\n        name\n        path\n        artworkPath\n        isTrending\n        releaseDate\n        lastUpdated\n        forYou\n        topSong\n        duration\n        artist{\n            name\n            id                \n        }\n        likes{\n            userId\n        }\n        streams{\n            id\n        }\n        featuringArtists{\n            id\n            name\n            imagePath\n        }\n        genres{\n            id\n            name\n        }\n  }\n }\n} \n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getTrendingSongPaging($page:Int!,$size:Int!){\n    trendingSongsPaging(page:$page,size:$size){\n        count\n        songs{\n        id\n        name\n        path\n        artworkPath\n        isTrending\n        forYou\n        topSong\n        releaseDate\n        lastUpdated\n        duration\n        artist{\n            name\n            id                \n        }\n        likes{\n            userId\n        }\n        streams{\n            id\n        }\n        featuringArtists{\n            id\n            name\n            imagePath\n        }\n        genres{\n            id\n            name\n        }\n  }\n }\n} \n\n"): (typeof documents)["query getTrendingSongPaging($page:Int!,$size:Int!){\n    trendingSongsPaging(page:$page,size:$size){\n        count\n        songs{\n        id\n        name\n        path\n        artworkPath\n        isTrending\n        forYou\n        topSong\n        releaseDate\n        lastUpdated\n        duration\n        artist{\n            name\n            id                \n        }\n        likes{\n            userId\n        }\n        streams{\n            id\n        }\n        featuringArtists{\n            id\n            name\n            imagePath\n        }\n        genres{\n            id\n            name\n        }\n  }\n }\n} \n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getForYouSongPaging($page:Int!,$size:Int!){\n    forYouSongsPaging(page:$page,size:$size){\n        count\n        songs{\n        id\n        name\n        path\n        artworkPath\n        isTrending\n        forYou\n        topSong\n        releaseDate\n        lastUpdated\n        duration\n        artist{\n            name\n            id                \n        }\n        likes{\n            userId\n        }\n        streams{\n            id\n        }\n        featuringArtists{\n            id\n            name\n            imagePath\n        }\n        genres{\n            id\n            name\n        }\n  }\n }\n} \n\n"): (typeof documents)["query getForYouSongPaging($page:Int!,$size:Int!){\n    forYouSongsPaging(page:$page,size:$size){\n        count\n        songs{\n        id\n        name\n        path\n        artworkPath\n        isTrending\n        forYou\n        topSong\n        releaseDate\n        lastUpdated\n        duration\n        artist{\n            name\n            id                \n        }\n        likes{\n            userId\n        }\n        streams{\n            id\n        }\n        featuringArtists{\n            id\n            name\n            imagePath\n        }\n        genres{\n            id\n            name\n        }\n  }\n }\n} \n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getTopSongPaging($page:Int!,$size:Int!){\n    topSongsPaging(page:$page,size:$size){\n        count\n        songs{\n        id\n        name\n        path\n        artworkPath\n        isTrending\n        forYou\n        topSong\n        releaseDate\n        lastUpdated\n        duration\n        artist{\n            name\n            id                \n        }\n        likes{\n            userId\n        }\n        streams{\n            id\n        }\n        featuringArtists{\n            id\n            name\n            imagePath\n        }\n        genres{\n            id\n            name\n        }\n  }\n }\n} \n\n"): (typeof documents)["query getTopSongPaging($page:Int!,$size:Int!){\n    topSongsPaging(page:$page,size:$size){\n        count\n        songs{\n        id\n        name\n        path\n        artworkPath\n        isTrending\n        forYou\n        topSong\n        releaseDate\n        lastUpdated\n        duration\n        artist{\n            name\n            id                \n        }\n        likes{\n            userId\n        }\n        streams{\n            id\n        }\n        featuringArtists{\n            id\n            name\n            imagePath\n        }\n        genres{\n            id\n            name\n        }\n  }\n }\n} \n\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;