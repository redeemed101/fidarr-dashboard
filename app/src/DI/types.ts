

const TYPES = {
    AlbumDataSource : Symbol.for("AlbumDataSource"),
    ArtistDataSource : Symbol.for("ArtistDataSource"),
    PlaylistDataSource : Symbol.for("PlaylistDataSource"),
    
    AlbumRepository: Symbol.for("AlbumRepository"),
    ArtistRepository: Symbol.for("ArtistRepository"),

    PlaylistRepository: Symbol.for("PlaylistRepository"),
  

    GenreDataSource : Symbol.for("GenreDataSource"),
    GenreRepository : Symbol.for("GenreRepository"),

    SongDataSource : Symbol.for("SongDataSource"),
    SongRepository : Symbol.for("SongRepository"),

    AuthenticationDataSource : Symbol.for("AuthenticationDataSource"),
    AuthenticationRepository : Symbol.for("AuthenticationRepository"),
};

export { TYPES };