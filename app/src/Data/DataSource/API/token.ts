import React, {useState} from 'react'

export type TokenObject = {
  token : string,
  refreshToken: string
}
export const tokenManager = {
    getToken : () =>{
        const tokenString : string | null = sessionStorage.getItem('token')
        const userTokenObj : TokenObject  = JSON.parse(tokenString!)
        return userTokenObj?.token
     },
     checkTokenExpiry : (token : string) : boolean  => {
      try {
        const decodedJwt = JSON.parse(window.atob(token.split(".")[1]));
        if (decodedJwt.exp * 1000 < Date.now()) {
           return false
        }
        return true
      } catch (e) {
        return false;
      }
    },
    getRefreshToken : () =>{
        const tokenString : string | null = sessionStorage.getItem('token')
        const userTokenObj : TokenObject = JSON.parse(tokenString!)
        return userTokenObj?.refreshToken
    }, 
    saveTokenObj : (token : string, refreshToken: string)  => {
      sessionStorage.setItem('token', JSON.stringify({ token: token, refreshToken: refreshToken}))
      //setTokenObj({ token: token, refreshToken: refreshToken})
    }
}
export const useToken = () => {
   
    const getRefreshToken = () => {
      return tokenManager.getRefreshToken()
    }
    const getToken = () => {
      return tokenManager.getToken()
    }
    const [tokenObj, setTokenObj] = useState<TokenObject>({token: tokenManager.getToken(), refreshToken : tokenManager.getRefreshToken()})
    const saveTokenObjState = (token : string, refreshToken: string)  => {
        tokenManager.saveTokenObj(token,refreshToken)
        setTokenObj({ token: token, refreshToken: refreshToken})
      }
      return {
        setTokenObj: saveTokenObjState,
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

