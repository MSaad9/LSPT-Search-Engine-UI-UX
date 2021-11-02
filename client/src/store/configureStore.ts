import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { SearchDataSlice } from './SearchData/types';
import { reducer as searchData } from './SearchData/slice';
import { ResultsDataSlice } from './ResultsData/types';
import { reducer as resultsData } from './ResultsData/slice';

export default configureStore({
  reducer: combineReducers({ searchData, resultsData }),
});

export interface RootState {
  searchData: SearchDataSlice;
  resultsData: ResultsDataSlice;
}
