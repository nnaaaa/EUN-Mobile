import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from 'models/user';

export interface LoginPayload{
    account: string
    password: string
}

export interface AuthState{
    isLoggedIn: boolean
    isLogging: boolean
    user?: User
}

const initialState: AuthState = {
    isLoggedIn: false,
    isLogging: false,
    user: undefined
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<LoginPayload>){
            
        }
    }
})

export const authActions = authSlice.actions
export default authSlice.reducer