

export type Track = {
    id: string,
    imgSrc : string,
    name : string,
    artistName: string,
    genres? : string[],
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
