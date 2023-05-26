import { injectable } from "inversify";
import { AlbumRepository } from "../../../../Domain/Repository/Music/AlbumRepository";
import { AlbumPage } from "../../../../Domain/Model/Music/Album";
import { CreateAlbumRequest, CreateAlbumResponse, EditAlbumRequest, EditAlbumResponse } from "../../../DataSource/Music/Albums/AlbumDataSource";
import { GeneralResponse } from "../../../DataSource/Music/Artists/ArtistDataSource";
import moment from "moment";

@injectable()
export class AlbumRepositoryMock implements AlbumRepository{
    private _albumPage : AlbumPage
    public constructor(){
        
        this._albumPage = {
            data : [...Array(10)].map((a,i) =>{
                  return  {
                    id: `album ${i}`,
                    imgSrc : "https://picsum.photos/200",
                    name : `album ${i}`,
                    artist: `artist ${i}`,
                    genre : ["Genre 1", "Genre 2"],
                    streams : "10M",
                    tracks : 5,
                    releaseDate: moment(Date.parse("2023-10-31")).format('MMMM DD, YYYY'),
                    lastUpdated: moment(Date.parse("2023-10-31")).format('MMMM DD, YYYY'),
                }
            }),
            count: 20
        }
    }
    getAlbumsPaging(page: number, size: number): Promise<AlbumPage> {
        return new Promise(resolve => setTimeout(() => resolve(this._albumPage), 5000)) ;
    }
    searchAlbumsPaging(searchText: string, page: number, size: number): Promise<AlbumPage> {
        return new Promise(resolve => setTimeout(() => resolve(this._albumPage), 5000)) ;
    }
    createAlbum(request: CreateAlbumRequest, onUploadProgress: any): Promise<CreateAlbumResponse> {
        const res = {
            name: "Chiboyiboyi",
            id: "1234",
            description: "chiboyi",
            artworkPath: "https://picsum.photos/200",
            path: "",
            isTrending: true
        }
        return new Promise(resolve => setTimeout(() => resolve(res), 5000)) ;
        
    }
    editAlbum(request: EditAlbumRequest, onUploadProgress: any): Promise<EditAlbumResponse> {
        const res = {
            name: "Chiboyiboyi",
            id: "1234",
            description: "chiboyi",
            artworkPath: "https://picsum.photos/200",
            path: "",
            isTrending: true
        }
        return new Promise(resolve => setTimeout(() => resolve(res), 5000)) ;
    }
    deleteAlbum(albumId: string, onUploadProgress: any): Promise<GeneralResponse> {
        return new Promise(resolve => setTimeout(() => resolve({success: true, result: "Successfully deleted"}), 5000)) ;
    }
}