import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { SearchDataSlice } from './SearchData/types';
import { reducer as searchData } from './SearchData/slice';
import { ResultsDataSlice } from './ResultsData/types';
import { reducer as resultsData } from './ResultsData/slice';

const store = configureStore({
  reducer: combineReducers({ searchData, resultsData }),
});

export default store;

export interface RootState {
  searchData: SearchDataSlice;
  resultsData: ResultsDataSlice;
}
