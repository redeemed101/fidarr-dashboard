import { CreateArtist, EditArtist, SearchArtistsPaging } from "../../../Data/DataSource/Music/Artists/ArtistDataSource";
import { Artist } from "../../Model/Music";
import { ArtistPage } from "../../Model/Music/Artist";

export interface ArtistRepository{
    getArtistsPaging(page : number, size:number): Promise<ArtistPage>;
    searchGetArtistsPaging(searchText:string,page: number, size:number) : Promise<ArtistPage>;
    createArtist(request: CreateArtist) : Promise<boolean>
    editArtist(request: EditArtist) : Promise<boolean>
    deleteArtist(artistId: string) : Promise<boolean>
}