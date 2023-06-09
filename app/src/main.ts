import { myContainer } from "./DI/inversify.config";
import { TYPES } from "./DI/types";
import { AlbumDataSource } from "./Data/DataSource/Music/Albums/AlbumDataSource";
import { ArtistDataSource } from "./Data/DataSource/Music/Artists/ArtistDataSource";
import { GenreDataSource } from "./Data/DataSource/Music/Genres/GenreDataSource";
import { ChartDataSource } from "./Data/DataSource/Music/Playlists/ChartDataSource";
import { MoodDataSource } from "./Data/DataSource/Music/Playlists/MoodDataSource";
import { PlaylistDataSource } from "./Data/DataSource/Music/Playlists/PlaylistDataSource";
import { SongDataSource } from "./Data/DataSource/Music/Songs/SongDataSource";
import { AuthenticationDataSource } from "./Data/DataSource/Users/Authentication/AuthenticationDataSource";
import { PeopleDataSource } from "./Data/DataSource/Users/People/PeopleDataSource";
import { AlbumRepository } from "./Domain/Repository/Music/AlbumRepository";
import { ArtistRepository } from "./Domain/Repository/Music/ArtistRepository";
import { ChartRepository } from "./Domain/Repository/Music/ChartRepository";
import { GenreRepository } from "./Domain/Repository/Music/GenreRepository";
import { MoodRepository } from "./Domain/Repository/Music/MoodRepository";
import { PlaylistRepository } from "./Domain/Repository/Music/PlaylistRepository";
import { SongRepository } from "./Domain/Repository/Music/SongRepository";
import { AuthenticationRepository } from "./Domain/Repository/Users/Authentication/AuthenticationRepository";
import { PeopleRepository } from "./Domain/Repository/Users/people/PeopleRepository";

export const albumDataSource= myContainer.get<AlbumDataSource>(TYPES.AlbumDataSource);
export const artistDataSource= myContainer.get<ArtistDataSource>(TYPES.ArtistDataSource);

export const genreDataSource= myContainer.get<GenreDataSource>(TYPES.GenreDataSource);
export const songDataSource= myContainer.get<SongDataSource>(TYPES.SongDataSource);
export const authenticationDataSource= myContainer.get<AuthenticationDataSource>(TYPES.AuthenticationDataSource);
export const peopleDataSource= myContainer.get<PeopleDataSource>(TYPES.PeopleDataSource);

export const playlistDataSource= myContainer.get<PlaylistDataSource>(TYPES.PlaylistDataSource);
export const chartDataSource= myContainer.get<ChartDataSource>(TYPES.ChartDataSource);

export const moodDataSource= myContainer.get<MoodDataSource>(TYPES.MoodDataSource);

export const albumRepository  = myContainer.get<AlbumRepository>(TYPES.AlbumRepository);
export const songRepository  = myContainer.get<SongRepository>(TYPES.SongRepository);
export const artistRepository  = myContainer.get<ArtistRepository>(TYPES.ArtistRepository);
export const genreRepository  = myContainer.get<GenreRepository>(TYPES.GenreRepository);
export const authenticationRepository  = myContainer.get<AuthenticationRepository>(TYPES.AuthenticationRepository);
export const peopleRepository  = myContainer.get<PeopleRepository>(TYPES.PeopleRepository);
export const playlistRepository  = myContainer.get<PlaylistRepository>(TYPES.PlaylistRepository);
export const chartRepository  = myContainer.get<ChartRepository>(TYPES.ChartRepository);
export const moodRepository  = myContainer.get<MoodRepository>(TYPES.MoodRepository);