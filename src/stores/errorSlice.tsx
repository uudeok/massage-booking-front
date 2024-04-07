import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const initialState = {
	status: null,
};

export const errorSlice = createSlice({
	name: 'error',
	initialState,
	reducers: {
		setError: (state, action) => {
			state.status = action.payload;
		},
		clearError: (state) => {
			state.status = null;
		},
	},
});

export const errorStatus = (state: RootState) => state.error;
export const { setError, clearError } = errorSlice.actions;

export default errorSlice.reducer;
