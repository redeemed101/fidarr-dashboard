import { Artist } from "../../Model/Music";

export interface ArtistRepository{
    getArtistsPaginated(page : number, size:number): Promise<Artist[]>;
}