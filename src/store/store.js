import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    isAdmin: false,
    refreshintervalId: null
};

const loginSlice = createSlice({
    name: "authStatus",
    initialState: initialState,
    reducers: {
        setLoginStatus: (state, action) => {
            state.isLoggedIn = action.payload.isLoggedIn;
            state.isAdmin = action.payload.isAdmin;
        },
        resetloginStatus: (state) => {
            state.isLoggedIn = initialState.isLoggedIn;
            state.isAdmin = initialState.isAdmin;
        },
        setRefreshIntervalId: (state, action) => {
            state.refreshintervalId = action.payload.refreshintervalId;
        }
    }
});

export const { setLoginStatus, resetloginStatus, setRefreshIntervalId } = loginSlice.actions;

export const store = configureStore({
    reducer: {
        login: loginSlice.reducer
    }
});