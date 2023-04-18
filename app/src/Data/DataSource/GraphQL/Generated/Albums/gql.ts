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
    "\nquery getAlbumPaging($page:Int,$size:Int){\n  albumsPaging(page:$page,size:$size){\n    count,\n    albums{\n       id\n      name\n      artworkPath\n      path\n      lastUpdated\n      dateCreated\n      releaseDate\n      streams{\n          id\n      }\n      likes{\n          userId\n      }\n      artist{\n          id\n          name\n      }\n      genres{\n          name\n      }\n      songs{\n          id\n          name\n          path\n          artworkPath\n          artist{\n              name\n              imagePath\n              id\n          }\n          likes{\n              userId\n          }\n          streams{\n              id\n          }\n          featurungArtists{\n              id\n              name\n              imagePath\n          }\n          genres{\n              id\n              name\n          }\n      }\n    }\n  }\n}\n\n": types.GetAlbumPagingDocument,
    "query getAlbumsPaginated($page:Int,$size:Int){\n    albumsPaginated(page:$page,size:$size){\n        id\n        name\n        artworkPath\n        path\n        lastUpdated\n        dateCreated\n        releaseDate\n        streams{\n            id\n        }\n        likes{\n            userId\n        }\n        artist{\n            id\n            name\n        }\n        genres{\n            name\n        }\n        songs{\n            id\n            name\n            path\n            artworkPath\n            artist{\n                name\n                imagePath\n                id\n            }\n            likes{\n                userId\n            }\n            streams{\n                id\n            }\n            featurungArtists{\n                id\n                name\n                imagePath\n            }\n            genres{\n                id\n                name\n            }\n        }\n    }\n}": types.GetAlbumsPaginatedDocument,
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
export function graphql(source: "\nquery getAlbumPaging($page:Int,$size:Int){\n  albumsPaging(page:$page,size:$size){\n    count,\n    albums{\n       id\n      name\n      artworkPath\n      path\n      lastUpdated\n      dateCreated\n      releaseDate\n      streams{\n          id\n      }\n      likes{\n          userId\n      }\n      artist{\n          id\n          name\n      }\n      genres{\n          name\n      }\n      songs{\n          id\n          name\n          path\n          artworkPath\n          artist{\n              name\n              imagePath\n              id\n          }\n          likes{\n              userId\n          }\n          streams{\n              id\n          }\n          featurungArtists{\n              id\n              name\n              imagePath\n          }\n          genres{\n              id\n              name\n          }\n      }\n    }\n  }\n}\n\n"): (typeof documents)["\nquery getAlbumPaging($page:Int,$size:Int){\n  albumsPaging(page:$page,size:$size){\n    count,\n    albums{\n       id\n      name\n      artworkPath\n      path\n      lastUpdated\n      dateCreated\n      releaseDate\n      streams{\n          id\n      }\n      likes{\n          userId\n      }\n      artist{\n          id\n          name\n      }\n      genres{\n          name\n      }\n      songs{\n          id\n          name\n          path\n          artworkPath\n          artist{\n              name\n              imagePath\n              id\n          }\n          likes{\n              userId\n          }\n          streams{\n              id\n          }\n          featurungArtists{\n              id\n              name\n              imagePath\n          }\n          genres{\n              id\n              name\n          }\n      }\n    }\n  }\n}\n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getAlbumsPaginated($page:Int,$size:Int){\n    albumsPaginated(page:$page,size:$size){\n        id\n        name\n        artworkPath\n        path\n        lastUpdated\n        dateCreated\n        releaseDate\n        streams{\n            id\n        }\n        likes{\n            userId\n        }\n        artist{\n            id\n            name\n        }\n        genres{\n            name\n        }\n        songs{\n            id\n            name\n            path\n            artworkPath\n            artist{\n                name\n                imagePath\n                id\n            }\n            likes{\n                userId\n            }\n            streams{\n                id\n            }\n            featurungArtists{\n                id\n                name\n                imagePath\n            }\n            genres{\n                id\n                name\n            }\n        }\n    }\n}"): (typeof documents)["query getAlbumsPaginated($page:Int,$size:Int){\n    albumsPaginated(page:$page,size:$size){\n        id\n        name\n        artworkPath\n        path\n        lastUpdated\n        dateCreated\n        releaseDate\n        streams{\n            id\n        }\n        likes{\n            userId\n        }\n        artist{\n            id\n            name\n        }\n        genres{\n            name\n        }\n        songs{\n            id\n            name\n            path\n            artworkPath\n            artist{\n                name\n                imagePath\n                id\n            }\n            likes{\n                userId\n            }\n            streams{\n                id\n            }\n            featurungArtists{\n                id\n                name\n                imagePath\n            }\n            genres{\n                id\n                name\n            }\n        }\n    }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;