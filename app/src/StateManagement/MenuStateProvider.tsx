import { ReactNode, createContext, useContext, useState } from 'react';

import File from "../Assets/svgs/file.svg"
import Activity from "../Assets/svgs/activity.svg"
import Music from "../Assets/svgs/headphones.svg"
import Copy from "../Assets/svgs/copy.svg"
import People from "../Assets/svgs/users.svg"
import Settings from "../Assets/svgs/settings.svg"
import { useLocalStorage } from './storage/localStorage';


export type MenuStateContextType = {
     menus: Menu[],
     selectedMenu : string,
     setSelectedMenu : (m : string) => void
};
type Menu = {
    title: string;
    key : string;
    imgSrc:string;
    isSelected?: boolean;
    route: string;
}
const menus : Menu[] = [
    {
        title : "Overview",
        imgSrc : Activity,
        route : "/dashboard",
        key: "OVERVIEW"
    },
    {
        title : "Music",
        imgSrc: Music,
        route: "/music",
        key: "MUSIC"
    },
    /*{
        title : "CMS",
        imgSrc : Copy,
        route : "/cms",
        key: "CMS"
    },*/
    {
        title: "People",
        imgSrc: People,
        route: "/people",
        key: "PEOPLE"
    },
    /*{
        title : "Files",
        imgSrc : File,
        route: "/files",
        key: "FILES"
    },*/
    {
        title: "Settings",
        imgSrc : Settings,
        route: "/settings",
        key: "SETTINGS"
    }
]

export const StorageKey : string = "menuState"

export const MenuStateProviderContext = createContext<MenuStateContextType>({} as MenuStateContextType);


const MenuStateProvider : React.FC<{ children: React.ReactNode }> = ({children}) => {
      const {item, setItem} = useLocalStorage<string>(StorageKey)
    // this state will be shared with all components 
       const [selectedMenu, setMenu] = useState(item || menus[0].key);
       const setSelectedMenu = (key : string) => {
            setMenu(key)
            setItem(key)
       }         
        return (
                    // this is the provider providing state
            <MenuStateProviderContext.Provider value={{selectedMenu, setSelectedMenu,menus}}>
                {children}
            </MenuStateProviderContext.Provider>
        );
};

export default MenuStateProvider;

export const useMenuState = () => {
    return useContext(MenuStateProviderContext)
}