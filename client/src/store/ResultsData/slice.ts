import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResultsDataSlice } from './types';
import { ResultEntry, ResultMetrics } from '../../services/querying-api.types';

export const initialState: ResultsDataSlice = {
    results: [],
    metrics: {}
};

const resultsDataSlice = createSlice({
    name: "resultsData",
    initialState,
    reducers: {
        setQueryResult(state: ResultsDataSlice, action: PayloadAction<Array<ResultEntry>>){
            state.results = action.payload;
        },
        setQueryMetrics(state: ResultsDataSlice, action: PayloadAction<ResultMetrics>){
            state.metrics = action.payload;
        }
    },
});

export const { actions, reducer, name: sliceKey } = resultsDataSlice;