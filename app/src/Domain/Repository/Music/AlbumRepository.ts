import { Album} from "../../Model/Music";
import { AlbumPage } from "../../Model/Music/Album";



export interface AlbumRepository{
    getAlbumsPaginated(page : number, size:number): Promise<Album[]>;
    getAlbumsPaging(page : number, size:number): Promise<AlbumPage>;
}