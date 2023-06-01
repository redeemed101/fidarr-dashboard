import { Artist } from "./Artist"
import { Track } from "./Track"


export type Album = {
    id: string,
    imgSrc : string,
    name : string,
    artist: Artist,
    genres : string[],
    songs: Track[]
    streams : string,
    tracks : number,
    description: string,
    releaseDate: string,
    lastUpdated: string
}

export interface AlbumPage{
    data : Album[],
    count: number
}

