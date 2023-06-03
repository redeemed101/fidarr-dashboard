import { injectable } from "inversify";
import { ArtistRepository } from "../../../../Domain/Repository/Music/ArtistRepository";
import { ArtistPage } from "../../../../Domain/Model/Music/Artist";
import { CreateArtist, EditArtist } from "../../../DataSource/Music/Artists/ArtistDataSource";
import moment from "moment";
import { Genre } from "../../../../Domain/Model/Music/Genre";

@injectable()
export class ArtistRepositoryMock implements ArtistRepository{
    private _artistPage : ArtistPage
    public constructor(){
        
        this._artistPage = {
            data : [...Array(10)].map((a,i) =>{
                  return  {
                    id: `artist ${i}`,     
                    website: "www.google.com",
                    bio: "Nice Artist",               
                    imgSrc : "https://picsum.photos/200",
                    name : `artist ${i}`,
                    genres : [...Array(5)].map(g => {
                        return  {
                            imgSrc : "",
                            name : "Pop",
                            albums : 0,
                            tracks : 0,
                            artists: 0,
                            lastUpdated: "2019-09-09",
                            id: "1"
                        }
                    }) as Genre[],
                    streams : 100000,
                    tracks : 20,
                    albums: 2,
                    lastUpdated: moment(Date.parse("2023-10-31")).format('MMMM DD, YYYY'),
                }
            }),
            count: 20
        }
    }
    getArtistsPaging(page: number, size: number): Promise<ArtistPage> {
        return new Promise(resolve => setTimeout(() => resolve(this._artistPage), 5000)) ;
    }
    searchGetArtistsPaging(searchText: string, page: number, size: number): Promise<ArtistPage> {
        return new Promise(resolve => setTimeout(() => resolve(this._artistPage), 5000)) ;
    }
    createArtist(request: CreateArtist): Promise<boolean> {
        return new Promise(resolve => setTimeout(() => resolve(true), 5000)) ;
    }
    editArtist(request: EditArtist): Promise<boolean> {
        return new Promise(resolve => setTimeout(() => resolve(true), 5000)) ;
    }
    deleteArtist(artistId: string): Promise<boolean> {
        return new Promise(resolve => setTimeout(() => resolve(true), 5000)) ;
    }
}