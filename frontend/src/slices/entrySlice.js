import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    entries: [],
};

const entrySlice = createSlice({
    name: 'entry',
    initialState,
    reducers: {
        addEntry: (state, action) => {
            state.entries.push(action.payload);
        },
        removeEntry: (state, action) => {
            state.entries = state.entries.filter(entry => entry._id !== action.payload);
        }   
    }
});

export const {
    addEntry,
    removeEntry
} = entrySlice.actions;

export default entrySlice.reducer;