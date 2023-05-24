import { inject, injectable } from "inversify";
import { ArtistRepository } from "../../../../Domain/Repository/Music/ArtistRepository";
import { Artist } from "../../../../Domain/Model/Music";
import { ArtistDataSource, CreateArtist, SearchArtistsPaging } from "../../../DataSource/Music/Artists/ArtistDataSource";
import { TYPES } from "../../../../DI/types";
import { BASE_URL } from "../../../DataSource/API/constant";
import { ArtistPage } from "../../../../Domain/Model/Music/Artist";
import moment from "moment";

@injectable()
export class ArtistRepositoryImpl implements ArtistRepository{
    private _dataSource : ArtistDataSource;
  
    public constructor(
        @inject(TYPES.ArtistDataSource) dataSource : ArtistDataSource
    ){
        this._dataSource = dataSource
    }
    async searchGetArtistsPaging(searchText: string, page: number, size: number): Promise<ArtistPage> {
        const artistResponse = await this._dataSource.searchGetArtistsPaging(searchText,page,size)
        console.log("Page  ",page, " ", artistResponse.searchArtistsPaging)
        const artists = artistResponse.searchArtistsPaging.artists.map(a => {
           return  {
                imgSrc : `${BASE_URL}${a.imagePath}`,
                name : a.name,
                genres : a.genres?.map(g => g?.name ?? "") ?? [""],
                streams : a.songs?.reduce( (a,b) => a + (b?.streams?.length ?? 0) ,0) ?? 0,
                tracks : a.songs?.length ?? 0,
                albums: a.albums?.length ?? 0,
                lastUpdated: moment(Date.parse(a.lastUpdated)).format('MMMM DD, YYYY')
            }
       });
       return {
          count: artistResponse.searchArtistsPaging.count,
          data: artists
       }
    }
    async createArtist(request: CreateArtist): Promise<boolean> {
        var result =  await this._dataSource.createArtist(request);
        return result.success
    }
    async getArtistsPaging(page: number, size: number): Promise<ArtistPage> {
        const artistResponse = await this._dataSource.getArtistsPaging(page,size)
        console.log("Page  ",page, " ", artistResponse.artistsPaging)
        const artists = artistResponse.artistsPaging.artists.map(a => {
           return  {
                imgSrc : `${BASE_URL}${a.imagePath}`,
                name : a.name,
                genres : a.genres?.map(g => g?.name ?? "") ?? [""],
                streams : a.songs?.reduce( (a,b) => a + (b?.streams?.length ?? 0) ,0) ?? 0,
                tracks : a.songs?.length ?? 0,
                albums: a.albums?.length ?? 0,
                lastUpdated: moment(Date.parse(a.lastUpdated)).format('MMMM DD, YYYY')
            }
       });
       return {
          count: artistResponse.artistsPaging.count,
          data: artists
       }
    }
    async getArtistsPaginated(page: number, size: number): Promise<Artist[]> {
        try{
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
        catch(err : any){
           console.log(`Error fetching: ${err}`)
           throw Error("Error fetching data")
        }
    }
}