import { Album } from "../../Model/Music";

export interface AlbumRepository{
    getAlbumsPaginated(page : number, size:number): Promise<Album[]>;
}