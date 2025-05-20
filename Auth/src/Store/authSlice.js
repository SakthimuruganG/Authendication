import { createSlice } from '@reduxjs/toolkit'


const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLogIn: false,
        accessToken:null,
        refreshToken : null
    },
    reducers: {
        isLoggedIn : (state,action) =>{state.isLogIn=action.payload ; },
        accessToken : (state,action) =>{state.accessToken=action.payload},
        refreshToken : (state,action) =>{state.refreshToken=action.payload}
    }
})

export const {isLoggedIn,isLoggedOut ,accessToken ,refreshToken} = authSlice.actions;
export default authSlice.reducer;