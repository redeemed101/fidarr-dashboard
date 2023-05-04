import { injectable } from "inversify";
import { GenreRepository } from "../../../../Domain/Repository/Music/GenreRepository";
import { GenrePage, Genre } from "../../../../Domain/Model/Music/Genre";

@injectable()
export class GenreRepositoryMock implements GenreRepository{
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
                id: "1234"
            },
            {
                imgSrc : "",
                name : "Pop",
                albums : 0,
                tracks : 0,
                artists: 0,
                lastUpdated: "2019-09-09",
                id: "1234"
            },
            {
                imgSrc : "",
                name : "Hip Hop",
                albums : 0,
                tracks : 0,
                artists: 0,
                lastUpdated: "2019-09-09",
                id: "1234"
            },
            {
                imgSrc : "",
                name : "Pop",
                albums : 0,
                tracks : 0,
                artists: 0,
                lastUpdated: "2019-09-09",
                id: "1234"
            }
        ]
        return new Promise(resolve => setTimeout(() => resolve(genres), 5000)) ;
    }
}