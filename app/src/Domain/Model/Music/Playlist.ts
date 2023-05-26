import { Track } from "./Track"





export type Playlist = {
    id: string,
    imgPath : string,
    name : string,
    streams : number,
    tracks : number,
    songs: Track[]
}

export interface PlaylistPage{
    data : Playlist[],
    count: number
}

