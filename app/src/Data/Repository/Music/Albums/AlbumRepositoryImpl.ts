import { inject, injectable } from "inversify";
import { AlbumRepository } from "./AlbumRepository";
import { type AlbumDataSource } from "../../../DataSource/Music/Albums/AlbumDataSource";
import { TYPES } from "../../../../DI/types";


@injectable()
export class AlbumRepositoryImpl implements AlbumRepository{
    private _dataSource : AlbumDataSource;
    public constructor(
        @inject(TYPES.AlbumDataSource) dataSource : AlbumDataSource
    ){
        this._dataSource = dataSource
    }
}