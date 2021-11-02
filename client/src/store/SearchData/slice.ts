import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchDataSlice } from './types';

export const initialState: SearchDataSlice = {
    searchQuery: ""
};

const searchDataSlice = createSlice({
    name: "searchData",
    initialState,
    reducers: {
        setSearchQuery(state: SearchDataSlice, action: PayloadAction<string>){
            state.searchQuery = action.payload;
        }
    },
});

export const { actions, reducer, name: sliceKey } = searchDataSlice;