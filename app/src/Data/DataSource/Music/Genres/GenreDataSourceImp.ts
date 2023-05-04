import { injectable } from "inversify";
import { GenreDataSource, Genres, GenresPaging } from "./GenreDataSource";
import { graphQLGenreClient } from "../../GraphQL/Client/client";
import { Genre, GetGenresDocument, GetGenresPagingDocument, GetGenresPagingQueryResult, GetGenresQuery, GetGenresQueryResult } from "../../GraphQL/Generated/Genres/graphql";




@injectable()
export class GenreDataSourceImpl implements GenreDataSource{
    async getAllGenres() : Promise<Genre[]>{
        const result = await graphQLGenreClient.query<GetGenresQueryResult>(
            {
                query: GetGenresDocument,
            }
        );
        const data = result.data
        const genres = data as unknown as Genres
        return genres.genres
        
    }
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