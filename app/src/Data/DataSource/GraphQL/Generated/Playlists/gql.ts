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
    "\nquery getWeeklyChartPaging($page:Int!,$size:Int!){\n    weeklyChartPaging(page:$page, size:$size) {\n        count\n        charts{\n         name\n         id\n         imagePath\n         positions{\n          position\n          song{\n           id\n           path\n           previewPath\n           artworkPath\n           lastUpdated\n           releaseDate\n           artist{\n             id\n             name\n           }\n           genres{\n             name\n             id\n           }\n           description\n           }\n         }\n      \n       }\n     }\n   }\n": types.GetWeeklyChartPagingDocument,
    "\nquery getDailyChartPaging($page:Int!,$size:Int!){\n    dailyChartPaging(page:$page, size:$size) {\n        count\n        charts{\n         name\n         id\n         imagePath\n         positions{\n          position\n          song{\n           id\n           path\n           previewPath\n           artworkPath\n           lastUpdated\n           releaseDate\n           artist{\n             id\n             name\n           }\n           genres{\n             name\n             id\n           }\n           description\n           }\n         }\n      \n       }\n     }\n   }\n": types.GetDailyChartPagingDocument,
    "\nquery getMoods($page:Int!,$size:Int!){\n    moodsPaging(page:$page,size:$size) {\n       count\n       moods{\n        name\n        id\n        imagePath\n        lastUpdated\n        dateCreated\n      }\n    }\n  }\n": types.GetMoodsDocument,
    "\nquery getFidarrPlaylistsPagingByGenre($page:Int!,$size:Int!, $genreId:String!){\n    fidarrPlaylistsPagingByGenre(page:$page, size:$size, genreId:$genreId) {\n       count\n       playlists{\n        name\n        id\n        imagePath\n        streams\n        lastUpdated\n        createdAt\n        likes{\n          userId\n        }\n        songs{\n          id\n          path\n          previewPath\n          artworkPath\n          lastUpdated\n          releaseDate\n          artist{\n            id\n            name\n          }\n          genres{\n            name\n            id\n          }\n          description\n        }\n      }\n    }\n  }\n": types.GetFidarrPlaylistsPagingByGenreDocument,
    "\nquery getAllPlaylistsPaging($page:Int!,$size:Int!){\n    allPlaylistsPaging(page:$page, size:$size) {\n       count\n       playlists{\n        name\n        id\n        imagePath\n        streams\n        lastUpdated\n        createdAt\n        likes{\n          userId\n        }\n        songs{\n          id\n          path\n          previewPath\n          artworkPath\n          lastUpdated\n          releaseDate\n          artist{\n            id\n            name\n          }\n          genres{\n            name\n            id\n          }\n          description\n        }\n      }\n    }\n  }\n": types.GetAllPlaylistsPagingDocument,
    "\nquery getFidarrPlaylistsPaging($page:Int!,$size:Int!){\n    fidarrPlaylistsPaging(page:$page, size:$size) {\n       count\n       playlists{\n        name\n        id\n        imagePath\n        streams\n        lastUpdated\n        createdAt\n        likes{\n          userId\n        }\n        songs{\n          id\n          path\n          previewPath\n          artworkPath\n          lastUpdated\n          releaseDate\n          artist{\n            id\n            name\n          }\n          genres{\n            name\n            id\n          }\n          description\n        }\n      }\n    }\n  }\n": types.GetFidarrPlaylistsPagingDocument,
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
export function graphql(source: "\nquery getWeeklyChartPaging($page:Int!,$size:Int!){\n    weeklyChartPaging(page:$page, size:$size) {\n        count\n        charts{\n         name\n         id\n         imagePath\n         positions{\n          position\n          song{\n           id\n           path\n           previewPath\n           artworkPath\n           lastUpdated\n           releaseDate\n           artist{\n             id\n             name\n           }\n           genres{\n             name\n             id\n           }\n           description\n           }\n         }\n      \n       }\n     }\n   }\n"): (typeof documents)["\nquery getWeeklyChartPaging($page:Int!,$size:Int!){\n    weeklyChartPaging(page:$page, size:$size) {\n        count\n        charts{\n         name\n         id\n         imagePath\n         positions{\n          position\n          song{\n           id\n           path\n           previewPath\n           artworkPath\n           lastUpdated\n           releaseDate\n           artist{\n             id\n             name\n           }\n           genres{\n             name\n             id\n           }\n           description\n           }\n         }\n      \n       }\n     }\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getDailyChartPaging($page:Int!,$size:Int!){\n    dailyChartPaging(page:$page, size:$size) {\n        count\n        charts{\n         name\n         id\n         imagePath\n         positions{\n          position\n          song{\n           id\n           path\n           previewPath\n           artworkPath\n           lastUpdated\n           releaseDate\n           artist{\n             id\n             name\n           }\n           genres{\n             name\n             id\n           }\n           description\n           }\n         }\n      \n       }\n     }\n   }\n"): (typeof documents)["\nquery getDailyChartPaging($page:Int!,$size:Int!){\n    dailyChartPaging(page:$page, size:$size) {\n        count\n        charts{\n         name\n         id\n         imagePath\n         positions{\n          position\n          song{\n           id\n           path\n           previewPath\n           artworkPath\n           lastUpdated\n           releaseDate\n           artist{\n             id\n             name\n           }\n           genres{\n             name\n             id\n           }\n           description\n           }\n         }\n      \n       }\n     }\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getMoods($page:Int!,$size:Int!){\n    moodsPaging(page:$page,size:$size) {\n       count\n       moods{\n        name\n        id\n        imagePath\n        lastUpdated\n        dateCreated\n      }\n    }\n  }\n"): (typeof documents)["\nquery getMoods($page:Int!,$size:Int!){\n    moodsPaging(page:$page,size:$size) {\n       count\n       moods{\n        name\n        id\n        imagePath\n        lastUpdated\n        dateCreated\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getFidarrPlaylistsPagingByGenre($page:Int!,$size:Int!, $genreId:String!){\n    fidarrPlaylistsPagingByGenre(page:$page, size:$size, genreId:$genreId) {\n       count\n       playlists{\n        name\n        id\n        imagePath\n        streams\n        lastUpdated\n        createdAt\n        likes{\n          userId\n        }\n        songs{\n          id\n          path\n          previewPath\n          artworkPath\n          lastUpdated\n          releaseDate\n          artist{\n            id\n            name\n          }\n          genres{\n            name\n            id\n          }\n          description\n        }\n      }\n    }\n  }\n"): (typeof documents)["\nquery getFidarrPlaylistsPagingByGenre($page:Int!,$size:Int!, $genreId:String!){\n    fidarrPlaylistsPagingByGenre(page:$page, size:$size, genreId:$genreId) {\n       count\n       playlists{\n        name\n        id\n        imagePath\n        streams\n        lastUpdated\n        createdAt\n        likes{\n          userId\n        }\n        songs{\n          id\n          path\n          previewPath\n          artworkPath\n          lastUpdated\n          releaseDate\n          artist{\n            id\n            name\n          }\n          genres{\n            name\n            id\n          }\n          description\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getAllPlaylistsPaging($page:Int!,$size:Int!){\n    allPlaylistsPaging(page:$page, size:$size) {\n       count\n       playlists{\n        name\n        id\n        imagePath\n        streams\n        lastUpdated\n        createdAt\n        likes{\n          userId\n        }\n        songs{\n          id\n          path\n          previewPath\n          artworkPath\n          lastUpdated\n          releaseDate\n          artist{\n            id\n            name\n          }\n          genres{\n            name\n            id\n          }\n          description\n        }\n      }\n    }\n  }\n"): (typeof documents)["\nquery getAllPlaylistsPaging($page:Int!,$size:Int!){\n    allPlaylistsPaging(page:$page, size:$size) {\n       count\n       playlists{\n        name\n        id\n        imagePath\n        streams\n        lastUpdated\n        createdAt\n        likes{\n          userId\n        }\n        songs{\n          id\n          path\n          previewPath\n          artworkPath\n          lastUpdated\n          releaseDate\n          artist{\n            id\n            name\n          }\n          genres{\n            name\n            id\n          }\n          description\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getFidarrPlaylistsPaging($page:Int!,$size:Int!){\n    fidarrPlaylistsPaging(page:$page, size:$size) {\n       count\n       playlists{\n        name\n        id\n        imagePath\n        streams\n        lastUpdated\n        createdAt\n        likes{\n          userId\n        }\n        songs{\n          id\n          path\n          previewPath\n          artworkPath\n          lastUpdated\n          releaseDate\n          artist{\n            id\n            name\n          }\n          genres{\n            name\n            id\n          }\n          description\n        }\n      }\n    }\n  }\n"): (typeof documents)["\nquery getFidarrPlaylistsPaging($page:Int!,$size:Int!){\n    fidarrPlaylistsPaging(page:$page, size:$size) {\n       count\n       playlists{\n        name\n        id\n        imagePath\n        streams\n        lastUpdated\n        createdAt\n        likes{\n          userId\n        }\n        songs{\n          id\n          path\n          previewPath\n          artworkPath\n          lastUpdated\n          releaseDate\n          artist{\n            id\n            name\n          }\n          genres{\n            name\n            id\n          }\n          description\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;