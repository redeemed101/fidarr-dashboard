import { myContainer } from "./DI/inversify.config";
import { TYPES } from "./DI/types";
import { AlbumDataSource } from "./Data/DataSource/Music/Albums/AlbumDataSource";
import { AlbumRepository } from "./Domain/Repository/Music/AlbumRepository";

export const albumDataSource= myContainer.get<AlbumDataSource>(TYPES.AlbumDataSource);
export const albumRepository  = myContainer.get<AlbumRepository>(TYPES.AlbumRepository);