import { Artist } from "./Artist"
import { Genre } from "./Genre"
import { Track } from "./Track"


export type Album = {
    id: string,
    imgSrc : string,
    name : string,
    artist: Artist,
    genres : Genre[],
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

