import { useSelector } from "react-redux";
import { RootState } from "../../../../StateManagement/redux/store";

export const AlbumPage = () => {
    const album = useSelector((state: RootState) => state.selectedAlbum.Album);
    return (
        <>
          <p>{album?.name}</p>
        </>
    )
}