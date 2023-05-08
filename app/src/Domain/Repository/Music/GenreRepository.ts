import { CreateGenreRequest, CreateGenreResponse } from "../../../Data/DataSource/Music/Genres/GenreDataSource";
import { Genre, GenrePage } from "../../Model/Music/Genre";


export interface GenreRepository{
    getGenresPaging(page : number, size:number): Promise<GenrePage>;
    getAllGenres(): Promise<Genre[]>;
    createGenre(request: CreateGenreRequest,onUploadProgress: any) : Promise<CreateGenreResponse>
}