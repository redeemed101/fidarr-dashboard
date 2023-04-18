
export type Artist = {
    imgSrc : string,
    name : string,
    genres : string[],
    streams : number,
    tracks : number,
    albums: number,
    lastUpdated: string
}
export interface ArtistPage{
    data : Artist[],
    count: number
}
