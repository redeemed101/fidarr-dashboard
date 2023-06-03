import { CreateGenreRequest, CreateGenreResponse, EditGenreRequest } from "../../../Data/DataSource/Music/Genres/GenreDataSource";
import { Genre, GenrePage } from "../../Model/Music/Genre";


export interface GenreRepository{
    getGenresPaging(page : number, size:number): Promise<GenrePage>;
    getAllGenres(): Promise<Genre[]>;
    deleteGenre(id:string) : Promise<boolean>
    editGenre(id:string,request: EditGenreRequest,onUploadProgress: any) : Promise<boolean>
    createGenre(request: CreateGenreRequest,onUploadProgress: any) : Promise<CreateGenreResponse>
}