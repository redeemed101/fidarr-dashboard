import { useEffect, useState } from "react";
import { AlbumRepository } from "../../../Domain/Repository/Music/AlbumRepository";
import { Artist } from "../../../Domain/Model/Music";
import { ArtistRepository } from "../../../Domain/Repository/Music/ArtistRepository";


export const useArtistModelController = (repository : ArtistRepository) => {

    const [currentArtists, setArtists] = useState<Artist[]>([]);

    useEffect(() => {
        async function init() {
         const albums = await repository.getArtistsPaginated(1, 100);
          setArtists(albums);
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
        currentArtists,
        getMoreArtistsPaginated,
        refreshArtistsPaginated
      };
}

