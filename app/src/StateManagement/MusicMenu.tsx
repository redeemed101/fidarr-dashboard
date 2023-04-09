

export type MusicMenu = {
    title : string,
    isSelected?:boolean,
    route : string,
    action? : () => void
}
export const menuItems : MusicMenu [] = [
    {
        title : "Artists",
        isSelected: true,
        route: "/music/artists"
    },
    {
        title : "Tracks",
        route: "/music/tracks"
       
    },
    {
        title : "Albums",
        route: "/music/albums"
    },
    {
        title : "Genres",
        route: "/music/genres"
    },

    {
        title : "Playlists",
        route: "/music/playlists"
    }

]