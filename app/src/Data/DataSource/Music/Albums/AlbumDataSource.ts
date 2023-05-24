
import { Album } from "../../GraphQL/Generated/Albums/graphql";

export interface AlbumsPaginated {
    albumsPaginated : Album[]
}
export interface AlbumsPaging {
   
    albumsPaging : AlbumPage
}
export interface SearchAlbumsPaging {
   
    searchAlbumsPaging : AlbumPage
}
export interface AlbumPage{
    count: number,
    albums : Album[]
}
export interface CreateAlbumRequest {
   name: string,
   description: string,
   artistId : string,
   genres: string[],
   songNames: string[],
   songDescriptions: string[],
   artworkFile: File,
   songFiles : File[],
   releaseDate: Date,

}
export interface CreateAlbumResponse{
    name: string,
    id: string,
    description: string,
    artworkPath: string,
    path: string,
    isTrending: boolean
}
export interface AlbumDataSource{
   
    getAlbumsPaginated(page : number, size:number): Promise<AlbumsPaginated>;
    getAlbumsPaging(page: number, size:number) : Promise<AlbumsPaging>;
    searchAlbumsPaging(searchText:string,page: number, size:number) : Promise<SearchAlbumsPaging>;
    createAlbum(request: CreateAlbumRequest,onUploadProgress: any) : Promise<CreateAlbumResponse>
}