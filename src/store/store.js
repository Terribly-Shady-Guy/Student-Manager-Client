import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        isLoggedIn: false,
        isAdmin: false
}};

const loginSlice = createSlice({
    name: "authStatus",
    initialState: initialState,
    reducers: {
        setLoginStatus: (state, action) => {
            state.value = action.payload;
        },
        resetloginStatus: (state) => {
            state.value = initialState;
        }
    }
});

export const { setLoginStatus, resetloginStatus } = loginSlice.actions;

export const store = configureStore({
    reducer: {
        login: loginSlice.reducer
    }
});