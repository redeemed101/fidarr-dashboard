export type Genre = {
    id: string,
    imgSrc : string,
    name : string,
    albums : number,
    tracks : number,
    artists: number,
    lastUpdated: string
}
export interface GenrePage{
    data : Genre[],
    count: number
}