import axios,{AxiosError,
AxiosInstance,
AxiosProgressEvent,
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
                //"Content-Type": "multipart/form-data",
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
export type Response = {
  statusCode : number,
  data : any
}

export async function getAPI<IEntity>(url : string ,extraHeaders: any | null = null, onDownloadProgress : undefined | any  = undefined) : Promise<IEntity> {
    try { 
      var headers = extraHeaders != null ? {
        ...postConfig.headers,
        ...extraHeaders
       } : postConfig.headers;
        const {data, status} = await axios<IEntity>({
          headers: headers,
          method: "get",
          url: `${getConfig.baseUrl}/${url}/`,
          onDownloadProgress: onDownloadProgress
      });
      return data
    }
    catch(error){
    
      console.log('unexpected error: ', error)
      throw error
    
  }
}

export  async function postAPI<IEntity> (url: string, payload : any, extraHeaders: any | null = null, onUploadProgress : undefined | any = undefined) : Promise<IEntity> {
  try{
   
     var headers = extraHeaders != null ? {
      ...postConfig.headers,
      ...extraHeaders
     } : postConfig.headers;
     const {data, status } = await axios<IEntity>({        
        url: `${postConfig.baseUrl}/${url}`,
        data: payload,
        method: "post",
        headers : headers,
        onUploadProgress: onUploadProgress
    })
    return data
  }
  catch(error){
  
      console.log('unexpected error: ', error)
      throw error
     
  }
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