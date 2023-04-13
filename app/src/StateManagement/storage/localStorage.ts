import React, {SetStateAction, useState} from 'react'


export const useLocalStorage = <T>(key: string) => {
    const getItem = <T>() =>{
        const itemString : string | null = sessionStorage.getItem(key)
        const item : T  | null = JSON.parse(itemString!)
        return item
    } 

    const [item, setItem] = useState<T | null>(getItem())
    const saveItem = (item : T )  => {
        sessionStorage.setItem(key, JSON.stringify(item))
        setItem(item)
      }
      return {
        setItem: saveItem,
        item
      }
    }






