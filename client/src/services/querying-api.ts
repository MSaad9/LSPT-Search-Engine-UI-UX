import axios from 'axios';
import { QueryResult } from './querying-api.types';

export class QueryingApiService {
    // Make sure to URI encode the search query before sending
    public async GetQueryResults(query: string) {
        return;
    }
}

export const queryingApi = new QueryingApiService();
