import { inject, injectable } from "inversify";
import { GenreRepository } from "../../../../Domain/Repository/Music/GenreRepository";
import { CreateGenreRequest, CreateGenreResponse, EditGenreRequest, GenreDataSource } from "../../../DataSource/Music/Genres/GenreDataSource";
import { TYPES } from "../../../../DI/types";
import { BASE_URL } from "../../../DataSource/API/constant";
import moment from "moment";
import { Genre, GenrePage } from "../../../../Domain/Model/Music/Genre";

@injectable()
export class GenreRepositoryImpl implements GenreRepository{
    private _dataSource : GenreDataSource;
  
    public constructor(
        @inject(TYPES.GenreDataSource) dataSource : GenreDataSource
    ){
        this._dataSource = dataSource
    }
    async deleteGenre(id: string): Promise<boolean> {
       const result = await this._dataSource.deleteGenre(id)
       return result.success
    }
    async editGenre(id: string, request: EditGenreRequest, onUploadProgress: any): Promise<boolean> {
        const result = await this._dataSource.editGenre(id, request,onUploadProgress)
        return result.success
    }
    async createGenre(request: CreateGenreRequest, onUploadProgress: any): Promise<CreateGenreResponse> {
        return await this._dataSource.createGenre(request, onUploadProgress)
    }
    async getAllGenres(): Promise<Genre[]> {
        const result = await this._dataSource.getAllGenres()
        const genres = result.map(g => {
            return  {
                imgSrc : `${BASE_URL}${g.imageUrl}`,
                name : g.name,
                albums : g.albums?.length ?? 0,
                tracks : g.songs?.length ?? 0,
                artists: g.artists?.length ?? 0,
                id: g.id,
                lastUpdated:moment(Date.parse(g.lastUpdated)).format('MMMM DD, YYYY')
            }
        });
        return genres
    }
    async getGenresPaging(page: number, size: number): Promise<GenrePage> {
        const genreResponse = await this._dataSource.getGenresPaging(page,size)
        console.log("Page  ",page, " ", genreResponse.genresPaging)
        const genres = genreResponse.genresPaging.genres.map(a => {
           return  {
                imgSrc : `${BASE_URL}${a.imageUrl}`,
                name : a.name,
                albums : a.albums?.length ?? 0,
                tracks : a.songs?.length ?? 0,
                artists: a.artists?.length ?? 0,
                id: a.id,
                lastUpdated:moment(Date.parse(a.lastUpdated)).format('MMMM DD, YYYY')
            }
       });
       return {
          count: genreResponse.genresPaging.count,
          data: genres
       }
    }
   
}