import { Genre } from "../../GraphQL/Generated/Genres/graphql"

export interface GenresPaging {
   
    genresPaging : GenrePage
}
export interface GenrePage{
    count: number,
    genres : Genre[]
}
export interface Genres{
    genres : Genre[]
}

export interface GenreDataSource{
   
    getGenresPaging(page: number, size:number) : Promise<GenresPaging>;
    getAllGenres() : Promise<Genre[]>;
}