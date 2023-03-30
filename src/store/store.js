import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    isAdmin: false,
    refreshIntervalId: null
};

const loginSlice = createSlice({
    name: "authStatus",
    initialState: initialState,
    reducers: {
        setLoginStatus: (state, action) => {
            state.isLoggedIn = action.payload.isLoggedIn;
            state.isAdmin = action.payload.isAdmin;
            state.refreshintervalId = action.payload.refreshIntervalId;
        },
        resetLoginStatus: (state) => {
            state.isLoggedIn = initialState.isLoggedIn;
            state.isAdmin = initialState.isAdmin;
            state.refreshintervalId = initialState.refreshIntervalId;
        }
    }
});

export const { setLoginStatus, resetloginStatus, setRefreshIntervalId } = loginSlice.actions;

export const store = configureStore({
    reducer: {
        login: loginSlice.reducer
    }
});