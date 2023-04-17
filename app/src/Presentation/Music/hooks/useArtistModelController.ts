import { useCallback, useEffect, useState } from "react";
import { AlbumRepository } from "../../../Domain/Repository/Music/AlbumRepository";
import { Artist } from "../../../Domain/Model/Music";
import { ArtistRepository } from "../../../Domain/Repository/Music/ArtistRepository";
import { RequestStatus, useGetData } from "./common";


export const useArtistModelController = (repository : ArtistRepository) => {

    const [currentArtists, setArtists] = useState<Artist[]>([]);
    const [status, setStatus] = useState<RequestStatus>();
    //const {fetchStatus, data} = useGetData(() => repository.getArtistsPaginated(1, 100));
    useEffect(() => {
        async function init() {
          try{
          setStatus(RequestStatus.Loading)
          const artists = await repository.getArtistsPaginated(1, 100);
          setStatus(RequestStatus.Success)
          setArtists(artists);
          }catch(e : any){ setStatus(RequestStatus.Error)}
        }
        init();
      }, [repository]);

    const getMoreArtistsPaginated = async (page: number, size: number) =>  {
          const albums = await repository.getArtistsPaginated(page, size);
          setArtists(albums)
    }
    const refreshArtistsPaginated = async (page: number, size: number) =>  {
        const albums = await repository.getArtistsPaginated(page, size);
        setArtists(albums)
  }
    return {
        currentArtists, //: data as Artist[],
        status,
        getMoreArtistsPaginated,
        refreshArtistsPaginated
      };
}

