import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../Domain/Model/Auth/User";
import { userManager } from "../../Data/DataSource/API/Authentication/user";

export interface UserState {
   user : User | null
  }

const initialState: UserState = {
      user: userManager.getUser()
 }

 export const userSlice  = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setUser: (state, action: PayloadAction<User>) => {
        state.user = action.payload
      },
      removeUser: (state) => {
        state.user = null
      }
    
    },
  })

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer