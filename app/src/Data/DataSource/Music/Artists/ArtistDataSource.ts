import { Artist } from "../../GraphQL/Generated/Artists/graphql";


export interface ArtistsPaginated {
    artistsPaginated : Artist[]
}
export interface ArtistDataSource{
   
    getArtistsPaginated(page : number, size:number): Promise<ArtistsPaginated>;
}