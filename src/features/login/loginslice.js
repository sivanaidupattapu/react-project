import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isLoggedIn: window.localStorage.getItem('user') ? true : false,
    user: JSON.parse(window.localStorage.getItem('user'))
}
export const loginSlice = createSlice({
    name: 'LoginSlice',
    initialState,
    reducers: {
        updateLogin: (state, action) => {
            state.isLoggedIn = action.payload.status;
            state.user = action.payload.user;
        },
        logout:(state,action)=>{
            window.localStorage.clear();
            state.isLoggedIn=false
        }
    }
})
export const { updateLogin,logout } = loginSlice.actions
export default loginSlice.reducer