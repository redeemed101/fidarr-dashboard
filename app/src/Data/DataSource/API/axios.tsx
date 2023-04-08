import axios from 'axios'
import {useToken} from './token'
import { BASE_URL } from './constant'
import Params from './params'
import IEntity from './ientity'

const {token, setToken} = useToken()

const postConfig : Params = {
    baseUrl: BASE_URL,
    headers: {
                "Authorization": `Bearer ${token}`,
            },
    method: 'post'
}
const getConfig : Params = {
    baseUrl: BASE_URL,
        headers: {
            "Authorization": `Bearer ${token}`
        },
    method: 'get'
}

export const getAPI = async (url : string, data : any) : Promise<IEntity> =>{
    return await axios({
        ...getConfig,
        url: `${getConfig.baseUrl}/${url}/${data}`,
    }).then ( (response) => {
        console.log(response)
        return {
            status: response.status,
            data: response.data
        }
    }).catch((error) =>{
        console.log(error)
        return {
            status: error.status,
            data: error.response
        }
    })
}

export  const postAPI = async (url: string, data : any) : Promise<IEntity> =>{
    return await axios({
        ...postConfig,
        url: `${postConfig.baseUrl}/${url}`,
        data
    }).then ( (response) => {
        console.log(response)
        return {
            status: response.status,
            data: response.data
        }
    }).catch((error) =>{
        console.log(error)
        return {
            status: error.status,
            data: error.response
        }
    })
}