import { Artist } from "./Artist"
import { Genre } from "./Genre"


export type Track = {
    id: string,
    imgSrc : string,
    name : string,
    artist: Artist,
    genres : Genre[],
    isrcCode?:string,
    streams : string,
    duration : string,
    releaseDate: string,
    lastUpdated: string
}

export interface TrackPage{
    data : Track[],
    count: number
}
