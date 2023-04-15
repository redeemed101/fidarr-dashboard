import { useEffect, useState } from "react";
import { AlbumRepository } from "../../../Domain/Repository/Music/AlbumRepository";
import { Album } from "../../../Domain/Model/Music";


export const useAlbumModelController = (repository : AlbumRepository) => {

    const [currentAlbums, setAlbums] = useState<Album[]>([]);

    useEffect(() => {
        async function init() {
         const albums = await repository.getAlbumsPaginated(1, 100);
          setAlbums(albums);
        }
        init();
      }, [repository]);

    const getMoreAlbumsPaginated = async (page: number, size: number) =>  {
          const albums = await repository.getAlbumsPaginated(page, size);
          setAlbums(albums)
    }
    const refreshAlbumsPaginated = async (page: number, size: number) =>  {
        const albums = await repository.getAlbumsPaginated(page, size);
        setAlbums(albums)
  }
    return {
        currentAlbums,
        getMoreAlbumsPaginated,
        refreshAlbumsPaginated
      };
}

