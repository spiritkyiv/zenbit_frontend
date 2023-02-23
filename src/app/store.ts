import { configureStore } from '@reduxjs/toolkit';
import usersMessageSlice from '../features/userMessage/usersMessageSlice';

export const store =configureStore({
    reducer: {
        usersMessage: usersMessageSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
