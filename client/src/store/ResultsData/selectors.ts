
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../configureStore';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.resultsData || initialState;

export const selectResultsData = createSelector(
    [selectDomain],
    selectDomain => selectDomain
);
