import { configureStore } from "@reduxjs/toolkit"
import userReducer, { reducer as recoverEmailReducer } from "./userReducer"
import PlaylistReducer from "./musicReduer"

export const store = configureStore({
    reducer: {
      user: userReducer,
      recoverEmail : recoverEmailReducer,
      selectedPlaylist: PlaylistReducer,
    }
  })
  
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch