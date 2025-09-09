import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    email: null,
    name: null,
    photoURL: null,
    uid: null,
    isAuthenticated: false,
    loading: false,
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            if (action.payload) {
                state.email = action.payload.email;
                state.name = action.payload.name;
                state.photoURL = action.payload.photoURL;
                state.uid = action.payload.uid || null;
                state.isAuthenticated = true;
            }
            else {
                state.email = null;
                state.name = null;
                state.photoURL = null;
                state.uid = null;
                state.isAuthenticated = false;
            }
            state.loading = false;
        },
        clearUser: (state) => {
            state.email = null;
            state.name = null;
            state.photoURL = null;
            state.uid = null;
            state.isAuthenticated = false;
            state.loading = false;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        updateUserProfile: (state, action) => {
            if (action.payload.name !== undefined)
                state.name = action.payload.name;
            if (action.payload.photoURL !== undefined)
                state.photoURL = action.payload.photoURL;
        },
    },
});
export const { setUser, clearUser, setLoading, updateUserProfile } = userSlice.actions;
export default userSlice.reducer;
