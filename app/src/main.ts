import { myContainer } from "./DI/inversify.config";
import { TYPES } from "./DI/types";
import { AlbumDataSource } from "./Data/DataSource/Music/Albums/AlbumDataSource";
import { ArtistDataSource } from "./Data/DataSource/Music/Artists/ArtistDataSource";
import { GenreDataSource } from "./Data/DataSource/Music/Genres/GenreDataSource";
import { SongDataSource } from "./Data/DataSource/Music/Songs/SongDataSource";
import { AuthenticationDataSource } from "./Data/DataSource/Users/Authentication/AuthenticationDataSource";
import { AlbumRepository } from "./Domain/Repository/Music/AlbumRepository";
import { ArtistRepository } from "./Domain/Repository/Music/ArtistRepository";
import { GenreRepository } from "./Domain/Repository/Music/GenreRepository";
import { SongRepository } from "./Domain/Repository/Music/SongRepository";
import { AuthenticationRepository } from "./Domain/Repository/Users/Authentication/AuthenticationRepository";

export const albumDataSource= myContainer.get<AlbumDataSource>(TYPES.AlbumDataSource);
export const artistDataSource= myContainer.get<ArtistDataSource>(TYPES.ArtistDataSource);

export const genreDataSource= myContainer.get<GenreDataSource>(TYPES.GenreDataSource);
export const songDataSource= myContainer.get<SongDataSource>(TYPES.SongDataSource);
export const authenticationDataSource= myContainer.get<AuthenticationDataSource>(TYPES.AuthenticationDataSource);

export const albumRepository  = myContainer.get<AlbumRepository>(TYPES.AlbumRepository);
export const songRepository  = myContainer.get<SongRepository>(TYPES.SongRepository);
export const artistRepository  = myContainer.get<ArtistRepository>(TYPES.ArtistRepository);
export const genreRepository  = myContainer.get<GenreRepository>(TYPES.GenreRepository);
export const authenticationRepository  = myContainer.get<AuthenticationRepository>(TYPES.AuthenticationRepository);