import { Playlist } from "./Playlist"

export interface MoodPage{
    data : Mood[],
    count: number
}
export type Mood = {
    id: string,
    imgPath : string,
    name : string,
    playlists: Playlist[]
    dateCreated: string
    lastUpdated: string
}
