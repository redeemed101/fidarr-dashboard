import { injectable } from "inversify";
import { AlbumDataSource } from "./AlbumDataSource";
import { AlbumResponse } from "./AlbumResponse";


@injectable()
export class AlbumDataSourceImpl implements AlbumDataSource{
    getAlbumsPaginated(page: number, size: number): Promise<AlbumResponse> {
        return  Promise.resolve(new AlbumResponse());
    }

}