import { inject, injectable } from "inversify";
import { AlbumRepository } from "../../../../Domain/Repository/Music/AlbumRepository";
import { type AlbumDataSource } from "../../../DataSource/Music/Albums/AlbumDataSource";
import { TYPES } from "../../../../DI/types";
import { Album } from "../../../../Domain/Model/Music";


@injectable()
export class AlbumRepositoryImpl implements AlbumRepository{
    private _dataSource : AlbumDataSource;
    public constructor(
        @inject(TYPES.AlbumDataSource) dataSource : AlbumDataSource
    ){
        this._dataSource = dataSource
    }
    async getAlbumsPaginated(page: number, size: number): Promise<Album[]> {
        const albumResponse = await this._dataSource.getAlbumsPaginated(page,size)
        return albumResponse.toAlbumModels();
    }
}