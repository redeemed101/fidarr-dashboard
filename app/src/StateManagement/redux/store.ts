import { configureStore } from "@reduxjs/toolkit"
import userReducer, { reducer as recoverEmailReducer } from "./userReducer"
import PlaylistReducer, {reducer as ArtistReducer, selectedAlbumSlice, selectedGenreSlice, selectedSongSlice} from "./musicReduer"

export const store = configureStore({
    reducer: {
      user: userReducer,
      recoverEmail : recoverEmailReducer,
      selectedPlaylist: PlaylistReducer,
      selectedArtist: ArtistReducer,
      selectedAlbum: selectedAlbumSlice.reducer,
      selectedSong: selectedSongSlice.reducer,
      selectedGenre: selectedGenreSlice.reducer
    }
  })
  
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch