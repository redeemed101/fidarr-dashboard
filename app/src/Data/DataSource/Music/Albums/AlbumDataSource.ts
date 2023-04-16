import { AlbumsPaginated } from "./AlbumDataSourceImpl";
import { AlbumResponse } from "./AlbumResponse";

export interface AlbumDataSource{
   
    getAlbumsPaginated(page : number, size:number): Promise<AlbumsPaginated>;
}