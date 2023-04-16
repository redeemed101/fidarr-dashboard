
import { Album } from "../../GraphQL/Generated/Albums/graphql";

export interface AlbumsPaginated {
    albumsPaginated : Album[]
}
export interface AlbumDataSource{
   
    getAlbumsPaginated(page : number, size:number): Promise<AlbumsPaginated>;
}