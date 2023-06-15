

const TYPES = {
    AlbumDataSource : Symbol.for("AlbumDataSource"),
    ArtistDataSource : Symbol.for("ArtistDataSource"),
    PlaylistDataSource : Symbol.for("PlaylistDataSource"),
    ChartDataSource : Symbol.for("ChartDataSource"),
    
    MoodDataSource : Symbol.for("MoodDataSource"),

    AlbumRepository: Symbol.for("AlbumRepository"),
    ArtistRepository: Symbol.for("ArtistRepository"),

    PlaylistRepository: Symbol.for("PlaylistRepository"),
    ChartRepository: Symbol.for("ChartRepository"),
    MoodRepository: Symbol.for("MoodRepository"),
  

    GenreDataSource : Symbol.for("GenreDataSource"),
    GenreRepository : Symbol.for("GenreRepository"),

    SongDataSource : Symbol.for("SongDataSource"),
    SongRepository : Symbol.for("SongRepository"),

    AuthenticationDataSource : Symbol.for("AuthenticationDataSource"),
    AuthenticationRepository : Symbol.for("AuthenticationRepository"),

    PeopleDataSource : Symbol.for("PeopleDataSource"),
    PeopleRepository : Symbol.for("PeopleRepository"),
};


export { TYPES };