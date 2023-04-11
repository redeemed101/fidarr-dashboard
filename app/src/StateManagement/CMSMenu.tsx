

export type CMSMenu = {
    title : string,
    isSelected?:boolean,
    route : string,
    type : CMSMenuType,
    action? : () => void
}
export const enum CMSMenuType{
     Locations,
     Channels,
     Content
}
export const cmsMenuItems : CMSMenu [] = [
    {
        title : "Locations",
        route: "/cms/locations",
        type: CMSMenuType.Locations
    },
    {
        title : "Channels",
        route: "/cms/channels",
        type: CMSMenuType.Channels
    },
    {
        title : "Content",
        route: "/cms/content",
        type: CMSMenuType.Content
    }

]