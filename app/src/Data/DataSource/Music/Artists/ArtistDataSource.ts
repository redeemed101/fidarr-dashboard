import { Artist } from "../../GraphQL/Generated/Artists/graphql";


export interface ArtistsPaginated {
    artistsPaginated : Artist[]
}
export interface ArtistsPaging {
   
    artistsPaging : ArtistPage
}
export interface SearchArtistsPaging {
   
    searchArtistsPaging : ArtistPage
}
export interface ArtistPage{
    count: number,
    artists : Artist[]
}
export interface CreateArtist {
    name: string,
    username:string,
    address:string,
    website:string,
    bio:string,
    genres: string[],
    artistPhoto: File
}
export interface GeneralResponse {
    success : boolean,
    result : any
}
export interface ArtistDataSource{
   
    getArtistsPaginated(page : number, size:number): Promise<ArtistsPaginated>;
    getArtistsPaging(page: number, size:number) : Promise<ArtistsPaging>;
    searchGetArtistsPaging(searchText:string,page: number, size:number) : Promise<SearchArtistsPaging>;
    createArtist(request: CreateArtist) : Promise<GeneralResponse>
}