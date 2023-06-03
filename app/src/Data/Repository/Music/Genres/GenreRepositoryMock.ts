import { injectable } from "inversify";
import { GenreRepository } from "../../../../Domain/Repository/Music/GenreRepository";
import { GenrePage, Genre } from "../../../../Domain/Model/Music/Genre";
import { CreateGenreRequest, CreateGenreResponse, EditGenreRequest } from "../../../DataSource/Music/Genres/GenreDataSource";

@injectable()
export class GenreRepositoryMock implements GenreRepository{
    deleteGenre(id: string): Promise<boolean> {
        return new Promise(resolve => setTimeout(() => resolve(true), 5000)) ;
    }
    editGenre(id: string, request: EditGenreRequest, onUploadProgress: any): Promise<boolean> {
        return new Promise(resolve => setTimeout(() => resolve(true), 5000)) ;
    }
    createGenre(request: CreateGenreRequest, onUploadProgress: any): Promise<CreateGenreResponse> {
    
        return new Promise(resolve => setTimeout(() => resolve({success: true, result: "Successfully added"}), 5000)) ;
    }
    getGenresPaging(page: number, size: number): Promise<GenrePage> {
       const result = {
        id: "`",
        imgSrc : "https://picsum.photos/200",
        name : "Pop",
        albums : 2,
        tracks : 10,
        artists: 2,
        lastUpdated: "2023-09-09"
       }
       const res =  {
        data : [...Array(20)].map((g,i) =>{
            return {id: "`",
                    imgSrc : "https://picsum.photos/200",
                    name : "Pop",
                    albums : 2,
                    tracks : 10,
                    artists: 2,
                    lastUpdated: "2023-09-09"
            }
           } ),
        count : 20
       }

       return new Promise(resolve => setTimeout(() => resolve(res), 5000)) ;
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