

export type Album = {
    id: string,
    imgSrc : string,
    name : string,
    artist: string,
    genre : string[],
    streams : string,
    tracks : number,
    releaseDate: string,
    lastUpdated: string
}

export interface AlbumPage{
    data : Album[],
    count: number
}

