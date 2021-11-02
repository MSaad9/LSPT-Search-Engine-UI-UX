
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../configureStore';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.searchData || initialState;

export const selectSearchData = createSelector(
    [selectDomain],
    selectDomain => selectDomain
);
