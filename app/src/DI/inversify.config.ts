import { Container } from "inversify";
import { TYPES } from "./types";
import { AlbumDataSource } from "../Data/DataSource/Music/Albums/AlbumDataSource";
import { AlbumDataSourceImpl } from "../Data/DataSource/Music/Albums/AlbumDataSourceImpl";
import { AlbumRepository } from "../Data/Repository/Music/Albums/AlbumRepository";
import { AlbumRepositoryImpl } from "../Data/Repository/Music/Albums/AlbumRepositoryImpl";

const myContainer = new Container();
myContainer.bind<AlbumDataSource>(TYPES.AlbumDataSource).to(AlbumDataSourceImpl);
myContainer.bind<AlbumRepository>(TYPES.AlbumDataSource).to(AlbumRepositoryImpl);

export { myContainer };


//resolve dependencies like const albumDSImpl = myContainer.get<AlbumDataSource>(TYPES.AlbumDataSource);