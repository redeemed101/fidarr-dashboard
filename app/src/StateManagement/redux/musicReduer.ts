import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Playlist } from "../../Domain/Model/Music/Playlist"
import { Album, Artist, Track } from "../../Domain/Model/Music"
import { Genre } from "../../Domain/Model/Music/Genre"
import { Mood } from "../../Domain/Model/Music/Mood"
import { Chart } from "../../Domain/Model/Music/Chart"

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


export interface SelectedSongState {
  Song : Track | null 
}
const SongState  : SelectedSongState = {
  Song : null
}
export const selectedSongSlice  = createSlice({
 name: 'selectedSong',
 initialState: SongState,
 reducers: {
   setSong: (state, action: PayloadAction<Track>) => {
     state.Song = action.payload
   },
   removeSong: (state) => {
     state.Song = null
   }
 
 },
})
export const { setSong, removeSong } = selectedSongSlice.actions


export interface SelectedGenreState {
  Genre : Genre | null 
}
const GenreState  : SelectedGenreState = {
  Genre : null
}
export const selectedGenreSlice  = createSlice({
 name: 'selectedGenre',
 initialState: GenreState,
 reducers: {
   setGenre: (state, action: PayloadAction<Genre>) => {
     state.Genre = action.payload
   },
   removeGenre: (state) => {
     state.Genre = null
   }
 
 },
})
export const { setGenre, removeGenre } = selectedGenreSlice.actions



export interface SelectedMoodState {
  Mood : Mood | null 
}
const MoodState  : SelectedMoodState = {
  Mood : null
}
export const selectedMoodSlice  = createSlice({
 name: 'selectedMood',
 initialState: MoodState,
 reducers: {
   setMood: (state, action: PayloadAction<Mood>) => {
     state.Mood = action.payload
   },
   removeMood: (state) => {
     state.Mood = null
   }
 
 },
})
export const { setMood, removeMood } = selectedMoodSlice.actions




export interface SelectedChartState {
  Chart : Chart | null 
}
const ChartState  : SelectedChartState = {
  Chart : null
}
export const selectedChartSlice  = createSlice({
 name: 'selectedChart',
 initialState: ChartState,
 reducers: {
   setChart: (state, action: PayloadAction<Chart>) => {
     state.Chart = action.payload
   },
   removeChart: (state) => {
     state.Chart = null
   }
 
 },
})
export const { setChart, removeChart } = selectedChartSlice.actions








