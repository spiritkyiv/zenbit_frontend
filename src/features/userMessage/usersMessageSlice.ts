import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserMessage {
    name: string;
    email: string,
    message: string,
};

const initialState: UserMessage = {
    name: '',
    email: '',
    message: '',
};

const UserMessageSlice = createSlice({
    name: 'userMessage',
    initialState,
    reducers: {
        updateName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        updateEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        updateMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
        },
        clearMessage: (state) => {
            state.email = '';
            state.name = '';
            state.message = '';
        }
    }
})

export const { updateEmail, updateName, updateMessage, clearMessage } = UserMessageSlice.actions;

export default UserMessageSlice.reducer;
