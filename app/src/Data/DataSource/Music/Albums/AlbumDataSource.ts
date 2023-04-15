import { AlbumResponse } from "./AlbumResponse";

export interface AlbumDataSource{
   
    getAlbumsPaginated(page : number, size:number): Promise<AlbumResponse>;
}