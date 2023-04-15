import { myContainer } from "./DI/inversify.config";
import { TYPES } from "./DI/types";
import { AlbumDataSource } from "./Data/DataSource/Music/Albums/AlbumDataSource";

export const albumDataSource= myContainer.get<AlbumDataSource>(TYPES.AlbumDataSource);