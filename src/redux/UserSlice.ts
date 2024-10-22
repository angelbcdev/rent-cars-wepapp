import { createSlice } from "@reduxjs/toolkit";
export interface TUser {
  id?: number;
  name?: string;
  lastName?: string;
  email?: string;
  identification?: string;
  identificationNumber?: string;
  country?: string;
  phoneNumber?: string;
  password?: string;
}
interface TInicial {
  userData?: TUser;
}

const estadoInicial: TInicial = {
  userData: {

    id:12323,
    name: "Demo",
    lastName: "User",
    email: "qWQpN@example.com",
    identification: "Cedula",
    identificationNumber: "CCX480-0001234-5",
    country: "Any place",
    phoneNumber: "123456789",
  },
};
const resetUser: TInicial = {
  userData: undefined,
};

const userSlice = createSlice({
  name: "userData",
  initialState: estadoInicial,
  reducers: {
    postUser: (state, actions) => {
      state.userData = { ...state.userData, ...actions.payload };
    },
    deleteUser: (state) => {
      state.userData = resetUser.userData;
    },
  },
});

export const { postUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
