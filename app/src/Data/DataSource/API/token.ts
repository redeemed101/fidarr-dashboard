import React, {useState} from 'react'

export type TokenObject = {
  token : string,
  refreshToken: string
}
export const useToken = () => {
    const getToken =() =>{
        const tokenString : string | null = sessionStorage.getItem('token')
        const userTokenObj : TokenObject  = JSON.parse(tokenString!)
        return userTokenObj?.token
    } 
    const getRefreshToken =() =>{
      const tokenString : string | null = sessionStorage.getItem('token')
      const userTokenObj : TokenObject = JSON.parse(tokenString!)
      return userTokenObj?.refreshToken
    } 

    const [tokenObj, setTokenObj] = useState<TokenObject>({token: getToken(), refreshToken : getRefreshToken()})
    const saveTokenObj = (token : string, refreshToken: string)  => {
        sessionStorage.setItem('token', JSON.stringify({ token: token, refreshToken: refreshToken}))
        setTokenObj({ token: token, refreshToken: refreshToken})
      }
      return {
        setTokenObj: saveTokenObj,
        tokenObj,
        getRefreshToken,
        getToken
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

