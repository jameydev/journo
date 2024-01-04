import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchEntries = createAsyncThunk('entries/fetchEntries', async () => {
    const response = await axios.get('/api/journal/');
    return response.data;
});

const entriesSlice = createSlice({
    name: 'entries',
    initialState: [],
    reducers: {
        addEntry: (state, action) => {
            state.entries.push(action.payload);
        },
        removeEntry: (state, action) => {
            state.entries = state.entries.filter(entry => entry._id !== action.payload);
        }   
    },
    extraReducers: (builder) => {
        builder.addCase(fetchEntries.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export const {
    addEntry,
    removeEntry
} = entriesSlice.actions;

export default entriesSlice.reducer;