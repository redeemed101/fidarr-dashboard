import { injectable } from "inversify";
import { GenreRepository } from "../../../../Domain/Repository/Music/GenreRepository";
import { GenrePage, Genre } from "../../../../Domain/Model/Music/Genre";
import { CreateGenreRequest, CreateGenreResponse } from "../../../DataSource/Music/Genres/GenreDataSource";

@injectable()
export class GenreRepositoryMock implements GenreRepository{
    createGenre(request: CreateGenreRequest, onUploadProgress: any): Promise<CreateGenreResponse> {
    
        return new Promise(resolve => setTimeout(() => resolve({success: true, result: "Successfully added"}), 5000)) ;
    }
    getGenresPaging(page: number, size: number): Promise<GenrePage> {
        throw new Error("Method not implemented.");
    }
    getAllGenres(): Promise<Genre[]> {
        var genres = [
            {
                imgSrc : "",
                name : "Pop",
                albums : 0,
                tracks : 0,
                artists: 0,
                lastUpdated: "2019-09-09",
                id: "1"
            },
            {
                imgSrc : "",
                name : "Pop",
                albums : 0,
                tracks : 0,
                artists: 0,
                lastUpdated: "2019-09-09",
                id: "2"
            },
            {
                imgSrc : "",
                name : "Hip Hop",
                albums : 0,
                tracks : 0,
                artists: 0,
                lastUpdated: "2019-09-09",
                id: "3"
            },
            {
                imgSrc : "",
                name : "Pop",
                albums : 0,
                tracks : 0,
                artists: 0,
                lastUpdated: "2019-09-09",
                id: "4"
            }
        ]
        return new Promise(resolve => setTimeout(() => resolve(genres), 5000)) ;
    }
}