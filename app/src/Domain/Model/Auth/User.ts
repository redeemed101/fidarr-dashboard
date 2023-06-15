export type User = {
    email: string,
    username: string,
    name: string,
    profilePicPath: string,
    lastUpdated: string,
    dateCreated: string,
    roles?: string[],
    id: string
}
export interface UserPage{
    data : User[],
    count: number
}