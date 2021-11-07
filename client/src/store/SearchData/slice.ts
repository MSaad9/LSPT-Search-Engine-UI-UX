import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchDataSlice } from './types';

export const initialState: SearchDataSlice = {
    searchQuery: "",
    pageOffset: 0
};

const searchDataSlice = createSlice({
    name: "searchData",
    initialState,
    reducers: {
        setSearchQuery(state: SearchDataSlice, action: PayloadAction<string>){
            state.searchQuery = action.payload;
        },
        setPageOffset(state: SearchDataSlice, action: PayloadAction<number>){
            state.pageOffset = action.payload;
        }
    },
});

export const { actions, reducer, name: sliceKey } = searchDataSlice;