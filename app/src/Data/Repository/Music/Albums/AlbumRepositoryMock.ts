import { injectable } from "inversify";
import { AlbumRepository } from "../../../../Domain/Repository/Music/AlbumRepository";
import { AlbumPage } from "../../../../Domain/Model/Music/Album";
import { CreateAlbumRequest, CreateAlbumResponse, EditAlbumRequest, EditAlbumResponse } from "../../../DataSource/Music/Albums/AlbumDataSource";
import { GeneralResponse } from "../../../DataSource/Music/Artists/ArtistDataSource";
import moment from "moment";
import { Track } from "../../../../Domain/Model/Music";

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
                    description: `album description ${i}`,
                    artist: {
                        id: `artist ${i}`,     
                        website: "www.google.com",
                        bio: "Nice Artist",               
                        imgSrc : "https://picsum.photos/200",
                        name : `artist ${i}`,
                        genres : ["Genre 1", "Genre 2"],
                        streams : 100000,
                        tracks : 20,
                        albums: 2,
                        lastUpdated: "2023-10-31",
                    },
                    songs :[...Array(10)].map((a,i) =>{
                        return  {
                          id: `track-${i}`,                    
                          imgSrc : "https://picsum.photos/200",
                          name : `song ${i}`,
                          artistName: `artist ${i}`,
                          genres : ["Genre 1", "Genre 2"],
                          streams : "10M",
                          duration : "",
                          lastUpdated: "2023-10-31", 
                          releaseDate: "2023-10-31",
                         
                      }
                    }),
                    genres : ["Genre 1", "Genre 2"],
                    streams : "10M",
                    tracks : 5,
                    releaseDate: "2023-10-31",
                    lastUpdated: "2023-10-31",
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