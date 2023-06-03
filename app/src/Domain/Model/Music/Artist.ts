import { Genre } from "./Genre"

export type Artist = {
    id: string,
    imgSrc : string,
    name : string,
    genres : Genre[],
    streams : number,
    bio: string,
    tracks : number,
    albums: number,
    website: string,
    lastUpdated: string
}
export interface ArtistPage{
    data : Artist[],
    count: number
}
