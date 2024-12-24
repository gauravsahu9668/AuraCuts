import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface authState {
    token:string,
    user:string
}

const initial: authState = {
  token:localStorage.getItem("token") || "",
  user:""
};

const authSlice = createSlice({
  name: "auth",
  initialState:initial,
  reducers: {
    settoken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setuser(state, action: PayloadAction<string>) {
      state.user = action.payload;
    },
    resetauthState() {
      // Simply return the initialState to reset the state
      return initial;
    },
  },
});

export const {settoken,resetauthState,setuser } = authSlice.actions;

export default authSlice.reducer;