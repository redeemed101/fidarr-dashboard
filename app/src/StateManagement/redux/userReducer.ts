import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../Domain/Model/Auth/User";
import { userManager } from "../../Data/DataSource/API/Authentication/user";


export interface RecoverPasswordState {
  email : string | null 
}

const initialRecoverPasswordState  : RecoverPasswordState = {
   email : null
}

export const recoverEmailSlice  = createSlice({
  name: 'recoverPassword',
  initialState: initialRecoverPasswordState,
  reducers: {
    setRecoverEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    removeRecoverEmail: (state) => {
      state.email = null
    }
  
  },
})

export const { setRecoverEmail, removeRecoverEmail } = recoverEmailSlice.actions
export const { reducer  } = recoverEmailSlice

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



export interface SelectedUserState {
  user : User | null
 }

const initialSelectedUserState: UserState = {
     user: null
}

export const selectedUserSlice  = createSlice({
   name: 'selectedUser',
   initialState,
   reducers: {
     setSelectedUser: (state, action: PayloadAction<User>) => {
       state.user = action.payload
     },
     removeSelectedUser: (state) => {
       state.user = null
     }
   
   },
 })

export const { setSelectedUser, removeSelectedUser } = selectedUserSlice.actions