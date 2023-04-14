export const enum SettingsMenuType{
    Profile,
    Team
}

export type SettingsMenu = {
    title : string,
    isSelected?:boolean,
    route : string,
    type : SettingsMenuType,
    action? : () => void
}

export const settingsMenuItems : SettingsMenu [] = [
    {
        title : "Profile",
        route: "/settings/profile",
        type: SettingsMenuType.Profile
    },
    {
        title : "Team",
        route: "/settings/team",
        type: SettingsMenuType.Team
    }

]