

export type Track = {

    imgSrc : string,
    name : string,
    genres? : string[],
    streams : string,
    duration : string,
    releaseDate: string,
    lastUpdated: string
}

export interface TrackPage{
    data : Track[],
    count: number
}
