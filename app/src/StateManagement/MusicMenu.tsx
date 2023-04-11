

export type MusicMenu = {
    title : string,
    isSelected?:boolean,
    route : string,
    type : MusicMenuType,
    action? : () => void
}
export const enum MusicMenuType{
     Artists,
     Tracks,
     Albums,
     Genres,
     Playlists
}
export const menuItems : MusicMenu [] = [
    {
        title : "Artists",
        route: "/music/artists",
        type: MusicMenuType.Artists
    },
    {
        title : "Tracks",
        route: "/music/tracks",
        type : MusicMenuType.Tracks
       
    },
    {
        title : "Albums",
        route: "/music/albums",
        type : MusicMenuType.Albums
    },
    {
        title : "Genres",
        route: "/music/genres",
        type: MusicMenuType.Genres
    },

    {
        title : "Playlists",
        route: "/music/playlists",
        type : MusicMenuType.Playlists
    }

]