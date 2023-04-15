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
    "query getGenres{\n    genres{\n        id,\n        name\n    }\n}": types.GetGenresDocument,
    "query getGenreAlbumsPaginated($id:String, $page:Int, $size :Int){\n    genre(id: $id){\n        id\n        name\n    }\n    albumsPaginated(page:$page,size:$size){\n        id\n        name\n        artworkPath\n        path\n        likes{\n            userId\n        }\n        songs{\n            id\n            name\n            path\n            artworkPath\n            artist{\n                name\n                id\n            }\n            likes{\n                userId\n            }\n            streams{\n                id\n            }\n            featurungArtists{\n                id\n                name\n            }\n            genres{\n                id\n                name\n            }\n        }\n    }\n\n}": types.GetGenreAlbumsPaginatedDocument,
    "query getGenreArtistsPaginated($id: String, $page:  Int, $size :  Int){\n    genre(id: $id){\n        id\n        name\n    }\n    artistsPaginated(page:$page,size:$size){\n        id\n        name\n        userId\n        imagePath\n        isProfileClaimed\n    }\n\n}": types.GetGenreArtistsPaginatedDocument,
    "query getGenreSongsPaginated($id: String, $page:  Int, $size :  Int){\n    genre(id: $id){\n        id\n        name\n    }\n    songsPaginated(page:$page,size:$size){\n        id\n        name\n        path\n        likes{\n            userId\n        }\n        artworkPath\n        artist{\n            id\n            name\n        }\n    }\n\n}": types.GetGenreSongsPaginatedDocument,
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
export function graphql(source: "query getGenres{\n    genres{\n        id,\n        name\n    }\n}"): (typeof documents)["query getGenres{\n    genres{\n        id,\n        name\n    }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getGenreAlbumsPaginated($id:String, $page:Int, $size :Int){\n    genre(id: $id){\n        id\n        name\n    }\n    albumsPaginated(page:$page,size:$size){\n        id\n        name\n        artworkPath\n        path\n        likes{\n            userId\n        }\n        songs{\n            id\n            name\n            path\n            artworkPath\n            artist{\n                name\n                id\n            }\n            likes{\n                userId\n            }\n            streams{\n                id\n            }\n            featurungArtists{\n                id\n                name\n            }\n            genres{\n                id\n                name\n            }\n        }\n    }\n\n}"): (typeof documents)["query getGenreAlbumsPaginated($id:String, $page:Int, $size :Int){\n    genre(id: $id){\n        id\n        name\n    }\n    albumsPaginated(page:$page,size:$size){\n        id\n        name\n        artworkPath\n        path\n        likes{\n            userId\n        }\n        songs{\n            id\n            name\n            path\n            artworkPath\n            artist{\n                name\n                id\n            }\n            likes{\n                userId\n            }\n            streams{\n                id\n            }\n            featurungArtists{\n                id\n                name\n            }\n            genres{\n                id\n                name\n            }\n        }\n    }\n\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getGenreArtistsPaginated($id: String, $page:  Int, $size :  Int){\n    genre(id: $id){\n        id\n        name\n    }\n    artistsPaginated(page:$page,size:$size){\n        id\n        name\n        userId\n        imagePath\n        isProfileClaimed\n    }\n\n}"): (typeof documents)["query getGenreArtistsPaginated($id: String, $page:  Int, $size :  Int){\n    genre(id: $id){\n        id\n        name\n    }\n    artistsPaginated(page:$page,size:$size){\n        id\n        name\n        userId\n        imagePath\n        isProfileClaimed\n    }\n\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getGenreSongsPaginated($id: String, $page:  Int, $size :  Int){\n    genre(id: $id){\n        id\n        name\n    }\n    songsPaginated(page:$page,size:$size){\n        id\n        name\n        path\n        likes{\n            userId\n        }\n        artworkPath\n        artist{\n            id\n            name\n        }\n    }\n\n}"): (typeof documents)["query getGenreSongsPaginated($id: String, $page:  Int, $size :  Int){\n    genre(id: $id){\n        id\n        name\n    }\n    songsPaginated(page:$page,size:$size){\n        id\n        name\n        path\n        likes{\n            userId\n        }\n        artworkPath\n        artist{\n            id\n            name\n        }\n    }\n\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;