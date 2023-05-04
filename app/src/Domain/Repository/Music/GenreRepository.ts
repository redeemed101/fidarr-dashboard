import { Genre, GenrePage } from "../../Model/Music/Genre";


export interface GenreRepository{
    getGenresPaging(page : number, size:number): Promise<GenrePage>;
    getAllGenres(): Promise<Genre[]>;
}