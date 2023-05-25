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
interface User {
    username : string;
    fullname: string;
    profile: string;
    email: string;
    phoneNumber: string;
    countryId: number;
}

export interface CreateArtist {
    name: string,
    address:string,
    website:string,
    bio:string,
    user: User,
    genres: string[],
    artistPhoto: File
}
export interface EditArtist {
    name: string,
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
   
    getArtistsPaging(page: number, size:number) : Promise<ArtistsPaging>;
    searchGetArtistsPaging(searchText:string,page: number, size:number) : Promise<SearchArtistsPaging>;
    createArtist(request: CreateArtist) : Promise<GeneralResponse>
    EditArtist(request: EditArtist) : Promise<GeneralResponse>
    DeleteArtist(artistId: string) : Promise<GeneralResponse>
}