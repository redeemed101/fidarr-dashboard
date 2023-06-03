import { Genre } from "../../GraphQL/Generated/Genres/graphql"
import { GeneralResponse } from "../Artists/ArtistDataSource"

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
 export interface EditGenreRequest {
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
    deleteGenre(id: string) : Promise<GeneralResponse>
    createGenre(request: CreateGenreRequest,onUploadProgress: any) : Promise<CreateGenreResponse>
    editGenre(id:string,request: EditGenreRequest,onUploadProgress: any) : Promise<GeneralResponse>
}