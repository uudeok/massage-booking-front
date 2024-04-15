import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { massageApi } from '../api/massage/massageQuery';
import { noticeApi } from '../api/notice/noticeQuery';
import { bookApi } from '../api/book/bookQuery';
import { ordersApi } from '../api/orders/ordersQuery';
import { userApi } from '../api/users/usersQuery';
import { authApi } from '../api/auth/authQuery';

import timeSlice from './timeSlice';
import massageSlice from './massageSlice';
import tabSlice from './tabSlice';

import { Middleware, isRejected } from '@reduxjs/toolkit';
import errorSlice, { setError } from './errorSlice';

export const rtkQueryErrorHandler: Middleware = () => (next) => (action) => {
	if (isRejected(action)) {
		console.log('error logger : ', action.payload.originalStatus);
		next(setError(action.payload.originalStatus));
	}

	return next(action);
};

export const store = configureStore({
	reducer: {
		massage: massageSlice,
		time: timeSlice,
		tab: tabSlice,
		error: errorSlice,

		[massageApi.reducerPath]: massageApi.reducer,
		[noticeApi.reducerPath]: noticeApi.reducer,
		[bookApi.reducerPath]: bookApi.reducer,
		[ordersApi.reducerPath]: ordersApi.reducer,
		[userApi.reducerPath]: userApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
	},
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			massageApi.middleware,
			noticeApi.middleware,
			bookApi.middleware,
			ordersApi.middleware,
			userApi.middleware,
			authApi.middleware,
			rtkQueryErrorHandler,
		),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
