import { myContainer } from "./DI/inversify.config";
import { TYPES } from "./DI/types";
import { AlbumDataSource } from "./Data/DataSource/Music/Albums/AlbumDataSource";
import { ArtistDataSource } from "./Data/DataSource/Music/Artists/ArtistDataSource";
import { AlbumRepository } from "./Domain/Repository/Music/AlbumRepository";
import { ArtistRepository } from "./Domain/Repository/Music/ArtistRepository";

export const albumDataSource= myContainer.get<AlbumDataSource>(TYPES.AlbumDataSource);
export const artistDataSource= myContainer.get<ArtistDataSource>(TYPES.ArtistDataSource);
export const albumRepository  = myContainer.get<AlbumRepository>(TYPES.AlbumRepository);
export const artistRepository  = myContainer.get<ArtistRepository>(TYPES.ArtistRepository);