import React, {useState} from 'react'


export const useToken = () => {
    const getToken =() =>{
        const tokenString : string | null = sessionStorage.getItem('token')
        const userToken  = JSON.parse(tokenString!)
        return userToken?.token
    } 

    const [token, setToken] = useState(getToken())
    const saveToken = (userToken : any)  => {
        sessionStorage.setItem('token', JSON.stringify(userToken))
        setToken(userToken.token)
      }
      return {
        setToken: saveToken,
        token
      }
    }




export const useRefreshToken = () => {
    const getRefreshToken =() =>{
        const tokenString : string | null = sessionStorage.getItem('refreshToken')
        const userToken = JSON.parse(tokenString!)
        return userToken?.token
    } 

    const [refreshToken, setRefreshToken] = useState(getRefreshToken())
    const saveRefreshToken = (userRefreshToken : any) => {
        sessionStorage.setItem('refreshToken', JSON.stringify(userRefreshToken))
        setRefreshToken(userRefreshToken.token)
      }
      return {
        setRefreshToken: saveRefreshToken,
        refreshToken
      }
    }

