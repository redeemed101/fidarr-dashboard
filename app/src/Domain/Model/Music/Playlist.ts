import { Track } from "./Track"





export type Playlist = {
    id: string,
    imgPath : string,
    name : string,
    streams : number,
    tracks : number,
    likes: number,
    isFidarr: boolean,
    createdAt: string
    lastUpdated: string
    songs: Track[]
}

export interface PlaylistPage{
    data : Playlist[],
    count: number
}

