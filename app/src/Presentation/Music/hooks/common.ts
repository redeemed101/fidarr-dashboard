import { useCallback, useEffect, useState } from "react";

export enum RequestStatus {
    Loading,
    Error,
    Success
}

export const useGetData = (dataFn: () => Promise<any>) => {
    const [fetchStatus, setFetchStatus] = useState<RequestStatus>();
    const [data, setData] = useState<any[]>([]);
    const fn = useCallback(dataFn,[])
    useEffect(() => {
        async function init() {
          try{
          setFetchStatus(RequestStatus.Loading)
          const data = await fn();
          setFetchStatus(RequestStatus.Success)
          setData(data);
          }catch(e : any){ setFetchStatus(RequestStatus.Error)}
        }
        init();
      }, [fn]);
      return {
        fetchStatus,
        setFetchStatus,
        setData,
        data
      }
}