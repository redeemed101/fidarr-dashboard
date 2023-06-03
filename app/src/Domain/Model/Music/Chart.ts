import { Track } from "./Track"

export interface ChartPage{
    data : Chart[],
    count: number
}
export type Chart = {
    id: string,
    imgPath : string,
    name : string,
    positions: SongPosition[]
    dateCreated: string
    lastUpdated: string
}
export type SongPosition = {
    position: number,
    song: Track
}