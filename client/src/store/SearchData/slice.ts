import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchDataSlice } from './types';

export const initialState: SearchDataSlice = {
    searchQuery: "",
    pageOffset: 0,
    siteFilters: ["amazon", "github", "reddit", "wikipedia"]
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
        },
        addSiteFilter(state: SearchDataSlice, action: PayloadAction<string>){
            if(!state.siteFilters.includes(action.payload)) {
                let newList = [...state.siteFilters];
                newList.push(action.payload);
                state.siteFilters = newList;
            }
        },
        removeSiteFilter(state: SearchDataSlice, action: PayloadAction<string>){
            if(state.siteFilters.includes(action.payload)) {
                let newList = [...state.siteFilters].filter(x => x !== action.payload);
                state.siteFilters = newList;
            }
        }
    },
});

export const { actions, reducer, name: sliceKey } = searchDataSlice;