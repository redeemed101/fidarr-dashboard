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
export interface CreateGenreRequest {
    name: string,
    artworkFile: File
 
 }
 export interface CreateGenreResponse {
    success: boolean,
    result: any
 
 }
export interface GenreDataSource{   
    getGenresPaging(page: number, size:number) : Promise<GenresPaging>;
    getAllGenres() : Promise<Genre[]>;
    createGenre(request: CreateGenreRequest,onUploadProgress: any) : Promise<CreateGenreResponse>
}