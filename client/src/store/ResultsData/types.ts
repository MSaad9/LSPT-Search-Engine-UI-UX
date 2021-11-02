import { ResultEntry, ResultMetrics } from '../../services/querying-api.types';

export interface ResultsDataSlice {
    results: Array<ResultEntry>;
    metrics: ResultMetrics;
}