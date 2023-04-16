import { Container } from "inversify";
import { TYPES } from "./types";
import "reflect-metadata";
import { AlbumDataSource } from "../Data/DataSource/Music/Albums/AlbumDataSource";
import { AlbumDataSourceImpl } from "../Data/DataSource/Music/Albums/AlbumDataSourceImpl";
import { AlbumRepository } from "../Domain/Repository/Music/AlbumRepository";
import { AlbumRepositoryImpl } from "../Data/Repository/Music/Albums/AlbumRepositoryImpl";
import { ArtistDataSource } from "../Data/DataSource/Music/Artists/ArtistDataSource";
import { ArtistDataSourceImpl } from "../Data/DataSource/Music/Artists/ArtistDataSourceImp";
import { ArtistRepository } from "../Domain/Repository/Music/ArtistRepository";
import { ArtistRepositoryImpl } from "../Data/Repository/Music/Artists/ArtistRepositoryImpl";

const myContainer = new Container();
myContainer.bind<AlbumDataSource>(TYPES.AlbumDataSource).to(AlbumDataSourceImpl);
myContainer.bind<ArtistDataSource>(TYPES.ArtistDataSource).to(ArtistDataSourceImpl);
myContainer.bind<AlbumRepository>(TYPES.AlbumRepository).to(AlbumRepositoryImpl);
myContainer.bind<ArtistRepository>(TYPES.ArtistRepository).to(ArtistRepositoryImpl);

export { myContainer };


//resolve dependencies like const albumDSImpl = myContainer.get<AlbumDataSource>(TYPES.AlbumDataSource);