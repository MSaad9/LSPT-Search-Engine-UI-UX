
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.resultsData || initialState;

export const selectResultsData = createSelector(
    [selectDomain],
    selectDomain => selectDomain
);
