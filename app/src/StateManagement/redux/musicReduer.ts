import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Playlist } from "../../Domain/Model/Music/Playlist"
import { Album, Artist } from "../../Domain/Model/Music"

export interface SelectedPlaylistState {
    playlist : Playlist | null 
  }
  
  const playlistState  : SelectedPlaylistState = {
     playlist : null
  }
  export const selectedPlaylistSlice  = createSlice({
    name: 'selectedPlaylist',
    initialState: playlistState,
    reducers: {
      setPlaylist: (state, action: PayloadAction<Playlist>) => {
        state.playlist = action.payload
      },
      removePlaylist: (state) => {
        state.playlist = null
      }
    
    },
  })
export const { setPlaylist, removePlaylist } = selectedPlaylistSlice.actions
export default selectedPlaylistSlice.reducer




export interface SelectedArtistState {
  Artist : Artist | null 
}

const ArtistState  : SelectedArtistState = {
   Artist : null
}
export const selectedArtistSlice  = createSlice({
  name: 'selectedArtist',
  initialState: ArtistState,
  reducers: {
    setArtist: (state, action: PayloadAction<Artist>) => {
      state.Artist = action.payload
    },
    removeArtist: (state) => {
      state.Artist = null
    }
  
  },
})
export const { setArtist, removeArtist } = selectedArtistSlice.actions
export const { reducer  } = selectedArtistSlice


export interface SelectedAlbumState {
  Album : Album | null 
}

const AlbumState  : SelectedAlbumState = {
  Album : null
}
export const selectedAlbumSlice  = createSlice({
 name: 'selectedAlbum',
 initialState: AlbumState,
 reducers: {
   setAlbum: (state, action: PayloadAction<Album>) => {
     state.Album = action.payload
   },
   removeAlbum: (state) => {
     state.Album = null
   }
 
 },
})
export const { setAlbum, removeAlbum } = selectedAlbumSlice.actions
//export const { reducer  } = selectedAlbumSlice



