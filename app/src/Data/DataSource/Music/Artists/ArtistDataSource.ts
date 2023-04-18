import { Artist } from "../../GraphQL/Generated/Artists/graphql";


export interface ArtistsPaginated {
    artistsPaginated : Artist[]
}
export interface ArtistsPaging {
   
    artistsPaging : ArtistPage
}
export interface ArtistPage{
    count: number,
    artists : Artist[]
}
export interface ArtistDataSource{
   
    getArtistsPaginated(page : number, size:number): Promise<ArtistsPaginated>;
    getArtistsPaging(page: number, size:number) : Promise<ArtistsPaging>;
}