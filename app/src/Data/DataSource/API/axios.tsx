import axios,{AxiosError,
AxiosInstance,
AxiosRequestConfig,
AxiosResponse,
InternalAxiosRequestConfig} from 'axios'
import {tokenManager} from './token'
import { BASE_URL } from './constant'
import Params from './params'
import IEntity from './ientity'



const postConfig : Params = {
    baseUrl: BASE_URL,
    headers: {
                "Authorization": `Bearer ${tokenManager.getToken()}`,
            },
    method: 'post'
}
const getConfig : Params = {
    baseUrl: BASE_URL,
        headers: {
            "Authorization": `Bearer ${tokenManager.getToken()}`
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



 
  

  
  const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    
    if(config.headers != null)
        config.headers!.Authorization = `Bearer ${tokenManager.getToken()}`;
  
    return config;
  };
  
  const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  };
  
  const onResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
  };
  
  const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
    if (error.response) {
      // Access Token was expired
      if (
        error.response.status === 401 
      ) {       
  
        try {
          const rs = await axios.post(`${BASE_URL}/Token/refresh`, {
            refresh_token: tokenManager.getRefreshToken(),
          });
  
          const { token, refreshToken } = rs.data;
          
          tokenManager.saveTokenObj(token,refreshToken)
  
          //return;
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(error);
  };
  
  export const setupInterceptorsTo = (
    axiosInstance: AxiosInstance
  ): AxiosInstance => {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
  };