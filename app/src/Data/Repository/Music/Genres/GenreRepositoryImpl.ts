import { inject, injectable } from "inversify";
import { GenreRepository } from "../../../../Domain/Repository/Music/GenreRepository";
import { GenreDataSource } from "../../../DataSource/Music/Genres/GenreDataSource";
import { TYPES } from "../../../../DI/types";
import { BASE_URL } from "../../../DataSource/API/constant";
import moment from "moment";
import { GenrePage } from "../../../../Domain/Model/Music/Genre";

@injectable()
export class GenreRepositoryImpl implements GenreRepository{
    private _dataSource : GenreDataSource;
  
    public constructor(
        @inject(TYPES.GenreDataSource) dataSource : GenreDataSource
    ){
        this._dataSource = dataSource
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
                lastUpdated:moment(Date.parse(a.lastUpdated)).format('MMMM DD, YYYY')
            }
       });
       return {
          count: genreResponse.genresPaging.count,
          data: genres
       }
    }
   
}