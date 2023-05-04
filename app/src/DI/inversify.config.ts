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
import { GenreDataSource } from "../Data/DataSource/Music/Genres/GenreDataSource";
import { GenreDataSourceImpl } from "../Data/DataSource/Music/Genres/GenreDataSourceImp";
import { GenreRepository } from "../Domain/Repository/Music/GenreRepository";
import { GenreRepositoryImpl } from "../Data/Repository/Music/Genres/GenreRepositoryImpl";
import { AuthenticationDataSource } from "../Data/DataSource/Users/Authentication/AuthenticationDataSource";
import { AuthenticationDataSourceImpl } from "../Data/DataSource/Users/Authentication/AuthenticationDataSourceImpl";
import { AuthenticationRepository } from "../Domain/Repository/Users/Authentication/AuthenticationRepository";
import { AuthenticationRepositoryImpl } from "../Data/Repository/Users/Authentication/AuthenticationRepositoryImpl";
import { AuthenticationDataSourceMock } from "../Data/DataSource/Users/Authentication/AuthenticationDataSourceMock";
import { GenreRepositoryMock } from "../Data/Repository/Music/Genres/GenreRepositoryMock";
import { SongDataSourceImpl } from "../Data/DataSource/Music/Songs/SongDataSourceImpl";
import { SongRepositoryImpl } from "../Data/Repository/Music/Songs/SongRepositoryImp";
import { SongRepository } from "../Domain/Repository/Music/SongRepository";
import { SongDataSource } from "../Data/DataSource/Music/Songs/SongDataSource";

const myContainer = new Container();
myContainer.bind<AlbumDataSource>(TYPES.AlbumDataSource).to(AlbumDataSourceImpl);
myContainer.bind<ArtistDataSource>(TYPES.ArtistDataSource).to(ArtistDataSourceImpl);
myContainer.bind<GenreDataSource>(TYPES.GenreDataSource).to(GenreDataSourceImpl);
myContainer.bind<AlbumRepository>(TYPES.AlbumRepository).to(AlbumRepositoryImpl);
myContainer.bind<ArtistRepository>(TYPES.ArtistRepository).to(ArtistRepositoryImpl);
myContainer.bind<GenreRepository>(TYPES.GenreRepository).to(GenreRepositoryMock);

myContainer.bind<AuthenticationDataSource>(TYPES.AuthenticationDataSource).to(AuthenticationDataSourceMock);
myContainer.bind<AuthenticationRepository>(TYPES.AuthenticationRepository).to(AuthenticationRepositoryImpl);

myContainer.bind<SongDataSource>(TYPES.SongDataSource).to(SongDataSourceImpl);
myContainer.bind<SongRepository>(TYPES.SongRepository).to(SongRepositoryImpl);

export { myContainer };


//resolve dependencies like const albumDSImpl = myContainer.get<AlbumDataSource>(TYPES.AlbumDataSource);