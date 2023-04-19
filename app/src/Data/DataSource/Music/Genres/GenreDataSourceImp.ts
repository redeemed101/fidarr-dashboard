import { injectable } from "inversify";
import { GenreDataSource, GenresPaging } from "./GenreDataSource";
import { graphQLGenreClient } from "../../GraphQL/Client/client";
import { GetGenresPagingDocument, GetGenresPagingQueryResult } from "../../GraphQL/Generated/Genres/graphql";



@injectable()
export class GenreDataSourceImpl implements GenreDataSource{
    async getGenresPaging(page: number, size: number): Promise<GenresPaging> {
        const result = await graphQLGenreClient.query<GetGenresPagingQueryResult>({
            query : GetGenresPagingDocument,
            variables: {
                page: page,
                size: size
            }
        })
        const data = result.data 
        const genresPaginated = data as unknown as GenresPaging 
      
        return  genresPaginated;
    }
}