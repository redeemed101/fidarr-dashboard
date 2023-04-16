import { inject, injectable } from "inversify";
import { ArtistRepository } from "../../../../Domain/Repository/Music/ArtistRepository";
import { Artist } from "../../../../Domain/Model/Music";
import { ArtistDataSource } from "../../../DataSource/Music/Artists/ArtistDataSource";
import { TYPES } from "../../../../DI/types";
import { BASE_URL } from "../../../DataSource/API/constant";

@injectable()
export class ArtistRepositoryImpl implements ArtistRepository{
    private _dataSource : ArtistDataSource;
  
    public constructor(
        @inject(TYPES.ArtistDataSource) dataSource : ArtistDataSource
    ){
        this._dataSource = dataSource
    }
    async getArtistsPaginated(page: number, size: number): Promise<Artist[]> {
         const artistsResponse = await this._dataSource.getArtistsPaginated(page,size);
         return artistsResponse.artistsPaginated.map( a => {
             return {
                imgSrc : `${BASE_URL}${a.imagePath}`,
                name : a.name,
                genres : a.genres?.map(g => g?.name ?? "") ?? [""],
                streams : a.songs?.reduce( (a,b) => a + (b?.streams?.length ?? 0) ,0) ?? 0,
                tracks : a.songs?.length ?? 0,
                albums: a.albums?.length ?? 0,
                lastUpdated: a.lastUpdated

             }
         })
    }
}