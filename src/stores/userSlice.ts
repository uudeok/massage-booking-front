import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../@types/user";
import { RootState } from "./store";

const initialState: IUser = {
  name: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const getUser = (state: RootState) => state.user;
export default userSlice.reducer;
