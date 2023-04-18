import { Artist } from "../../Model/Music";
import { ArtistPage } from "../../Model/Music/Artist";

export interface ArtistRepository{
    getArtistsPaginated(page : number, size:number): Promise<Artist[]>;
    getArtistsPaging(page : number, size:number): Promise<ArtistPage>;
}