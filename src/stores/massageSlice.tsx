import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { generate_massage } from "../api";
import axios from "axios";
import { TMassageDetail, TMassageTable } from "../@types/book";

type TInitialState = {
  massageDetail: TMassageDetail[];
  massageItem: TMassageTable;
  massageList: TMassageTable[];
  status: "idle" | "pending" | "loading" | "failed" | "succeeded";
  errorMessage: any;
};

const initialState: TInitialState = {
  massageDetail: [],
  massageItem: {} as TMassageTable,
  massageList: [],
  status: "idle",
  errorMessage: "",
};

export const fetchMassageList = createAsyncThunk(
  "massage/list",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(generate_massage);
      return response.data;
    } catch (error: any) {
      console.log(error);
      throw rejectWithValue(error.response.status);
    }
  }
);

export const fetchMassageItem = createAsyncThunk(
  "massage/item",
  async (massageId: number, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${generate_massage}/${massageId}`);
      return response.data;
    } catch (error: any) {
      console.log(error);
      throw rejectWithValue(error.response.status);
    }
  }
);

export const massageSlice = createSlice({
  name: "massage",
  initialState,
  reducers: {
    fetchMassageDetail(state, action) {
      state.massageDetail = state.massageItem.detail.filter(
        (item) => item.time === action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMassageList.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchMassageList.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.massageList = action.payload;
    });
    builder.addCase(fetchMassageList.rejected, (state, action) => {
      state.status = "failed";
      state.errorMessage = action.payload;
    });
    builder.addCase(fetchMassageItem.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchMassageItem.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.massageItem = action.payload;
    });
    builder.addCase(fetchMassageItem.rejected, (state, action) => {
      state.status = "failed";
      state.errorMessage = action.payload;
    });
  },
});

export const massageError = (state: RootState) => state.massage.errorMessage;
export const massageStatus = (state: RootState) => state.massage.status;
export const getMassageList = (state: RootState) => state.massage.massageList;
export const getMassageItem = (state: RootState) => state.massage.massageItem;
export const getMassageDetail = (state: RootState) =>
  state.massage.massageDetail;

export const { fetchMassageDetail } = massageSlice.actions;

export default massageSlice.reducer;
