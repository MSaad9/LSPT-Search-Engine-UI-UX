import axios from 'axios';
import { QueryResponse } from './querying-api.types';

export class QueryingApiService {
    // Make sure to URI encode the search query before sending
    public async GetQueryResults(query: String) {
        return;
    }
}

export const queryingApi = new QueryingApiService();
