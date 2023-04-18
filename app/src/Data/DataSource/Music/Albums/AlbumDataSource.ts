
import { Album } from "../../GraphQL/Generated/Albums/graphql";

export interface AlbumsPaginated {
    albumsPaginated : Album[]
}
export interface AlbumsPaging {
   
    albumsPaging : AlbumPage
}
export interface AlbumPage{
    count: number,
    albums : Album[]
}
export interface AlbumDataSource{
   
    getAlbumsPaginated(page : number, size:number): Promise<AlbumsPaginated>;
    getAlbumsPaging(page: number, size:number) : Promise<AlbumsPaging>;
}