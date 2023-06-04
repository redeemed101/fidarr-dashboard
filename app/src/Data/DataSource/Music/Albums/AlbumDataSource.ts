
import { Album } from "../../GraphQL/Generated/Albums/graphql";
import { GeneralResponse } from "../Artists/ArtistDataSource";

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
   existingSongs: string[]
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

export interface EditAlbumRequest {
    name: string,
    albumId: string;
    description: string,
    artistId : string,
    genres: string[],
    songNames: string[],
    songDescriptions: string[],
    artworkFile: File,
    songFiles : File[],
    releaseDate: Date,
 
 }
 export interface EditAlbumResponse{
     name: string,
     id: string,
     description: string,
     artworkPath: string,
     path: string,
     isTrending: boolean
 }
export interface AlbumDataSource{
   
  
    getAlbumsPaging(page: number, size:number) : Promise<AlbumsPaging>;
    searchAlbumsPaging(searchText:string,page: number, size:number) : Promise<SearchAlbumsPaging>;
    createAlbum(request: CreateAlbumRequest,onUploadProgress: any) : Promise<CreateAlbumResponse>
    editAlbum(request: EditAlbumRequest,onUploadProgress: any) : Promise<EditAlbumResponse>
    deleteAlbum(albumId: string,onUploadProgress: any) : Promise<GeneralResponse>
}