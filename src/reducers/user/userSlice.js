//?reducers: Toma el state y el action para ejecutar el cambio

//Crea los reducers para user
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  fullName: "",
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.fullName = action.payload.fullName;
      state.token = action.payload.token;
    },
    //Si no recibe payload no necesita action
    unSetUser: (state) => {
      state.email = "";
      state.fullName = "";
      state.token = "";
    }
  }
});

// destructura los actions creators del setUser (forma obligatoria)
export const { setUser, unSetUser } = userSlice.actions;

export default userSlice.reducer;
