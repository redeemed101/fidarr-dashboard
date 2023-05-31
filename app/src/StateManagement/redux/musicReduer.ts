import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Playlist } from "../../Domain/Model/Music/Playlist"

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