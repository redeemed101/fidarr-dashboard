import { configureStore } from "@reduxjs/toolkit"
import userReducer, { reducer as recoverEmailReducer } from "./userReducer"

export const store = configureStore({
    reducer: {
      user: userReducer,
      recoverEmail : recoverEmailReducer
    },
  })
  
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch