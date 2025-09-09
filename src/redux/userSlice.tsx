import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  email: string | null;
  name: string | null;
  photoURL: string | null;
  uid: string | null;
  isAuthenticated: boolean;
  loading: boolean;
}

const initialState: UserState = {
  email: null,
  name: null,
  photoURL: null,
  uid: null,
  isAuthenticated: false,
  loading: false,
};

interface UserPayload {
  email: string | null;
  name: string | null;
  photoURL: string | null;
  uid?: string | null;
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserPayload | null>) => {
      if (action.payload) {
        state.email = action.payload.email;
        state.name = action.payload.name;
        state.photoURL = action.payload.photoURL;
        state.uid = action.payload.uid || null;
        state.isAuthenticated = true;
      } else {
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
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    updateUserProfile: (state, action: PayloadAction<Partial<UserPayload>>) => {
      if (action.payload.name !== undefined) state.name = action.payload.name;
      if (action.payload.photoURL !== undefined)
        state.photoURL = action.payload.photoURL;
    },
  },
});

export const { setUser, clearUser, setLoading, updateUserProfile } =
  userSlice.actions;
export default userSlice.reducer;
