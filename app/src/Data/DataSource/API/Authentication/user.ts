import { useState } from "react"
import { User } from "../../../../Domain/Model/Auth/User"

export const userManager = {
    getUser : () =>{
        const userString : string | null = sessionStorage.getItem('user')
        const userObj : User  = JSON.parse(userString!)
        return userObj
     },
    saveUser : (user : User)  => {
      sessionStorage.setItem('user', JSON.stringify(user))
    
    },
    deleteUser : () => {
       sessionStorage.removeItem("user")
    }
}
export const useUser = () => {
   
    const getUser = () => {
      return userManager.getUser()
    }
   
    const [user, setUser] = useState<User | null>(userManager.getUser())
    const removeUser = () => {
       userManager.deleteUser()
       setUser(null)
    }
    const saveUser = (user : User)  => {
        userManager.saveUser(user)
        setUser(user)
      }
      return {
        saveUser,
        getUser,
        removeUser
      }
    }