import { injectable } from "inversify";
import { CreateGenreRequest, CreateGenreResponse, EditGenreRequest, GenreDataSource, Genres, GenresPaging } from "./GenreDataSource";
import { graphQLGenreClient } from "../../GraphQL/Client/client";
import { Genre, GetGenresDocument, GetGenresPagingDocument, GetGenresPagingQueryResult, GetGenresQuery, GetGenresQueryResult } from "../../GraphQL/Generated/Genres/graphql";
import { deleteAPI, postAPI, putAPI } from "../../API/axios_instance";
import { GeneralResponse } from "../Artists/ArtistDataSource";
import { MUSIC_URL } from "../../API/constant";




@injectable()
export class GenreDataSourceImpl implements GenreDataSource{
    async deleteGenre(id: string): Promise<GeneralResponse> {
       return await deleteAPI<GeneralResponse>(`${MUSIC_URL}AdminGenre/delete/${id}`);
    }
    async editGenre(id: string, request: EditGenreRequest, onUploadProgress: any): Promise<GeneralResponse> {
        let formData = new FormData();  
        formData.append("name",request.name);
        formData.append("artworkFile",request.artworkFile);
        return await putAPI<GeneralResponse>(`${MUSIC_URL}AdminGenre/edit/${id}`, formData, { "Content-Type": "multipart/form-data"}, onUploadProgress) 
    }
    async createGenre(request: CreateGenreRequest, onUploadProgress: any): Promise<CreateGenreResponse> {
        let formData = new FormData();  
        formData.append("name",request.name);
        formData.append("artworkFile",request.artworkFile);
        return await postAPI<CreateGenreResponse>(`${MUSIC_URL}AdminGenre/create`, formData, { "Content-Type": "multipart/form-data"}, onUploadProgress) 
    }
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