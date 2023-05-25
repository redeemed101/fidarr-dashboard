import { CreateAlbumRequest, CreateAlbumResponse, EditAlbumRequest, EditAlbumResponse } from "../../../Data/DataSource/Music/Albums/AlbumDataSource";
import { Album} from "../../Model/Music";
import { AlbumPage } from "../../Model/Music/Album";



export interface AlbumRepository{
  
    getAlbumsPaging(page : number, size:number): Promise<AlbumPage>;
    searchAlbumsPaging(searchText: string, page: number, size: number): Promise<AlbumPage>
    createAlbum(request: CreateAlbumRequest,onUploadProgress: any) : Promise<CreateAlbumResponse>
    editAlbum(request: EditAlbumRequest,onUploadProgress: any) : Promise<EditAlbumResponse>
}